# BodyBags E-commerce

![BodyBags Logo](public/bolsa2.PNG)

**BodyBags** es un e-commerce desarrollado con React y Firebase, diseñado con un estilo oscuro y "underground" para una experiencia de usuario única. Este proyecto permite explorar un catálogo de productos (bandoleras, riñoneras y sets materos), agregar ítems al carrito, y finalizar compras con registro en Firestore.

---

## Características

- **Catálogo Dinámico**: Productos cargados desde Firestore, con filtrado por categorías.
- **Detalles de Producto**: Vista detallada con control de stock y opción de agregar al carrito.
- **Carrito de Compras**: Gestión global con React Context, muestra cantidades y totales.
- **Checkout**: Formulario validado con confirmación de compra y registro en Firestore.
- **Estilo Oscuro "Under"**: Fondo negro, bordes blancos, acentos en naranja, y un toque urbano.
- **Navegación SPA**: Usando React Router, sin recargas de página.

---

## Tecnologías

- **Frontend**: React, React Router, Vite
- **Backend**: Firebase Firestore
- **Estilos**: CSS personalizado con tema oscuro
- **Lenguaje**: JavaScript (ES6+)

---

bodybags-project/
│
├── public/               # Archivos estáticos (imágenes)
│   ├── BandoleraDOREMI.jpg
│   └── bolsa2.PNG        # Logo
│
├── src/                  # Código fuente
│   ├── components/       # Componentes React
│   │   ├── Cart.jsx
│   │   ├── CartWidget.jsx
│   │   ├── CheckOutForm.jsx
│   │   ├── ItemCount.jsx
│   │   ├── ItemDetail.jsx
│   │   ├── ItemDetailContainer.jsx
│   │   ├── ItemListContainer.jsx
│   │   ├── NavBar.jsx
│   │   ├── NotFound.jsx
│   │   ├── ProductCard.jsx
│   │   └── Titulo.jsx
│   ├── context/          # Contexto para el carrito
│   │   └── CartContext.jsx
│   ├── firebase/         # Configuración de Firebase
│   │   └── config.js
│   ├── App.jsx           # Componente principal
│   ├── bagsProducts.js   # Datos iniciales de productos
│   ├── uploadProducts.js # Script para cargar productos a Firestore
│   └── index.css         # Estilos globales
│
├── package.json          # Dependencias y scripts
└── README.md             # Este archivo

Realizado en La DopplerCave por Lucas La Madrid Viegas 
