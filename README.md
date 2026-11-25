# Wanderlust Labs

Prototipo educativo de catálogo de experiencias de viaje. Creado con Next.js (App Router), React, TypeScript y Tailwind CSS. Interfaz completa en español con catálogo, búsqueda, filtros, páginas de detalle, favoritos y perfil de demostración.

> **Aviso:** Este es un proyecto educativo con datos simulados. No hay backend, autenticación ni reservas reales.

---

## ✨ Funcionalidades

- **Catálogo de 100 experiencias** — Navega por una colección diversa de experiencias de viaje con imágenes, precios y valoraciones.
- **Búsqueda y filtros sincronizados con la URL** — Busca por título, filtra por categoría (Aventura, Cultura, Gastronomía, Bienestar, Naturaleza) y destino. Los parámetros se reflejan en la URL (`?q=`, `?category=`, `?destination=`), permitiendo compartir enlaces con filtros aplicados.
- **Página de detalle** — Información completa de cada experiencia con foto principal, descripción, precio, valoración y enlace de ubicación.
- **Favoritos en memoria** — Añade o quita experiencias de tu lista de favoritos desde cualquier tarjeta o página de detalle. El estado se mantiene durante la navegación (no persiste al recargar la página).
- **Perfil de demostración** — Perfil simulado que muestra un contador actualizado de experiencias favoritas.
- **Diseño responsive** — Interfaz adaptada a móvil, tableta y escritorio.
- **Navegación y pie de página** — Barra de navegación superior y footer informativo en todas las páginas.
- **Página 404 personalizada** — Respuesta clara con enlace de vuelta al catálogo para IDs de experiencia inexistentes.

## 🛠️ Tecnologías

