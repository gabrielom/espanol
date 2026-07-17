/* Módulo 7 — Del avanzado al nativo */
window.COURSE_MODULES = window.COURSE_MODULES || [];
window.COURSE_MODULES.push({
  id: "m7",
  icon: "🏆",
  title: "Del avanzado al nativo: calcos, expresiones y registro",
  description: "Los últimos calcos que sobreviven en tu español, el verbo \"ficar\" repartido en cinco verbos, los matices finos de ser y estar, las expresiones idiomáticas equivalentes y cómo sonar natural en cada país.",
  lessons: [
    {
      id: "l1",
      title: "Hay, no \"tiene\": los calcos estructurales finales",
      duration: "13 min",
      content: `
<p>Esta lección caza los calcos que sobreviven hasta en hablantes casi bilingües — estructuras portuguesas tan automáticas que se cuelan sin ruido.</p>

<h3>1. El "ter" existencial → haber</h3>
<p>El brasileño dice <span class="pt">"tem um mercado aqui perto"</span>. El español existencial usa <strong>haber</strong>, impersonal e invariable:</p>
<div class="ex">
<span class="wrong">Tiene un mercado aquí cerca. / Tenía muchas personas en la fiesta.</span>
<span class="right">Hay un mercado aquí cerca. / Había muchas personas en la fiesta.</span>
<span class="gloss">Y siempre en singular: "había muchas personas" (não "habían"). En pasado: hubo/había; en futuro: habrá. "Tener" solo para posesión.</span>
</div>

<h3>2. "Todo mundo" → todo el mundo</h3>
<div class="ex">
<span class="wrong">Todo mundo lo sabe.</span>
<span class="right">Todo el mundo lo sabe. / Todos lo saben.</span>
<span class="gloss">Con artículo. Igual que "todo el día" (o dia todo), "toda la noche".</span>
</div>

<h3>3. "Está com fome" → tener hambre</h3>
<p>Estados físicos y emocionales: el portugués usa <span class="pt">estar com</span>; el español usa <strong>tener</strong>:</p>
<div class="table-scroll"><table>
<tr><th>Portugués</th><th>Español</th></tr>
<tr><td><span class="pt">estou com fome / sede</span></td><td><span class="es">tengo hambre / sed</span></td></tr>
<tr><td><span class="pt">estou com frio / calor</span></td><td><span class="es">tengo frío / calor</span></td></tr>
<tr><td><span class="pt">estou com pressa</span></td><td><span class="es">tengo prisa (Es.) / estoy apurado (Am.)</span></td></tr>
<tr><td><span class="pt">estou com medo</span></td><td><span class="es">tengo miedo</span></td></tr>
<tr><td><span class="pt">estou com sono</span></td><td><span class="es">tengo sueño</span></td></tr>
<tr><td><span class="pt">estou com dor de cabeça</span></td><td><span class="es">me duele la cabeza</span></td></tr>
<tr><td><span class="pt">estou com sorte</span></td><td><span class="es">tengo suerte / estoy de suerte</span></td></tr>
</table></div>

<h3>4. Las edades: tener, no ser</h3>
<div class="ex">
<span class="wrong">Estoy con 35 años. / Soy 35 años.</span>
<span class="right">Tengo 35 años.</span>
<span class="gloss">Y la pregunta: "¿Cuántos años tienes?". "¿Qué edad tienes?" también vale — nunca "¿qué edad eres?".</span>
</div>

<h3>5. "Gente" y los colectivos</h3>
<ul>
<li><span class="es">La gente <strong>es</strong> amable</span> — singular. Nunca "la gente son".</li>
<li><span class="pt">a gente</span> (= nós) → <span class="es">nosotros</span> (módulo 4).</li>
<li><span class="pt">pessoal</span> (vocativo: "oi, pessoal!") → <span class="es">¡hola, gente! / chicos / muchachos</span>.</li>
</ul>

<h3>6. Los diminutivos: -ito, no -inho</h3>
<div class="table-scroll"><table>
<tr><th>Portugués</th><th>Español</th></tr>
<tr><td><span class="pt">cafezinho</span></td><td><span class="es">cafecito</span></td></tr>
<tr><td><span class="pt">um pouquinho</span></td><td><span class="es">un poquito</span></td></tr>
<tr><td><span class="pt">agorinha</span></td><td><span class="es">ahorita</span> (Méx., Caribe)</td></tr>
<tr><td><span class="pt">devagarinho</span></td><td><span class="es">despacito</span></td></tr>
<tr><td><span class="pt">perto­zinho</span></td><td><span class="es">cerquita</span></td></tr>
</table></div>
<p>El diminutivo español es tan afectivo como el brasileño — pero el sufijo es <strong>-ito/-ita</strong> (o -illo, -ico según la región). "Cafezinho" dicho en español marca portuñol instantáneo.</p>
`,
      quiz: {
        questions: [
          {
            q: "\"Tem muita gente na fila\" →",
            options: [
              "Tiene mucha gente en la fila.",
              "Hay mucha gente en la cola.",
              "Habían muchas personas en la cola.",
              "Tiene mucha gente en la cola."
            ],
            correct: 1,
            explanation: "Existencia = haber (hay), no tener. Y \"fila\" en español es \"cola\". Haber existencial es siempre singular."
          },
          {
            q: "\"Tinha umas cinquenta pessoas no show\" →",
            options: [
              "Tenía unas cincuenta personas en el concierto.",
              "Había unas cincuenta personas en el concierto.",
              "Habían unas cincuenta personas en el concierto.",
              "Hubieron unas cincuenta personas en el concierto."
            ],
            correct: 1,
            explanation: "Existencial pasado = había, SIEMPRE singular: había cincuenta personas. \"Habían/hubieron + sustantivo\" es error clásico (también de nativos descuidados)."
          },
          {
            q: "\"Estou com muita fome e um pouco de pressa\" →",
            options: [
              "Estoy con mucha hambre y un poco de prisa.",
              "Tengo mucha hambre y un poco de prisa.",
              "Soy con hambre y prisa.",
              "Estoy hambriento con pressa."
            ],
            correct: 1,
            explanation: "Estados físicos: tener hambre, sed, frío, prisa, sueño, miedo — no \"estar con\"."
          },
          {
            q: "\"Quantos anos você tem?\" — la respuesta correcta:",
            options: [
              "Soy 35 años.",
              "Tengo 35 años.",
              "Estoy con 35 años.",
              "Hago 35 años."
            ],
            correct: 1,
            explanation: "Edad = tener: tengo 35 años. (Y \"hacer años\" solo en \"cumplir\": \"cumplo 36 en julio\".)"
          },
          {
            q: "\"Todo mundo chegou cedo\" →",
            options: [
              "Todo mundo llegó temprano.",
              "Todo el mundo llegó temprano.",
              "Todos los mundos llegaron temprano.",
              "Cada mundo llegó temprano."
            ],
            correct: 1,
            explanation: "todo EL mundo, con artículo (o \"todos llegaron temprano\")."
          },
          {
            q: "\"Vamos tomar um cafezinho rapidinho\" →",
            options: [
              "Vamos a tomar un cafezito rapidinho.",
              "Vamos a tomar un cafecito rapidito.",
              "Vamos a tomar un cafeciño rapidiño.",
              "Vamos a tomar un cafezinho rápido."
            ],
            correct: 1,
            explanation: "El diminutivo español es -ito/-ita: cafecito, rapidito, poquito, despacito, cerquita."
          }
        ]
      }
    },
    {
      id: "l2",
      title: "\"Ficar\": un verbo portugués, cinco verbos españoles",
      duration: "14 min",
      content: `
<p>El verbo más camaleónico del portugués no tiene equivalente único. Cada uso de <span class="pt">ficar</span> se reparte entre varios verbos españoles — y elegir el correcto es un termómetro exacto de nivel.</p>

<h3>El mapa completo</h3>
<div class="table-scroll"><table>
<tr><th>Uso de "ficar"</th><th>Español</th><th>Ejemplo</th></tr>
<tr><td>permanecer en un lugar</td><td><span class="es">quedarse</span></td><td>Me quedé en casa. (fiquei em casa)</td></tr>
<tr><td>ubicación</td><td><span class="es">quedar / estar</span></td><td>¿Dónde queda la estación? (onde fica)</td></tr>
<tr><td>sobrar / restar</td><td><span class="es">quedar</span></td><td>Quedan dos entradas. (ficam duas)</td></tr>
<tr><td>ropa / apariencia</td><td><span class="es">quedar + bien/mal</span></td><td>Ese color te queda bien. (fica bem em você)</td></tr>
<tr><td>emoción pasajera</td><td><span class="es">ponerse</span></td><td>Se puso triste / rojo / nervioso. (ficou triste)</td></tr>
<tr><td>cambio duradero, a menudo negativo</td><td><span class="es">volverse</span></td><td>Se volvió loco / muy desconfiado. (ficou louco)</td></tr>
<tr><td>estado resultante (pérdida)</td><td><span class="es">quedarse + adj.</span></td><td>Se quedó calvo / sordo / sin dinero. (ficou careca)</td></tr>
<tr><td>cambio por esfuerzo propio</td><td><span class="es">hacerse</span></td><td>Se hizo rico / famoso. (ficou rico)</td></tr>
<tr><td>transformación completa</td><td><span class="es">convertirse en</span></td><td>Se convirtió en un problema. (virou um problema)</td></tr>
<tr><td>"ficar com" alguém (paquera BR)</td><td><span class="es">enrollarse con</span> (Es.), <span class="es">estar/andar con</span></td><td>—</td></tr>
</table></div>

<div class="ex">
<span class="wrong">Fiqué en casa. / Se ficó triste. / La estación fica cerca.</span>
<span class="right">Me quedé en casa. / Se puso triste. / La estación queda cerca.</span>
<span class="gloss">"Ficar" no existe en español bajo ninguna forma. La decisión clave: ¿permanencia/resultado (quedar/quedarse) o cambio de estado (ponerse/volverse/hacerse)?</span>
</div>

<h3>El algoritmo de decisión</h3>
<ol>
<li>¿Es lugar o permanencia? → <span class="es">quedar(se)</span></li>
<li>¿Es emoción o estado pasajero? → <span class="es">ponerse</span> (contento, serio, pálido)</li>
<li>¿Es cambio profundo de carácter? → <span class="es">volverse</span> (egoísta, loco)</li>
<li>¿Es logro con esfuerzo? → <span class="es">hacerse</span> (médico, rico, vegetariano)</li>
<li>¿Es estado resultante (pérdida)? → <span class="es">quedarse</span> (ciego, viudo, sin trabajo)</li>
</ol>

<h3>Su primo: "virar" → convertirse en / volverse</h3>
<div class="ex">
<span class="wrong">El proyecto viró una pesadilla.</span>
<span class="right">El proyecto se convirtió en una pesadilla.</span>
<span class="gloss">"Virar" español = girar/dar vuelta (módulo 6: doblar). La transformación es "convertirse en" (+ sustantivo) o "volverse" (+ adjetivo).</span>
</div>

<h3>Combos de frecuencia máxima</h3>
<ul>
<li><span class="pt">Fica tranquilo.</span> → <span class="es">Quédate tranquilo. / Tranquilo, no pasa nada.</span></li>
<li><span class="pt">Ficou combinado assim.</span> → <span class="es">Quedamos así. / Quedamos en eso.</span> — ¡y "quedar con alguien" = marcar encontro: "¿Quedamos a las ocho?"</li>
<li><span class="pt">Vai ficar tudo bem.</span> → <span class="es">Todo va a salir bien. / Todo irá bien.</span></li>
<li><span class="pt">Ficou pronto?</span> → <span class="es">¿Ya está listo?</span></li>
</ul>
`,
      quiz: {
        questions: [
          {
            q: "\"Ela ficou triste com a notícia\" →",
            options: [
              "Ella se quedó triste con la noticia.",
              "Ella se puso triste con la noticia.",
              "Ella se hizo triste con la noticia.",
              "Ella ficó triste con la noticia."
            ],
            correct: 1,
            explanation: "Emoción pasajera = ponerse (se puso triste, rojo, nervioso). Quedarse = estado resultante duradero; hacerse = logro."
          },
          {
            q: "\"Meu avô ficou rico trabalhando e depois ficou surdo\" →",
            options: [
              "se puso rico ... se puso sordo",
              "se hizo rico ... se quedó sordo",
              "se quedó rico ... se hizo sordo",
              "se volvió rico ... se puso sordo"
            ],
            correct: 1,
            explanation: "Cambio por esfuerzo → hacerse rico; estado resultante (pérdida) → quedarse sordo. El algoritmo de \"ficar\" en acción."
          },
          {
            q: "\"Onde fica o museu?\" →",
            options: [
              "¿Dónde fica el museo?",
              "¿Dónde queda el museo?",
              "¿Dónde se pone el museo?",
              "¿Dónde se hace el museo?"
            ],
            correct: 1,
            explanation: "Ubicación = quedar: ¿dónde queda? / queda cerca del centro. (También \"¿dónde está?\")"
          },
          {
            q: "\"Depois do divórcio, ele se ficou... digo, ficou muito desconfiado\" — cambio duradero de carácter:",
            options: [
              "se puso muy desconfiado",
              "se volvió muy desconfiado",
              "se hizo muy desconfiado",
              "se quedó muy desconfiado"
            ],
            correct: 1,
            explanation: "Cambio profundo y duradero de carácter = volverse: se volvió desconfiado, se volvió loco."
          },
          {
            q: "\"¿Quedamos a las ocho en el bar?\" significa:",
            options: [
              "¿Sobramos a las ocho?",
              "¿Marcamos encontro às oito no bar?",
              "¿Ficamos até as oito no bar?",
              "¿Moramos en el bar a las ocho?"
            ],
            correct: 1,
            explanation: "quedar con alguien = combinar/marcar encontro: \"¿quedamos mañana?\", \"quedé con Ana a las seis\". Uso importantísimo sin paralelo portugués."
          },
          {
            q: "\"O estagiário virou diretor\" →",
            options: [
              "El becario viró director.",
              "El becario se convirtió en director. / llegó a ser director.",
              "El becario dobló director.",
              "El becario se puso director."
            ],
            correct: 1,
            explanation: "virar + sustantivo = convertirse en / llegar a ser (o hacerse, si hubo esfuerzo: se hizo director). \"Virar\" español = girar."
          },
          {
            q: "\"Fica tranquilo, vai dar tudo certo\" →",
            options: [
              "Fica tranquilo, va a dar todo cierto.",
              "Tranquilo, todo va a salir bien.",
              "Ponte tranquilo, va a quedar todo correcto.",
              "Hazte tranquilo, saldrá cierto."
            ],
            correct: 1,
            explanation: "\"Tranquilo, todo va a salir bien\" — natural y directo. \"Dar certo\" = salir bien (no \"dar cierto\")."
          }
        ]
      }
    },
    {
      id: "l3",
      title: "Ser y estar: los matices que el portugués no marca igual",
      duration: "14 min",
      content: `
<p>El brasileño llega con el sistema ser/estar de fábrica — ventaja enorme. Pero hay una franja de usos donde las dos lenguas <strong>eligen distinto</strong>, y ahí vive un portuñol finísimo que casi nadie corrige.</p>

<h3>1. Estado civil: el español prefiere estar</h3>
<div class="ex">
<span class="wrong">Es casado con una colombiana. (calco de "é casado")</span>
<span class="right">Está casado con una colombiana.</span>
<span class="gloss">El español usa "estar casado/soltero/divorciado" para el estado; "ser casado" existe pero suena a clasificación censal. En el día a día: está casado, está soltera.</span>
</div>

<h3>2. Adjetivos que cambian de significado con ser/estar</h3>
<div class="table-scroll"><table>
<tr><th>Adjetivo</th><th>Con SER</th><th>Con ESTAR</th></tr>
<tr><td><span class="es">listo</span></td><td>inteligente (é esperto)</td><td>pronto (está pronto)</td></tr>
<tr><td><span class="es">rico</span></td><td>tiene dinero</td><td>delicioso ("¡está rico!")</td></tr>
<tr><td><span class="es">aburrido</span></td><td>chato (pessoa entediante)</td><td>entediado</td></tr>
<tr><td><span class="es">malo</span></td><td>malvado / de mala calidad</td><td>enfermo ("está malo") / estragado</td></tr>
<tr><td><span class="es">verde</span></td><td>de color verde / ecologista</td><td>no maduro ("el plátano está verde")</td></tr>
<tr><td><span class="es">atento</span></td><td>cortés</td><td>prestando atención</td></tr>
<tr><td><span class="es">despierto</span></td><td>espabilado, vivo</td><td>acordado (não dormindo)</td></tr>
</table></div>
<div class="ex">
<span class="wrong">La conferencia fue muy aburrida, así que yo era aburrido.</span>
<span class="right">La conferencia fue muy aburrida, así que yo estaba aburrido.</span>
<span class="gloss">ser aburrido = ser chato; estar aburrido = estar entediado. El portugués usa dos palabras (chato/entediado); el español, un adjetivo con dos verbos.</span>
</div>

<h3>3. "Está rico", "está bueno": elogiar comida</h3>
<ul>
<li><span class="es">¡Esta feijoada está riquísima / buenísima!</span> — estar, porque es el resultado de HOY.</li>
<li><span class="es">La feijoada es un plato brasileño.</span> — ser, definición.</li>
<li>Cuidado coloquial: <span class="es">"estar bueno/a"</span> dicho de una persona = ser atraente (gíria). Para elogiar carácter: "es muy bueno" (é bondoso).</li>
</ul>

<h3>4. Eventos: ser (aquí coinciden, pero refuerza)</h3>
<ul>
<li><span class="es">La fiesta <strong>es</strong> en mi casa.</span> — evento = ser (a festa é na minha casa ✓).</li>
<li><span class="es">Mi casa <strong>está</strong> en el centro.</span> — ubicación de cosa = estar.</li>
<li>El error viene del inglés, no del portugués — pero conviene blindarlo: "¿Dónde es el concierto?" vs. "¿Dónde está el teatro?".</li>
</ul>

<h3>5. "Estar de": el estado temporal profesional</h3>
<ul>
<li><span class="es">Está de camarero este verano.</span> — está trabalhando temporariamente como garçom (≠ es camarero, su profesión).</li>
<li><span class="es">Estoy de vacaciones / de viaje / de guardia.</span> = estou de férias / viajando / de plantão ✓ — coincide con el "estar de" portugués.</li>
<li><span class="es">Hoy estoy de buen humor.</span> = estou de bom humor ✓.</li>
</ul>

<h3>6. Precios y fechas con estar</h3>
<ul>
<li><span class="es">¿A cuánto está el dólar?</span> — cotización de hoy (quanto está o dólar ✓ parecido).</li>
<li><span class="es">Estamos a lunes 15.</span> — la fecha con "estar a": "¿A qué (día) estamos?" = que dia é hoje? Fórmula sin paralelo directo.</li>
<li><span class="es">Las fresas están a tres euros el kilo.</span> — precio variable del día.</li>
</ul>
`,
      quiz: {
        questions: [
          {
            q: "\"Meu irmão é casado com uma argentina\" →",
            options: [
              "Mi hermano es casado con una argentina.",
              "Mi hermano está casado con una argentina.",
              "Mi hermano fue casado con una argentina.",
              "Mi hermano se casó... es la única forma posible."
            ],
            correct: 1,
            explanation: "Estado civil cotidiano = estar: está casado, está soltera. (\"Se casó con\" también es natural, pero el estado se dice con estar.)"
          },
          {
            q: "\"La película era aburrida y los niños ___ aburridos.\"",
            options: [
              "eran",
              "estaban",
              "fueron",
              "son"
            ],
            correct: 1,
            explanation: "ser aburrido = ser chato; estar aburrido = estar entediado. La película ES aburrida; los niños ESTÁN aburridos."
          },
          {
            q: "\"¡Este pastel ___ riquísimo!\" (elogiando el de hoy)",
            options: [
              "es",
              "está",
              "fue",
              "sería"
            ],
            correct: 1,
            explanation: "Resultado de hoy = estar: \"¡está riquísimo!\". \"Es rico\" hablaría de la receta en general (o de dinero, si es persona)."
          },
          {
            q: "\"El plátano está verde\" significa:",
            options: [
              "a banana é da cor verde",
              "a banana está verde (não madura)",
              "a banana é ecológica",
              "a banana estragou"
            ],
            correct: 1,
            explanation: "estar verde = não estar maduro. Ser verde = cor (o ecologista). El clásico par ser/estar que cambia el sentido."
          },
          {
            q: "\"¿Dónde ___ el concierto?\" / \"¿Dónde ___ el teatro?\"",
            options: [
              "está / es",
              "es / está",
              "es / es",
              "está / está"
            ],
            correct: 1,
            explanation: "Evento = ser (¿dónde es el concierto?); ubicación de cosa/edificio = estar (¿dónde está el teatro?)."
          },
          {
            q: "\"Mi primo ___ de camarero este verano, pero ___ ingeniero.\"",
            options: [
              "es / está",
              "está / es",
              "es / es",
              "está / está"
            ],
            correct: 1,
            explanation: "estar de + oficio = trabajo temporal (está de camarero); ser + profesión = la profesión real (es ingeniero)."
          },
          {
            q: "\"Que dia é hoje?\" con la fórmula de \"estar\":",
            options: [
              "¿Qué día está hoy?",
              "¿A qué estamos hoy?",
              "¿Cómo estamos hoy?",
              "¿Dónde estamos hoy?"
            ],
            correct: 1,
            explanation: "\"¿A qué (día) estamos?\" — \"Estamos a lunes 15\". Fórmula nativa para la fecha, sin paralelo portugués directo."
          }
        ]
      }
    },
    {
      id: "l4",
      title: "Expresiones idiomáticas: di lo mismo, pero en español",
      duration: "14 min",
      content: `
<p>Traducir una expresión idiomática palabra por palabra es la última frontera del portuñol: gramática perfecta, modismo brasileño. Aquí está el diccionario bilingüe de las expresiones que realmente se usan.</p>

<h3>La estrella: saudade</h3>
<div class="table-scroll"><table>
<tr><th>Portugués</th><th>Español</th></tr>
<tr><td><span class="pt">Estou com saudade de você.</span></td><td><span class="es">Te echo de menos.</span> (España) / <span class="es">Te extraño.</span> (América)</td></tr>
<tr><td><span class="pt">Que saudade do Rio!</span></td><td><span class="es">¡Cómo extraño Río! / ¡Qué nostalgia de Río!</span></td></tr>
<tr><td><span class="pt">matar a saudade</span></td><td><span class="es">ponerse al día / desquitarse</span> (aproximado)</td></tr>
</table></div>

<h3>Expresiones cotidianas equivalentes</h3>
<div class="table-scroll"><table>
<tr><th>Portugués</th><th>Español</th><th>Nota</th></tr>
<tr><td><span class="pt">custar os olhos da cara</span></td><td><span class="es">costar un ojo de la cara</span></td><td>¡un solo ojo!</td></tr>
<tr><td><span class="pt">falar pelos cotovelos</span></td><td><span class="es">hablar por los codos</span></td><td>igual ✓</td></tr>
<tr><td><span class="pt">não pregar o olho</span></td><td><span class="es">no pegar ojo</span></td><td>casi igual</td></tr>
<tr><td><span class="pt">pisar na bola</span></td><td><span class="es">meter la pata</span></td><td>¡otra imagen!</td></tr>
<tr><td><span class="pt">zoar / tirar sarro</span></td><td><span class="es">tomar el pelo</span></td><td>"pegar no cabelo"</td></tr>
<tr><td><span class="pt">estar de saco cheio</span></td><td><span class="es">estar hasta las narices / la coronilla</span></td><td>—</td></tr>
<tr><td><span class="pt">ser moleza / mamão com açúcar</span></td><td><span class="es">ser pan comido</span></td><td>"pão comido"</td></tr>
<tr><td><span class="pt">estar no mundo da lua</span></td><td><span class="es">estar en las nubes</span></td><td>nas nuvens</td></tr>
<tr><td><span class="pt">quebrar um galho</span></td><td><span class="es">sacar de un apuro / hacer un favor</span></td><td>—</td></tr>
<tr><td><span class="pt">dar um jeitinho</span></td><td><span class="es">apañárselas / ingeniárselas</span></td><td>—</td></tr>
<tr><td><span class="pt">encher o saco</span></td><td><span class="es">dar la lata / hinchar (Arg.)</span></td><td>—</td></tr>
<tr><td><span class="pt">de vez em quando</span></td><td><span class="es">de vez en cuando</span></td><td>igual ✓</td></tr>
<tr><td><span class="pt">custe o que custar</span></td><td><span class="es">cueste lo que cueste</span></td><td>igual ✓</td></tr>
<tr><td><span class="pt">cair a ficha</span></td><td><span class="es">caer en la cuenta</span></td><td>"me cayó la ficha" también se oye en Arg.</td></tr>
<tr><td><span class="pt">segurar vela</span></td><td><span class="es">tocar el violín (Arg.) / hacer de carabina (Es.)</span></td><td>¡instrumentos distintos!</td></tr>
</table></div>

<div class="callout warn"><span class="callout-title">Trampas de cortesía</span>
<span class="pt">"Pois não?"</span> (= posso ajudar?) NO es "¿pues no?" — di <span class="es">"¿En qué puedo ayudarle?" / "Dígame"</span>. Y para responder "pois não!" (= claro!): <span class="es">"¡Claro!", "¡Cómo no!", "¡Por supuesto!"</span> — nota que <span class="es">"¡cómo no!"</span> es afirmativo, otra pequeña paradoja hispánica.</div>

<h3>Falsas gemelas: parecen la misma expresión, pero no</h3>
<ul>
<li><span class="pt">dar certo</span> → <span class="es">salir bien</span> ("deu certo!" = "¡salió bien!") — não "dar cierto".</li>
<li><span class="pt">dar errado</span> → <span class="es">salir mal</span>.</li>
<li><span class="pt">tomar vergonha na cara</span> → <span class="es">tener un poco de dignidad</span> — "tomar vergüenza" no existe.</li>
<li><span class="pt">fazer questão</span> → <span class="es">insistir en / empeñarse en</span> ("faço questão de pagar" = "insisto en pagar").</li>
<li><span class="pt">não tem jeito</span> → <span class="es">no hay manera / no tiene remedio</span>.</li>
<li><span class="pt">pode deixar!</span> → <span class="es">¡déjamelo a mí! / ¡yo me encargo!</span></li>
</ul>
`,
      quiz: {
        questions: [
          {
            q: "\"Estou com saudade de vocês\" en Buenos Aires:",
            options: [
              "Estoy con saudade de ustedes.",
              "Los extraño.",
              "Los echo de menos... y en Argentina es la forma más común.",
              "Tengo saudades de ustedes."
            ],
            correct: 1,
            explanation: "En América: extrañar (los extraño). \"Echar de menos\" es la forma peninsular. \"Saudade\" no existe en español."
          },
          {
            q: "\"Ele pisou na bola comigo\" →",
            options: [
              "Pisó en la bola conmigo.",
              "Metió la pata conmigo.",
              "Tomó el pelo conmigo.",
              "Echó un polvo conmigo."
            ],
            correct: 1,
            explanation: "Pisar na bola = meter la pata. Tomar el pelo = zoar. (Y la última opción... revisa el módulo 1 😅)"
          },
          {
            q: "\"A prova foi moleza\" →",
            options: [
              "El examen fue molleja.",
              "El examen fue pan comido.",
              "El examen fue mamón con azúcar.",
              "El examen fue blandito."
            ],
            correct: 1,
            explanation: "ser moleza / mamão com açúcar = ser pan comido. Cada lengua con su comida."
          },
          {
            q: "\"Deu tudo certo no final!\" →",
            options: [
              "¡Dio todo cierto al final!",
              "¡Todo salió bien al final!",
              "¡Dio todo correcto al final!",
              "¡Quedó todo cierto al final!"
            ],
            correct: 1,
            explanation: "dar certo = salir bien; dar errado = salir mal. \"Dar cierto\" no existe."
          },
          {
            q: "Un cliente entra en tu tienda en Madrid. ¿\"Pois não?\" se dice...?",
            options: [
              "¿Pues no?",
              "¿En qué puedo ayudarle?",
              "¿Pues sí?",
              "¿Qué quiere?"
            ],
            correct: 1,
            explanation: "\"¿Pues no?\" no significa nada ahí. La fórmula: \"¿En qué puedo ayudarle?\" o \"Dígame\"."
          },
          {
            q: "\"Faço questão de pagar o jantar\" →",
            options: [
              "Hago cuestión de pagar la cena.",
              "Insisto en pagar la cena.",
              "Pongo en cuestión pagar la cena.",
              "Hago la pregunta de pagar la cena."
            ],
            correct: 1,
            explanation: "fazer questão = insistir en / empeñarse en: \"insisto en pagar\". \"Hacer cuestión\" no existe."
          },
          {
            q: "\"Aí caiu a ficha\" →",
            options: [
              "Ahí cayó la ficha... imposible en español.",
              "Ahí caí en la cuenta.",
              "Ahí bajó el token.",
              "Ahí se cayó el registro."
            ],
            correct: 1,
            explanation: "cair a ficha = caer en la cuenta: \"caí en la cuenta de que...\". (En Argentina también se oye \"me cayó la ficha\" — préstamo feliz.)"
          }
        ]
      }
    },
    {
      id: "l5",
      title: "Muletillas, interjecciones y cortesía: el sonido de la conversación",
      duration: "13 min",
      content: `
<p>Los "ruiditos" de la conversación — muletillas, interjecciones, fórmulas de cortesía — son lo primero que te delata y lo último que se aprende. Esta lección los pone todos sobre la mesa.</p>

<h3>Interjecciones y ruiditos</h3>
<div class="table-scroll"><table>
<tr><th>Portugués</th><th>Español</th></tr>
<tr><td><span class="pt">né?</span></td><td><span class="es">¿no? / ¿verdad? / ¿viste? (Arg.) / ¿cierto? (Col.)</span></td></tr>
<tr><td><span class="pt">tá bom / tá</span></td><td><span class="es">vale (Es.) / dale (Arg.) / va, sale (Méx.) / bueno, ok</span></td></tr>
<tr><td><span class="pt">nossa!</span></td><td><span class="es">¡madre mía! (Es.) / ¡uy! / ¡no me digas! / ¡órale! (Méx.)</span></td></tr>
<tr><td><span class="pt">poxa / puxa</span></td><td><span class="es">vaya / caramba / uf</span></td></tr>
<tr><td><span class="pt">é mesmo?</span></td><td><span class="es">¿en serio? / ¿de verdad? / ¿posta? (Arg.)</span></td></tr>
<tr><td><span class="pt">pois é</span></td><td><span class="es">pues sí / así es / y sí (Arg.)</span></td></tr>
<tr><td><span class="pt">sei lá</span></td><td><span class="es">yo qué sé / ni idea / quién sabe</span></td></tr>
<tr><td><span class="pt">imagina! (de nada)</span></td><td><span class="es">¡no es nada! / ¡faltaba más! / ¡de nada!</span></td></tr>
<tr><td><span class="pt">oi? (não entendi)</span></td><td><span class="es">¿cómo? / ¿perdón?</span> — ¡"¿oi?" no existe!</td></tr>
</table></div>

<div class="ex">
<span class="wrong">— ¿Vienes mañana? — ¿Oi?</span>
<span class="right">— ¿Vienes mañana? — ¿Cómo? / ¿Perdón?</span>
<span class="gloss">El "oi?" de no-entendí es puro Brasil. En español: "¿cómo?", "¿perdón?" o "¿qué?" (informal). Y el "oi" de saludo = "hola".</span>
</div>

<h3>Muletillas por país: elige tu equipo</h3>
<ul>
<li><strong>España:</strong> <span class="es">o sea, vale, venga, en plan, ¿sabes?, bueno pues</span></li>
<li><strong>México:</strong> <span class="es">este..., o sea, ándale, órale, ¿va?, la neta</span></li>
<li><strong>Argentina:</strong> <span class="es">che, viste, dale, tipo, bueno, posta</span></li>
<li><strong>Colombia:</strong> <span class="es">pues, ¿cierto?, listo, de una, ¡qué pena! (= desculpa!)</span></li>
</ul>
<div class="callout note"><span class="callout-title">"¡Qué pena!" colombiano</span>
En Colombia, <span class="es">"¡qué pena!"</span> = desculpe/com licença (no "que tristeza"). Un colombiano que tropieza contigo dirá "¡qué pena!" — no está triste, está pidiendo disculpas.</div>

<h3>Cortesía formal: el correo y la reunión</h3>
<div class="table-scroll"><table>
<tr><th>Situación</th><th>Portugués (BR)</th><th>Español</th></tr>
<tr><td>saludo de correo</td><td>Prezado Sr. Gómez</td><td><span class="es">Estimado Sr. Gómez</span></td></tr>
<tr><td>despedida de correo</td><td>Atenciosamente</td><td><span class="es">Atentamente / Un cordial saludo</span></td></tr>
<tr><td>agradecimiento formal</td><td>Desde já agradeço</td><td><span class="es">De antemano, muchas gracias</span></td></tr>
<tr><td>pedir en una tienda</td><td>Queria ver aquele...</td><td><span class="es">Quisiera ver aquel... / ¿Me enseñas aquel...?</span></td></tr>
<tr><td>con licença (passando)</td><td>com licença</td><td><span class="es">permiso / con permiso</span></td></tr>
<tr><td>desculpa esquisita</td><td>foi mal!</td><td><span class="es">¡perdón! / ¡mala mía! (coloq. Am.)</span></td></tr>
</table></div>
<p>Trampa clásica de correo: <span class="pt">"Atenciosamente"</span> → <span class="es">"Atentamente"</span> (não "atenciosamente"). Y <span class="pt">"Prezado"</span> → <span class="es">"Estimado"</span> ("preciado" existe, pero significa "valioso").</p>

<h3>Responder al teléfono</h3>
<ul>
<li>España: <span class="es">¿Diga? / ¿Dígame?</span> · México: <span class="es">¿Bueno?</span> · Argentina: <span class="es">¿Hola?</span> · Colombia: <span class="es">¿Aló?</span></li>
<li>"Quem fala?" → <span class="es">¿De parte de quién?</span> (formal) / <span class="es">¿Quién habla?</span></li>
</ul>
`,
      quiz: {
        questions: [
          {
            q: "No entendiste lo que te dijeron. ¿Qué dices?",
            options: [
              "¿Oi?",
              "¿Cómo?",
              "¿Ahn?",
              "¿Oye?"
            ],
            correct: 1,
            explanation: "\"¿Cómo?\" o \"¿perdón?\" — el \"oi?\" brasileño no existe en español (y \"oye\" es para llamar la atención de alguien)."
          },
          {
            q: "En un correo formal, \"Prezado Sr. Gómez ... Atenciosamente\" →",
            options: [
              "Preciado Sr. Gómez ... Atenciosamente",
              "Estimado Sr. Gómez ... Atentamente",
              "Prezado Sr. Gómez ... Atentamente",
              "Querido Sr. Gómez ... Con cariño"
            ],
            correct: 1,
            explanation: "Estimado + Atentamente son las fórmulas estándar. \"Preciado\" = valioso; \"atenciosamente\" no existe."
          },
          {
            q: "Un colombiano te pisa sin querer y dice \"¡qué pena!\". Está...",
            options: [
              "lamentando una tragedia",
              "pidiéndote disculpas",
              "diciendo que le das pena",
              "burlándose"
            ],
            correct: 1,
            explanation: "En Colombia, \"¡qué pena!\" = desculpe. Regionalismo de cortesía esencial."
          },
          {
            q: "\"Com licença\" (para pasar entre la gente) →",
            options: [
              "Con licencia.",
              "Permiso. / Con permiso.",
              "Da licencia.",
              "Perdón la molestia... única opción."
            ],
            correct: 1,
            explanation: "\"(Con) permiso\" es la fórmula para pasar o retirarse. \"Licencia\" en español es el documento/permiso legal."
          },
          {
            q: "Suena el teléfono en Ciudad de México. Contestas:",
            options: [
              "¿Diga?",
              "¿Bueno?",
              "¿Aló?",
              "¿Pronto?"
            ],
            correct: 1,
            explanation: "México: ¿Bueno? · España: ¿Diga? · Colombia: ¿Aló? · Argentina: ¿Hola? — cada país con su fórmula."
          },
          {
            q: "\"Sei lá, acho que sim\" →",
            options: [
              "Sé allá, creo que sí.",
              "Yo qué sé, creo que sí.",
              "Lo sé, creo que sí.",
              "Sepa, creo que sí."
            ],
            correct: 1,
            explanation: "sei lá = yo qué sé / ni idea. Y \"acho que sim\" = creo que sí."
          }
        ]
      }
    },
    {
      id: "l6",
      title: "Léxico por país: elige tu español y sé coherente",
      duration: "13 min",
      content: `
<p>Última lección del curso: el pulido final. Un hablante avanzado no habla "español neutro de ningún lugar" — habla un español coherente, con léxico y tratamiento consistentes con una región, y sabe adaptar el registro.</p>

<h3>El léxico que cambia de país</h3>
<div class="table-scroll"><table>
<tr><th>Portugués</th><th>España</th><th>México</th><th>Argentina</th></tr>
<tr><td><span class="pt">ônibus</span></td><td>autobús</td><td>camión</td><td>colectivo / bondi</td></tr>
<tr><td><span class="pt">carro</span></td><td>coche</td><td>carro / coche</td><td>auto</td></tr>
<tr><td><span class="pt">celular</span></td><td>móvil</td><td>celular</td><td>celular</td></tr>
<tr><td><span class="pt">computador</span></td><td>ordenador</td><td>computadora</td><td>computadora</td></tr>
<tr><td><span class="pt">suco</span></td><td>zumo</td><td>jugo</td><td>jugo</td></tr>
<tr><td><span class="pt">dirigir</span></td><td>conducir</td><td>manejar</td><td>manejar</td></tr>
<tr><td><span class="pt">legal!</span></td><td>¡guay!</td><td>¡padre! / ¡chido!</td><td>¡genial! / ¡copado!</td></tr>
<tr><td><span class="pt">caneta</span></td><td>bolígrafo / boli</td><td>pluma</td><td>birome / lapicera</td></tr>
<tr><td><span class="pt">apartamento</span></td><td>piso</td><td>departamento</td><td>departamento</td></tr>
<tr><td><span class="pt">geladeira</span></td><td>nevera / frigorífico</td><td>refrigerador / refri</td><td>heladera</td></tr>
<tr><td><span class="pt">abacaxi</span></td><td>piña</td><td>piña</td><td>ananá</td></tr>
<tr><td><span class="pt">menino/a</span></td><td>niño/a, chaval(a)</td><td>niño/a, chavo/a</td><td>chico/a, pibe/piba</td></tr>
</table></div>

<div class="callout tip"><span class="callout-title">Consejo de coherencia</span>
Mezclar "vale, che, ahorita y ordenador" en la misma frase suena a collage. Elige el país de referencia (por trabajo, viajes o afinidad), aprende SU juego completo — tratamiento, muletillas, léxico — y mantén los demás en modo comprensión.</div>

<h3>Cuatro hábitos finales para sonar natural</h3>
<ol>
<li><strong>Responde con sí/no + detalle, no con eco del verbo:</strong> — ¿Viniste en metro? — <span class="es">Sí, en metro. / No, caminando.</span> El eco portugués ("Vim") existe en español pero es menos frecuente.</li>
<li><strong>Domina el "lo" (módulo 3):</strong> <span class="es">lo mejor, lo que dijiste, lo de ayer, no sabes lo difícil que fue</span> — señal inequívoca de nivel.</li>
<li><strong>Escribe con ¿ y ¡:</strong> los signos de apertura no son decorativos; omitirlos delata al escribir. En el habla, la entonación interrogativa arranca desde el inicio de la frase.</li>
<li><strong>Gestiona el error con gracia:</strong> el portuñol no se elimina, se administra. Cuando se te escape un "embarazada" por vergonzosa, ríete y di: <span class="es">"¡Perdón, mi portuñol me traicionó!"</span> — frase, por cierto, gramaticalmente impecable.</li>
</ol>

<h3>Tu plan de mantenimiento</h3>
<ul>
<li><strong>Consumo activo:</strong> pódcasts y series SIN subtítulos en portugués (usa subtítulos en español). Una serie de España, una de México, una de Argentina — el oído panhispánico se entrena con variedad.</li>
<li><strong>Lectura en voz alta:</strong> 10 minutos diarios aplicando la rutina del módulo 2.</li>
<li><strong>Conversación con corrección:</strong> pide explícitamente a tus interlocutores nativos que te corrijan los rasgos de estos 7 módulos — la mayoría no corrige por cortesía si no se lo pides.</li>
<li><strong>Repaso espaciado:</strong> vuelve a las tarjetas de cada módulo una vez por semana durante un mes, después una vez por mes.</li>
</ul>

<div class="callout note"><span class="callout-title">¡Enhorabuena!</span>
Si llegaste hasta aquí con todas las evaluaciones aprobadas, tu certificado te espera. Pero el título real se gana en la calle, el trabajo y la sobremesa — ahora ya sabes exactamente QUÉ vigilar. ¡Mucha suerte, y que el portuñol nunca más te traicione!</div>
`,
      quiz: {
        questions: [
          {
            q: "Estás en México y quieres sonar local diciendo \"legal, tá bom!\":",
            options: [
              "¡Guay, vale!",
              "¡Chido, va!",
              "¡Copado, dale!",
              "¡Legal, tá!"
            ],
            correct: 1,
            explanation: "México: chido/padre + \"va\"/\"sale\". Guay/vale = España; copado/dale = Argentina. Coherencia regional: elige un juego completo."
          },
          {
            q: "\"Peguei o ônibus com meu computador e meu celular\" en Madrid:",
            options: [
              "Cogí el autobús con mi ordenador y mi móvil.",
              "Tomé el colectivo con mi computadora y mi celular.",
              "Agarré el camión con mi laptop y mi célular.",
              "Cogí el bondi con mi ordenador y mi celular."
            ],
            correct: 0,
            explanation: "Juego completo de España: coger (allí es neutro), autobús, ordenador, móvil. La opción 2 es el juego argentino; mezclarlos suena a collage."
          },
          {
            q: "\"Suco de abacaxi\" en Buenos Aires:",
            options: [
              "zumo de piña",
              "jugo de ananá",
              "zumo de ananá",
              "jugo de piña... y es la única forma en Argentina."
            ],
            correct: 1,
            explanation: "Argentina: jugo de ananá. España: zumo de piña. México: jugo de piña."
          },
          {
            q: "¿Cuál frase mezcla léxicos regionales de forma incoherente?",
            options: [
              "Vale, cojo el autobús y te llamo al móvil.",
              "Dale, tomo el colectivo y te llamo al celular.",
              "Vale che, agarro el camión y te llamo al ordenador ahorita.",
              "Va, tomo el camión y te marco al celular."
            ],
            correct: 2,
            explanation: "\"Vale\" (Es.) + \"che\" (Arg.) + \"camión\" (Méx.) + \"ordenador\" (Es.) + \"ahorita\" (Méx.) — cinco países en una frase. Las otras son coherentes."
          },
          {
            q: "Al escribir en español, los signos ¿ y ¡...",
            options: [
              "son opcionales y anticuados",
              "son obligatorios: omitirlos delata la escritura extranjera",
              "solo se usan en España",
              "solo aparecen en textos formales"
            ],
            correct: 1,
            explanation: "Los signos de apertura son parte de la ortografía estándar en todo el mundo hispánico. ¿Vienes? ¡Qué bien!"
          },
          {
            q: "Según el curso, ¿cuál es la mejor estrategia final con el portuñol?",
            options: [
              "Eliminarlo por completo antes de hablar en público",
              "Administrarlo: saber qué vigilar, pedir corrección y reírse del error ocasional",
              "Evitar hablar con nativos hasta dominar todo",
              "Usar solo vocabulario que coincida en las dos lenguas"
            ],
            correct: 1,
            explanation: "El portuñol se gestiona, no se extirpa: conciencia de los puntos débiles + corrección pedida + humor. Esa es la mentalidad del hablante avanzado."
          }
        ]
      }
    }
  ],
  flashcards: [
    { front: "tem um mercado perto", back: "hay un mercado cerca<small>existência = haber, sempre singular</small>" },
    { front: "tinha muita gente", back: "había mucha gente<small>nunca \"habían\"</small>" },
    { front: "estou com fome / pressa / sono", back: "tengo hambre / prisa / sueño" },
    { front: "todo mundo", back: "todo el mundo" },
    { front: "cafezinho / um pouquinho", back: "cafecito / un poquito<small>-ito, não -inho</small>" },
    { front: "fiquei em casa / onde fica?", back: "me quedé en casa / ¿dónde queda?" },
    { front: "ficou triste / ficou rico / ficou surdo", back: "se puso triste / se hizo rico / se quedó sordo" },
    { front: "ficou louco (mudança duradoura)", back: "se volvió loco" },
    { front: "virou um problema", back: "se convirtió en un problema" },
    { front: "¿Quedamos a las ocho?", back: "= Marcamos encontro às oito?<small>quedar con alguien = combinar</small>" },
    { front: "é casado (uso cotidiano)", back: "está casado" },
    { front: "ser aburrido / estar aburrido", back: "ser chato / estar entediado" },
    { front: "ser listo / estar listo", back: "ser esperto / estar pronto" },
    { front: "a festa É na minha casa", back: "la fiesta ES en mi casa<small>evento = ser; localização de coisa = estar</small>" },
    { front: "saudade de você", back: "te echo de menos (Es.) / te extraño (Am.)" },
    { front: "pisar na bola / zoar alguém", back: "meter la pata / tomar el pelo" },
    { front: "deu certo!", back: "¡salió bien!<small>nunca \"dio cierto\"</small>" },
    { front: "faço questão de pagar", back: "insisto en pagar" },
    { front: "oi? (não entendi)", back: "¿cómo? / ¿perdón?" },
    { front: "Atenciosamente (e-mail)", back: "Atentamente / Un cordial saludo" },
    { front: "com licença (passando)", back: "(con) permiso" },
    { front: "ônibus: Es. / Méx. / Arg.", back: "autobús / camión / colectivo" },
    { front: "legal!: Es. / Méx. / Arg.", back: "¡guay! / ¡chido! / ¡genial, copado!" }
  ]
});
