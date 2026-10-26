const fs=require('fs'),zlib=require('zlib');
const u30=n=>{let a=[];do{let b=n&127;n>>>=7;a.push(b|(n?128:0));}while(n);return Buffer.from(a)};
const cat=(...x)=>Buffer.concat(x.map(v=>Buffer.isBuffer(v)?v:Buffer.from(v)));
class Reader{constructor(b){this.b=b;this.p=0}u(){let n=0,s=0,v;do{v=this.b[this.p++];n|=(v&127)<<s;s+=7}while(v&128);return n>>>0}byte(){return this.b[this.p++]}skip(n){this.p+=n}}
function patchABC(b,hooks){let r=new Reader(b);r.skip(4);
 for(let t=0;t<3;t++){let n=r.u();for(let i=1;i<n;i++)if(t<2)r.u();else r.skip(8)}
 let pools={},strings=[''];pools.s0=r.p;let ns=r.u();for(let i=1;i<ns;i++){let n=r.u();strings.push(b.toString('utf8',r.p,r.p+n));r.skip(n)}pools.s1=r.p;
 pools.n0=r.p;let nn=r.u(),namespaces=[null];for(let i=1;i<nn;i++)namespaces.push({kind:r.byte(),name:r.u()});pools.n1=r.p;
 let sets=r.u();for(let i=1;i<sets;i++){let n=r.u();while(n--)r.u()}
 pools.m0=r.p;let nm=r.u(),mn=[null];for(let i=1;i<nm;i++){let k=r.byte(),o={k};if([7,13].includes(k)){o.ns=r.u();o.name=r.u()}else if([15,16].includes(k))o.name=r.u();else if([17,18].includes(k)){}else if([9,14].includes(k)){o.name=r.u();r.u()}else if([27,28].includes(k))r.u();else if(k===29){r.u();let n=r.u();while(n--)r.u()}else throw Error('mn kind '+k);mn.push(o)}pools.m1=r.p;
 const name=i=>mn[i]?.name?strings[mn[i].name]:'';
 let methods=r.u();for(let i=0;i<methods;i++){let n=r.u();r.u();for(let j=0;j<n;j++)r.u();r.u();let f=r.byte();if(f&8){let o=r.u();while(o--){r.u();r.byte()}}if(f&128)for(let j=0;j<n;j++)r.u()}
 let meta=r.u();while(meta--){r.u();let n=r.u();for(let j=0;j<n*2;j++)r.u()}
 let cls=r.u(),instances=[],methodNames=new Map();
 function traits(owner){let n=r.u();while(n--){let ni=r.u(),k=r.byte(),kind=k&15;if(kind===0||kind===6){r.u();r.u();if(r.u())r.byte()}else if([1,2,3].includes(kind)){r.u();let mi=r.u();if(owner)methodNames.set(mi,owner+'.'+name(ni))}else if(kind===4){r.u();r.u()}else if(kind===5){r.u();r.u()}else throw Error('trait'+kind);if(k&64){let m=r.u();while(m--)r.u()}}}
 for(let i=0;i<cls;i++){let cname=name(r.u());r.u();let f=r.byte();if(f&8)r.u();let n=r.u();while(n--)r.u();let init=r.u();methodNames.set(init,cname+'.<init>');traits(cname);instances.push(cname)}
 for(let i=0;i<cls;i++){r.u();traits(instances[i]+'.static')}
 let scripts=r.u();while(scripts--){r.u();traits(null)}
 let bodyCount=r.u(),beforeBodies=r.p,bodyPieces=[],last=r.p,changes=[];
 let strAdds=[],nsAdds=[],mnAdds=[];
 function str(s){let ix=strings.indexOf(s);if(ix>=0)return ix;let i=strings.length;strings.push(s);strAdds.push(cat(u30(Buffer.byteLength(s)),Buffer.from(s)));return i}
 function namespace(s){let ix=namespaces.findIndex(n=>n&&n.kind===22&&strings[n.name]===s);if(ix>=0)return ix;let i=namespaces.length;namespaces.push({kind:22,name:str(s)});nsAdds.push(cat([22],u30(str(s))));return i}
 function qn(space,s){let ni=namespace(space),si=str(s);let ix=mn.findIndex(m=>m&&m.k===7&&m.ns===ni&&m.name===si);if(ix>=0)return ix;let i=mn.length;mn.push({k:7,ns:ni,name:si});mnAdds.push(cat([7],u30(ni),u30(si)));return i}
 for(let bi=0;bi<bodyCount;bi++){let start=r.p,mi=r.u(),max=r.u(),lc=r.u(),ini=r.u(),maxscope=r.u(),len=r.u(),codeStart=r.p,code=b.subarray(r.p,r.p+len);r.skip(len);let ex=r.u(),exceptions=[];for(let j=0;j<ex;j++)exceptions.push([r.u(),r.u(),r.u(),r.u(),r.u()]);let traitStart=r.p;traits(null);let end=r.p,method=methodNames.get(mi),hook=hooks[method];if(!hook)continue;
  let call=cat([0x60],u30(qn('fe.unit','Pers')),[hook.firstLocal===1?0xd1:0xd0]);if(hook.arg1)call=cat(call,[hook.extraLocal===1?0xd1:0xd2]);
  call=cat(call,[hook.guard?0x46:0x4f],u30(qn('',hook.name)),u30(hook.arg1?2:1));
  if(hook.travel)call=cat([0x60],u30(qn('fe.unit','Pers')),[0xd0,0xd1,0xd2,0xd3,0x46],u30(qn('',hook.name)),u30(4));
  let prefix=Buffer.alloc(0),tail=Buffer.alloc(0);
  if(hook.transform){prefix=cat([0x60],u30(qn('fe.unit','Pers')),[0xd0,0xd1,0xd3,0x46],u30(qn('',hook.name)),u30(3),[0xd5]);}
  else if(hook.prefix){prefix=call;}
  else if(hook.guard){prefix=cat(call,[hook.guardInverse?0x12:0x11,hook.guardVoid?1:2,0,0],hook.guardVoid?[0x47]:(hook.negative?[0x24,0xff,0x48]:[0x27,0x48]));
   if(hook.negative)prefix[prefix.length-6]=3; // iftrue offset = pushbyte + returnvalue length
  }else{if(code[code.length-1]!==0x47&&!(hook.returnValue&&code[code.length-1]===0x48))throw Error('Expected terminal return '+method);tail=call;
   if(hook.menuVersion){
    const member=mn.findIndex(m=>m&&m.k===7&&strings[m.name]==='mm'&&strings[namespaces[m.ns]?.name]==='fe');if(member<1)throw Error('MainMenu.mm missing');
    tail=cat([0x60],u30(qn('fe.unit','Pers')),[0xd0,0x66],u30(member),[0x4f],u30(qn('',hook.name)),u30(1));
   }
   if(hook.trade){
    const member=n=>mn.findIndex(m=>m&&m.k===7&&strings[m.name]===n&&strings[namespaces[m.ns]?.name]==='fe.inter');
    const arr=member('arr'),page=member('page2');if(arr<1||page<1)throw Error('Trade member missing');
    tail=cat([0x60],u30(qn('fe.unit','Pers')),[0xd0,0x66],u30(arr),[0xd0,0x66],u30(page),[0x4f],u30(qn('',hook.name)),u30(2));
   }
   if(hook.name==='legendaryDecorate'){
    const ai=mn.findIndex(m=>m&&m.k===7&&strings[m.name]==='animated');
    if(ai<1)throw Error('Protected animated property not found');
    const setAnimated=cat([0xd0,0x27,0x61],u30(ai));
    const jump=Buffer.alloc(3);jump.writeUIntLE(setAnimated.length,0,3);
    tail=cat(tail,[0x60],u30(qn('fe.unit','Pers')),[0xd0,0x66],u30(qn('','id')),[0x46],u30(qn('','packIsWeapon')),u30(1),[0x12],jump,setAnimated);
   }
  }
  let outcode=(hook.guard||hook.transform||hook.prefix)?cat(prefix,code):cat(code.subarray(0,code.length-1),tail,[code[code.length-1]]);
  let exbuf=[u30(ex)];for(let e of exceptions){let shift=prefix.length;exbuf.push(...e.map((v,i)=>u30(i<3?v+shift:v)))}
  let newbody=cat(u30(mi),u30(Math.max(max,hook.travel?5:4)),u30(lc),u30(ini),u30(maxscope),u30(outcode.length),outcode,...exbuf,b.subarray(traitStart,end));
  bodyPieces.push(b.subarray(last,start),newbody);last=end;changes.push(method);
 }
 if(!changes.length)return {data:b,changes};
 bodyPieces.push(b.subarray(last));let bodyTail=cat(...bodyPieces);
 const newb=cat(b.subarray(0,pools.s0),u30(strings.length),b.subarray(pools.s0+u30(ns).length,pools.s1),...strAdds,b.subarray(pools.s1,pools.n0),u30(namespaces.length),b.subarray(pools.n0+u30(nn).length,pools.n1),...nsAdds,b.subarray(pools.n1,pools.m0),u30(mn.length),b.subarray(pools.m0+u30(nm).length,pools.m1),...mnAdds,b.subarray(pools.m1,beforeBodies),bodyTail);
 return {data:newb,changes};
}
function main(){let [input,output]=process.argv.slice(2),b=fs.readFileSync(input);if(b.toString('ascii',0,3)==='CWS')b=cat(Buffer.from('FWS'),b.subarray(3,8),zlib.inflateSync(b.subarray(8)));if(b.toString('ascii',0,3)!=='FWS')throw Error('SWF signature');let p=8+Math.ceil((5+4*(b[8]>>3))/8)+4,parts=[b.subarray(0,p)],changes=[];
 const hooks={'Game.beginMission':{name:'factoryBegin',guard:true,guardVoid:true,firstLocal:1},'Game.gotoLand':{name:'factoryTravel',guard:true,guardVoid:true,travel:true},'Land.prepareRooms':{name:'factoryLandStart',prefix:true},'Land.enterLand':{name:'factoryEntered'},'Unit.putLoc':{name:'factoryUnit'},'Bullet.step':{name:'projectileStep',prefix:true},'Bullet.explRun':{name:'flashbangExplosion',guard:true,guardVoid:true,guardInverse:true},'MainMenu.setMainLang':{name:'legendaryMenuVersion',menuVersion:true},'MainMenu.setMenuSize':{name:'legendaryMenuVersion',menuVersion:true},'Weapon.getXmlParam':{name:'legendaryDecorate'},'Weapon.setPers':{name:'legendaryWeaponStats'},'Weapon.checkAvail':{name:'legendaryAllowed',guard:true},'Weapon.avail':{name:'legendaryAllowed',guard:true,negative:true},'Invent.<init>':{name:'legendaryInventory',arg1:true},'Unit.damage':{name:'legendaryTargetDamage',transform:true},'World.resizeScreen':{name:'legendaryResizeReady',guard:true,guardVoid:true},'Weapon.shoot':{name:'packFired',returnValue:true},'Obj.static.setArmor':{name:'packStyle',guard:true,guardVoid:true,guardInverse:true,firstLocal:1},'Unit.udarBullet':{name:'packAllowHit',guard:true,negative:true,arg1:true,extraLocal:1},'PipPageVend.setSubPages':{name:'packTrade',trade:true}};
 while(p<b.length){let h=b.readUInt16LE(p),id=h>>6,n=h&63;p+=2;if(n===63){n=b.readUInt32LE(p);p+=4}let data=b.subarray(p,p+n);p+=n;if(id===82){let z=data.indexOf(0,4),result=patchABC(data.subarray(z+1),hooks);if(result.changes.length){data=cat(data.subarray(0,z+1),result.data);changes.push(...result.changes)}}let header=Buffer.alloc(6);header.writeUInt16LE((id<<6)|63);header.writeUInt32LE(data.length,2);parts.push(header,data);if(id===0)break}
 if(changes.length!==20)throw Error('Expected 20 hooks, got '+changes.join(','));let out=cat(...parts);out.writeUInt32LE(out.length,4);fs.writeFileSync(output,out);console.log('Patched original bytecode methods: '+changes.join(', '));}
main();
