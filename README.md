# Alejandro Sanz — Práctica React

Proyecto desarrollado con React y Vite como práctica de componentes, estilos CSS y interacción básica.

La aplicación muestra una interfaz inspirada en una reproducción musical. Incluye una cabecera, una sección de información, barras de reproducción, checkbox con distintos estados, un botón con el nombre del artista, un selector de emojis y una barra de navegación inferior.

## Contenido del proyecto

- `Header.jsx`: muestra el título «Alejandro Sanz» y el texto «- Más -».
- `Section.jsx`: contiene la imagen del artista y un texto descriptivo.
- `FirstBar.jsx`: muestra un reproductor pequeño, una barra de progreso y el control de volumen.
- `PlayBar.jsx`: incluye un control deslizante y los botones de anterior, reproducción y siguiente.
- `CheckSection.jsx`: crea dos columnas de checkbox con estados vacíos, seleccionados e indeterminados.
- `ExtraSections.jsx`: contiene el nombre del artista, el selector de emojis y la navegación inferior.
- `index.css`: contiene todos los estilos de la interfaz.
- `main.jsx`: importa los componentes y los coloca en la página.
- `public/`: contiene las imágenes utilizadas por la aplicación.

## Tecnologías utilizadas

- React 19
- React DOM
- Vite
- JavaScript ES6+
- JSX
- CSS
- HTML

## Funcionalidades

### Barra de reproducción

El control deslizante permite seleccionar una posición visual dentro de la reproducción. El botón de reproducción muestra una alerta con el texto «Reproduciendo...».

### Checkbox

La aplicación muestra tres tipos de checkbox:

- Sin seleccionar.
- Seleccionado mediante `defaultChecked`.
- Indeterminado mediante la propiedad `indeterminate` de JavaScript aplicada con `useRef` y `useEffect`.

### Selector de emojis

El selector contiene cinco emojis. Utiliza `useState` para guardar el índice seleccionado y cambia visualmente el emoji pulsado.

También utiliza `aria-pressed` para indicar a tecnologías de asistencia qué botón está seleccionado.

## Requisitos previos

Necesitas tener instalado:

- Node.js
- npm

Puedes comprobar las instalaciones con:

```bash
node --version
npm --version
```

## Instalación

1. Accede a la carpeta del proyecto:

```bash
cd AlejandroSanz/AlejandroSanz
```

2. Instala las dependencias:

```bash
npm install
```

## Ejecución

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará una dirección local, normalmente:

```text
http://localhost:5173
```

Abre esa dirección en el navegador.

## Otros comandos

Crear la versión de producción:

```bash
npm run build
```

Previsualizar la compilación:

```bash
npm run preview
```

Comprobar el código con ESLint:

```bash
npm run lint
```

## Organización de componentes

El proyecto utiliza componentes funcionales independientes. Estos se importan desde `main.jsx` y se representan dentro de `StrictMode`:

```jsx
<Header />
<Section />
<FirstBar />
<PlayBar />
<CheckSection />
<NameSection />
<EmojiSection />
<BottomNav />
```

`StrictMode` ayuda a detectar ciertos problemas durante el desarrollo, pero no modifica directamente el aspecto final de la página.

## Conceptos trabajados

- Creación de componentes React.
- Exportación e importación de componentes.
- Composición de componentes.
- JSX.
- Hooks `useState`, `useRef` y `useEffect`.
- Gestión de eventos.
- Renderizado de listas con `map`.
- Checkbox normales e indeterminados.
- Controles de formulario.
- Emojis dentro de elementos HTML.
- Diseño con Flexbox.
- Clases CSS dinámicas.
- Accesibilidad básica con atributos ARIA.

## Posibles mejoras futuras

- Reproducir audio real.
- Cambiar el estado del botón de reproducción entre reproducir y pausar.
- Hacer funcionales los botones anterior y siguiente.
- Permitir que los checkbox cambien entre sus estados.
- Añadir navegación entre páginas.
- Separar mejor los estilos por componente.
- Añadir diseño adaptable para móviles y otros tamaños de pantalla.
