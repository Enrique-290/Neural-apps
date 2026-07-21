# NoteHub v0.2.3

Versión enfocada en contenido visual dentro de una misma nota contenedora.

## Incluye

- Mantiene la biblioteca, filtros, buscador, colores y notas contenedoras.
- Bloques funcionales de texto, tareas y enlaces.
- Subida de múltiples fotos desde el dispositivo.
- Cámara real con selección frontal o trasera.
- Captura de pantalla cuando el navegador lo permite.
- Importación y pegado de capturas desde el portapapeles.
- Lienzo de dibujo con colores, grosor, deshacer y limpiar.
- Imágenes y dibujos guardados como Blob en IndexedDB.
- Eliminación individual de imágenes y reordenamiento de bloques.
- Migración automática desde bases y datos anteriores de NoteHub cuando están disponibles.
- PWA instalable y modo offline.

## Probar la app

### Windows

Ejecuta `iniciar-servidor.bat` y abre `http://127.0.0.1:8000`.

### Linux o macOS

Da permisos y ejecuta:

```bash
chmod +x iniciar-servidor.sh
./iniciar-servidor.sh
```

La cámara, captura de pantalla, portapapeles, Service Worker y PWA requieren `localhost`, `127.0.0.1` o HTTPS.

## Alcance

Audio, video y documentos quedan preparados para NoteHub v0.2.4.
