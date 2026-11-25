# Especificación funcional de Wanderlust Labs

## 1. Descripción general del proyecto

Wanderlust Labs es un prototipo educativo para descubrir experiencias de viaje. 

## 2. Objetivos y alcance

- Permitir a los usuarios explorar, buscar y filtrar un catálogo local de 100 experiencias.
- Permitir a los usuarios consultar una experiencia, gestionar favoritos temporales y ver un perfil simulado.
- Utilizar datos locales y componentes reutilizables en una interfaz adaptable.
- Crear la interfaz inicial en inglés y traducir los textos visibles al español al final del proyecto. El código y los nombres de variables y componentes permanecen en inglés.

## 3. Usuarios destinatarios

- Viajeros que buscan ideas y actividades en diferentes destinos.
- Estudiantes que exploran cómo funciona una interfaz de descubrimiento de viajes.

## 4. Historias de usuario

- Como visitante, quiero descubrir experiencias para encontrar ideas de viaje.
- Como visitante, quiero buscar y filtrar experiencias para acotar el catálogo.
- Como visitante, quiero abrir una experiencia para ver sus detalles.
- Como visitante, quiero añadir y quitar favoritos para poder volver a consultarlos mientras uso la aplicación.
- Como visitante, quiero ver mi perfil simulado y el número de favoritos.
- Como visitante, quiero compartir una URL filtrada o usar la navegación del navegador para volver a los mismos resultados.

## 5. Requisitos funcionales

- La aplicación ofrece las páginas de inicio, experiencias, detalle de experiencia, favoritos y perfil.
- El catálogo utiliza el tipo local `Experience` existente y el array existente de 100 experiencias.
- Cada experiencia se puede abrir desde el catálogo y añadir a favoritos o quitar de ellos.
- La búsqueda y los filtros siguen el comportamiento de la sección 8; los favoritos siguen el de la sección 9.
- Todos los textos visibles para el usuario están inicialmente en inglés; la traducción al español es el último paso de localización.
- No se requieren backend, autenticación ni base de datos.

## 6. Páginas y navegación

- `/`: presenta Wanderlust Labs e incluye una llamada a la acción que enlaza a `/experiences`.
- `/experiences`: muestra el catálogo en una cuadrícula, con búsqueda por título y filtros por categoría y destino.
- `/experiences/[id]`: muestra la experiencia correspondiente y sus detalles. Un ID desconocido muestra una respuesta clara de que no se ha encontrado la experiencia y una forma de volver a la página de experiencias.
- `/favorites`: muestra las experiencias favoritas actuales y un mensaje de estado vacío cuando no hay ninguna.
- `/profile`: muestra un perfil de usuario simulado y el número actual de favoritos.
- La navegación proporciona acceso a las páginas de inicio, experiencias, favoritos y perfil. Las tarjetas de experiencias enlazan a sus correspondientes páginas de detalle.

## 7. Modelo de datos de experiencia

La interfaz existente `Experience` contiene:

| Campo | Tipo | Significado |
| --- | --- | --- |
| `id` | number | Identificador único de la experiencia. |
| `title` | string | Título de la experiencia. |
| `description` | string | Descripción breve. |
| `category` | union | `Adventure`, `Culture`, `Food`, `Wellness` o `Nature`. |
| `destination` | string | Ubicación de la experiencia. |
| `price` | number | Precio en euros (EUR). |
| `rating` | number | Valoración en una escala de 0 a 5. |
| `imageUrl` | string | URL de una imagen provisional. |

El conjunto de datos local existente contiene exactamente 100 experiencias con ID únicos. Es la fuente para el catálogo, los detalles y los favoritos.

## 8. Comportamiento de búsqueda y filtrado

