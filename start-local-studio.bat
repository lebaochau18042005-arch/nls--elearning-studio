@echo off
title NLS E-Learning Studio Local Server
cd /d "%~dp0"
set NLS_STUDIO_NO_OPEN=1
echo Starting NLS E-Learning Studio...
echo.
echo Open this link in Chrome:
echo http://127.0.0.1:4173/?v=20260709-studio19#studio
echo.
echo Keep this window open while using the app.
echo Press Ctrl+C to stop the server.
echo.
node local-server.js
pause
