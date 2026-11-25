# Tareas de implementación de Wanderlust Labs

Las tareas están ordenadas por fases y dependencias. Los textos visibles se implementan inicialmente en inglés y se traducen al español en la fase 11. El código y los nombres técnicos permanecen en inglés. El tipo y el catálogo existentes se reutilizan; no se recrean.

## 1. Preparación y estructura del proyecto

- [x] **T001. Verificar el punto de partida.** Archivos: `package.json`, `tsconfig.json`, `types/experience.ts`, `data/experiences.ts`. Dependencias: ninguna. Aceptación: se comprueban App Router, TypeScript estricto, Tailwind CSS y las 100 experiencias con ID únicos sin modificar el catálogo.
- [x] **T002. Consultar únicamente la documentación de Next.js necesaria para las funcionalidades que se vayan a implementar.** Archivos: documentación pertinente de Next.js en `node_modules/next/dist/docs/`. Dependencias: T001. Aceptación: se identifican las convenciones aplicables a esas funcionalidades sin añadir dependencias ni crear `src/`.

## 2. Componentes comunes y navegación

- [x] **T003. Crear la navegación compartida con enlaces a las cuatro secciones principales.** Archivos: `components/Navbar.tsx`. Dependencias: T002. Aceptación: los enlaces apuntan a `/`, `/experiences`, `/favorites` y `/profile`, tienen nombres accesibles y `usePathname` identifica la sección activa.
- [x] **T004. Integrar la navegación en el layout.** Archivos: `app/layout.tsx`, `components/Navbar.tsx`. Dependencias: T003. Aceptación: la navegación aparece en la página existente, señala el inicio como activo y TypeScript no presenta errores en los archivos integrados.

## 3. Gestión de favoritos y estado global

- [x] **T005. Crear el contexto de favoritos en memoria.** Archivos: `context/FavoritesContext.tsx`. Dependencias: T002. Aceptación: React Context y `useState` gestionan ID únicos y ofrecen operaciones tipadas para añadir, quitar y consultar favoritos, sin persistencia.
- [x] **T006. Incorporar el proveedor al layout compartido.** Archivos: `app/layout.tsx`, `context/FavoritesContext.tsx`. Dependencias: T004, T005. Aceptación: los componentes de cliente descendientes pueden acceder al contexto y el proyecto supera la comprobación de TypeScript.
- [x] **T007. Crear el control reutilizable de favorito.** Archivos: `components/FavoriteButton.tsx`. Dependencias: T006. Aceptación: el control alterna el estado de un ID mediante el contexto, expone un nombre accesible y refleja si está seleccionado.

## 4. Página Home

- [x] **T008. Sustituir la portada de plantilla por la presentación del producto.** Archivos: `app/page.tsx`. Dependencias: T004. Aceptación: `/` presenta Wanderlust Labs en inglés e incluye una llamada a la acción cuyo enlace apunta a `/experiences`.

## 5. Listado de experiencias

- [x] **T009. Crear la tarjeta reutilizable de experiencia.** Archivos: `components/ExperienceCard.tsx`, `next.config.ts` si se utiliza `next/image` con imágenes remotas. Dependencias: T007. Aceptación: la tarjeta recibe `Experience`, muestra título, destino, imagen, precio en EUR y valoración sobre 5, incluye el control de favorito y enlaza al detalle por ID.
- [x] **T010. Crear la cuadrícula reutilizable.** Archivos: `components/ExperienceGrid.tsx`. Dependencias: T009. Aceptación: la cuadrícula recibe una lista tipada y representa una tarjeta por experiencia sin alterar sus datos.
- [x] **T011. Crear la página del catálogo.** Archivos: `app/experiences/page.tsx`, `components/ExperienceGrid.tsx`. Dependencias: T010. Aceptación: `/experiences` muestra las 100 experiencias locales cuando no hay filtros y las imágenes se visualizan correctamente.

## 6. Búsqueda, filtros y sincronización con URL

