@echo off
cd /d "%~dp0"
echo Iniciando NoteHub v0.2.3 en http://127.0.0.1:8000
where py >nul 2>nul
if %errorlevel%==0 (
  start "" http://127.0.0.1:8000
  py -m http.server 8000 --bind 127.0.0.1
) else (
  start "" http://127.0.0.1:8000
  python -m http.server 8000 --bind 127.0.0.1
)
pause
