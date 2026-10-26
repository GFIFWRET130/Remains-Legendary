const fs=require('fs'),path=require('path'),cp=require('child_process'),crypto=require('crypto');
const [exportDirectory,targetDirectory]=process.argv.slice(2);if(!exportDirectory||!targetDirectory)throw Error('Usage: node tools/prepare-source.cjs <FFDec script export> <target source directory>');
const root=path.resolve(__dirname,'..'),target=path.resolve(targetDirectory),manifest=require('../data/source-manifest.json');
const relative=path.relative(root,target);if(relative.startsWith('..')||path.isAbsolute(relative))throw Error('Target must remain inside this repository');
const hash=s=>crypto.createHash('sha256').update(s).digest('hex');
for(const entry of manifest.classes){const text=fs.readFileSync(path.join(exportDirectory,entry.path),'utf8').replace(/^\uFEFF/,'').replace(/\r\n/g,'\n');if(hash(text)!==entry.originalNormalizedSha256)throw Error('Incompatible exported class: '+entry.path);const file=path.join(target,entry.path);fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,text);}
const args=['apply','--directory='+relative.replaceAll('\\','/'),path.join(root,'patches','0.4.8.patch')];
let result=cp.spawnSync('git',['apply','--check',...args.slice(1)],{cwd:root,encoding:'utf8'});if(result.status!==0)throw Error(result.stderr||'Patch check failed');
result=cp.spawnSync('git',args,{cwd:root,encoding:'utf8'});if(result.status!==0)throw Error(result.stderr||'Patch application failed');
for(const entry of manifest.classes){const file=path.join(target,entry.path);const text=fs.readFileSync(file,'utf8').replace(/\r\n/g,'\n');if(hash(text)!==entry.modifiedNormalizedSha256)throw Error('Patched source hash differs: '+entry.path);fs.writeFileSync(file,text);}
console.log('PASS: four patched classes exactly match the archived 0.4.8 source hashes.');
