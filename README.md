# Trucker Tigre — Sitio web

Sitio estático (HTML + CSS + JavaScript vanilla, sin frameworks ni backend) para una
concesionaria de embarcaciones en Tigre Centro, Buenos Aires, especializada en lanchas Trucker.

## Estructura

```
/index.html          Home (hero, truckers destacados, explorador de medidas,
                      control de calidad, modalidades, por qué elegirnos,
                      astilleros, accesorios, galería, ubicación, CTA final)
/embarcaciones.html   Catálogo con filtros (categoría, medida, modalidad)
/producto.html        Ficha de producto (lee ?slug=... y renderiza desde js/data.js)
/css/styles.css       Design tokens + todos los estilos del sitio
/js/config.js         Datos de contacto / WhatsApp (EDITAR ACÁ)
/js/data.js           Catálogo de productos — estructura reutilizable (EDITAR ACÁ)
/js/ui.js             Componentes de UI compartidos (tarjetas, nav, whatsapp float, reveal)
/js/home.js           Lógica específica del home
/js/catalog.js         Lógica específica del catálogo
/js/product.js        Lógica específica de la ficha de producto
/images/              Fotos ilustrativas (CC) + wordmarks de astilleros (SVG) — reemplazar
                      por fotografía propia antes de publicar (ver sección de créditos)
```

## Qué reemplazar antes de publicar

1. **`js/config.js`**: número de WhatsApp real, email, dirección exacta del showroom.
2. **`js/data.js`**: los 3 modelos Trucker (Isleña 4.70, Ubajay 5.05, Vikingo 6.00) son
   productos reales del astillero San Ignacio con fotos reales. Falta completar:
   - `maxHP`, `maxPassengers`, `price` (están en `null` → se muestra "Consultar").
   - Textos de descripción (opcional, ya tienen copy base).
3. **`/images/*.jpg`**: las fotos de los 3 modelos Trucker (`san-ignacio-*.jpg`) son
   reales. El resto de las fotos (proceso de fabricación, galería, accesorios) son
   ilustrativas (licencia Creative Commons, ver créditos abajo). **Antes de publicar,
   reemplazar por fotografía propia** del astillero, la fabricación y el Delta,
   manteniendo los mismos nombres de archivo o actualizando las rutas en `data.js` e
   `index.html`. El wordmark de San Ignacio (`brand-san-ignacio.svg`) es tipografía,
   no un logo real — reemplazar si el astillero tiene isotipo propio.
4. **Dominio**: reemplazar `https://www.tudominio.com.ar/` en `index.html`,
   `embarcaciones.html`, `robots.txt` y `sitemap.xml` por el dominio real.

## Cómo agregar un nuevo modelo

Agregar un objeto al array `PRODUCTS` en `js/data.js` siguiendo la misma forma que los
modelos existentes. No hace falta tocar el HTML: las páginas de catálogo, home y ficha
de producto se generan dinámicamente a partir de ese archivo.

## Desarrollo local

Al usar módulos ES (`type="module"`), abrir `index.html` directamente con `file://`
puede fallar por CORS en algunos navegadores. Levantar un servidor estático simple, por ejemplo:

```
npx serve .
```

o con Python:

```
python -m http.server 8080
```

y abrir `http://localhost:8080`.

## Créditos de imágenes (temporales)

Las fotos en `/images/*.jpg` son de uso libre (Wikimedia Commons, licencias Creative
Commons) y se usan solo como ilustración temporal hasta reemplazarlas por fotografía
propia del astillero y las embarcaciones:

- "Emerald Isle", Lough Erne — Kenneth Allen (CC BY-SA 2.0)
- Delta del Tigre 1 / 2 — Javier Vidal (CC BY 2.0)
- Floating supermarket (Río Luján, Tigre) / Astarsa81 (astillero Astarsa, Tigre) — Murgatroyd49 (CC BY-SA 4.0)
- 22 ft Spencer Runabout — Mwanner (CC BY-SA 3.0)
- "Matchbox", Enniskillen (tráiler) — Kenneth Allen (CC BY-SA 2.0)

Fuente: commons.wikimedia.org. Al publicar con fotografía propia, esta sección puede eliminarse.
# cafe-nautica
