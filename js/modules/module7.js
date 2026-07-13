/* Módulo 7 — Del avanzado al nativo */
window.COURSE_MODULES = window.COURSE_MODULES || [];
window.COURSE_MODULES.push({
  id: "m7",
  icon: "🏆",
  title: "Del avanzado al nativo: calcos, expresiones y registro",
  description: "Los últimos calcos que sobreviven en tu español, el verbo \"ficar\" repartido en cinco verbos, las expresiones idiomáticas equivalentes y cómo sonar natural en cada país.",
  lessons: [
    {
      id: "l1",
      title: "Hay, no \"tiene\": los calcos estructurales finales",
      duration: "13 min",
      content: `
<p>Esta lección caza los calcos que sobreviven hasta en hablantes casi bilingües — estructuras portuguesas tan automáticas que se cuelan sin ruido.</p>

<h3>1. El \"ter\" existencial → haber</h3>
<p>El brasileño dice <span class="pt">\"tem um mercado aqui perto\"</span>. El español existencial usa <strong>haber</strong>, impersonal e invariable:</p>
<div class="ex">
<span class="wrong">Tiene un mercado aquí cerca. / Tenía muchas personas en la fiesta.</span>
<span class="right">Hay un mercado aquí cerca. / Había muchas personas en la fiesta.</span>
<span class="gloss">Y siempre en singular: \"había muchas personas\" (não \"habían\"). En pasado: hubo/había; en futuro: habrá. \"Tener\" solo para posesión.</span>
</div>

<h3>2. \"Todo mundo\" → todo el mundo</h3>
<div class="ex">
<span class="wrong">Todo mundo lo sabe.</span>
<span class="right">Todo el mundo lo sabe. / Todos lo saben.</span>
<span class="gloss">Con artículo. Igual que \"todo el día\" (o dia todo), \"toda la noche\".</span>
</div>

<h3>3. \"Está com fome\" → tener hambre</h3>
<p>Estados físicos y emocionales: el portugués usa <span class="pt">estar com</span>; el español usa <strong>tener</strong>:</p>
<div class="table-scroll"><table>
<tr><th>Portugués</th><th>Español</th></tr>
<tr><td><span class="pt">estou com fome / sede</span></td><td><span class="es">tengo hambre / sed</span></td></tr>
<tr><td><span class="pt">estou com frio / calor</span></td><td><span class="es">tengo frío / calor</span></td></tr>
<tr><td><span class="pt">estou com pressa</span></td><td><span class="es">tengo prisa</span></td></tr>
<tr><td><span class="pt">estou com medo</span></td><td><span class="es">tengo miedo</span></td></tr>
<tr><td><span class="pt">estou com sono</span></td><td><span class="es">tengo sueño</span></td></tr>
<tr><td><span class="pt">estou com dor de cabeça</span></td><td><span class="es">me duele la cabeza</span></td></tr>
</table></div>

<h3>4. Las edades: tener, no ser</h3>
<div class="ex">
<span class="wrong">Estoy con 35 años. / Soy 35 años.</span>
<span class="right">Tengo 35 años.</span>
<span class="gloss">Y la pregunta: \"¿Cuántos años tienes?\" — nunca \"¿cuántos años usted tiene?\" con la sintaxis portuguesa de \"quantos anos você tem\" palabra por palabra... que casualmente aquí coincide, pero el error común es \"¿qué edad eres?\".</span>
</div>

<h3>5. \"Gente\" y otras palabras colectivas</h3>
<ul>
<li><span class="es">La gente <strong>es</strong> amable</span> — singular, como en portugués culto ("a gente é" no sentido "as pessoas são"). Nunca "la gente son".</li>
<li><span class="pt">a gente</span> (= nós) → <span class="es">nosotros</span> (módulo 4).</li>
<li><span class="pt">pessoal</span> (vocativo: "oi, pessoal!") → <span class="es">chicos, gente ("¡hola, gente!"), muchachos</span>.</li>
</ul>

<h3>6. Los diminutivos: -ito, no -inho</h3>
<div class="table-scroll"><table>
<tr><th>Portugués</th><th>Español</th></tr>
<tr><td><span class="pt">cafezinho</span></td><td><span class="es">cafecito</span></td></tr>
<tr><td><span class="pt">um pouquinho</span></td><td><span class="es">un poquito</span></td></tr>
<tr><td><span class="pt">agorinha</span></td><td><span class="es">ahorita</span> (Méx., Caribe)</td></tr>
<tr><td><span class="pt">devagarinho</span></td><td><span class="es">despacito</span></td></tr>
</table></div>
<p>El diminutivo español es tan afectivo como el brasileño — pero el sufijo es <strong>-ito/-ita</strong> (o -illo, -ico según la región). "Cafezinho" dicho en español marca portuñol instantáneo.</p>
`
    },
    {
      id: "l2",
      title: "\"Ficar\": un verbo portugués, cinco verbos españoles",
      duration: "14 min",
      content: `
<p>El verbo más camaleónico del portugués no tiene equivalente único. Cada uso de <span class="pt">ficar</span> se reparte entre varios verbos españoles — y elegir el correcto es un termómetro exacto de nivel.</p>

<h3>El mapa completo</h3>
<div class="table-scroll"><table>
<tr><th>Uso de \"ficar\"</th><th>Español</th><th>Ejemplo</th></tr>
<tr><td>permanecer en un lugar</td><td><span class="es">quedarse</span></td><td>Me quedé en casa. (fiquei em casa)</td></tr>
<tr><td>ubicación</td><td><span class="es">quedar / estar</span></td><td>¿Dónde queda la estación? (onde fica)</td></tr>
<tr><td>sobrar / restar</td><td><span class="es">quedar</span></td><td>Quedan dos entradas. (ficam duas)</td></tr>
<tr><td>ropa / apariencia</td><td><span class="es">quedar + bien/mal</span></td><td>Ese color te queda bien. (fica bem em você)</td></tr>
<tr><td>emoción pasajera</td><td><span class="es">ponerse</span></td><td>Se puso triste / rojo / nervioso. (ficou triste)</td></tr>
<tr><td>cambio duradero, a menudo negativo</td><td><span class="es">volverse</span></td><td>Se volvió loco / muy desconfiado. (ficou louco)</td></tr>
<tr><td>resultado de un proceso (a veces involuntario)</td><td><span class="es">quedarse + adj.</span></td><td>Se quedó calvo / sordo / sin dinero. (ficou careca)</td></tr>
<tr><td>cambio por esfuerzo propio</td><td><span class="es">hacerse</span></td><td>Se hizo rico / famoso. (ficou rico)</td></tr>
<tr><td>transformación completa</td><td><span class="es">convertirse en</span></td><td>Se convirtió en un problema. (virou um problema)</td></tr>
<tr><td>\"ficar com\" alguém (paquera BR)</td><td><span class="es">enrollarse con</span> (Esp.), <span class="es">estar/andar con</span></td><td>—</td></tr>
</table></div>

<div class="ex">
<span class="wrong">Fiqué en casa. / Se ficó triste. / La estación fica cerca.</span>
<span class="right">Me quedé en casa. / Se puso triste. / La estación queda cerca.</span>
<span class="gloss">\"Ficar\" no existe en español bajo ninguna forma. La decisión clave: ¿permanencia/resultado (quedar/quedarse) o cambio de estado (ponerse/volverse/hacerse)?</span>
</div>

<h3>El algoritmo de decisión</h3>
<ol>
<li>¿Es lugar o permanencia? → <span class="es">quedar(se)</span></li>
<li>¿Es emoción o estado pasajero? → <span class="es">ponerse</span> (contento, serio, pálido)</li>
<li>¿Es cambio profundo de carácter? → <span class="es">volverse</span> (egoísta, loco)</li>
<li>¿Es logro con esfuerzo? → <span class="es">hacerse</span> (médico, rico, vegetariano)</li>
<li>¿Es estado resultante (pérdida)? → <span class="es">quedarse</span> (ciego, viudo, sin trabajo)</li>
</ol>

<h3>Su primo: \"virar\" → convertirse en / volverse</h3>
<div class="ex">
<span class="wrong">El proyecto viró una pesadilla.</span>
<span class="right">El proyecto se convirtió en una pesadilla.</span>
<span class="gloss">\"Virar\" español = girar/dar vuelta. La transformación es \"convertirse en\" (+ sustantivo) o \"volverse\" (+ adjetivo).</span>
</div>
`
    },
    {
      id: "l3",
      title: "Expresiones idiomáticas: di lo mismo, pero en español",
      duration: "13 min",
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
<tr><th>Portugués</th><th>Español</th><th>Literal</th></tr>
<tr><td><span class="pt">custar os olhos da cara</span></td><td><span class="es">costar un ojo de la cara</span></td><td>¡un solo ojo!</td></tr>
<tr><td><span class="pt">falar pelos cotovelos</span></td><td><span class="es">hablar por los codos</span></td><td>igual ✓</td></tr>
<tr><td><span class="pt">não pregar o olho</span></td><td><span class="es">no pegar ojo</span></td><td>casi igual</td></tr>
<tr><td><span class="pt">pisar na bola</span></td><td><span class="es">meter la pata</span></td><td>¡otra imagen!</td></tr>
<tr><td><span class="pt">zoar / tirar sarro</span></td><td><span class="es">tomar el pelo</span></td><td>"pegar no cabelo"</td></tr>
<tr><td><span class="pt">estar de saco cheio</span></td><td><span class="es">estar hasta las narices / hasta la coronilla</span></td><td>—</td></tr>
<tr><td><span class="pt">ser moleza / mamão com açúcar</span></td><td><span class="es">ser pan comido</span></td><td>"pão comido"</td></tr>
<tr><td><span class="pt">estar no mundo da lua</span></td><td><span class="es">estar en las nubes</span></td><td>nas nuvens</td></tr>
<tr><td><span class="pt">quebrar um galho</span></td><td><span class="es">sacar de un apuro / hacer un favor</span></td><td>—</td></tr>
<tr><td><span class="pt">dar um jeitinho</span></td><td><span class="es">apañárselas / ingeniárselas</span></td><td>—</td></tr>
<tr><td><span class="pt">de vez em quando</span></td><td><span class="es">de vez en cuando</span></td><td>igual ✓</td></tr>
<tr><td><span class="pt">custe o que custar</span></td><td><span class="es">cueste lo que cueste</span></td><td>igual ✓</td></tr>
</table></div>

<div class="callout warn"><span class="callout-title">Trampas de cortesía</span>
<span class="pt">\"Pois não?\"</span> (= posso ajudar?) NO es \"¿pues no?\" — di <span class="es">\"¿En qué puedo ayudarle?\" / \"Dígame\"</span>. Y para responder \"pois não!\" (= claro!): <span class="es">\"¡Claro!\", \"¡Cómo no!\", \"¡Por supuesto!\"</span> — nota que <span class="es">\"¡cómo no!\"</span> es afirmativo, otra pequeña paradoja hispánica.</div>

<h3>Interjecciones y ruiditos de la conversación</h3>
<div class="table-scroll"><table>
<tr><th>Portugués</th><th>Español</th></tr>
<tr><td><span class="pt">né?</span></td><td><span class="es">¿no? / ¿verdad? / ¿viste? (Arg.)</span></td></tr>
<tr><td><span class="pt">tá bom / tá</span></td><td><span class="es">vale (Esp.) / dale (Arg.) / bueno, ok</span></td></tr>
<tr><td><span class="pt">nossa!</span></td><td><span class="es">¡madre mía! / ¡uy! / ¡no me digas!</span></td></tr>
<tr><td><span class="pt">poxa / puxa</span></td><td><span class="es">vaya / caramba / uf</span></td></tr>
<tr><td><span class="pt">é mesmo?</span></td><td><span class="es">¿en serio? / ¿de verdad?</span></td></tr>
<tr><td><span class="pt">pois é</span></td><td><span class="es">pues sí / así es / y sí (Arg.)</span></td></tr>
</table></div>
<p>Estos ruiditos son lo primero que te delata y lo último que se aprende. Elige el juego de muletillas <strong>del país donde vives</strong> y adóptalo entero.</p>
`
    },
    {
      id: "l4",
      title: "Registro y variación: elige tu español",
      duration: "12 min",
      content: `
<p>Última lección: el pulido final. Un hablante avanzado no habla \"español neutro de ningún lugar\" — habla un español coherente, con léxico y tratamiento consistentes con una región, y sabe adaptar el registro.</p>

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
</table></div>

<div class="callout tip"><span class="callout-title">Consejo de coherencia</span>
Mezclar \"vale, che, ahorita y ordenador\" en la misma frase suena a collage. Elige el país de referencia (por trabajo, viajes o afinidad), aprende SU juego completo — tratamiento, muletillas, léxico — y mantén los demás en modo comprensión.</div>

<h3>Falsa formalidad: los tres niveles</h3>
<div class="table-scroll"><table>
<tr><th>Situación</th><th>Portugués (BR)</th><th>Español</th></tr>
<tr><td>correo formal</td><td>Prezado Sr. / Atenciosamente</td><td><span class="es">Estimado Sr. / Atentamente</span></td></tr>
<tr><td>pedir en una tienda</td><td>Queria ver aquele...</td><td><span class="es">Quisiera ver aquel... / ¿Me enseñas aquel...?</span></td></tr>
<tr><td>con amigos</td><td>E aí, beleza?</td><td><span class="es">¿Qué tal? / ¿Qué onda? (Méx.) / ¿Todo bien? / ¿Qué hacés? (Arg.)</span></td></tr>
</table></div>
<p>Trampa clásica de correo: <span class="pt">\"Atenciosamente\"</span> → <span class="es">\"Atentamente\"</span> (não \"atenciosamente\"). Y <span class="pt">\"Prezado\"</span> → <span class="es">\"Estimado\"</span> (\"preciado\" existe, pero significa \"valioso\").</p>

<h3>Sonar natural: cuatro hábitos finales</h3>
<ol>
<li><strong>Responde con el verbo, no con \"sí\":</strong> — ¿Viniste en metro? — <span class="es">Sí, en metro / No, caminando.</span> El eco del verbo (\"Vim\" → \"Vine\") es menos frecuente en español que en portugués; el español repite el complemento o usa sí/no + detalle.</li>
<li><strong>Domina \"lo\":</strong> lo mejor, lo importante, lo que dijiste, lo de ayer. El neutro \"lo\" no existe en portugués (\"o melhor\" usa artículo normal) y usarlo con soltura es señal inequívoca de nivel: <span class="es">\"Lo bueno de vivir aquí es la comida.\"</span></li>
<li><strong>Pregunta con doble apertura:</strong> los signos ¿? y ¡! no son decorativos — al escribir, úsalos siempre. En el habla, la entonación sube desde el inicio de la pregunta.</li>
<li><strong>Acepta el error con gracia:</strong> el portuñol no se elimina, se gestiona. Cuando te salga un \"embarazada\" por vergonzosa, ríete y di: <span class="es">\"¡Perdón, mi portuñol me traicionó!\"</span> — frase, por cierto, gramaticalmente impecable.</li>
</ol>

<div class="callout note"><span class="callout-title">¿Y ahora qué?</span>
Consumo activo: pódcasts y series SIN subtítulos en portugués (usa subtítulos en español), lectura en voz alta 10 minutos al día aplicando el módulo 2, y —lo más eficaz— conversación regular con nativos del país que elegiste, pidiéndoles explícitamente que te corrijan los rasgos de estos 7 módulos. ¡Enhorabuena por llegar hasta aquí!</div>
`
    }
  ],
  quiz: {
    title: "Cuestionario final — Del avanzado al nativo",
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
        explanation: "Existencia = haber (hay), no tener. Y \"fila\" en español es \"cola\". Bonus: haber existencial es siempre singular (había, no habían)."
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
        q: "\"Ela ficou triste com a notícia\" →",
        options: [
          "Ella se quedó triste con la noticia.",
          "Ella se puso triste con la noticia.",
          "Ella se hizo triste con la noticia.",
          "Ella ficó triste con la noticia."
        ],
        correct: 1,
        explanation: "Emoción pasajera = ponerse (se puso triste, rojo, nervioso). Quedarse = estado resultante duradero (se quedó ciego); hacerse = logro (se hizo rico)."
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
        q: "\"Ele pisou na bola comigo\" (= dio mancada) →",
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
        q: "Un cliente entra en tu tienda en Madrid. ¿\"Pois não?\" se dice...?",
        options: [
          "¿Pues no?",
          "¿En qué puedo ayudarle?",
          "¿Pues sí?",
          "¿Qué quiere?"
        ],
        correct: 1,
        explanation: "\"¿Pues no?\" no significa nada ahí (o suena a \"então não\"). La fórmula: \"¿En qué puedo ayudarle?\" o \"Dígame\"."
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
        q: "\"O melhor desta cidade é a comida\" — la traducción con el neutro correcto:",
        options: [
          "El mejor de esta ciudad es la comida.",
          "Lo mejor de esta ciudad es la comida.",
          "La mejor de esta ciudad es la comida.",
          "O melhor de esta ciudad es la comida."
        ],
        correct: 1,
        explanation: "El artículo neutro \"lo\" + adjetivo (lo mejor, lo importante, lo bueno) no tiene equivalente portugués y es marca de nivel alto."
      },
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
      }
    ]
  }
});
