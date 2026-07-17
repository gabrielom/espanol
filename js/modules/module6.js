/* Módulo 6 — Preposiciones, regencias y conectores */
window.COURSE_MODULES = window.COURSE_MODULES || [];
window.COURSE_MODULES.push({
  id: "m6",
  icon: "🧭",
  title: "Preposiciones, regencias y conectores",
  description: "La \"a\" personal que el portugués no tiene, los verbos que cambian de preposición, \"desde hace\" y \"dentro de\", el par por/para con sus trampas finas y el dúo pero/sino que un solo \"mas\" esconde.",
  lessons: [
    {
      id: "l1",
      title: "La \"a\" personal: ver a alguien",
      duration: "12 min",
      content: `
<p>El español marca con la preposición <span class="es">a</span> todo objeto directo que sea una <strong>persona determinada</strong>. El portugués no tiene nada parecido — y por eso el brasileño la omite sistemáticamente, incluso en niveles altos.</p>

<h3>La regla</h3>
<div class="table-scroll"><table>
<tr><th>Portugués</th><th>Español</th></tr>
<tr><td><span class="pt">Vi Maria no mercado.</span></td><td><span class="es">Vi <strong>a</strong> María en el mercado.</span></td></tr>
<tr><td><span class="pt">Conheço seu irmão.</span></td><td><span class="es">Conozco <strong>a</strong> tu hermano.</span></td></tr>
<tr><td><span class="pt">Chamei o médico.</span></td><td><span class="es">Llamé <strong>al</strong> médico.</span></td></tr>
<tr><td><span class="pt">Estou esperando minha esposa.</span></td><td><span class="es">Estoy esperando <strong>a</strong> mi esposa.</span></td></tr>
<tr><td><span class="pt">Vi um filme ótimo.</span></td><td><span class="es">Vi una película buenísima.</span> (cosa: sin "a")</td></tr>
</table></div>

<div class="ex">
<span class="wrong">¿Conoces mi hermana? / Ayer vi Pedro.</span>
<span class="right">¿Conoces a mi hermana? / Ayer vi a Pedro.</span>
<span class="gloss">Persona identificable → "a". Es de los rasgos que más rápido distinguen a quien estudió de quien solo "se defiende".</span>
</div>

<h3>Los matices que dan nivel</h3>
<ul>
<li><strong>Persona indeterminada, sin "a":</strong> <span class="es">Busco un profesor de piano</span> (cualquiera) vs. <span class="es">Busco a un profesor</span> (uno concreto que conozco).</li>
<li><strong>Mascotas queridas, con "a":</strong> <span class="es">Llevé a mi perro al veterinario.</span></li>
<li><strong>Tener, normalmente sin "a":</strong> <span class="es">Tengo dos hermanos.</span></li>
<li><strong>Con "alguien, nadie, quién", siempre "a":</strong> <span class="es">¿Viste a alguien? No vi a nadie. ¿A quién llamaste?</span></li>
</ul>

<div class="callout tip"><span class="callout-title">Reflejo doble con los clíticos</span>
La "a" personal se combina con la duplicación del módulo 4: <span class="es">"A Juan lo vi ayer"</span>, <span class="es">"A mi madre le encanta"</span>. Frases así, con "a" + clítico bien puestos, son puro español nativo — y físicamente imposibles de generar desde la gramática portuguesa.</div>

<h3>Ciudades y países: sin "a" personal, con "a" de dirección</h3>
<ul>
<li><span class="es">Visité México.</span> — objeto directo lugar, sin "a". (\"Visité a México\" se oye en México mismo, personificando al país — reconócelo.)</li>
<li><span class="es">Fui a México.</span> — aquí la "a" es de movimiento, como el "a" portugués de "fui a São Paulo". No confundir las dos.</li>
</ul>
`,
      quiz: {
        questions: [
          {
            q: "Traduce \"Ontem vi minha prima no centro\":",
            options: [
              "Ayer vi mi prima en el centro.",
              "Ayer vi a mi prima en el centro.",
              "Ayer vi la mi prima en el centro.",
              "Ayer le vi mi prima en el centro."
            ],
            correct: 1,
            explanation: "Objeto directo de persona determinada → \"a\" personal: vi a mi prima. (Y sin artículo ante posesivo.)"
          },
          {
            q: "¿Cuál frase necesita la \"a\" personal?",
            options: [
              "Busco un apartamento en Madrid.",
              "Vi una película argentina.",
              "No conozco nadie aquí.",
              "Compré un regalo."
            ],
            correct: 2,
            explanation: "\"Nadie\" siempre lleva \"a\": No conozco a nadie. Cosas (apartamento, película, regalo) van sin \"a\"."
          },
          {
            q: "\"Busco un guitarrista\" vs. \"Busco a un guitarrista\":",
            options: [
              "significan lo mismo",
              "sin \"a\" = cualquiera; con \"a\" = uno concreto que tengo en mente",
              "la primera es incorrecta",
              "con \"a\" = es pregunta"
            ],
            correct: 1,
            explanation: "La \"a\" marca determinación: \"busco un guitarrista\" (vacante abierta) vs. \"busco a un guitarrista\" (a alguien específico)."
          },
          {
            q: "\"Levei meu cachorro ao veterinário\" →",
            options: [
              "Llevé mi perro al veterinario.",
              "Llevé a mi perro al veterinario.",
              "Llevé mi cachorro al veterinario.",
              "Llevé el mi perro al veterinario."
            ],
            correct: 1,
            explanation: "Mascota querida = \"a\" personal: llevé a mi perro. (Y cachorro = filhote — módulo 1.)"
          },
          {
            q: "\"¿___ quién llamaste? — No llamé ___ nadie.\"",
            options: [
              "∅ / ∅",
              "A / a",
              "A / ∅",
              "∅ / a"
            ],
            correct: 1,
            explanation: "Quién y nadie como objeto de persona siempre llevan \"a\": ¿A quién llamaste? No llamé a nadie."
          },
          {
            q: "\"Tenho dois irmãos e conheço bem seus amigos\" →",
            options: [
              "Tengo a dos hermanos y conozco bien sus amigos.",
              "Tengo dos hermanos y conozco bien a sus amigos.",
              "Tengo dos hermanos y conozco bien sus amigos.",
              "Tengo a dos hermanos y conozco bien a sus amigos."
            ],
            correct: 1,
            explanation: "\"Tener\" va sin \"a\" (tengo dos hermanos); \"conocer\" a personas determinadas la exige (conozco a sus amigos)."
          }
        ]
      }
    },
    {
      id: "l2",
      title: "Regencias que cambian de preposición",
      duration: "14 min",
      content: `
<p>Muchos verbos piden la misma preposición en ambas lenguas (soñar con, depender de, confiar en, casarse con). Los peligrosos son los que <strong>cambian</strong> — el hábito portugués funciona el 80% del tiempo, y ese 20% restante es este:</p>

<h3>La lista negra</h3>
<div class="table-scroll"><table>
<tr><th>Portugués</th><th>Español</th><th>Ejemplo correcto</th></tr>
<tr><td><span class="pt">precisar <strong>de</strong></span></td><td><span class="es">necesitar <strong>Ø</strong></span></td><td>Necesito ayuda.</td></tr>
<tr><td><span class="pt">gostar <strong>de</strong></span></td><td><span class="es">gustar</span> (estructura inversa)</td><td>Me gusta el cine.</td></tr>
<tr><td><span class="pt">esquecer(-se) <strong>de</strong></span></td><td><span class="es">olvidar <strong>Ø</strong> / olvidarse <strong>de</strong></span></td><td>Olvidé las llaves. / Me olvidé de las llaves.</td></tr>
<tr><td><span class="pt">assistir <strong>a</strong> (filme)</span></td><td><span class="es">ver <strong>Ø</strong></span></td><td>Vi la película. (¡asistir = estar presente!)</td></tr>
<tr><td><span class="pt">ligar <strong>para</strong> alguém</span></td><td><span class="es">llamar <strong>a</strong> alguien</span></td><td>Llamé a mi madre.</td></tr>
<tr><td><span class="pt">preocupar-se <strong>com</strong></span></td><td><span class="es">preocuparse <strong>por</strong></span></td><td>Se preocupa por sus hijos.</td></tr>
<tr><td><span class="pt">apaixonar-se <strong>por</strong></span></td><td><span class="es">enamorarse <strong>de</strong></span></td><td>Se enamoró de una argentina.</td></tr>
<tr><td><span class="pt">parecer(-se) <strong>com</strong></span></td><td><span class="es">parecerse <strong>a</strong></span></td><td>Te pareces a tu padre.</td></tr>
<tr><td><span class="pt">viajar <strong>de</strong> carro/avião</span></td><td><span class="es">viajar <strong>en</strong> coche/avión</span></td><td>Viajamos en tren. (pero: a pie, a caballo)</td></tr>
<tr><td><span class="pt">chegar <strong>em</strong> (BR falado)</span></td><td><span class="es">llegar <strong>a</strong></span></td><td>Llegué a Lima de noche.</td></tr>
<tr><td><span class="pt">sonhar <strong>em</strong> + inf.</span></td><td><span class="es">soñar <strong>con</strong> + inf.</span></td><td>Sueño con vivir en la playa.</td></tr>
<tr><td><span class="pt">tratar <strong>de</strong> (assunto)</span></td><td><span class="es">tratar <strong>de/sobre</strong></span> ✓; pero <span class="es">tratar de + inf. = tentar</span></td><td>Trata de entender. (= tenta entender)</td></tr>
</table></div>

<div class="ex">
<span class="wrong">Ayer asistí una película y después liguei para mi hermano.</span>
<span class="right">Ayer vi una película y después llamé a mi hermano.</span>
<span class="gloss">"Asistir a" en español = comparecer ("asistí a la reunión"). Y "ligar" en español coloquial = ¡paquerar! ("ligar con alguien" = flertar). Doble trampa.</span>
</div>

<div class="ex">
<span class="wrong">Me apaixonei por ela → Me enamoré por ella.</span>
<span class="right">Me enamoré de ella.</span>
<span class="gloss">enamorarse DE. Y el sustantivo también: "estoy enamorado de ti". El "por" solo aparece en "loco por ti" — de ahí la confusión.</span>
</div>

<h3>Las que coinciden (para descansar)</h3>
<p>soñar con ✓ · depender de ✓ · confiar en ✓ · casarse con ✓ · pensar en ✓ · dudar de ✓ · reírse de ✓ · insistir en ✓ · consistir en ✓ · participar en ✓ (PT: participar de — ¡cuidado, esta cambia! <span class="es">participar EN la reunión</span>).</p>

<div class="callout tip"><span class="callout-title">Método de fijación</span>
No memorices "enamorarse + de". Memoriza una frase con carga emocional: <span class="es">"Me enamoré de São Paulo"</span>, <span class="es">"Me preocupo por ti"</span>, <span class="es">"Te pareces a tu madre"</span>. La preposición viaja gratis dentro de la frase.</div>
`,
      quiz: {
        questions: [
          {
            q: "\"Assisti a um documentário ótimo\" →",
            options: [
              "Asistí a un documental buenísimo.",
              "Vi un documental buenísimo.",
              "Asistí un documental buenísimo.",
              "Miré a un documental buenísimo."
            ],
            correct: 1,
            explanation: "Ver películas/series = ver. \"Asistir a\" = comparecer (asistí a la boda). Falso amigo de regencia clásico."
          },
          {
            q: "\"Ela se preocupa muito ___ os filhos e se parece ___ a mãe.\"",
            options: [
              "con / con",
              "por / a",
              "por / con",
              "con / a"
            ],
            correct: 1,
            explanation: "preocuparse POR (no \"con\") y parecerse A (no \"con\"): dos regencias que cambian respecto al portugués."
          },
          {
            q: "\"Me apaixonei pela minha professora de espanhol\" →",
            options: [
              "Me enamoré por mi profesora de español.",
              "Me enamoré de mi profesora de español.",
              "Me enamoré con mi profesora de español.",
              "Me apasioné por mi profesora de español."
            ],
            correct: 1,
            explanation: "enamorarse DE alguien. (\"Apasionarse por\" existe pero significa empolgar-se com um tema, no apaixonar-se por alguém.)"
          },
          {
            q: "\"Viajamos ___ avión y después seguimos ___ pie.\"",
            options: [
              "de / de",
              "en / a",
              "de / a",
              "en / de"
            ],
            correct: 1,
            explanation: "Transporte: EN (en avión, en coche, en tren). Excepciones fijas: a pie, a caballo."
          },
          {
            q: "\"Liguei para o restaurante\" →",
            options: [
              "Ligué para el restaurante.",
              "Llamé al restaurante.",
              "Llamé para el restaurante.",
              "Ligué al restaurante."
            ],
            correct: 1,
            explanation: "ligar para = llamar a. Y ojo: \"ligar con alguien\" en español coloquial = paquerar."
          },
          {
            q: "\"Participei da reunião e sonho em voltar\" →",
            options: [
              "Participé de la reunión y sueño en volver.",
              "Participé en la reunión y sueño con volver.",
              "Participé a la reunión y sueño de volver.",
              "Participé en la reunión y sueño en volver."
            ],
            correct: 1,
            explanation: "participar EN (no \"de\") y soñar CON + infinitivo (no \"en\"). Dos cambios en la misma frase."
          },
          {
            q: "\"Trata de llegar temprano\" significa:",
            options: [
              "Trata sobre chegar cedo.",
              "Tenta chegar cedo.",
              "Trate o assunto de chegar cedo.",
              "Costuma chegar cedo."
            ],
            correct: 1,
            explanation: "tratar de + infinitivo = tentar: \"trata de entender\" = tenta entender. Con sustantivo, \"tratar de/sobre\" = versar sobre."
          }
        ]
      }
    },
    {
      id: "l3",
      title: "El tiempo: hace, desde hace, dentro de",
      duration: "13 min",
      content: `
<p>Las expresiones de tiempo transcurrido y futuro concentran tres trampas letales para el brasileño: el "há" que se vuelve "hace", el "em" que se vuelve "dentro de" y el "desde" compuesto.</p>

<h3>Hace / desde hace: el "faz dois anos" español</h3>
<div class="table-scroll"><table>
<tr><th>Portugués</th><th>Español</th></tr>
<tr><td><span class="pt">Faz/há dois anos que moro aqui.</span></td><td><span class="es">Hace dos años que vivo aquí.</span></td></tr>
<tr><td><span class="pt">Moro aqui há dois anos.</span></td><td><span class="es">Vivo aquí desde hace dos años.</span></td></tr>
<tr><td><span class="pt">Cheguei há dois anos.</span></td><td><span class="es">Llegué hace dos años.</span></td></tr>
<tr><td><span class="pt">Desde 2020.</span></td><td><span class="es">Desde 2020.</span> ✓ coincide</td></tr>
</table></div>
<div class="callout warn"><span class="callout-title">El error clásico</span>
"Vivo aquí <strong>hay</strong> dos años" — mezcla de "há" portugués con "hay" español. El tiempo transcurrido usa <span class="es">hace</span> (del verbo hacer), nunca "hay": <span class="es">hace dos años</span>, <span class="es">desde hace dos años</span>.</div>
<p>La lógica: momento puntual pasado → <span class="es">hace</span> ("llegué hace un mes"); duración que continúa → <span class="es">desde hace</span> ("no la veo desde hace un mes"); punto de inicio → <span class="es">desde</span> ("desde marzo").</p>

<h3>"Dentro de": el futuro que el portugués dice con "em/daqui a"</h3>
<div class="table-scroll"><table>
<tr><th>Portugués</th><th>Español</th></tr>
<tr><td><span class="pt">Daqui a dez minutos.</span></td><td><span class="es">Dentro de diez minutos. / En diez minutos.</span></td></tr>
<tr><td><span class="pt">O resultado sai em duas semanas.</span></td><td><span class="es">El resultado sale dentro de dos semanas.</span></td></tr>
<tr><td><span class="pt">Daqui a pouco.</span></td><td><span class="es">Dentro de poco. / En un rato. / Ahorita (Méx.).</span></td></tr>
</table></div>
<div class="ex">
<span class="wrong">Te llamo daquí a diez minutos. / El tren sale daqui a poco.</span>
<span class="right">Te llamo dentro de diez minutos. / El tren sale dentro de poco.</span>
<span class="gloss">"Daqui a" no tiene calco posible. Las opciones nativas: dentro de + tiempo (la más segura) o en + tiempo.</span>
</div>

<h3>Kit completo de tiempo</h3>
<div class="table-scroll"><table>
<tr><th>Portugués</th><th>Español</th></tr>
<tr><td><span class="pt">no dia seguinte</span></td><td><span class="es">al día siguiente</span></td></tr>
<tr><td><span class="pt">na véspera</span></td><td><span class="es">la víspera / el día anterior</span></td></tr>
<tr><td><span class="pt">de hoje a oito dias</span></td><td><span class="es">de hoy en ocho días</span></td></tr>
<tr><td><span class="pt">a partir de segunda</span></td><td><span class="es">a partir del lunes</span> ✓</td></tr>
<tr><td><span class="pt">até amanhã</span></td><td><span class="es">hasta mañana</span> ✓</td></tr>
<tr><td><span class="pt">enquanto isso</span></td><td><span class="es">mientras tanto</span></td></tr>
<tr><td><span class="pt">de vez em quando</span></td><td><span class="es">de vez en cuando</span></td></tr>
<tr><td><span class="pt">quanto antes</span></td><td><span class="es">cuanto antes / lo antes posible</span></td></tr>
</table></div>
`,
      quiz: {
        questions: [
          {
            q: "\"Moro em Salvador há cinco anos\" →",
            options: [
              "Vivo en Salvador hay cinco años.",
              "Vivo en Salvador desde hace cinco años.",
              "Vivo en Salvador atrás cinco años.",
              "Vivo en Salvador por cinco años atrás."
            ],
            correct: 1,
            explanation: "Tiempo transcurrido: hace/desde hace, del verbo hacer. \"Hay cinco años\" (calco de \"há\") no existe."
          },
          {
            q: "\"Cheguei há um mês\" →",
            options: [
              "Llegué hay un mes.",
              "Llegué hace un mes.",
              "Llegué desde un mes.",
              "Llegué un mes atrás... y es la única forma."
            ],
            correct: 1,
            explanation: "Momento puntual pasado = hace: llegué hace un mes. (\"Un mes atrás\" se oye en América pero \"hace\" es la forma universal.)"
          },
          {
            q: "\"O ônibus sai daqui a quinze minutos\" →",
            options: [
              "El autobús sale daquí a quince minutos.",
              "El autobús sale dentro de quince minutos.",
              "El autobús sale desde quince minutos.",
              "El autobús sale hasta quince minutos."
            ],
            correct: 1,
            explanation: "\"Daqui a\" = dentro de (o \"en\"): dentro de quince minutos, dentro de poco."
          },
          {
            q: "\"Não vejo minha família desde o Natal e não viajo ___ dois anos.\"",
            options: [
              "desde / desde",
              "desde / desde hace",
              "hace / desde",
              "desde hace / desde"
            ],
            correct: 1,
            explanation: "Punto de inicio = desde (desde Navidad); duración = desde hace (desde hace dos años)."
          },
          {
            q: "\"Chegamos na véspera e saímos no dia seguinte\" →",
            options: [
              "Llegamos en la víspera y salimos en el día siguiente.",
              "Llegamos la víspera y salimos al día siguiente.",
              "Llegamos a la víspera y salimos el día siguiente.",
              "Llegamos na víspera y salimos al día segundo."
            ],
            correct: 1,
            explanation: "\"la víspera\" (sin preposición) y \"al día siguiente\" — fórmulas fijas del relato."
          },
          {
            q: "\"Te respondo daqui a pouco, enquanto isso vai adiantando\" →",
            options: [
              "Te respondo dentro de poco; mientras tanto, ve avanzando.",
              "Te respondo daquí a poco; en cuanto eso, va adelantando.",
              "Te respondo en poco; mientras eso, ve avanzando.",
              "Te respondo dentro de poco; durante eso, va avanzando."
            ],
            correct: 0,
            explanation: "dentro de poco (daqui a pouco) + mientras tanto (enquanto isso) + imperativo \"ve avanzando\"."
          }
        ]
      }
    },
    {
      id: "l4",
      title: "Por y para a fondo",
      duration: "14 min",
      content: `
<p>Buena noticia: el reparto por/para es casi idéntico al portugués — el brasileño parte con enorme ventaja sobre otros estudiantes. Esta lección consolida el sistema y ataca solo las <strong>trampas reales</strong>.</p>

<h3>El mapa (que ya conoces del portugués)</h3>
<div class="table-scroll"><table>
<tr><th>POR (causa, trayecto, intercambio)</th><th>PARA (destino, finalidad, plazo)</th></tr>
<tr><td>Lo hice por ti. (causa: por você)</td><td>Este regalo es para ti. (destinatário)</td></tr>
<tr><td>Caminamos por el centro. (através de)</td><td>Salgo para Lima mañana. (rumo a)</td></tr>
<tr><td>Lo compré por veinte euros. (troca)</td><td>Es para el viernes. (prazo)</td></tr>
<tr><td>Gracias por todo. ✓</td><td>Estudio para aprender. (finalidade)</td></tr>
</table></div>

<h3>Las cinco trampas donde el portugués no ayuda</h3>
<ul>
<li><strong>1. Partes del día:</strong> <span class="pt">de manhã / à tarde / à noite</span> → <span class="es">por la mañana / por la tarde / por la noche</span>. El error "en la mañana"/"de mañana" delata; "por la..." es universal.</li>
<li><strong>2. "Estar por" vs. "estar para":</strong> <span class="es">está por llover</span> (Am.: prestes a) / <span class="es">está para llover</span> (Es.). Y <span class="es">"estoy por aceptar"</span> = estou inclinado a aceitar.</li>
<li><strong>3. "Por" + medio:</strong> <span class="es">por teléfono, por correo, por internet</span> — como el portugués ✓, pero también <span class="es">"por escrito"</span> (por escrito ✓) y <span class="es">"pasar por casa"</span> = passar na casa: "¿Paso por tu casa a las ocho?"</li>
<li><strong>4. "Para mí" de opinión:</strong> <span class="es">"Para mí, este es el mejor restaurante"</span> = na minha opinião ✓ coincide — úsalo sin miedo.</li>
<li><strong>5. Expresiones fijas con por:</strong> <span class="es">por supuesto</span> (claro), <span class="es">por si acaso</span> (por via das dúvidas), <span class="es">por lo visto</span> (pelo visto), <span class="es">por cierto</span> (aliás), <span class="es">por fin</span> (finalmente), <span class="es">por las dudas</span> (Arg.).</li>
</ul>

<div class="ex">
<span class="wrong">Trabajo en la mañana y estudio en la noche.</span>
<span class="right">Trabajo por la mañana y estudio por la noche.</span>
<span class="gloss">"En la mañana" se oye en partes de América y "a la mañana" en el Río de la Plata — pero "por la mañana" es correcto en absolutamente todas partes. Adóptalo como estándar.</span>
</div>

<div class="ex">
<span class="wrong">Passei na farmácia → Pasé en la farmacia.</span>
<span class="right">Pasé por la farmacia.</span>
<span class="gloss">"Pasar por" = passar em/na (lugar de paso): paso por tu casa, pasé por el banco. "Pasé en" no existe en ese sentido.</span>
</div>

<h3>Para que + subjuntivo (repaso conector)</h3>
<p><span class="pt">"para que entendamos"</span> → <span class="es">"para que entendamos"</span> ✓ — coincide, con subjuntivo en ambas. El peligro ya lo conoces del módulo 5: nunca "para + sujeto + infinitivo" ("para nosotros entender").</p>
`,
      quiz: {
        questions: [
          {
            q: "\"Trabalho de manhã\" →",
            options: [
              "Trabajo de mañana.",
              "Trabajo por la mañana.",
              "Trabajo en mañana.",
              "Trabajo a la mañana... y es la única forma correcta."
            ],
            correct: 1,
            explanation: "\"Por la mañana\" es la forma universal. (\"A la mañana\" es rioplatense y \"en la mañana\" americana regional — correctas allí, pero \"por la\" vale en todas partes.)"
          },
          {
            q: "\"Comprei o casaco ___ cinquenta euros ___ usar no inverno.\"",
            options: [
              "para / por",
              "por / para",
              "por / por",
              "para / para"
            ],
            correct: 1,
            explanation: "Intercambio/precio = por (por cincuenta euros); finalidad = para (para usar). Igual que el portugués."
          },
          {
            q: "\"Paso ___ tu casa y de ahí salimos ___ el aeropuerto.\"",
            options: [
              "para / por",
              "por / para",
              "en / a",
              "por / hacia... las demás son incorrectas"
            ],
            correct: 1,
            explanation: "pasar POR (lugar de paso) + salir PARA (destino). \"Hacia\" también valdría para el rumbo, pero la combinación por/para es la del ejercicio."
          },
          {
            q: "\"Leva o guarda-chuva, por via das dúvidas\" →",
            options: [
              "Lleva el paraguas, por vía de las dudas.",
              "Lleva el paraguas, por si acaso.",
              "Lleva el paraguas, para si acaso.",
              "Lleva el paraguas, por lo visto."
            ],
            correct: 1,
            explanation: "por si acaso = por via das dúvidas (en Argentina también \"por las dudas\"). \"Por lo visto\" = pelo visto."
          },
          {
            q: "\"Está por llover\" (en América) significa:",
            options: [
              "Está chovendo.",
              "Está prestes a chover.",
              "Choveu.",
              "Talvez chova daqui a uma semana."
            ],
            correct: 1,
            explanation: "estar por + infinitivo (Am.) = estar prestes a. En España se dice más \"está para llover\" / \"está a punto de llover\"."
          },
          {
            q: "\"___ supuesto que te ayudo; ___ cierto, ¿viste mi mensaje?\"",
            options: [
              "Para / Para",
              "Por / Por",
              "Por / Para",
              "De / Por"
            ],
            correct: 1,
            explanation: "por supuesto (= claro) y por cierto (= aliás): dos expresiones fijas con POR de altísima frecuencia."
          }
        ]
      }
    },
    {
      id: "l5",
      title: "Pero, sino y los conectores que elevan tu discurso",
      duration: "13 min",
      content: `
<p>El portugués cubre con <span class="pt">mas</span> dos ideas que el español separa en <strong>dos palabras distintas</strong>. Confundirlas es un error de gramática; dominarlas — y el arsenal de conectores de esta lección — hace tu discurso sonar articulado y culto.</p>

<h3>Pero vs. sino</h3>
<div class="table-scroll"><table>
<tr><th>Conector</th><th>Cuándo</th><th>Ejemplo</th></tr>
<tr><td><span class="es">pero</span></td><td>contraste simple (= mas, porém)</td><td>Es caro, pero vale la pena.</td></tr>
<tr><td><span class="es">sino</span></td><td>corrección tras negación (= mas sim, e sim)</td><td>No es rojo, sino azul.</td></tr>
<tr><td><span class="es">sino que</span></td><td>corrección con verbos conjugados</td><td>No vino a ayudar, sino que vino a mirar.</td></tr>
</table></div>

<div class="ex">
<span class="wrong">No quiero café, pero té. / No es lunes, pero martes.</span>
<span class="right">No quiero café, sino té. / No es lunes, sino martes.</span>
<span class="gloss">Prueba mental: si en portugués cabe "mas sim", en español es "sino". Si es un "mas" de contraste normal, es "pero".</span>
</div>

<p>Bonus: <span class="es">no solo... sino también...</span> = <span class="pt">não só... mas também...</span> — "No solo habla español, sino que también lo enseña."</p>

<h3>Los conectores que te faltan (y sus falsos gemelos)</h3>
<div class="table-scroll"><table>
<tr><th>Portugués</th><th>Español</th><th>Ojo</th></tr>
<tr><td><span class="pt">porém, contudo, todavia</span></td><td><span class="es">sin embargo, no obstante</span></td><td>¡"todavía" = ainda! (módulo 1)</td></tr>
<tr><td><span class="pt">no entanto</span></td><td><span class="es">sin embargo</span></td><td>"entretanto" ES = enquanto isso</td></tr>
<tr><td><span class="pt">portanto, logo</span></td><td><span class="es">por lo tanto, así que, por eso</span></td><td>"luego" conector es libresco ("pienso, luego existo")</td></tr>
<tr><td><span class="pt">aliás</span></td><td><span class="es">por cierto, de hecho, es más</span></td><td>no existe "aliás" en español</td></tr>
<tr><td><span class="pt">enquanto</span></td><td><span class="es">mientras</span></td><td>"mientras que" = contraste (ao passo que)</td></tr>
<tr><td><span class="pt">pois</span> (causal)</td><td><span class="es">pues, ya que, porque</span></td><td>"pois é" → "pues sí"</td></tr>
<tr><td><span class="pt">até (mesmo)</span></td><td><span class="es">incluso, hasta</span></td><td>"Hasta Juan lo sabe" = até o Juan sabe</td></tr>
<tr><td><span class="pt">afinal</span></td><td><span class="es">al fin y al cabo, a fin de cuentas</span></td><td>"al final" = no fim (temporal)</td></tr>
<tr><td><span class="pt">caso</span> + subj.</td><td><span class="es">en caso de que / si</span></td><td>"Caso você queira" → "Si quieres / En caso de que quieras"</td></tr>
</table></div>

<h3>Mientras / mientras que / mientras tanto</h3>
<ul>
<li><span class="es">Mientras cocinas, pongo la mesa.</span> — simultaneidad (enquanto).</li>
<li><span class="es">Yo madrugo, mientras que él duerme hasta tarde.</span> — contraste (ao passo que).</li>
<li><span class="es">Mientras tanto, esperamos.</span> — enquanto isso.</li>
<li>Futuro: <span class="es">mientras estés aquí</span> — presente de subjuntivo (módulo 5), no futuro.</li>
</ul>

<div class="callout tip"><span class="callout-title">Kit de emergencia culto</span>
Cinco conectores que instantáneamente suben el registro de tu español: <span class="es">sin embargo</span> · <span class="es">de hecho</span> · <span class="es">por lo tanto</span> · <span class="es">en cuanto a</span> (= quanto a) · <span class="es">a medida que</span> (= à medida que). Úsalos en tu próxima reunión y observa la diferencia.</div>
`,
      quiz: {
        questions: [
          {
            q: "\"No quiero té, ___ café. Es caro, ___ lo compro igual.\"",
            options: [
              "pero / sino",
              "sino / pero",
              "pero / pero",
              "sino / sino"
            ],
            correct: 1,
            explanation: "Corrección tras negación → sino (no té, sino café). Contraste simple → pero (es caro, pero...)."
          },
          {
            q: "\"Não só canta, mas também compõe\" →",
            options: [
              "No solo canta, pero también compone.",
              "No solo canta, sino que también compone.",
              "No solo canta, mas también compone.",
              "No solo canta, aunque también compone."
            ],
            correct: 1,
            explanation: "La correlación es \"no solo... sino (que) también\". Con verbo conjugado: sino que."
          },
          {
            q: "El \"todavia\" portugués (= porém) se traduce:",
            options: [
              "todavía",
              "sin embargo",
              "mientras",
              "pues"
            ],
            correct: 1,
            explanation: "todavia (PT, conector) = sin embargo / no obstante. \"Todavía\" en español significa \"ainda\"."
          },
          {
            q: "\"Aliás, você tinha razão\" →",
            options: [
              "Aliás, tenías razón.",
              "Por cierto, tenías razón.",
              "Al revés, tenías razón.",
              "Por lo tanto, tenías razón."
            ],
            correct: 1,
            explanation: "aliás = por cierto / de hecho / es más, según el matiz. \"Aliás\" no existe en español."
          },
          {
            q: "\"Caso você precise, me liga\" →",
            options: [
              "Caso precises, llámame.",
              "En caso de que necesites algo, llámame.",
              "En caso que precisas, llámame.",
              "Caso necesitas, llámame."
            ],
            correct: 1,
            explanation: "El \"caso + subjuntivo\" portugués = \"en caso de que + subjuntivo\" o simplemente \"si + indicativo\" (si necesitas algo)."
          },
          {
            q: "\"Eu acordo cedo, ao passo que ele dorme até tarde\" →",
            options: [
              "Yo madrugo, mientras él duerme hasta tarde... y \"mientras que\" sería error.",
              "Yo madrugo, mientras que él duerme hasta tarde.",
              "Yo madrugo, al paso que él duerme hasta tarde.",
              "Yo madrugo, entretanto él duerme hasta tarde."
            ],
            correct: 1,
            explanation: "Contraste = \"mientras que\" (ao passo que). \"Mientras\" solo = simultaneidad; \"al paso que\" no existe; \"entretanto\" = enquanto isso."
          },
          {
            q: "\"Afinal, valeu a pena\" →",
            options: [
              "Al final, valió la pena... único sentido posible.",
              "Al fin y al cabo, valió la pena.",
              "Por fin, valió la pena.",
              "En fin, valió la pena."
            ],
            correct: 1,
            explanation: "afinal (conclusivo) = al fin y al cabo / a fin de cuentas. \"Al final\" = no fim (temporal); \"por fin\" = finalmente!; \"en fin\" = enfim (resignación)."
          }
        ]
      }
    },
    {
      id: "l6",
      title: "Preposiciones espaciales y locuciones de lugar",
      duration: "13 min",
      content: `
<p>Última pieza: el espacio. Las locuciones de lugar españolas difieren del portugués justo lo suficiente para producir portuñol constante — "abajo de", "atrás de", "na frente"...</p>

<h3>El mapa espacial</h3>
<div class="table-scroll"><table>
<tr><th>Portugués</th><th>Español</th><th>Ejemplo</th></tr>
<tr><td><span class="pt">em cima de</span></td><td><span class="es">encima de / sobre</span></td><td>Está encima de la mesa.</td></tr>
<tr><td><span class="pt">embaixo de</span></td><td><span class="es">debajo de</span></td><td>El gato está debajo de la cama.</td></tr>
<tr><td><span class="pt">na frente de</span></td><td><span class="es">delante de</span></td><td>Te espero delante del cine.</td></tr>
<tr><td><span class="pt">atrás de</span></td><td><span class="es">detrás de</span></td><td>Está detrás de la puerta.</td></tr>
<tr><td><span class="pt">do lado de / ao lado de</span></td><td><span class="es">al lado de / junto a</span></td><td>Vivo al lado de la estación.</td></tr>
<tr><td><span class="pt">em frente a (defronte)</span></td><td><span class="es">frente a / enfrente de</span></td><td>El banco está enfrente de la plaza.</td></tr>
<tr><td><span class="pt">perto de / longe de</span></td><td><span class="es">cerca de / lejos de</span></td><td>Queda cerca del centro.</td></tr>
<tr><td><span class="pt">dentro de / fora de</span></td><td><span class="es">dentro de / fuera de</span></td><td>Está fuera de la ciudad.</td></tr>
<tr><td><span class="pt">no meio de</span></td><td><span class="es">en medio de / en el medio de</span></td><td>En medio de la calle.</td></tr>
<tr><td><span class="pt">na esquina</span></td><td><span class="es">en la esquina</span></td><td>Nos vemos en la esquina. ✓</td></tr>
</table></div>

<div class="ex">
<span class="wrong">El mercado está abajo del hotel, na frente de la plaza.</span>
<span class="right">El mercado está debajo del hotel, delante de la plaza.</span>
<span class="gloss">abajo/arriba y adelante/atrás existen, pero como ADVERBIOS de dirección ("vamos arriba", "quedate atrás"). Como locución con "de", lo estándar es debajo de, encima de, delante de, detrás de. ("Abajo de, atrás de" se oyen en América — pero la forma con d- es correcta en todas partes.)</span>
</div>

<h3>Adverbios de dirección: el sistema doble</h3>
<div class="table-scroll"><table>
<tr><th>Posición (¿dónde?)</th><th>Dirección (¿hacia dónde?)</th></tr>
<tr><td>encima, debajo, delante, detrás, dentro, fuera</td><td>arriba, abajo, adelante, atrás, adentro, afuera</td></tr>
<tr><td>El libro está debajo.</td><td>Vamos abajo. / ¡Sube arriba!</td></tr>
</table></div>

<h3>Casa, calle y ciudad: microtrampas</h3>
<ul>
<li><span class="pt">em casa</span> → <span class="es">en casa</span> ✓ · <span class="pt">para casa</span> → <span class="es">a casa</span>: "me voy a casa".</li>
<li><span class="pt">na rua Bolívar</span> → <span class="es">en la calle Bolívar</span>; morar na rua X = <span class="es">vivir en la calle X</span>.</li>
<li><span class="pt">no interior</span> (fora da capital) → <span class="es">en el interior / en provincia(s)</span>; "el campo" = a zona rural.</li>
<li><span class="pt">subir/descer a rua</span> → <span class="es">subir/bajar la calle</span> — ¡"descer" no existe: es <strong>bajar</strong>!</li>
<li><span class="pt">virar à esquerda</span> → <span class="es">girar/doblar a la izquierda</span> (doblar es lo común en América).</li>
</ul>

<div class="ex">
<span class="wrong">Desce en la próxima parada y vira a la derecha.</span>
<span class="right">Baja en la próxima parada y dobla (gira) a la derecha.</span>
<span class="gloss">descer → bajar; virar → doblar/girar. Dos verbos de dirección que el portuñol siempre delata.</span>
</div>
`,
      quiz: {
        questions: [
          {
            q: "\"O gato está embaixo da mesa e o vaso em cima\" →",
            options: [
              "El gato está abajo de la mesa y el florero arriba de.",
              "El gato está debajo de la mesa y el florero encima.",
              "El gato está bajo a la mesa y el florero sobre de.",
              "El gato está embajo de la mesa y el florero encima."
            ],
            correct: 1,
            explanation: "Locuciones estándar: debajo de / encima de. (\"Abajo de\" se oye en América, pero \"debajo de\" es universal.)"
          },
          {
            q: "\"Te espero na frente do cinema\" →",
            options: [
              "Te espero en la frente del cine.",
              "Te espero delante del cine.",
              "Te espero na frente del cine.",
              "Te espero adelante en el cine."
            ],
            correct: 1,
            explanation: "na frente de = delante de. (\"En la frente\" = na testa!) También vale \"enfrente del cine\" si es del otro lado de la calle."
          },
          {
            q: "\"Desce aqui e vira à esquerda\" →",
            options: [
              "Desciende aquí y vira a la izquierda.",
              "Baja aquí y dobla a la izquierda.",
              "Desce aquí y gira a la izquierda.",
              "Abaja aquí y voltea la izquierda."
            ],
            correct: 1,
            explanation: "descer = bajar; virar = doblar (Am.) / girar. \"Baja en la próxima y dobla a la izquierda\" — frase de taxi esencial."
          },
          {
            q: "\"Vou para casa\" →",
            options: [
              "Voy para casa... es la única opción.",
              "Me voy a casa.",
              "Voy en casa.",
              "Me voy por casa."
            ],
            correct: 1,
            explanation: "Dirección a la propia casa = \"a casa\": me voy a casa, vuelvo a casa. (\"Para casa\" existe pero \"a casa\" es lo neutro.) Estar = en casa."
          },
          {
            q: "¿Cuál par posición/dirección es correcto?",
            options: [
              "\"El libro está abajo\" / \"vamos debajo\"",
              "\"El libro está debajo\" / \"vamos abajo\"",
              "\"El libro está afuera\" / \"vamos fuera de\"",
              "son intercambiables siempre"
            ],
            correct: 1,
            explanation: "Posición: debajo, encima, delante, dentro. Dirección: abajo, arriba, adelante, adentro. \"Está debajo\" pero \"vamos abajo\"."
          },
          {
            q: "\"O banco fica ao lado da farmácia, perto da esquina\" →",
            options: [
              "El banco queda al lado de la farmacia, cerca de la esquina.",
              "El banco queda do lado de la farmacia, perto de la esquina.",
              "El banco queda a lado de la farmacia, cercano la esquina.",
              "El banco queda junto la farmacia, próximo la esquina."
            ],
            correct: 0,
            explanation: "al lado de + cerca de: locuciones con \"de\" obligatorio. Y \"quedar\" para ubicación ✓ (¿dónde queda?)."
          }
        ]
      }
    }
  ],
  flashcards: [
    { front: "vi Maria / conheço seu irmão", back: "vi A María / conozco A tu hermano<small>\"a\" pessoal com pessoa determinada</small>" },
    { front: "não vi ninguém", back: "no vi a nadie<small>alguien, nadie, quién: sempre com \"a\"</small>" },
    { front: "preciso de ajuda", back: "necesito ayuda (sem preposição)" },
    { front: "assistir a um filme", back: "ver una película<small>asistir a = comparecer</small>" },
    { front: "ligar para alguém", back: "llamar a alguien<small>\"ligar con\" = paquerar!</small>" },
    { front: "preocupar-se com / apaixonar-se por", back: "preocuparse por / enamorarse de" },
    { front: "parecer-se com / participar de", back: "parecerse a / participar en" },
    { front: "viajar de avião / a pé", back: "viajar en avión / a pie" },
    { front: "moro aqui há dois anos", back: "vivo aquí desde hace dos años<small>nunca \"hay dos años\"</small>" },
    { front: "cheguei há um mês", back: "llegué hace un mes" },
    { front: "daqui a dez minutos", back: "dentro de diez minutos / en diez minutos" },
    { front: "no dia seguinte / na véspera", back: "al día siguiente / la víspera" },
    { front: "de manhã / à noite", back: "por la mañana / por la noche" },
    { front: "por via das dúvidas / aliás / finalmente", back: "por si acaso / por cierto / por fin" },
    { front: "não é vermelho, mas sim azul", back: "no es rojo, sino azul<small>pero = contraste; sino = correção</small>" },
    { front: "não só... mas também...", back: "no solo... sino también..." },
    { front: "porém / no entanto", back: "sin embargo / no obstante" },
    { front: "embaixo de / na frente de / atrás de", back: "debajo de / delante de / detrás de" },
    { front: "descer / virar à esquerda", back: "bajar / doblar (girar) a la izquierda" },
    { front: "caso você precise", back: "en caso de que necesites / si necesitas" }
  ]
});