- La búsqueda encuentra coincidencias en cualquier parte del título de una experiencia, sin distinguir entre mayúsculas y minúsculas. Se ignoran los espacios en blanco al principio y al final.
- Los filtros de categoría y destino seleccionan cada uno un único valor de los datos locales disponibles. La coincidencia con el campo correspondiente es exacta.
- La búsqueda, la categoría y el destino son independientes: cualquier combinación puede estar activa y una experiencia debe cumplir todas las condiciones activas para aparecer.
- Un parámetro ausente o vacío no aplica ningún filtro para ese control. Sin condiciones activas, la cuadrícula muestra las 100 experiencias.
- Los parámetros de consulta de la URL `q`, `category` y `destination` representan la búsqueda y los filtros activos. Al cambiar un control se actualizan la URL y los resultados; al vaciarlo se elimina su parámetro.
- Al cargar una URL filtrada válida se restauran los controles y los resultados correspondientes. La navegación atrás y adelante del navegador también restaura tanto los controles como los resultados de la URL seleccionada.
- Si ninguna experiencia coincide, se muestra un mensaje claro de ausencia de resultados en lugar de una cuadrícula vacía.

## 9. Comportamiento de favoritos

- Gestionar los ID de favoritos en memoria mediante React Context y `useState`; no almacenarlos de forma persistente.
- Al añadir o quitar un favorito se actualiza su estado en las páginas de catálogo, detalle, favoritos y perfil durante la sesión actual de la aplicación.
- Una experiencia aparece como máximo una vez en favoritos. Al quitarla, desaparece inmediatamente de esa página.
- Al recargar la página, la lista de favoritos queda vacía y el contador vuelve a cero.

## 10. Comportamiento del perfil

- Mostrar información de usuario simulada; no hay inicio de sesión ni creación de cuentas.
- Mostrar el número de experiencias favoritas únicas.
- Actualizar el contador inmediatamente al añadir o quitar un favorito y mostrar cero después de una recarga.

## 11. Requisitos de interfaz y adaptación

- Utilizar componentes reutilizables para la navegación compartida y la presentación de experiencias.
- Admitir diseños para móviles, tabletas y ordenadores; la cuadrícula de experiencias se adapta al ancho disponible.
- Mantener utilizables la navegación, la búsqueda, los filtros y los controles de favoritos en pantallas estrechas sin desbordamiento horizontal de la página.
- Utilizar etiquetas claras y nombres accesibles para los controles interactivos, incluidas las acciones de favoritos.
- Mostrar los precios en EUR y las valoraciones en la escala de 0 a 5.

## 12. Criterios de aceptación

1. La página de inicio muestra una introducción al producto y su llamada a la acción abre `/experiences`.
2. Sin parámetros de consulta, la página de experiencias muestra las 100 experiencias locales.
3. La búsqueda de una parte de un título devuelve los títulos coincidentes sin importar el uso de mayúsculas o minúsculas.
4. Al aplicar conjuntamente la búsqueda, la categoría y el destino, solo se muestran las experiencias que cumplen todas las condiciones activas; al borrar una condición, las demás permanecen activas.
5. Una URL filtrada válida restaura los controles seleccionados y los resultados al cargarla; la navegación atrás y adelante del navegador restaura el estado correspondiente.
6. Una búsqueda o combinación de filtros sin coincidencias muestra un mensaje de ausencia de resultados.
7. El enlace de una experiencia abre el detalle correspondiente a su ID; un ID desconocido produce una respuesta clara de que no se ha encontrado y un enlace de vuelta a la página de experiencias.
8. Al añadir un favorito, este aparece en la página de favoritos y se actualiza el contador del perfil. Al quitarlo, desaparece de favoritos y disminuye el contador.
9. Los favoritos permanecen coherentes al navegar entre páginas, pero una recarga completa reinicia la lista y el contador del perfil.
10. La interfaz sigue siendo utilizable en móviles, tabletas y ordenadores, con textos visibles inicialmente en inglés.

## 13. Fuera de alcance

- Preparación para producción, reservas reales, pagos y disponibilidad en tiempo real.
- Servicios backend, API de datos externas, autenticación y bases de datos.
- Favoritos persistentes, cuentas de usuario y datos de perfil editables.
- Textos de la interfaz en español antes del paso final de traducción.