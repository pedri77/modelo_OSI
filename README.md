# Modelo OSI interactivo

Proyecto educativo estático para explicar las 7 capas del modelo OSI de forma interactiva. Está preparado para publicarse en GitHub Pages sin servidores, bases de datos ni servicios de pago.

## Qué incluye

- Explorador de capas con función, PDU, ejemplos y pistas de memoria.
- Mapa gráfico interactivo con Cytoscape.js para explorar capas, protocolos, estándares y organismos.
- Simulador de encapsulación y desencapsulación.
- Quiz autocorregido con explicación inmediata.
- Guía rápida para repasar capas, protocolos y dispositivos.
- Referencias oficiales a RFC, IEEE, ISO, ITU-T, Ecma y Microsoft Open Specifications.
- Tema claro y oscuro con preferencia guardada en el navegador.

## Estructura

```text
.
├── index.html
├── styles.css
├── script.js
├── .nojekyll
└── README.md
```

## Vista local

Puedes abrir `index.html` directamente en el navegador.

Opcionalmente, si prefieres verlo con servidor local:

```bash
python3 -m http.server 8000
```

Después abre `http://localhost:8000`.

## Publicación en GitHub Pages

Desde esta carpeta:

```bash
git init
git add .
git commit -m "Crear modelo OSI interactivo"
git branch -M main
git remote add origin https://github.com/pedri77/modelo_OSI.git
git push -u origin main
```

En GitHub:

1. Abre `pedri77/modelo_OSI`.
2. Entra en `Settings`.
3. Abre `Pages`.
4. En `Build and deployment`, elige `Deploy from a branch`.
5. Selecciona `main` y carpeta `/root`.
6. Guarda los cambios.

GitHub publicará la web en `https://pedri77.github.io/modelo_OSI/`.

## Dependencia de navegador

El proyecto usa HTML, CSS y JavaScript plano. No requiere `npm install`, API externa, backend ni plan de pago.

El mapa interactivo carga Cytoscape.js desde jsDelivr con versión fijada:

```html
https://cdn.jsdelivr.net/npm/cytoscape@3.34.1/dist/cytoscape.min.js
```

Si más adelante queremos que funcione totalmente offline, se puede descargar ese archivo en una carpeta `vendor/` y cambiar la etiqueta `<script>`.
