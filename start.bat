@echo off
title Aneed Saudi Consulting - Server
color 0A
echo.
echo ========================================
echo   ANEED SAUDI CONSULTING - DEV SERVER
echo ========================================
echo.
cd /d "C:\Users\konta\aneed-saudi-consulting"
echo Aktuelles Verzeichnis: %cd%
echo.
echo Server startet auf Port 7001...
echo Oeffne: http://localhost:7001/blog
echo.
start "" "http://localhost:7001/blog"
timeout /t 3 /nobreak >nul
call npm run dev
pause
