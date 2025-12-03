@echo off
chcp 65001 >nul
echo ========================================
echo   Uruchamianie ELIKSIR Website (dev)
echo ========================================
echo.
echo Katalog: %CD%
echo.

REM Sprawdź czy node_modules istnieje
if not exist "node_modules" (
    echo Brak node_modules, instaluję zależności...
    call npm install
    if errorlevel 1 (
        echo Błąd instalacji zależności!
        pause
        exit /b 1
    )
)

echo Uruchamiam serwer deweloperski (npm run dev)...
echo Naciśnij Ctrl+C aby zatrzymać.
echo.

REM Uruchom serwer
call npm run dev

echo.
echo Serwer zatrzymany.
pause