| Tecnología | Versión | Propósito |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.4.6 | Framework React con App Router |
| [React](https://react.dev/) | 19.3.0 | Librería de interfaz de usuario |
| [TypeScript](https://www.typescriptlang.org/) | ^5 | Tipado estático estricto |
| [Tailwind CSS](https://tailwindcss.com/) | 4.3.3 | Estilos utilitarios |
| [ESLint](https://eslint.org/) | ^9 | Linter con configuración de Next.js |

**Sin dependencias adicionales.** No se utilizan librerías de terceros para estado global, iconos, animaciones ni llamadas a API.

## 📁 Estructura del proyecto

```
alerugg-wanderlust-labs/
├── app/
│   ├── layout.tsx              # Layout raíz (navbar, footer, proveedor de favoritos)
│   ├── page.tsx                # Página de inicio (portada)
│   ├── globals.css             # Estilos globales Tailwind
│   ├── experiences/
│   │   ├── page.tsx            # Catálogo con búsqueda y filtros
│   │   └── [id]/
│   │       ├── page.tsx        # Detalle de experiencia
│   │       └── not-found.tsx   # 404 para ID inexistente
│   ├── favorites/
│   │   └── page.tsx            # Lista de experiencias favoritas
│   └── profile/
│       └── page.tsx            # Perfil de demostración
├── components/
│   ├── Navbar.tsx              # Barra de navegación
│   ├── Footer.tsx              # Pie de página
│   ├── ExperienceCard.tsx      # Tarjeta de experiencia
│   ├── ExperienceGrid.tsx      # Cuadrícula de tarjetas
│   ├── ExperienceCatalog.tsx   # Catálogo con lógica de filtros
│   ├── ExperienceFilters.tsx   # Controles de búsqueda y filtro
│   └── FavoriteButton.tsx      # Botón de favorito
├── context/
│   └── FavoritesContext.tsx    # Contexto React para favoritos
├── hooks/
│   └── useExperiences.ts      # Hook de filtrado
├── data/
│   ├── experiences.ts          # Catálogo original (100 experiencias, en inglés)
│   └── localizedExperiences.ts # Catálogo con textos visibles en español
├── types/
│   └── experience.ts           # Tipo Experience
├── public/                     # Archivos estáticos (SVG por defecto de Next.js)
├── specs/                      # Especificación funcional y plan de desarrollo
├── next.config.ts              # Configuración de Next.js
├── tsconfig.json               # Configuración de TypeScript (strict mode)
├── eslint.config.mjs           # Configuración de ESLint
└── package.json
```

## 📋 Requisitos previos

- **Node.js** 18.17 o superior
- **npm** (incluido con Node.js)

## 🚀 Instalación y ejecución

```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd alerugg-wanderlust-labs

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

### Producción

```bash
npm run build
npm run start
```

## 📜 Scripts disponibles

| Script | Comando | Descripción |
|---|---|---|
| `dev` | `next dev` | Inicia el servidor de desarrollo con Turbopack |
| `build` | `next build` | Compila el proyecto para producción |
| `start` | `next start` | Inicia el servidor de producción |
| `lint` | `eslint` | Ejecuta el linter (configuración de Next.js + TypeScript) |

### Comprobación de tipos

```bash
npx tsc --noEmit --incremental false
```

## 🧭 Rutas

| Ruta | Descripción |
|---|---|
| `/` | Portada con presentación y enlace al catálogo |
| `/experiences` | Catálogo completo con búsqueda y filtros |
| `/experiences?q=&category=&destination=` | Catálogo filtrado (parámetros en URL) |
| `/experiences/[id]` | Detalle de una experiencia concreta |
| `/favorites` | Lista de experiencias favoritas |
| `/profile` | Perfil de demostración |

## 🏗️ Decisiones técnicas

- **App Router** con Server Components por defecto. Los componentes que necesitan interactividad se marcan con `"use client"`: Navbar, ExperienceCatalog, ExperienceFilters, FavoriteButton, FavoritesPage y ProfilePage.
- **Estado de favoritos** mediante React Context, sin persistencia. Se optó por mantenerlo en memoria para simplificar, priorizando la experiencia de navegación entre páginas durante la sesión.
- **Filtros sincronizados con URL** usando `useSearchParams` y `pushState`. Permite compartir enlaces con filtros aplicados y conservar el estado al usar atrás/adelante.
- **Datos localizados** separados del catálogo original. Las categorías técnicas permanecen en inglés mientras los textos visibles están en español.
- **Tailwind CSS v4** con `@import "tailwindcss"` (sin archivo de configuración tradicional). Paleta de colores: stone (fondos y texto), emerald (acentos), rose (favoritos), amber (valoraciones).
- **Imágenes** servidas desde picsum.photos (placeholders) y Unsplash (portada). Configuradas con `remotePatterns` en `next.config.ts`.
- **Generación estática** de páginas de detalle con `generateStaticParams` para las 100 experiencias.

## ⚠️ Limitaciones

- **Favoritos en memoria** — Al recargar la página se pierden. No hay almacenamiento local, backend ni base de datos.
- **Sin autenticación** — No hay registro, inicio de sesión ni cuentas de usuario.
- **Sin reservas reales** — Las experiencias son simuladas. No se procesan pagos ni reservas.
- **Datos estáticos** — El catálogo está embebido en el código. No hay API externa ni CMS.
- **Perfil de demostración** — Los datos del perfil son ficticios y no configurables.

## 🔮 Posibles mejoras futuras

- Persistencia de favoritos (localStorage, IndexedDB o backend).
- Autenticación y perfiles de usuario personalizables.
- Búsqueda con ordenación (precio, valoración, destino).
- Página de inicio con experiencias destacadas.
- Integración con API real o CMS headless.
- Páginas de categoría y destino independientes.
- Modo oscuro.

## 🎨 Referencias de diseño

La interfaz se inspira visualmente (sin copiar literalmente) en:

- [Airbnb Experiences](https://www.airbnb.com/s/experiences)
- [GetYourGuide](https://www.getyourguide.com/)
- [Atlas Obscura](https://www.atlasobscura.com/)
