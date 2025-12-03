# start-dev.ps1 - Uruchomienie serwera deweloperskiego ELIKSIR
Write-Host "=== Uruchamianie ELIKSIR Website (dev) ===" -ForegroundColor Cyan
Write-Host "Katalog: $(Get-Location)" -ForegroundColor Gray
Write-Host "Czas: $(Get-Date -Format 'HH:mm:ss')" -ForegroundColor Gray
Write-Host ""

# Sprawdź czy node_modules istnieje
if (-not (Test-Path "node_modules")) {
    Write-Host "Brak node_modules, instaluję zależności..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Błąd instalacji zależności!" -ForegroundColor Red
        exit 1
    }
}

# Sprawdź czy port 5173 jest zajęty
$portInUse = Get-NetTCPConnection -LocalPort 5173 -ErrorAction SilentlyContinue
if ($portInUse) {
    Write-Host "Port 5173 jest zajęty (PID: $($portInUse.OwningProcess))." -ForegroundColor Yellow
    Write-Host "Możesz zatrzymać proces komendą: Stop-Process -Id $($portInUse.OwningProcess) -Force" -ForegroundColor Gray
    Write-Host "Lub serwer użyje innego portu." -ForegroundColor Gray
}

Write-Host "Uruchamiam serwer deweloperski (npm run dev)..." -ForegroundColor Green
Write-Host "Naciśnij Ctrl+C aby zatrzymać." -ForegroundColor Gray
Write-Host ""

# Uruchom serwer
npm run dev

# Po zatrzymaniu
Write-Host ""
Write-Host "Serwer zatrzymany." -ForegroundColor Cyan
Write-Host "Czas: $(Get-Date -Format 'HH:mm:ss')" -ForegroundColor Gray