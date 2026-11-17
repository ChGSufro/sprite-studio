# Cuboide — Sprite Studio 2D

Visor ortográfico, animador y depurador de Sprite Sheets 2D para el personaje voxel "Cuboide".

## Estructura del Proyecto

```
sprite-studio
├── index.html              # Estructura principal de la aplicación
├── css/
│   └── style.css           # Estilos personalizados (checkerboard, pixel-art, scrollbars)
├── js/
│   ├── tailwind.config.js  # Configuración y paleta Catppuccin para Tailwind CSS
│   └── app.js              # Lógica de renderizado, atlas, animación e interactividad
└── demo/
    ├── Cuboide_SpriteSheet_64x64.json  # Definición del atlas JSON (40 celdas 64x64)
    ├── Cuboide_SpriteSheet_64x64.png   # Sprite Sheet procedural generado (640x256 px)
    ├── demo.json                       # Alias de atlas JSON demo
    └── demo.png                        # Alias de Sprite Sheet PNG demo
```

## Ejecución

Puedes abrir directamente el archivo `index.html` en cualquier navegador web moderno o servirlo mediante un servidor local:

```bash
# Servidor local con Python 3
python3 -m http.server 8080 --directory .
```

Luego abre `http://localhost:8080` en tu navegador.
