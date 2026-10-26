param(
 [Parameter(Mandatory=$true)][string]$OriginalSwf,
 [Parameter(Mandatory=$true)][string]$FFDecJar,
 [string]$OutputDirectory,
 [string]$Java='java',
 [string]$Node='node'
)
$ErrorActionPreference='Stop'
$repo=Split-Path $PSScriptRoot -Parent
$inputFile=(Resolve-Path -LiteralPath $OriginalSwf).Path
$compiler=(Resolve-Path -LiteralPath $FFDecJar).Path
$manifest=Get-Content -LiteralPath "$repo/data/source-manifest.json" -Raw | ConvertFrom-Json
if((Get-FileHash -LiteralPath $inputFile -Algorithm SHA256).Hash.ToLowerInvariant() -ne $manifest.originalSwfSha256){throw 'This base SWF differs from the archived compatible original. See docs/BUILD.md. The input has not been modified.'}
if(!$OutputDirectory){$OutputDirectory=Join-Path $repo 'dist'}
$destination=[IO.Path]::GetFullPath($OutputDirectory)
if($inputFile -eq (Join-Path $destination 'DLC/pfeUI.swf')){throw 'Output must not replace the input SWF.'}
$scratch=Join-Path $repo ('.build/build-'+[guid]::NewGuid().ToString('N'))
New-Item -ItemType Directory -Force "$scratch/export","$scratch/src","$destination/DLC" | Out-Null
& $Java -Xmx2g -jar $compiler -selectclass 'fe.unit.Pers,fe.inter.GUI,fe.inter.PipPageOpt,fe.inter.PipPageStat' -export script "$scratch/export" $inputFile *> "$scratch/export.log"
if($LASTEXITCODE -ne 0){throw "Source export failed; inspect $scratch/export.log"}
& $Node "$PSScriptRoot/prepare-source.cjs" "$scratch/export/scripts" "$scratch/src"
if($LASTEXITCODE -ne 0){throw 'Source patch failed'}
& $Java -Xmx2g -jar $compiler -onerror abort -importScript $inputFile "$scratch/compiled.swf" "$scratch/src" *> "$scratch/compile.log"
if($LASTEXITCODE -ne 0){throw "Compilation failed; inspect $scratch/compile.log"}
& $Node "$PSScriptRoot/patch-abc.cjs" "$scratch/compiled.swf" "$destination/DLC/pfeUI.swf"
if($LASTEXITCODE -ne 0){throw 'Targeted bytecode hooks failed'}
& $Node "$PSScriptRoot/verify-swf.cjs" $inputFile "$destination/DLC/pfeUI.swf"
if($LASTEXITCODE -ne 0){throw 'Original asset preservation verification failed'}
New-Item -ItemType Directory -Force "$destination/Assets" | Out-Null
Copy-Item -LiteralPath (Get-ChildItem "$repo/art/assets/*.png").FullName -Destination "$destination/Assets" -Force
Copy-Item -LiteralPath "$repo/config/legendary.xml","$repo/config/Launch-Legendary.bat","$repo/VERSION.txt" -Destination $destination -Force
Get-FileHash -LiteralPath "$destination/DLC/pfeUI.swf" -Algorithm SHA256
Write-Output "Built local overlay: $destination. No game or AIR runtime was copied. Do not commit dist/ or .build/."
