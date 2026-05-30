
# Gestión de Productos

Aplicación web para agregar, eliminar y sincronizar productos con una API local.

---

## Tecnologías

- HTML5, CSS3, JavaScript (ES Modules)
- Fetch API
- Local Storage
- JSON Server

---

## Estructura
proyecto/
├── index.html        # Estructura principal
├── styles.css        # Estilos
├── app.js            # Punto de entrada
├── ui.js             # Manipulación del DOM
├── validacion.js     # Validación de campos
├── productos.js      # Estado y Local Storage
└── api.js            # Comunicación con el servidor

---

## Cómo ejecutar

1. Instalar JSON Server

```bash
npm install -g json-server
```

2. Iniciar el servidor

```bash
npx json-server --watch db.json --port 3000
```

3. Abrir el proyecto con la extensión Live Server en VS Code sobre index.html.

---

## Funcionalidades

| Función | Descripción |
|---|---|
| Agregar | Valida y agrega un producto al DOM y Local Storage |
| Eliminar | Borra el producto del DOM, Storage y servidor |
| Sincronizar | Obtiene los productos actuales desde la API |

---

## Autor

Jose — 2026
