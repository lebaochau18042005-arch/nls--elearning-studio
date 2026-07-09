@echo off
chcp 65001 >nul
title Push NLS E-Learning Studio to GitHub
cd /d "%~dp0"

echo ===============================================
echo  NLS E-Learning Studio - Push to GitHub
echo ===============================================
echo.
echo This tool will save the current changes and push them to:
echo https://github.com/lebaochau18042005-arch/nls--elearning-studio
echo.
echo If this fails, close GitHub Desktop, VS Code, and pause OneDrive sync,
echo then right-click this file and choose "Run as administrator".
echo.
pause

if exist ".git\index.lock" (
  echo Removing stale Git lock...
  del /f /q ".git\index.lock"
)

echo.
echo Checking changed files...
git status --short

echo.
echo Adding changed files...
git add app.js styles.css index.html pwa.js service-worker.js start-local-studio.bat push-to-github.bat
if errorlevel 1 goto fail

git diff --cached --quiet
if errorlevel 1 (
  echo.
  echo Creating commit...
  git commit -m "Improve PPTX authoring view and prevent blank slides"
  if errorlevel 1 goto fail
) else (
  echo.
  echo No new local changes to commit.
)

echo.
echo Pushing to GitHub...
git push origin main
if errorlevel 1 goto fail

echo.
echo ===============================================
echo  DONE: Your project was pushed to GitHub.
echo ===============================================
echo.
pause
exit /b 0

:fail
echo.
echo ===============================================
echo  FAILED: GitHub push did not complete.
echo ===============================================
echo.
echo Please close GitHub Desktop, VS Code, and pause OneDrive sync.
echo Then right-click push-to-github.bat and choose "Run as administrator".
echo.
pause
exit /b 1