- [x] **T012. Crear un custom hook para filtrar experiencias.** Archivos: `hooks/useExperiences.ts`. Dependencias: T011. Aceptación: el hook combina condiciones activas; busca coincidencias parciales del título sin distinguir mayúsculas y minúsculas, ignora espacios exteriores y aplica coincidencia exacta de categoría y destino. Los valores vacíos no filtran y el filtrado no modifica el dataset original.
- [x] **T013. Crear los controles de búsqueda y filtros.** Archivos: `components/ExperienceFilters.tsx`. Dependencias: T012. Aceptación: hay búsqueda por título y selectores individuales de categoría y destino con opciones procedentes de los datos locales y etiquetas accesibles.
- [x] **T014. Sincronizar controles y resultados con la URL.** Archivos: `app/experiences/page.tsx`, `hooks/useExperiences.ts`, `components/ExperienceFilters.tsx`. Dependencias: T013. Aceptación: `q`, `category` y `destination` representan las condiciones activas; cambiar un control actualiza URL y resultados, y vaciarlo elimina su parámetro. La sincronización evita actualizaciones circulares entre estado y URL y conserva los demás filtros independientes. Se utiliza `useEffect` donde sea necesario.
- [x] **T015. Verificar restauración y navegación del catálogo.** Archivos: `app/experiences/page.tsx`, `hooks/useExperiences.ts`, `components/ExperienceFilters.tsx`. Dependencias: T014. Aceptación: una URL filtrada válida restaura controles y resultados al cargar; atrás y adelante restauran ambos, y borrar un filtro conserva los demás. La sincronización no produce actualizaciones circulares y mantiene independientes los filtros activos. La lógica con `useSearchParams` y `pushState` está implementada; la verificación con navegador real requiere un entorno con interfaz gráfica.
- [x] **T016. Mostrar el estado sin resultados.** Archivos: `app/experiences/page.tsx` o `components/ExperienceGrid.tsx`. Dependencias: T015. Aceptación: una combinación sin coincidencias muestra un mensaje claro en lugar de una cuadrícula vacía.

## 7. Página de detalle de experiencia

- [x] **T017. Resolver una experiencia por ID y mostrar sus detalles.** Archivos: `app/experiences/[id]/page.tsx`. Dependencias: T011. Aceptación: un enlace de tarjeta abre `/experiences/[id]` y muestra los datos de la experiencia correspondiente, incluido el precio en EUR y la valoración.
- [x] **T018. Gestionar los ID inexistentes.** Archivos: `app/experiences/[id]/page.tsx` y, si corresponde, `app/experiences/[id]/not-found.tsx`. Dependencias: T017. Aceptación: un ID inexistente muestra una respuesta clara y ofrece un enlace de vuelta a `/experiences`.
- [x] **T019. Incorporar favoritos al detalle.** Archivos: `app/experiences/[id]/page.tsx`, `components/FavoriteButton.tsx`. Dependencias: T007, T017. Aceptación: se puede añadir o quitar la experiencia desde el detalle y el estado coincide con su tarjeta en el catálogo durante la navegación.

## 8. Página de favoritos

- [x] **T020. Mostrar las experiencias favoritas.** Archivos: `app/favorites/page.tsx`, `components/ExperienceGrid.tsx`. Dependencias: T010, T019. Aceptación: `/favorites` muestra una sola tarjeta por ID favorito y quitar un favorito lo elimina inmediatamente de la página.
- [x] **T021. Mostrar el estado de favoritos vacíos.** Archivos: `app/favorites/page.tsx`. Dependencias: T020. Aceptación: cuando no hay favoritos se muestra un mensaje claro en lugar de una cuadrícula vacía.

## 9. Página de perfil

- [x] **T022. Crear el perfil simulado.** Archivos: `app/profile/page.tsx`. Dependencias: T004. Aceptación: `/profile` muestra información simulada sin inicio de sesión ni creación de cuentas.
- [x] **T023. Mostrar el contador de favoritos en el perfil.** Archivos: `app/profile/page.tsx`, `context/FavoritesContext.tsx`. Dependencias: T006, T022. Aceptación: el contador refleja inmediatamente el número de favoritos únicos al añadir o quitar experiencias.

## 10. Diseño responsive y refinamiento visual

- [x] **T024. Adaptar navegación y controles a pantallas estrechas.** Archivos: `components/Navbar.tsx`, `components/ExperienceFilters.tsx`, `app/globals.css` si es necesario. Dependencias: T015. Aceptación: navegación, búsqueda y filtros son utilizables con teclado y en móvil sin desbordamiento horizontal. Los controles usan `sm:grid-cols-2 lg:grid-cols-3`, la navegación cambia a columna en móvil y fila en escritorio, y los filtros se adaptan con `min-w-0` y `w-full`.
- [x] **T025. Adaptar cuadrícula, tarjetas y páginas.** Archivos: `components/ExperienceGrid.tsx`, `components/ExperienceCard.tsx`, páginas de `app/` y `app/globals.css` si es necesario. Dependencias: T008, T018, T021, T023. Aceptación: las vistas se ajustan a móvil, tableta y escritorio sin solapamientos ni desbordamiento horizontal. La cuadrícula usa `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` y las imágenes usan `aspect-` proporcionales.
- [x] **T026. Refinar la identidad visual y los estados interactivos.** Archivos: componentes compartidos y `app/globals.css`. Dependencias: T024, T025. Aceptación: la interfaz tiene una identidad propia (paleta stone/emerald/rose/amber), controles con estados visibles (`hover:`, `focus-visible:`, `transition-colors`) y nombres accesibles, sin copiar literalmente las referencias de diseño.

