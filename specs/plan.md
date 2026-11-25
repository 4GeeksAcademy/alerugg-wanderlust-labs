# Plan técnico de Wanderlust Labs

## 1. Resumen de la solución

Implementar un prototipo educativo de descubrimiento de experiencias con datos locales, navegación entre páginas y favoritos temporales. La interfaz comenzará en inglés y se traducirá al español al final; el código y los nombres de variables y componentes permanecerán en inglés.

## 2. Arquitectura de la aplicación

Usar Next.js con App Router y componentes funcionales de React. Mantener `app/` en la raíz y separar la presentación, el estado compartido y la lógica de filtrado.

El proyecto ya dispone de una portada y un layout de plantilla. Las páginas de experiencias, detalle, favoritos y perfil aún deben implementarse.

## 3. Tecnologías y herramientas

Utilizar las dependencias existentes: Next.js, React, TypeScript estricto y Tailwind CSS. Usar ESLint y los comandos existentes para verificar el proyecto. No instalar dependencias ni librerías de gestión de estado.

## 4. Estructura de carpetas y archivos

- Existentes: `app/`, `data/experiences.ts`, `types/experience.ts` y `specs/spec.md`.
- Propuestas: `app/experiences/`, `app/experiences/[id]/`, `app/favorites/` y `app/profile/`.
- Propuestas: `components/`, `context/` y `hooks/` para componentes, favoritos y lógica reutilizable.
- No crear `src/`.

## 5. Componentes reutilizables

Crear componentes para navegación, tarjetas y cuadrícula de experiencias, controles de búsqueda y filtros, y botón de favorito. Utilizar `usePathname` para destacar la página activa y proporcionar nombres accesibles a los controles.

## 6. Gestión del estado y favoritos

Crear un proveedor con React Context y `useState`, situado en el layout compartido. Almacenar ID únicos en memoria y exponer operaciones para añadir, quitar y consultar favoritos. Compartir el estado entre páginas y reiniciarlo al recargar, sin persistencia.

## 7. Búsqueda, filtros y sincronización con URL

Crear al menos un custom hook para coordinar la lógica de experiencias o filtros. Buscar por coincidencia parcial del título, sin distinguir mayúsculas y minúsculas y eliminando espacios exteriores. Aplicar categoría y destino mediante coincidencia exacta y combinar todas las condiciones activas.

Representar los controles mediante `q`, `category` y `destination`; un parámetro ausente o vacío no filtra. Actualizar URL y resultados al cambiar controles y restaurarlos al cargar una URL o navegar atrás y adelante. Usar `useEffect` donde sea necesario y mostrar un mensaje si no hay resultados.

## 8. Estrategia de diseño responsive

Adaptar navegación, controles y cuadrícula a móviles, tabletas y escritorio con Tailwind CSS. Evitar desbordamientos horizontales y mantener los controles utilizables y accesibles. Desarrollar una identidad visual propia.

## 9. Gestión de datos y navegación

Consumir el catálogo local existente de 100 experiencias y su tipo `Experience`, sin recrearlos. Mostrar precios en EUR y valoraciones de 0 a 5. Resolver los detalles por ID y presentar una respuesta clara con enlace de vuelta si no existe.

Las rutas serán `/`, `/experiences`, `/experiences/[id]`, `/favorites` y `/profile`. La portada incluirá una llamada a la acción hacia la página de experiencias. El perfil será simulado y mostrará el contador de favoritos actualizado.

## 10. Orden de implementación

1. Preparar layout, navegación y portada.
2. Crear componentes de experiencias y proveedor de favoritos.
3. Implementar catálogo, filtros y sincronización con URL.
4. Implementar detalle, favoritos y perfil.
5. Ajustar diseño adaptable y accesibilidad.
6. Verificar los criterios de aceptación y traducir los textos visibles al español al final.

## 11. Verificación y pruebas

Ejecutar `npm run lint`, la comprobación de TypeScript y `npm run build`. Verificar manualmente las 100 experiencias, las combinaciones de filtros, la restauración de URL y la navegación del navegador. Comprobar los estados vacíos, ID inexistentes, favoritos compartidos y su reinicio al recargar, contador del perfil y vistas responsive.

No implementar backend, autenticación, base de datos ni persistencia.

## Referencias de diseño

- [Airbnb Experiences](https://www.airbnb.com/experiences): presentación visual de actividades y exploración mediante tarjetas.
- [GetYourGuide](https://www.getyourguide.com/): organización del catálogo, búsqueda y filtros.
- [Atlas Obscura](https://www.atlasobscura.com/): enfoque editorial y descubrimiento de lugares singulares.

Estas referencias servirán de inspiración, sin copiar sus diseños literalmente. Al finalizar el proyecto se añadirá a `README.md` una sección **Design References** con estos enlaces y 2 o 3 capturas de sus interfaces como referencias visuales.