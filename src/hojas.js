// Hojas de información para familias. ESTOS TEXTOS DEBEN SER REVISADOS POR
// EL MÉDICO ANTES DE ENTREGARLOS A LAS FAMILIAS.
//
// Cada hoja tiene secciones con un título y una lista de frases cortas.
// "alarma: true" marca la sección de cuándo consultar, que se destaca.

export const HOJAS = [
  {
    id: "metotrexato",
    nombre: "Metotrexato",
    secciones: [
      { titulo: "Para qué sirve", items: [
        "Disminuye la inflamación de las articulaciones, los ojos y otros órganos.",
        "Tarda entre 6 y 12 semanas en hacer efecto: no suspenderlo aunque al principio no se note el cambio.",
      ] },
      { titulo: "Cómo se da", items: [
        "Una sola vez por semana, siempre el mismo día. Nunca todos los días.",
        "Puede ser en comprimidos o en inyección debajo de la piel.",
        "El ácido fólico ayuda a evitar efectos adversos: darlo como lo indicó el médico, en general no el mismo día del metotrexato.",
        "Si se olvida una dosis, darla en los 2 días siguientes. Si pasaron más días, saltearla y seguir el día de siempre. Nunca dar dosis dobles.",
      ] },
      { titulo: "Efectos que pueden aparecer", items: [
        "Náuseas o falta de apetito el día de la dosis o el siguiente. Ayuda darlo a la noche y comer algo liviano.",
        "Aftas en la boca, cansancio o caída leve del pelo.",
        "Si molestan, avisar en la consulta: muchas veces se pueden mejorar cambiando la forma de darlo.",
      ] },
      { titulo: "Controles", items: [
        "Análisis de sangre periódicos (hemograma y hepatograma), primero más seguidos y después cada 3 o 4 meses.",
      ] },
      { titulo: "Consultar si aparece", alarma: true, items: [
        "Fiebre, o tos o falta de aire que no mejoran.",
        "Vómitos que impiden tomar la medicación.",
        "Moretones o sangrados sin motivo.",
        "Piel u ojos amarillos.",
        "Contacto con varicela o sarampión.",
      ] },
      { titulo: "Tener en cuenta", items: [
        "Avisar a cualquier médico que lo atienda que toma metotrexato: algunos antibióticos, como el trimetoprima-sulfametoxazol, no se pueden combinar.",
        "No aplicar vacunas a virus vivos sin consultar.",
        "En adolescentes: no tomar alcohol. El metotrexato puede dañar a un bebé en gestación: si hay relaciones sexuales, usar un método anticonceptivo seguro.",
      ] },
    ],
  },
  {
    id: "corticoides",
    nombre: "Corticoides",
    detalle: "Prednisona, meprednisona, deflazacort, metilprednisolona",
    secciones: [
      { titulo: "Para qué sirven", items: [
        "Controlan rápido la inflamación mientras empiezan a actuar otros tratamientos.",
        "Se usan la menor dosis y el menor tiempo posible.",
      ] },
      { titulo: "Cómo se dan", items: [
        "Una vez por día a la mañana, con comida, salvo otra indicación.",
        "No suspenderlos de golpe: el cuerpo necesita tiempo para volver a fabricar su propio corticoide. Bajar la dosis solo según el plan del médico.",
      ] },
      { titulo: "Efectos que pueden aparecer", items: [
        "Más apetito y aumento de peso, cara más redondeada.",
        "Cambios de humor, problemas para dormir, acné.",
        "Con el uso prolongado: presión alta, azúcar alto en sangre, huesos más frágiles, cataratas y menor crecimiento. Por eso se controlan en cada consulta.",
        "La mayoría de estos cambios mejoran al bajar la dosis.",
      ] },
      { titulo: "Qué ayuda", items: [
        "Comida con poca sal y poca azúcar.",
        "Calcio y vitamina D según la indicación del médico.",
        "Actividad física todos los días.",
      ] },
      { titulo: "Consultar si aparece", alarma: true, items: [
        "Fiebre o una infección.",
        "Vómitos que impiden tomar la medicación: puede ser peligroso no recibirla.",
        "Decaimiento marcado, mareos o desmayos.",
        "Dolor de panza intenso.",
        "Dolor de cabeza fuerte o cambios en la visión.",
        "Contacto con varicela o sarampión.",
      ] },
      { titulo: "Tener en cuenta", items: [
        "Avisar que toma corticoides antes de una cirugía, en una guardia o si está muy enfermo: puede necesitar una dosis extra.",
        "No aplicar vacunas a virus vivos sin consultar.",
      ] },
    ],
  },
  {
    id: "antitnf",
    nombre: "Adalimumab, etanercept e infliximab",
    detalle: "Biológicos anti-TNF",
    secciones: [
      { titulo: "Para qué sirven", items: [
        "Bloquean una sustancia del cuerpo (el TNF) que produce inflamación.",
        "Suelen hacer efecto en pocas semanas.",
      ] },
      { titulo: "Cómo se dan", items: [
        "Adalimumab y etanercept: inyección debajo de la piel, en casa, con la frecuencia que indique el médico.",
        "Infliximab: por vena, en el hospital.",
        "Guardar en la heladera, entre 2 y 8 °C, sin congelar. Sacarlo 15 a 30 minutos antes de aplicarlo.",
        "Si se olvida una dosis, aplicarla apenas se recuerde y consultar cómo seguir.",
      ] },
      { titulo: "Efectos que pueden aparecer", items: [
        "Enrojecimiento, picazón o dolor donde se aplicó la inyección. Es frecuente y pasa en pocos días.",
        "Más facilidad para tener infecciones.",
      ] },
      { titulo: "Consultar si aparece", alarma: true, items: [
        "Fiebre.",
        "Una infección que no mejora o empeora.",
        "Tos de más de 2 semanas, pérdida de peso o sudor a la noche.",
        "Contacto con varicela, sarampión o tuberculosis.",
      ] },
      { titulo: "Tener en cuenta", items: [
        "Antes de empezar se descarta tuberculosis.",
        "No aplicar vacunas a virus vivos sin consultar.",
        "Avisar antes de una cirugía programada: puede hacer falta suspender una dosis.",
        "Para viajar, llevarlo en un bolso térmico y con la receta.",
      ] },
    ],
  },
  {
    id: "tocilizumab",
    nombre: "Tocilizumab",
    detalle: "Biológico anti-IL-6",
    secciones: [
      { titulo: "Para qué sirve", items: [
        "Bloquea una sustancia del cuerpo (la interleuquina 6) que produce fiebre e inflamación.",
        "Se usa sobre todo en la artritis idiopática juvenil sistémica y en la poliarticular.",
      ] },
      { titulo: "Cómo se da", items: [
        "Por vena en el hospital, o en inyección debajo de la piel en casa, con la frecuencia que indique el médico.",
        "Guardar en la heladera, entre 2 y 8 °C, sin congelar.",
      ] },
      { titulo: "Efectos que pueden aparecer", items: [
        "Más facilidad para tener infecciones.",
        "Cambios en el laboratorio (glóbulos blancos, hígado, colesterol): por eso se hacen análisis periódicos.",
      ] },
      { titulo: "Importante", alarma: true, items: [
        "El tocilizumab puede esconder la fiebre y hacer que los análisis de inflamación salgan normales aunque haya una infección.",
        "Consultar ante decaimiento, dolor, tos o cualquier síntoma de infección, aunque no haya fiebre.",
        "Consultar también ante dolor de panza intenso o contacto con varicela o sarampión.",
      ] },
      { titulo: "Tener en cuenta", items: [
        "No aplicar vacunas a virus vivos sin consultar.",
        "Avisar antes de una cirugía programada.",
      ] },
    ],
  },
  {
    id: "hidroxicloroquina",
    nombre: "Hidroxicloroquina",
    secciones: [
      { titulo: "Para qué sirve", items: [
        "Se usa en el lupus y en otras enfermedades autoinmunes: disminuye los brotes y protege los órganos.",
        "Tarda 2 a 3 meses en hacer efecto. Conviene no suspenderla aunque la enfermedad esté tranquila.",
      ] },
      { titulo: "Cómo se da", items: [
        "Una vez por día, con comida.",
      ] },
      { titulo: "Efectos que pueden aparecer", items: [
        "Molestias de estómago o diarrea, que suelen mejorar con el tiempo.",
        "Rara vez: manchas en la piel o cambios en la visión.",
      ] },
      { titulo: "Controles", items: [
        "Control con el oftalmólogo al empezar y después una vez por año.",
      ] },
      { titulo: "Consultar si aparece", alarma: true, items: [
        "Visión borrosa, dificultad para leer o para ver colores.",
        "Una erupción en la piel.",
      ] },
      { titulo: "Muy importante", alarma: true, items: [
        "Guardarla fuera del alcance de los chicos: unos pocos comprimidos pueden ser muy peligrosos para un niño pequeño. Ante una ingesta accidental, ir a la guardia de inmediato.",
      ] },
    ],
  },
  {
    id: "aines",
    nombre: "Antiinflamatorios",
    detalle: "Naproxeno, ibuprofeno, indometacina",
    secciones: [
      { titulo: "Para qué sirven", items: [
        "Calman el dolor y la inflamación de las articulaciones mientras actúan otros tratamientos.",
      ] },
      { titulo: "Cómo se dan", items: [
        "Siempre con comida.",
        "No combinar dos antiinflamatorios distintos (por ejemplo, naproxeno con ibuprofeno).",
        "Mantener una buena hidratación.",
      ] },
      { titulo: "Efectos que pueden aparecer", items: [
        "Dolor de estómago o acidez.",
        "Dolor de cabeza o cambios de humor.",
        "Con naproxeno, en chicos de piel clara: pequeñas ampollas o cicatrices en la cara y otras zonas expuestas al sol. Usar protector solar.",
      ] },
      { titulo: "Consultar si aparece", alarma: true, items: [
        "Dolor de panza fuerte o que no se va.",
        "Vómitos con sangre o materia fecal negra.",
        "Moretones o sangrados sin motivo.",
        "Hinchazón de la cara o de las piernas, o mucho menos pis.",
      ] },
    ],
  },
  {
    id: "inyeccion",
    nombre: "Cómo aplicar una inyección subcutánea",
    detalle: "Metotrexato, adalimumab, etanercept y otros",
    secciones: [
      { titulo: "Antes", items: [
        "Si la medicación está en la heladera, sacarla 15 a 30 minutos antes para que no duela tanto.",
        "Lavarse bien las manos.",
        "Revisar el nombre, la dosis y la fecha de vencimiento.",
        "Elegir el lugar: muslo (cara de adelante), panza (a más de 5 cm del ombligo) o parte de atrás del brazo. Cambiar de lugar cada vez.",
      ] },
      { titulo: "Aplicación", items: [
        "Limpiar la piel con alcohol y esperar a que se seque.",
        "Hacer un pellizco suave de piel.",
        "Introducir la aguja de una vez, en ángulo de 45 a 90 grados, o apoyar la lapicera según sus instrucciones.",
        "Empujar el émbolo despacio hasta terminar.",
        "Retirar la aguja y apretar con un algodón, sin frotar.",
      ] },
      { titulo: "Después", items: [
        "Tirar la jeringa o la lapicera en un recipiente rígido con tapa (por ejemplo, una botella de plástico gruesa) y devolverlo al centro de salud cuando esté lleno.",
        "Anotar el día y el lugar de la aplicación.",
      ] },
      { titulo: "Consejos", items: [
        "Poner frío en la zona unos minutos antes ayuda a que duela menos.",
        "Ayuda tener una rutina: mismo día, mismo horario, y algo que distraiga (un video, una canción).",
        "A medida que crecen, los chicos pueden aprender a aplicársela solos con supervisión.",
      ] },
      { titulo: "Consultar si aparece", alarma: true, items: [
        "Enrojecimiento que se agranda, calor o pus donde se aplicó.",
        "Hinchazón de la cara, dificultad para respirar o ronchas en todo el cuerpo: ir a la guardia de inmediato.",
      ] },
    ],
  },
  {
    id: "infecciones",
    nombre: "Infecciones y vacunas durante el tratamiento",
    detalle: "Para quienes reciben inmunosupresores",
    secciones: [
      { titulo: "Prevenir infecciones", items: [
        "Lavarse las manos seguido, sobre todo antes de comer y al volver a casa.",
        "Puede ir a la escuela y hacer actividades con normalidad.",
        "Evitar la leche sin pasteurizar, los quesos de elaboración casera y la carne o el huevo crudos.",
      ] },
      { titulo: "Vacunas", items: [
        "Vacuna antigripal todos los años, para el paciente y para quienes viven con él.",
        "Las vacunas a virus vivos (triple viral, varicela, fiebre amarilla, rotavirus) no se aplican sin consultar con el reumatólogo.",
        "Los convivientes pueden y deben tener sus vacunas al día, incluidas las de virus vivos, salvo indicación.",
        "Llevar el carnet de vacunas a las consultas.",
      ] },
      { titulo: "Consultar si aparece", alarma: true, items: [
        "Fiebre.",
        "Contacto con alguien con varicela, herpes zóster o sarampión: avisar dentro de las 72 horas, porque puede necesitar un tratamiento preventivo.",
        "Contacto con alguien con tuberculosis.",
      ] },
      { titulo: "Viajes", items: [
        "Consultar antes de viajar, sobre todo a zonas donde se pide la vacuna de la fiebre amarilla.",
        "Llevar la medicación, las recetas y un resumen de la historia clínica.",
      ] },
    ],
  },
];

// Arma el texto plano de una hoja, con los datos personalizados opcionales.
export function textoHoja(hoja, datos = {}) {
  const lineas = [hoja.nombre.toUpperCase()];
  if (hoja.detalle) lineas.push(hoja.detalle);
  const personal = [
    ["Indicación", datos.indicacion],
    ["Próximo control", datos.control],
    ["Teléfono de contacto", datos.telefono],
  ].filter(([, v]) => v && v.trim());
  if (personal.length) {
    lineas.push("");
    for (const [k, v] of personal) lineas.push(`${k}: ${v.trim()}`);
  }
  for (const s of hoja.secciones) {
    lineas.push("", s.alarma ? `⚠️ ${s.titulo}` : s.titulo);
    for (const i of s.items) lineas.push(`• ${i}`);
  }
  lineas.push("", "Esta información no reemplaza las indicaciones del médico tratante.");
  return lineas.join("\n");
}