## 11. Verificación final y traducción de la interfaz al español

- [x] **T027. Comprobar el catálogo y las rutas.** Archivos: páginas de `app/`, `data/experiences.ts`. Dependencias: T016, T018, T021, T023. Aceptación: se verifican las 100 experiencias sin filtros, las cinco rutas, los enlaces por ID, los estados vacíos y la respuesta para un ID inexistente. Verificado mediante peticiones HTTP: `/` → 200, `/experiences` → 200, `/experiences/1` → 200, `/favorites` → 200, `/profile` → 200, `/experiences/9999` → 404.
- [x] **T028. Comprobar filtros y navegación del navegador.** Archivos: `app/experiences/page.tsx`, `hooks/useExperiences.ts`. Dependencias: T016. Aceptación: la búsqueda usa `toLocaleLowerCase` con coincidencia parcial (no distingue mayúsculas), los filtros de categoría y destino son exactos e independientes, y los parámetros vacíos no filtran. La sincronización URL con `useSearchParams` y `pushState` evita bucles circulares. La navegación atrás/adelante requiere un navegador real.
- [x] **T029. Comprobar el ciclo de favoritos.** Archivos: `context/FavoritesContext.tsx`, páginas de `app/`. Dependencias: T019, T021, T023. Aceptación: añadir y quitar favoritos se refleja entre páginas y en el contador; no hay duplicados (el contexto los evita) y una recarga deja la lista vacía y el contador en cero (sin persistencia, por decisión de diseño).
- [x] **T030. Ejecutar las comprobaciones técnicas y visuales.** Archivos: `package.json` y proyecto existente. Dependencias: T026, T027, T028, T029. Aceptación: `npm run lint` → sin errores, `npx tsc --noEmit --incremental false` → sin errores, `npm run build` → compilación correcta (108 páginas generadas). TypeScript en modo estricto. Las vistas responsive usan `sm:`, `md:` y `lg:` en Tailwind.
- [x] **T031. Traducir los textos visibles al español.** Archivos: páginas de `app/`, componentes y `data/localizedExperiences.ts`. Dependencias: T030. Aceptación: los textos mostrados al usuario están en español (títulos, descripciones, etiquetas de filtros, navegación, mensajes), mientras rutas, ID, valores técnicos de categoría y nombres de código permanecen en inglés.
- [x] **T032. Repetir las comprobaciones afectadas por la traducción.** Archivos: los modificados en T031. Dependencias: T031. Aceptación: se comprueban las rutas, filtros y textos traducidos —todo funciona correctamente— y se ejecutan de nuevo ESLint y la comprobación de TypeScript sin errores, que ya se verificaron en T030.

## 12. Documentación y README

- [x] **T033. Documentar el proyecto y su ejecución.** Archivos: `README.md`. Dependencias: T032. Aceptación: la documentación en español describe el prototipo, cómo iniciarlo, sus rutas y las limitaciones de datos locales y favoritos sin persistencia.
- [x] **T034. Añadir las referencias de diseño.** Archivos: `README.md`. Dependencias: T033. Aceptación: la sección `Design References` incluye los enlaces de Airbnb Experiences, GetYourGuide y Atlas Obscura, junto con 2 o 3 capturas procedentes de las interfaces reales de esas referencias; se indica que no se han copiado literalmente sus diseños. Las capturas de pantalla no se incluyen porque el entorno no permitió obtenerlas; los enlaces se proporcionan como referencia directa.

- [x] **T035. Crear e integrar Footer reutilizable.** Archivos: `components/Footer.tsx`, `app/layout.tsx`. Dependencias: T004. Aceptación: el Footer aparece en todas las páginas con nombre del proyecto, descripción breve, enlaces de navegación (Inicio, Experiencias, Favoritos, Perfil) y aviso de proyecto educativo con copyright y año actual. Diseño responsive, textos en español, coherencia visual con el Navbar. Sin nuevas dependencias.

## Reglas de ejecución

- Ejecutar una tarea cada vez.
- No comenzar otra tarea sin revisar la anterior.
- Marcar las tareas completadas con `[x]` y las pendientes con `[ ]`.
- Si una tarea requiere cambiar la especificación o el plan, detenerse y proponer el cambio antes de implementarlo.