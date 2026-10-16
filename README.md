# Información para familias

Hojas simples sobre las medicaciones de reumatología pediátrica para entregar a las familias: para qué sirve, cómo se da, qué efectos pueden aparecer, qué controles hacen falta y cuándo consultar. Pensada para usar desde el celular o la computadora del consultorio.

- Hojas: metotrexato, corticoides, anti-TNF (adalimumab, etanercept, infliximab), tocilizumab, hidroxicloroquina, antiinflamatorios, cómo aplicar una inyección subcutánea, e infecciones y vacunas durante el tratamiento.
- Se puede agregar la indicación, el próximo control y un teléfono de contacto.
- **Compartir** abre el menú del celular (WhatsApp, correo, etc.) con el texto de la hoja. **Imprimir** imprime solo la hoja, o la guarda como PDF.

**No guarda ni envía datos.** Todo se hace en el navegador.

> ⚠️ **Los textos tienen que ser revisados por un médico antes de entregarlos a las familias.**

Los textos están en `src/hojas.js`. Para agregar una hoja se suma un objeto a `HOJAS` con sus secciones; la sección marcada con `alarma: true` se destaca en rojo.

## Desarrollo

Sitio estático, sin dependencias ni compilación.

```sh
npm test               # pruebas
npx serve .            # o cualquier servidor estático para verlo localmente
```

## Versión

La versión se ve al pie de la página. En cada cambio:

1. Agregar arriba en [`CHANGELOG.md`](CHANGELOG.md) una entrada `## X.Y.Z · día mes año` con lo que cambió.
2. Poner el mismo número en `package.json` y el mismo texto (`vX.Y.Z · día mes año`) en el pie de `index.html`.

Se sube el último número para arreglos y textos, el del medio para funciones nuevas y el primero para cambios grandes. `npm test` avisa si los tres lugares no coinciden.

## Publicar en Vercel

En Vercel: **Add New → Project → Import** este repositorio, con Framework Preset **Other** y sin comando de build. Cada cambio que entre a `main` se publica solo.
