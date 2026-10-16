import { HOJAS, textoHoja } from "./hojas.js";

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
let actual = HOJAS[0];

$("selector").innerHTML = HOJAS.map((h) => `<button type="button" class="chip" data-id="${h.id}">${esc(h.nombre)}</button>`).join("");

function datos() {
  return { indicacion: $("indicacion").value, control: $("control").value, telefono: $("telefono").value };
}

function pintar() {
  for (const b of $("selector").children) b.setAttribute("aria-pressed", String(b.dataset.id === actual.id));
  const d = datos();
  const personal = [["Indicación", d.indicacion], ["Próximo control", d.control], ["Teléfono de contacto", d.telefono]]
    .filter(([, v]) => v.trim());
  $("hoja").innerHTML = `
    <header class="hoja-cabecera">
      <img src="img/logo.svg" alt="" width="36" height="36">
      <div><h2>${esc(actual.nombre)}</h2>${actual.detalle ? `<p>${esc(actual.detalle)}</p>` : ""}</div>
    </header>
    ${personal.length ? `<dl class="personal">${personal.map(([k, v]) => `<dt>${k}</dt><dd>${esc(v)}</dd>`).join("")}</dl>` : ""}
    ${actual.secciones.map((s) => `<section class="${s.alarma ? "alarma" : ""}">
      <h3>${esc(s.titulo)}</h3>
      <ul>${s.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
    </section>`).join("")}
    <p class="pie">Esta información no reemplaza las indicaciones del médico tratante. ReumaPedia · reumatología pediátrica.</p>`;
  $("estado").textContent = "";
}

$("selector").addEventListener("click", (e) => {
  const b = e.target.closest("button[data-id]");
  if (!b) return;
  actual = HOJAS.find((h) => h.id === b.dataset.id);
  pintar();
});
$("form").addEventListener("input", pintar);

$("copiar").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(textoHoja(actual, datos()));
    $("estado").textContent = "Texto copiado.";
  } catch {
    $("estado").textContent = "No se pudo copiar.";
  }
});
$("compartir").addEventListener("click", async () => {
  const texto = textoHoja(actual, datos());
  if (!navigator.share) {
    try {
      await navigator.clipboard.writeText(texto);
      $("estado").textContent = "Este navegador no permite compartir: el texto quedó copiado para pegarlo.";
    } catch {
      $("estado").textContent = "Este navegador no permite compartir ni copiar.";
    }
    return;
  }
  try {
    await navigator.share({ title: actual.nombre, text: texto });
  } catch {
    // Compartir cancelado.
  }
});
$("imprimir").addEventListener("click", () => window.print());

pintar();
