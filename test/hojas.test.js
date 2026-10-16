import { test } from "node:test";
import assert from "node:assert/strict";
import { HOJAS, textoHoja } from "../src/hojas.js";

test("cada hoja tiene id único, nombre y secciones con contenido", () => {
  const ids = new Set();
  for (const h of HOJAS) {
    assert.ok(h.nombre && h.secciones.length, h.id);
    assert.ok(!ids.has(h.id), `id repetido ${h.id}`);
    ids.add(h.id);
    for (const s of h.secciones) assert.ok(s.titulo && s.items.length, `${h.id}: ${s.titulo}`);
  }
});

test("cada hoja dice cuándo consultar", () => {
  for (const h of HOJAS) assert.ok(h.secciones.some((s) => s.alarma), h.id);
});

test("el metotrexato aclara que es semanal", () => {
  const t = textoHoja(HOJAS.find((h) => h.id === "metotrexato"));
  assert.match(t, /una sola vez por semana/i);
});

test("el texto incluye solo los datos personalizados cargados", () => {
  const h = HOJAS[0];
  const t = textoHoja(h, { indicacion: "15 mg los lunes", control: "  ", telefono: "" });
  assert.match(t, /Indicación: 15 mg los lunes/);
  assert.doesNotMatch(t, /Próximo control/);
  assert.doesNotMatch(t, /Teléfono/);
  assert.match(t, /no reemplaza las indicaciones/);
});
