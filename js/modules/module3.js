/* Módulo 3 — Gramática contrastiva I */
window.COURSE_MODULES = window.COURSE_MODULES || [];
window.COURSE_MODULES.push({
  id: "m3",
  icon: "⚙️",
  title: "Gramática contrastiva I: los errores que delatan",
  description: "Muy vs. mucho, el apócope, los artículos que sobran y los que faltan, el neutro \"lo\" y los sustantivos que cambian de género al cruzar la frontera. Pequeños detalles, máxima visibilidad.",
  lessons: [
    {
      id: "l1",
      title: "Muy vs. mucho: un \"muito\" que se divide en dos",
      duration: "12 min",
      content: `
<p>El portugués usa <span class="pt">muito</span> para todo. El español lo divide en dos palabras con reglas estrictas — y confundirlas es, quizás, <strong>el marcador nº 1 del portuñol</strong>.</p>

<h3>La regla en una tabla</h3>
<div class="table-scroll"><table>
<tr><th>Uso</th><th>Palabra</th><th>Ejemplo</th></tr>
<tr><td>Antes de <strong>adjetivo</strong></td><td><span class="es">muy</span></td><td>muy caro, muy grande, muy interesante</td></tr>
<tr><td>Antes de <strong>adverbio</strong></td><td><span class="es">muy</span></td><td>muy bien, muy tarde, muy lejos</td></tr>
<tr><td>Después de <strong>verbo</strong></td><td><span class="es">mucho</span></td><td>trabaja mucho, me gusta mucho, llueve mucho</td></tr>
<tr><td>Antes de <strong>sustantivo</strong> (concordando)</td><td><span class="es">mucho/a/os/as</span></td><td>mucho dinero, mucha gente, muchos años</td></tr>
</table></div>

<div class="ex">
<span class="wrong">Trabajo muy. / Me gusta muy. / Es mucho caro.</span>
<span class="right">Trabajo mucho. / Me gusta mucho. / Es muy caro.</span>
<span class="gloss">"Muy" nunca queda solo ni acompaña verbos; "mucho" nunca acompaña adjetivos... con cuatro excepciones.</span>
</div>

<h3>Las cuatro excepciones (que usan mucho)</h3>
<p>Los comparativos <span class="es">mejor, peor, mayor, menor</span> — y también <span class="es">más, menos, antes, después</span> — van con <strong>mucho</strong>:</p>
<ul>
<li><span class="es">Este vino es mucho mejor.</span> (não "muy mejor")</li>
<li><span class="es">Llegué mucho antes que tú.</span></li>
<li><span class="es">Gana mucho más que yo.</span></li>
</ul>

<div class="callout tip"><span class="callout-title">Truco relámpago</span>
¿Puedes sustituirlo por <span class="pt">"demais"</span> pospuesto en portugués? ("trabalha demais", "gosto demais") → <span class="es">mucho</span>. ¿Es un "muito" pegado a cualidad? → <span class="es">muy</span>. Con comparativos, siempre mucho.</div>

<h3>Tan / tanto siguen la misma lógica</h3>
<div class="table-scroll"><table>
<tr><th>Portugués</th><th>Español</th></tr>
<tr><td><span class="pt">tão caro</span></td><td><span class="es">tan caro</span></td></tr>
<tr><td><span class="pt">trabalha tanto</span></td><td><span class="es">trabaja tanto</span></td></tr>
<tr><td><span class="pt">tanta gente</span></td><td><span class="es">tanta gente</span></td></tr>
<tr><td><span class="pt">tão bom quanto</span></td><td><span class="es">tan bueno como</span></td></tr>
<tr><td><span class="pt">tanto quanto</span></td><td><span class="es">tanto como</span></td></tr>
</table></div>

<h3>Y el trío exclamativo: qué, cuánto, cómo</h3>
<ul>
<li><span class="pt">Que caro!</span> → <span class="es">¡Qué caro!</span></li>
<li><span class="pt">Quanta gente!</span> → <span class="es">¡Cuánta gente!</span></li>
<li><span class="pt">Como você trabalha!</span> → <span class="es">¡Cómo trabajas!</span> o <span class="es">¡Cuánto trabajas!</span></li>
<li>Nivel nativo: <span class="es">¡Qué casa tan bonita!</span> / <span class="es">¡Qué casa más bonita!</span> = Que casa bonita! — el "tan/más" intercalado no existe en portugués y suena perfectamente nativo.</li>
</ul>
`,
      quiz: {
        questions: [
          {
            q: "Completa: \"Este restaurante es ___ caro, pero me gusta ___.\"",
            options: [
              "mucho / muy",
              "muy / mucho",
              "muy / muy",
              "mucho / mucho"
            ],
            correct: 1,
            explanation: "Antes de adjetivo → muy (muy caro); después de verbo → mucho (me gusta mucho)."
          },
          {
            q: "¿Cuál es la forma correcta con comparativo?",
            options: [
              "Este hotel es muy mejor.",
              "Este hotel es mucho mejor.",
              "Este hotel es más mejor.",
              "Este hotel es tan mejor."
            ],
            correct: 1,
            explanation: "Mejor, peor, mayor, menor, más, menos, antes y después van con MUCHO: \"mucho mejor\"."
          },
          {
            q: "\"Ela trabalha tanto quanto você\" →",
            options: [
              "Ella trabaja tanto cuanto tú.",
              "Ella trabaja tanto como tú.",
              "Ella trabaja tan como tú.",
              "Ella trabaja mucho quanto tú."
            ],
            correct: 1,
            explanation: "La correlación es \"tanto como\" (y \"tan bueno como\"). El \"quanto\" comparativo portugués se traduce por \"como\"."
          },
          {
            q: "\"Que apartamento bonito!\" con sabor nativo:",
            options: [
              "¡Qué apartamento bonito!... es la única forma",
              "¡Qué apartamento tan bonito!",
              "¡Cuál apartamento bonito!",
              "¡Como apartamento bonito!"
            ],
            correct: 1,
            explanation: "\"¡Qué X tan/más + adjetivo!\" es la fórmula exclamativa nativa: ¡Qué casa más linda! (La primera opción también es correcta, pero la estructura con tan/más es la marca de nivel.)"
          },
          {
            q: "\"Llueve ___ y hace ___ frío.\"",
            options: [
              "muy / mucho",
              "mucho / mucho",
              "mucho / muy",
              "muy / muy"
            ],
            correct: 1,
            explanation: "Después de verbo → mucho (llueve mucho); y \"frío\" aquí es sustantivo (hacer frío) → mucho frío. \"Muy frío\" solo como adjetivo: \"el agua está muy fría\"."
          },
          {
            q: "\"Chegamos muito antes deles\" →",
            options: [
              "Llegamos muy antes que ellos.",
              "Llegamos mucho antes que ellos.",
              "Llegamos más antes que ellos.",
              "Llegamos tanto antes que ellos."
            ],
            correct: 1,
            explanation: "\"Antes\" y \"después\" se intensifican con mucho: mucho antes, mucho después."
          }
        ]
      }
    },
    {
      id: "l2",
      title: "El apócope: buen, gran, primer y compañía",
      duration: "12 min",
      content: `
<p>El español "recorta" ciertos adjetivos cuando van delante del sustantivo. El portugués moderno solo conserva restos de esto (<span class="pt">grão-mestre</span>, <span class="pt">São Paulo</span>), así que el brasileño tiende a usar la forma completa — error pequeño, visibilidad enorme.</p>

<h3>Ante sustantivo masculino singular</h3>
<div class="table-scroll"><table>
<tr><th>Forma completa</th><th>Apócope</th><th>Ejemplo</th></tr>
<tr><td>bueno</td><td><span class="es">buen</span></td><td>un buen amigo (pero: un amigo bueno)</td></tr>
<tr><td>malo</td><td><span class="es">mal</span></td><td>un mal día</td></tr>
<tr><td>primero</td><td><span class="es">primer</span></td><td>el primer piso</td></tr>
<tr><td>tercero</td><td><span class="es">tercer</span></td><td>el tercer capítulo</td></tr>
<tr><td>alguno</td><td><span class="es">algún</span></td><td>algún problema</td></tr>
<tr><td>ninguno</td><td><span class="es">ningún</span></td><td>ningún error</td></tr>
<tr><td>uno</td><td><span class="es">un</span></td><td>un libro</td></tr>
<tr><td>santo</td><td><span class="es">san</span></td><td>San Pedro (pero: Santo Tomás, Santo Domingo)</td></tr>
</table></div>

<div class="ex">
<span class="wrong">Es un bueno profesor y este es su primero libro.</span>
<span class="right">Es un buen profesor y este es su primer libro.</span>
<span class="gloss">El apócope solo ocurre DELANTE del sustantivo masculino singular. Detrás, forma completa: "un profesor bueno".</span>
</div>

<h3>Grande → gran: para los dos géneros</h3>
<p><span class="es">Grande</span> se apocopa ante <strong>cualquier</strong> sustantivo singular, masculino o femenino — y cambia de matiz:</p>
<ul>
<li><span class="es">un gran hombre</span> = um grande homem (importante, admirável)</li>
<li><span class="es">un hombre grande</span> = um homem grande (de tamanho)</li>
<li><span class="es">una gran ciudad</span> / <span class="es">una ciudad grande</span> — mesma lógica</li>
</ul>

<h3>Ciento → cien, y los números</h3>
<ul>
<li><span class="es">cien personas</span>, <span class="es">cien mil</span> — pero <span class="es">ciento veinte</span> (120), <span class="es">el diez por ciento</span>.</li>
<li><span class="es">veintiún años</span> — "veintiuno" se apocopa ante sustantivo masculino.</li>
<li><span class="pt">um milhão de pessoas</span> → <span class="es">un millón de personas</span> (con "de", igual que en portugués — aquí coinciden).</li>
</ul>

<h3>Cualquiera → cualquier</h3>
<ul>
<li>Ante sustantivo (masculino o femenino): <span class="es">cualquier persona, cualquier día</span>.</li>
<li>Pospuesto, forma completa: <span class="es">una persona cualquiera</span> (= uma pessoa qualquer).</li>
</ul>

<div class="callout note"><span class="callout-title">Bonus: tanto→tan, cuanto→cuan</span>
El propio <span class="es">tan</span> que viste en la lección 1 es el apócope de <span class="es">tanto</span> ante adjetivo/adverbio. El sistema es coherente: el español recorta ante la palabra modificada. Pensarlo así convierte ocho reglas en una.</div>
`,
      quiz: {
        questions: [
          {
            q: "Elige la frase correcta:",
            options: [
              "Es un bueno amigo y un grande profesional.",
              "Es un buen amigo y un gran profesional.",
              "Es un buen amigo y un grande profesional.",
              "Es un bueno amigo y un gran profesional."
            ],
            correct: 1,
            explanation: "Ante sustantivo masculino singular: buen. \"Grande\" se apocopa a \"gran\" ante cualquier sustantivo singular."
          },
          {
            q: "\"Vivo en el ___ piso, ___ puerta a la izquierda.\"",
            options: [
              "primero / tercera",
              "primer / tercera",
              "primer / tercer",
              "primero / tercer"
            ],
            correct: 1,
            explanation: "primer piso (apócope ante masculino singular); tercera puerta (femenino: NO se apocopa — \"tercera\" completa)."
          },
          {
            q: "\"Una gran ciudad\" y \"una ciudad grande\":",
            options: [
              "significan exactamente lo mismo",
              "gran = importante; grande = de tamaño",
              "la primera es incorrecta",
              "gran solo se usa con masculinos"
            ],
            correct: 1,
            explanation: "Antepuesto (gran) = valorativo (importante); pospuesto (grande) = tamaño físico. Igual que \"un gran hombre\" vs. \"un hombre grande\"."
          },
          {
            q: "¿Cómo se escribe 100 y 120 con sustantivo?",
            options: [
              "ciento personas / cien veinte personas",
              "cien personas / ciento veinte personas",
              "cien personas / cien veinte personas",
              "ciento personas / ciento veinte personas"
            ],
            correct: 1,
            explanation: "cien + sustantivo (cien personas, cien mil); ciento solo en compuestos (ciento veinte) y \"por ciento\"."
          },
          {
            q: "\"Qualquer pessoa pode participar\" →",
            options: [
              "Cualquiera persona puede participar.",
              "Cualquier persona puede participar.",
              "Cualesquiera persona puede participar.",
              "Quualquier persona puede participar."
            ],
            correct: 1,
            explanation: "Ante sustantivo: cualquier (apócope, para ambos géneros). Pospuesto: \"una persona cualquiera\"."
          },
          {
            q: "\"Tengo veintiún años y ningún problema\" es correcto porque...",
            options: [
              "veintiuno y ninguno se apocopan ante sustantivo masculino",
              "es un error: sería \"veintiuno años\"",
              "\"ningún\" está mal, sería \"ninguno problema\"",
              "los números nunca se apocopan"
            ],
            correct: 0,
            explanation: "veintiuno → veintiún y ninguno → ningún ante sustantivo masculino: veintiún años, ningún problema, algún día."
          }
        ]
      }
    },
    {
      id: "l3",
      title: "Artículos I: los que sobran y las dos únicas contracciones",
      duration: "12 min",
      content: `
<p>Las dos lenguas usan artículos de forma casi igual... hasta que no. Esta lección ataca los tres choques estructurales más visibles.</p>

<h3>1. Nada de artículo antes del posesivo</h3>
<p>El portugués brasileño adora <span class="pt">"a minha casa", "o meu carro"</span>. En español, ese artículo es <strong>agramatical</strong>:</p>
<div class="ex">
<span class="wrong">La mi casa está lejos. / El mi hermano llegó.</span>
<span class="right">Mi casa está lejos. / Mi hermano llegó.</span>
<span class="gloss">Posesivo y artículo son incompatibles delante del sustantivo. (Existe "la casa mía", con posesivo pospuesto, para dar énfasis.)</span>
</div>

<h3>2. Solo dos contracciones: al y del</h3>
<p>El portugués contrae preposición + artículo por todas partes: <span class="pt">no, na, do, da, pelo, pela, num, numa...</span> El español tiene exactamente <strong>dos</strong>: <span class="es">a + el = al</span> y <span class="es">de + el = del</span>. Todo lo demás se escribe separado:</p>
<div class="table-scroll"><table>
<tr><th>Portugués</th><th>Español</th></tr>
<tr><td><span class="pt">no banco</span></td><td><span class="es">en el banco</span></td></tr>
<tr><td><span class="pt">na mesa</span></td><td><span class="es">en la mesa</span></td></tr>
<tr><td><span class="pt">pelo parque</span></td><td><span class="es">por el parque</span></td></tr>
<tr><td><span class="pt">numa reunião</span></td><td><span class="es">en una reunión</span></td></tr>
<tr><td><span class="pt">do diretor</span></td><td><span class="es">del director</span></td></tr>
<tr><td><span class="pt">ao cliente</span></td><td><span class="es">al cliente</span></td></tr>
</table></div>
<div class="callout warn"><span class="callout-title">Trampa de escritura</span>
En chats se ve a brasileños escribir "nel", "dela", "pelo" en español. No existen. Y ojo: <span class="es">de él</span> (pronombre) NO se contrae: "el libro de él" ≠ "el libro del profesor".</div>

<h3>3. El agua, el águila: el "el" femenino</h3>
<p>Sustantivos femeninos que empiezan con <strong>a- tónica</strong> llevan <span class="es">el/un</span> en singular — pero siguen siendo femeninos:</p>
<ul>
<li><span class="es">el agua fría</span> → <span class="es">las aguas frías</span></li>
<li><span class="es">el águila majestuosa</span>, <span class="es">un alma buena</span>, <span class="es">el hambre</span>, <span class="es">el aula</span></li>
<li>Adjetivo siempre femenino: "el agua está fría" (nunca "frío").</li>
<li>Solo con a- TÓNICA: <span class="es">la arena, la amiga, la alegría</span> (a- átona, artículo normal).</li>
</ul>

<div class="ex">
<span class="wrong">La agua está fría. / El agua está frío.</span>
<span class="right">El agua está fría.</span>
<span class="gloss">"El" por eufonía (evitar "la-a"), femenino en todo lo demás: mucha agua, esta agua, las aguas.</span>
</div>
`,
      quiz: {
        questions: [
          {
            q: "¿Cómo se dice \"a minha casa\"?",
            options: [
              "La mi casa",
              "Mi casa",
              "La casa mi",
              "Mía casa"
            ],
            correct: 1,
            explanation: "En español el artículo no acompaña al posesivo antepuesto: \"mi casa\". Para énfasis existe \"la casa mía\"."
          },
          {
            q: "¿Cuántas contracciones de preposición + artículo tiene el español?",
            options: [
              "Ninguna",
              "Dos: al y del",
              "Seis: al, del, nel, pela, nal, dela",
              "Todas las del portugués"
            ],
            correct: 1,
            explanation: "Solo a+el=al y de+el=del. \"No banco\" = en el banco; \"pelo parque\" = por el parque — siempre separado."
          },
          {
            q: "\"Caminhamos pelo parque e entramos numa cafeteria\" →",
            options: [
              "Caminamos pelo parque y entramos nuna cafetería.",
              "Caminamos por el parque y entramos en una cafetería.",
              "Caminamos por lo parque y entramos en na cafetería.",
              "Caminamos del parque y entramos al una cafetería."
            ],
            correct: 1,
            explanation: "pelo = por el; numa = en una. El español no contrae esas combinaciones."
          },
          {
            q: "\"El agua está ___ y ___ aguas del río también.\"",
            options: [
              "frío / los",
              "fría / las",
              "frío / las",
              "fría / los"
            ],
            correct: 1,
            explanation: "\"Agua\" es femenino: lleva \"el\" solo por la a- tónica inicial. Adjetivo femenino (fría) y plural \"las aguas\"."
          },
          {
            q: "¿Cuál serie usa el artículo correcto?",
            options: [
              "el agua, el arena, el amiga",
              "el agua, la arena, la amiga",
              "la agua, la arena, la amiga",
              "el agua, el arena, la amiga"
            ],
            correct: 1,
            explanation: "El \"el\" femenino solo aparece con a- TÓNICA (agua, águila, alma, hambre). Arena y amiga tienen a- átona: la arena, la amiga."
          },
          {
            q: "\"El libro ___ profesor y el cuaderno ___ él.\"",
            options: [
              "del / del",
              "del / de",
              "de el / del",
              "de lo / de"
            ],
            correct: 1,
            explanation: "de + el (artículo) = del profesor; pero de + él (pronombre) NO se contrae: \"el cuaderno de él\"."
          }
        ]
      }
    },
    {
      id: "l4",
      title: "Artículos II: días, horas y el neutro \"lo\"",
      duration: "13 min",
      content: `
<p>Segunda ronda de artículos: los contextos donde el portugués usa preposición y el español usa artículo — más el artículo que el portugués no tiene: el neutro <span class="es">lo</span>.</p>

<h3>1. Con días y horas: artículo, no preposición</h3>
<div class="table-scroll"><table>
<tr><th>Portugués</th><th>Español</th></tr>
<tr><td><span class="pt">na segunda-feira</span></td><td><span class="es">el lunes</span></td></tr>
<tr><td><span class="pt">aos domingos</span></td><td><span class="es">los domingos</span></td></tr>
<tr><td><span class="pt">às três da tarde</span></td><td><span class="es">a las tres de la tarde</span></td></tr>
<tr><td><span class="pt">de manhã</span></td><td><span class="es">por la mañana</span></td></tr>
<tr><td><span class="pt">à noite</span></td><td><span class="es">por la noche / de noche</span></td></tr>
</table></div>
<div class="ex">
<span class="wrong">Nos vemos en el lunes. / Llego en la mañana.</span>
<span class="right">Nos vemos el lunes. / Llego por la mañana.</span>
<span class="gloss">"El lunes" ya significa "na segunda". Sin "en". ("En la mañana" se oye en partes de América, pero "por la mañana" es universalmente correcto.)</span>
</div>
<p>Bonus: los días de semana no llevan mayúscula ni "feira": <span class="es">lunes, martes, miércoles, jueves, viernes, sábado, domingo</span>. "El lunes" = próxima segunda; "los lunes" = todas as segundas.</p>

<h3>2. Sin artículo: profesiones y "ser"</h3>
<div class="ex">
<span class="wrong">Soy un ingeniero. / Ella es una médica.</span>
<span class="right">Soy ingeniero. / Ella es médica.</span>
<span class="gloss">Profesión tras "ser" va sin artículo — igual que en portugués culto, pero el "eu sou um engenheiro" coloquial contamina. Con adjetivo, vuelve el artículo: "es una médica excelente".</span>
</div>

<h3>3. El neutro "lo": el artículo que el portugués perdió</h3>
<p>El español tiene un tercer artículo, invisible para el brasileño: <span class="es">lo</span> + adjetivo/adverbio crea sustantivos abstractos. El portugués usa "o" normal — por eso el brasileño dice "el" donde va "lo":</p>
<div class="table-scroll"><table>
<tr><th>Portugués</th><th>Español</th></tr>
<tr><td><span class="pt">o melhor da cidade</span></td><td><span class="es">lo mejor de la ciudad</span></td></tr>
<tr><td><span class="pt">o importante é participar</span></td><td><span class="es">lo importante es participar</span></td></tr>
<tr><td><span class="pt">o que você disse</span></td><td><span class="es">lo que dijiste</span></td></tr>
<tr><td><span class="pt">o de ontem</span></td><td><span class="es">lo de ayer</span></td></tr>
<tr><td><span class="pt">não sabe o difícil que é</span></td><td><span class="es">no sabes lo difícil que es</span></td></tr>
</table></div>
<div class="ex">
<span class="wrong">El bueno de vivir aquí es la comida.</span>
<span class="right">Lo bueno de vivir aquí es la comida.</span>
<span class="gloss">Regla: si el "o" portugués NO acompaña un sustantivo concreto, en español es "lo". "O carro" → el carro; "o bom" → lo bueno.</span>
</div>
<div class="callout tip"><span class="callout-title">La estructura estrella: lo + adj + que</span>
<span class="es">"¡No te imaginas lo caro que está todo!"</span> = Você não imagina o quão caro está tudo. Esta construcción no tiene calco posible desde el portugués coloquial — dominarla es puro nivel C1.</div>
`,
      quiz: {
        questions: [
          {
            q: "\"Nos vemos ___ lunes ___ tres de la tarde.\"",
            options: [
              "en el / en las",
              "el / a las",
              "no / às",
              "en / a"
            ],
            correct: 1,
            explanation: "Días de la semana llevan artículo sin preposición (\"el lunes\"); las horas usan \"a las\": \"a las tres de la tarde\"."
          },
          {
            q: "\"Trabalho aos sábados de manhã\" →",
            options: [
              "Trabajo a los sábados en la mañana.",
              "Trabajo los sábados por la mañana.",
              "Trabajo en los sábados de mañana.",
              "Trabajo al sábado por la mañana."
            ],
            correct: 1,
            explanation: "Hábito semanal = \"los sábados\" (sin preposición); \"de manhã\" = por la mañana."
          },
          {
            q: "\"Sou engenheiro\" →",
            options: [
              "Soy un ingeniero.",
              "Soy ingeniero.",
              "Estoy ingeniero.",
              "Soy el ingeniero."
            ],
            correct: 1,
            explanation: "Profesión tras \"ser\" sin artículo: soy ingeniero, es médica. Con adjetivo sí: \"es un ingeniero brillante\"."
          },
          {
            q: "\"O melhor desta ciudad é a comida\" →",
            options: [
              "El mejor de esta ciudad es la comida.",
              "Lo mejor de esta ciudad es la comida.",
              "El más bueno de esta ciudad es la comida.",
              "Lo mejor de esta ciudad son la comida."
            ],
            correct: 1,
            explanation: "\"O\" sin sustantivo concreto = lo: lo mejor, lo importante, lo que dijiste, lo de ayer."
          },
          {
            q: "¿Cuál frase usa \"lo\" correctamente?",
            options: [
              "Lo coche está en el garaje.",
              "No sabes lo difícil que es madrugar.",
              "Lo profesor llegó tarde.",
              "Vi a lo niño en la plaza."
            ],
            correct: 1,
            explanation: "\"Lo + adjetivo + que\" = o quão + adjetivo: \"lo difícil que es\". Ante sustantivos concretos va el/la: el coche, el profesor."
          },
          {
            q: "\"El lunes\" vs. \"los lunes\":",
            options: [
              "próxima segunda vs. todas as segundas",
              "todas as segundas vs. próxima segunda",
              "significan lo mismo",
              "el primero es un error"
            ],
            correct: 0,
            explanation: "Singular = ocasión concreta (\"el lunes tengo médico\" = na segunda); plural = hábito (\"los lunes entreno\" = às segundas)."
          }
        ]
      }
    },
    {
      id: "l5",
      title: "Heterogenéricos I: masculinos en español",
      duration: "13 min",
      content: `
<p>Decenas de sustantivos casi idénticos tienen <strong>género opuesto</strong> en las dos lenguas. Cada uno arrastra artículo, adjetivos y pronombres — un solo sustantivo mal generado contamina la frase entera: <em>"a sangue... ela é vermelha"</em>. Empezamos por los que son <strong>masculinos en español</strong> (femininos em português).</p>

<h3>La regla de oro: -aje es masculino</h3>
<div class="callout tip"><span class="callout-title">Una regla, veinte palabras</span>
Todo lo que en portugués termina en <span class="pt">-agem</span> (feminino) termina en español en <span class="es">-aje</span> y es <strong>masculino</strong>: el viaje, el mensaje, el paisaje, el garaje, el equipaje, el masaje, el peaje (pedágio), el porcentaje, el aterrizaje, el maquillaje, el aprendizaje. Sin excepciones útiles.</div>

<h3>La lista completa</h3>
<div class="table-scroll"><table>
<tr><th>Español</th><th>Portugués</th><th>Ejemplo</th></tr>
<tr><td><span class="es">el árbol</span></td><td><span class="pt">a árvore</span></td><td>el árbol alto</td></tr>
<tr><td><span class="es">el puente</span></td><td><span class="pt">a ponte</span></td><td>el puente nuevo</td></tr>
<tr><td><span class="es">el viaje</span></td><td><span class="pt">a viagem</span></td><td>un viaje largo</td></tr>
<tr><td><span class="es">el paisaje</span></td><td><span class="pt">a paisagem</span></td><td>el paisaje andino</td></tr>
<tr><td><span class="es">el mensaje</span></td><td><span class="pt">a mensagem</span></td><td>el mensaje corto</td></tr>
<tr><td><span class="es">el garaje</span></td><td><span class="pt">a garagem</span></td><td>el garaje lleno</td></tr>
<tr><td><span class="es">el equipaje</span></td><td><span class="pt">a bagagem</span></td><td>el equipaje de mano</td></tr>
<tr><td><span class="es">el análisis</span></td><td><span class="pt">a análise</span></td><td>el análisis completo</td></tr>
<tr><td><span class="es">el origen</span></td><td><span class="pt">a origem</span></td><td>el origen latino</td></tr>
<tr><td><span class="es">el dolor</span></td><td><span class="pt">a dor</span></td><td>el dolor de cabeza</td></tr>
<tr><td><span class="es">el color</span></td><td><span class="pt">a cor</span></td><td>el color rojo</td></tr>
<tr><td><span class="es">el estante</span></td><td><span class="pt">a estante</span></td><td>el estante de madera</td></tr>
<tr><td><span class="es">el síndrome</span></td><td><span class="pt">a síndrome</span></td><td>el síndrome raro</td></tr>
<tr><td><span class="es">el desorden</span></td><td><span class="pt">a desordem</span></td><td>¡qué desorden!</td></tr>
<tr><td><span class="es">el árbol de Navidad</span></td><td><span class="pt">a árvore de Natal</span></td><td>armar el árbol</td></tr>
</table></div>

<div class="ex">
<span class="wrong">La viaje fue larga y la dolor de espalda, terrible.</span>
<span class="right">El viaje fue largo y el dolor de espalda, terrible.</span>
<span class="gloss">Viaje y dolor son masculinos — y arrastran los adjetivos: viaje largo, dolor terrible.</span>
</div>

<h3>El truco del adjetivo delatador</h3>
<p>El error casi nunca está solo en el artículo: contamina la concordancia entera. Entrena con la fórmula <strong>artículo + sustantivo + adjetivo</strong> como una sola unidad sonora:</p>
<ul>
<li><span class="es">el-viaje-largo</span> · <span class="es">el-puente-colgante</span> · <span class="es">el-color-vivo</span> · <span class="es">el-dolor-agudo</span> · <span class="es">el-análisis-detallado</span></li>
</ul>
<div class="callout note"><span class="callout-title">Por qué funciona</span>
El género no se razona: se oye. Un nativo no sabe "la regla" de por qué árbol es masculino — le suena. Tu objetivo es que "la viaje" te suene tan mal como "o viagem" en portugués. Repetición sonora, no memorización visual.</div>
`,
      quiz: {
        questions: [
          {
            q: "¿Cuál serie tiene el género correcto en español?",
            options: [
              "la árbol, el sangre, la viaje",
              "el árbol, la sangre, el viaje",
              "el árbol, el sangre, la viaje",
              "la árbol, la sangre, el viaje"
            ],
            correct: 1,
            explanation: "Heterogenéricos: el árbol (a árvore), la sangre (o sangue), el viaje (a viagem). Los -aje son siempre masculinos."
          },
          {
            q: "La regla del -aje dice que...",
            options: [
              "las palabras en -aje son femeninas como en portugués",
              "las palabras en -aje son masculinas: el viaje, el mensaje, el paisaje",
              "solo \"viaje\" es masculina",
              "depende del país"
            ],
            correct: 1,
            explanation: "PT -agem (feminino) → ES -aje (masculino), sin excepciones útiles: el garaje, el peaje, el porcentaje, el aprendizaje."
          },
          {
            q: "\"A viagem foi longa\" →",
            options: [
              "La viaje fue larga.",
              "El viaje fue largo.",
              "La viaje fue largo.",
              "El viaje fue larga."
            ],
            correct: 1,
            explanation: "El viaje (masculino) arrastra el adjetivo: largo. La concordancia entera cambia con el género."
          },
          {
            q: "\"Me duele mucho ___ espalda por ___ dolor crónico.\"",
            options: [
              "el / la",
              "la / el",
              "la / la",
              "el / el"
            ],
            correct: 1,
            explanation: "La espalda (as costas — femenino singular en español) y el dolor (a dor — masculino). Dos géneros que se cruzan en la misma frase."
          },
          {
            q: "¿Cuál palabra es masculina en español?",
            options: [
              "sangre",
              "análisis",
              "leche",
              "sal"
            ],
            correct: 1,
            explanation: "el análisis (a análise). Sangre, leche y sal son femeninas en español — las verás en la próxima lección."
          },
          {
            q: "El método recomendado para fijar el género es...",
            options: [
              "memorizar listas alfabéticas",
              "grabar unidades sonoras completas: \"el-viaje-largo\", \"el-color-vivo\"",
              "traducir siempre desde el portugués",
              "usar solo el plural, que no tiene género"
            ],
            correct: 1,
            explanation: "El género se oye, no se razona: artículo + sustantivo + adjetivo como una sola unidad sonora, hasta que \"la viaje\" suene mal."
          }
        ]
      }
    },
    {
      id: "l6",
      title: "Heterogenéricos II: femeninos en español (y plurales especiales)",
      duration: "13 min",
      content: `
<p>Segunda mitad del mapa: los sustantivos <strong>femeninos en español</strong> que el brasileño masculiniza por instinto — más los plurales y concordancias que se comportan distinto.</p>

<h3>Femeninos en español (masculinos em português)</h3>
<div class="table-scroll"><table>
<tr><th>Español</th><th>Portugués</th><th>Ejemplo</th></tr>
<tr><td><span class="es">la sangre</span></td><td><span class="pt">o sangue</span></td><td>la sangre roja</td></tr>
<tr><td><span class="es">la leche</span></td><td><span class="pt">o leite</span></td><td>la leche fría</td></tr>
<tr><td><span class="es">la sal</span></td><td><span class="pt">o sal</span></td><td>la sal gruesa</td></tr>
<tr><td><span class="es">la miel</span></td><td><span class="pt">o mel</span></td><td>la miel pura</td></tr>
<tr><td><span class="es">la nariz</span></td><td><span class="pt">o nariz</span></td><td>la nariz respingada</td></tr>
<tr><td><span class="es">la costumbre</span></td><td><span class="pt">o costume</span></td><td>una costumbre antigua</td></tr>
<tr><td><span class="es">la legumbre</span></td><td><span class="pt">o legume</span></td><td>las legumbres frescas</td></tr>
<tr><td><span class="es">la sonrisa</span></td><td><span class="pt">o sorriso</span></td><td>una sonrisa amplia</td></tr>
<tr><td><span class="es">la risa</span></td><td><span class="pt">o riso</span></td><td>la risa contagiosa</td></tr>
<tr><td><span class="es">la crema</span></td><td><span class="pt">o creme</span></td><td>la crema hidratante</td></tr>
<tr><td><span class="es">la protesta</span></td><td><span class="pt">o protesto</span></td><td>la protesta pacífica</td></tr>
<tr><td><span class="es">la alarma</span></td><td><span class="pt">o alarme</span></td><td>la alarma sonó</td></tr>
<tr><td><span class="es">la baraja</span></td><td><span class="pt">o baralho</span></td><td>la baraja española</td></tr>
<tr><td><span class="es">la señal</span></td><td><span class="pt">o sinal</span></td><td>la señal de tráfico</td></tr>
</table></div>

<div class="ex">
<span class="wrong">Me duele o nariz... digo, el nariz.</span>
<span class="right">Me duele la nariz.</span>
<span class="gloss">La nariz, la sangre, la leche: tres palabras de altísima frecuencia. Repítelas con artículo hasta que "el leche" te suene tan mal como "a leite".</span>
</div>

<div class="callout tip"><span class="callout-title">Miniregla: -umbre es femenino</span>
Las palabras en <span class="es">-umbre</span> son femeninas: la costumbre, la legumbre, la cumbre (o cume), la muchedumbre (a multidão), la incertidumbre (a incerteza). El espejo de la regla del -aje.</div>

<h3>Plurales y concordancias especiales</h3>
<ul>
<li><strong>Invariables en -s:</strong> <span class="es">el análisis → los análisis</span>, <span class="es">la crisis → las crisis</span>, <span class="es">el lunes → los lunes</span>. (PT: as análises, as crises.)</li>
<li><strong>La gente ES:</strong> singular siempre — <span class="es">"la gente es amable"</span>, nunca "la gente son". Igual que el portugués culto, pero vigila el plural mental de "as pessoas".</li>
<li><strong>Objetos de dos partes:</strong> el español prefiere plural — <span class="es">las gafas</span> (os óculos → ¡femenino plural!), <span class="es">las tijeras</span> (a tesoura), <span class="es">los pantalones / el pantalón</span> (ambos valen).</li>
<li><strong>Cambio de número:</strong> <span class="pt">o parabéns</span>? — em espanhol: <span class="es">las felicitaciones / ¡felicidades!</span>; <span class="pt">as férias</span> → <span class="es">las vacaciones</span> ✓ plural en ambas.</li>
</ul>

<div class="ex">
<span class="wrong">Perdí mi óculos... digo, mis óculos.</span>
<span class="right">Perdí mis gafas. / Perdí mis lentes. / Perdí mis anteojos.</span>
<span class="gloss">Os óculos → las gafas (Es.), los lentes / los anteojos (Am.). Femenino plural en España, masculino plural en América — pero nunca "óculos".</span>
</div>
`,
      quiz: {
        questions: [
          {
            q: "¿Cómo se dice \"o costume\" y \"a mensagem\"?",
            options: [
              "la mensaje / el costumbre",
              "la costumbre / el mensaje",
              "el costumbre / la mensaje",
              "la costumbre / la mensaje"
            ],
            correct: 1,
            explanation: "Género invertido en ambos: la costumbre (regla -umbre femenino) y el mensaje (regla -aje masculino)."
          },
          {
            q: "\"O leite está frio e o mel, doce\" →",
            options: [
              "El leche está frío y el miel, dulce.",
              "La leche está fría y la miel, dulce.",
              "La leche está fría y el miel, dulce.",
              "El leche está fría y la miel, doce."
            ],
            correct: 1,
            explanation: "la leche (fría) y la miel — ambas femeninas en español, masculinas en portugués."
          },
          {
            q: "La regla del -umbre dice que son femeninas:",
            options: [
              "la costumbre, la cumbre, la incertidumbre",
              "el costumbre, el cumbre",
              "solo \"costumbre\"",
              "las palabras en -umbre no siguen regla"
            ],
            correct: 0,
            explanation: "-umbre = femenino: la costumbre, la legumbre, la cumbre, la muchedumbre, la incertidumbre. El espejo del -aje masculino."
          },
          {
            q: "El plural de \"el análisis\" y \"la crisis\":",
            options: [
              "los análisises / las crisises",
              "los análisis / las crisis (invariables)",
              "las análisis / los crisis",
              "los análises / las crises"
            ],
            correct: 1,
            explanation: "Palabras llanas/esdrújulas terminadas en -s son invariables: los análisis, las crisis, los lunes."
          },
          {
            q: "\"Os óculos\" en España se dice:",
            options: [
              "los óculos",
              "las gafas",
              "los gafos",
              "las lentillas"
            ],
            correct: 1,
            explanation: "las gafas (Es.), los lentes/anteojos (Am.). \"Lentillas\" son as lentes de contato."
          },
          {
            q: "\"La gente ___ muy amable en este barrio.\"",
            options: [
              "son",
              "es",
              "están",
              "somos"
            ],
            correct: 1,
            explanation: "\"Gente\" es singular gramatical: la gente es, la gente vive. El plural mental de \"as pessoas\" provoca el error \"la gente son\"."
          },
          {
            q: "\"Sinal\" y \"nariz\" en español son...",
            options: [
              "el señal / el nariz",
              "la señal / la nariz",
              "el señal / la nariz",
              "la señal / el nariz"
            ],
            correct: 1,
            explanation: "Ambas femeninas: la señal (o sinal), la nariz (o nariz). \"Me duele la nariz\" — frase de altísima frecuencia."
          }
        ]
      }
    }
  ],
  flashcards: [
    { front: "muito caro / trabalha muito", back: "muy caro / trabaja mucho<small>muy + adjetivo · mucho após verbo</small>" },
    { front: "muito melhor", back: "mucho mejor<small>mejor, peor, mayor, menor, antes, después → mucho</small>" },
    { front: "um bom amigo / o primeiro andar", back: "un buen amigo / el primer piso<small>apócope ante masculino singular</small>" },
    { front: "um grande homem / um homem grande", back: "un gran hombre (importante) / un hombre grande (tamaño)" },
    { front: "cem pessoas / cento e vinte", back: "cien personas / ciento veinte" },
    { front: "a minha casa", back: "mi casa<small>sem artigo antes do possessivo</small>" },
    { front: "no banco / pelo parque / numa festa", back: "en el banco / por el parque / en una fiesta<small>só existem al e del</small>" },
    { front: "a água fria (PT)", back: "el agua fría<small>\"el\" por a- tônica, mas feminino: las aguas</small>" },
    { front: "na segunda-feira / aos domingos", back: "el lunes / los domingos<small>artigo, sem preposição</small>" },
    { front: "de manhã / à noite", back: "por la mañana / por la noche" },
    { front: "o melhor da cidade", back: "lo mejor de la ciudad<small>\"o\" sem substantivo = lo</small>" },
    { front: "o que você disse / o de ontem", back: "lo que dijiste / lo de ayer" },
    { front: "a viagem / a mensagem / a paisagem", back: "el viaje / el mensaje / el paisaje<small>-aje é sempre masculino</small>" },
    { front: "a árvore / a ponte / a dor / a cor", back: "el árbol / el puente / el dolor / el color" },
    { front: "o sangue / o leite / o sal / o mel", back: "la sangre / la leche / la sal / la miel" },
    { front: "o nariz / o costume / o sorriso", back: "la nariz / la costumbre / la sonrisa" },
    { front: "os óculos", back: "las gafas (Es.) / los lentes, anteojos (Am.)" },
    { front: "as análises / as crises", back: "los análisis / las crisis<small>invariáveis em -s</small>" }
  ]
});
