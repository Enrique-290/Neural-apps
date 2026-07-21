#!/usr/bin/env sh
cd "$(dirname "$0")"
echo "Iniciando NoteHub v0.2.3 en http://127.0.0.1:8000"
python3 -m http.server 8000 --bind 127.0.0.1
