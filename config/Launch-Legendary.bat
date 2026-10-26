@echo off
cd /d "%~dp0"
"%~dp0adl64.exe" -runtime "%~dp0runtimes\air\win64" "%~dp0legendary.xml"
if errorlevel 1 pause
