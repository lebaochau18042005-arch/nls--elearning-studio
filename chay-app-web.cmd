@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo May tinh chua co Node.js. Ung dung se mo truc tiep bang trinh duyet.
  start "" "%~dp0index.html"
  exit /b 0
)
echo Dang khoi dong NLS E-Learning Studio tai http://127.0.0.1:4173 ...
node "%~dp0local-server.js"
