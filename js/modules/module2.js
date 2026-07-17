/* Módulo 2 — Pronunciación */
window.COURSE_MODULES = window.COURSE_MODULES || [];
window.COURSE_MODULES.push({
  id: "m2",
  icon: "🗣️",
  title: "Pronunciación: borra el acento brasileño",
  description: "Las vocales que no se reducen, las consonantes que no se ablandan, las sílabas tónicas que cambian de lugar y el ritmo de metralleta. Aquí es donde el oído nativo te detecta en tres segundos.",
  lessons: [
    {
      id: "l1",
      title: "Las vocales: cinco, firmes y sin nasalidad",
      duration: "14 min",
      content: `
<p>El portugués brasileño tiene <strong>12 o más sonidos vocálicos</strong> (7 orales + 5 nasales, según el análisis). El español tiene exactamente <strong>5</strong>: /a/, /e/, /i/, /o/, /u/. Siempre iguales, en cualquier posición. Esta diferencia es la huella digital más clara del acento brasileño.</p>

<h3>Error nº 1: reducir las vocales finales</h3>
<p>En portugués brasileño, la <strong>-e</strong> final suena /i/ y la <strong>-o</strong> final suena /u/: "noite" → <em>noiti</em>, "carro" → <em>carru</em>. Al hablar español, ese hábito produce:</p>
<div class="ex">
<span class="wrong">"noche" pronunciado NÓ-chi · "vaso" pronunciado VÁ-su · "grande" pronunciado GRAN-dyi</span>
<span class="right">NO-che · VA-so · GRAN-de — con la e y la o plenas, claras, tensas.</span>
<span class="gloss">En español, las vocales átonas NUNCA se reducen ni cambian de timbre. "Noche" termina con la misma /e/ de "elefante".</span>
</div>

<div class="callout tip"><span class="callout-title">Ejercicio del espejo</span>
Di lentamente: <span class="es">"Este restaurante grande cierra de noche"</span>. Cada <strong>e</strong> y cada <strong>o</strong> final debe sonar exactamente como suena al inicio de palabra. Grábate y compárate con un audio nativo: la diferencia te va a sorprender.</div>

<h3>Error nº 2: nasalizar antes de m/n</h3>
<p>En portugués, una vocal seguida de consonante nasal se nasaliza: "banco", "campo", "santo" tienen la /ã/ nasal. En español <strong>las vocales nunca se nasalizan</strong>: "banco" se dice con /a/ oral pura + /n/ bien articulada.</p>
<div class="ex">
<span class="wrong">"San Juan" con las vocales nasales del portugués "são"</span>
<span class="right">San Juan con /a/ y /u/ orales: sannn-juannn — la n se pronuncia como consonante plena.</span>
<span class="gloss">Truco: exagera la consonante n final ("pan", "bien", "con") tocando con la lengua los alvéolos. Eso impide nasalizar la vocal.</span>
</div>

<h3>Error nº 3: abrir las vocales e/o</h3>
<p>El portugués distingue <span class="pt">avô/avó</span>, <span class="pt">este/esté</span> — vocales cerradas y abiertas cambian el significado. El español no tiene ese contraste: la /e/ y la /o/ son <strong>medias, estables</strong>. Si aplicas la apertura portuguesa (por ejemplo en "café", "hotel", "sol"), suenas inconfundiblemente brasileño.</p>
<ul>
<li><span class="es">café</span> — la é es media, no la /ɛ/ abierta de <span class="pt">café</span> carioca.</li>
<li><span class="es">sol, gol, farol</span> — la o es media, no la /ɔ/ abierta de <span class="pt">sol</span>.</li>
</ul>

<h3>Los diptongos: el español ama lo que el portugués deshizo</h3>
<p>Muchas palabras que en portugués tienen una vocal simple, en español conservan un diptongo — y los brasileños tienden a "aplanarlo":</p>
<div class="table-scroll"><table>
<tr><th>Español (diptongo)</th><th>Portugués</th><th>Error típico</th></tr>
<tr><td><span class="es">tiempo</span></td><td><span class="pt">tempo</span></td><td>decir "tempo"</td></tr>
<tr><td><span class="es">puerta</span></td><td><span class="pt">porta</span></td><td>decir "porta"</td></tr>
<tr><td><span class="es">siempre</span></td><td><span class="pt">sempre</span></td><td>decir "sempre"</td></tr>
<tr><td><span class="es">fuego</span></td><td><span class="pt">fogo</span></td><td>decir "fogo"</td></tr>
<tr><td><span class="es">cuento</span></td><td><span class="pt">conto</span></td><td>decir "conto"</td></tr>
<tr><td><span class="es">nieve</span></td><td><span class="pt">neve</span></td><td>decir "neve"</td></tr>
</table></div>
<p>Y el fenómeno inverso: verbos que diptongan al conjugarse — <span class="es">pensar → pienso</span>, <span class="es">poder → puedo</span>, <span class="es">querer → quiero</span>. El hablante de portuñol conjuga "penso", "podo", "quero". Si ya dominas la conjugación, vigila la <strong>pronunciación plena</strong> del diptongo: /pjén-so/, no /pén-so/.</p>
`,
      quiz: {
        questions: [
          {
            q: "¿Cuántos sonidos vocálicos tiene el español?",
            options: [
              "Doce, como el portugués",
              "Cinco, siempre estables",
              "Siete orales y cinco nasales",
              "Depende del país"
            ],
            correct: 1,
            explanation: "Exactamente cinco: /a e i o u/, sin nasales, sin contraste abierto/cerrado, sin reducción átona."
          },
          {
            q: "El error brasileño típico al decir \"noche\" es pronunciar:",
            options: [
              "NO-che, con e plena",
              "NÓ-chi, reduciendo la e final a i",
              "NO-shé, acentuando la última",
              "ÑO-che"
            ],
            correct: 1,
            explanation: "La reducción de -e final a /i/ (y de -o a /u/) es el hábito brasileño nº 1. En español las átonas nunca cambian de timbre."
          },
          {
            q: "¿Qué pasa con las vocales de \"banco\" en español?",
            options: [
              "La a se nasaliza como en portugués",
              "La a permanece oral y la n se articula como consonante plena",
              "La o final se reduce a u",
              "La a y la o se nasalizan"
            ],
            correct: 1,
            explanation: "El español no nasaliza vocales. /BAN-ko/: a oral + n alveolar bien articulada + o final plena."
          },
          {
            q: "\"Café\" y \"sol\" en español se pronuncian con:",
            options: [
              "é y ó abiertas, como en Río de Janeiro",
              "e y o medias, sin contraste abierto/cerrado",
              "e cerrada y o abierta",
              "vocales nasales"
            ],
            correct: 1,
            explanation: "El español no tiene el contraste avó/avô. Sus e/o son medias y estables — aplicar la apertura portuguesa delata el acento."
          },
          {
            q: "¿Cuál serie muestra el diptongo español que el portugués deshizo?",
            options: [
              "tempo → tiempo, porta → puerta, fogo → fuego",
              "tiempo → tempo, puerta → porta",
              "casa → casa, mesa → mesa",
              "noite → noche, leite → leche"
            ],
            correct: 0,
            explanation: "El español conserva diptongos ie/ue donde el portugués tiene e/o: tiempo, puerta, fuego, siempre, nieve, cuento."
          },
          {
            q: "Conjugas \"poder\" en primera persona. ¿Cuál es la pronunciación correcta?",
            options: [
              "/PO-do/",
              "/PUE-do/, con el diptongo bien pleno",
              "/PO-du/",
              "/PWE-du/"
            ],
            correct: 1,
            explanation: "puedo: diptongo /ue/ pleno + o final sin reducir. Ni \"podo\" (calco) ni \"puedu\" (reducción brasileña)."
          }
        ]
      }
    },
    {
      id: "l2",
      title: "T, D, S y B/V: las consonantes que se ablandan solas",
      duration: "14 min",
      content: `
<p>Cuatro hábitos consonánticos del portugués brasileño persiguen al hablante de español avanzado. Esta lección ataca los que ocurren <strong>sin que lo notes</strong>, porque tu boca los hace en automático.</p>

<h3>1. La palatalización de t/d — el error nº 1 de Brasil</h3>
<p>En portugués brasileño, <strong>t</strong> y <strong>d</strong> antes de /i/ se convierten en "tch" y "dj": "tia" → <em>tchia</em>, "dia" → <em>djia</em>. En español ese fenómeno <strong>no existe</strong>:</p>
<div class="ex">
<span class="wrong">"día" pronunciado DJÍ-a · "tienda" pronunciado TCHIÉN-da · "tarde" pronunciado TAR-dji</span>
<span class="right">DÍ-a, TIÉN-da, TAR-de — t y d siempre duras, con la lengua en los dientes.</span>
<span class="gloss">Practica con: "¿Dónde está el diente de Diego?" — cada d y t debe salir limpia, sin africación.</span>
</div>
<div class="callout warn"><span class="callout-title">Dónde se esconde</span>
El hábito ataca en: <strong>-te/-de finales</strong> (noche... ¡no! — "noche" termina en -che; piensa en "tarde", "gente", "grande", "verde") y en <strong>ti/di internos</strong> ("tímido", "medicina", "partido"). "Partido" dicho "partchidu" acumula tres errores brasileños en una palabra.</div>

<h3>2. La s siempre sorda — "casa" no es "caza" brasileña</h3>
<p>En portugués, la s entre vocales suena /z/: "casa" = <em>caza</em>. En español <strong>la s es siempre sorda</strong> /s/, en cualquier posición:</p>
<div class="ex">
<span class="wrong">"casa" con z sonora · "presidente" con z · "música" con z</span>
<span class="right">/KA-sa/, /pre-si-DEN-te/, /MU-si-ka/ — s de "sapo" en todas partes.</span>
<span class="gloss">Además, la z y la c (ante e/i) españolas también suenan /s/ en América (seseo) o /θ/ en gran parte de España. Nunca /z/ sonora.</span>
</div>

<h3>3. B y V: la misma letra para el oído</h3>
<p>En español, <span class="es">b</span> y <span class="es">v</span> se pronuncian <strong>exactamente igual</strong> (/b/ o su versión suave /β/ entre vocales). Mantener la /v/ labiodental portuguesa en "vaca", "vino", "favor" es un acento extranjero clásico — suave, pero constante.</p>
<ul>
<li><span class="es">vaca</span> y <span class="es">baca</span> suenan idénticas: /BA-ka/.</li>
<li>Entre vocales, relaja: <span class="es">la vida</span> con b suave, sin cerrar del todo los labios.</li>
<li>Bonus: <span class="es">tuvo</span> y <span class="es">tubo</span> — homófonos perfectos.</li>
</ul>

<h3>4. La d entre vocales se suaviza</h3>
<p>La <span class="es">d</span> intervocálica española es suave, casi como la "th" inglesa de "the": <span class="es">cansado</span> ≈ /kan-SA-ðo/, <span class="es">nada</span> ≈ /NA-ða/. Pronunciarla dura como la d portuguesa suena robótico; omitirla del todo ("cansao", "na") es coloquial de España — reconócelo, pero no lo imites todavía.</p>

<h3>Frase de calibración diaria</h3>
<div class="callout tip"><span class="callout-title">Di esto cada mañana</span>
<span class="es">"El presidente y su tía Verónica visitaron la tienda verde toda la tarde."</span><br>
Control: s de "presidente/visitaron" sorda · t/d de "tía/tienda/tarde/toda" duras · v de "Verónica/verde/visitaron" = /b/ · vocales finales plenas. Una frase, cuatro hábitos.</div>
`,
      quiz: {
        questions: [
          {
            q: "¿Cuál es el error de pronunciación MÁS delatador del brasileño al decir \"tarde\"?",
            options: [
              "Pronunciar la r como vibrante",
              "Decir \"TAR-dji\", palatalizando la d y reduciendo la e final",
              "Acentuar la primera sílaba",
              "Alargar la a"
            ],
            correct: 1,
            explanation: "Los dos hábitos brasileños juntos: d+e final → \"dji\". En español: TAR-de, con d dura y e plena."
          },
          {
            q: "¿Cómo se pronuncia la s de \"presidente\" en español?",
            options: [
              "Como /z/ sonora, igual que en portugués",
              "Como /s/ sorda, siempre",
              "Como /ʃ/ (sh)",
              "Depende de la región: a veces /z/, a veces /s/"
            ],
            correct: 1,
            explanation: "La s intervocálica española es SIEMPRE sorda. \"Casa\" español suena como \"cassa\", nunca como la \"casa\" portuguesa con /z/."
          },
          {
            q: "\"Vaca\" y \"baca\" en español:",
            options: [
              "Se pronuncian igual",
              "Se distinguen: v labiodental, b bilabial",
              "Solo se distinguen en España",
              "Solo se distinguen al inicio de frase"
            ],
            correct: 0,
            explanation: "B y v representan el mismo fonema /b/ en todo el mundo hispánico. La /v/ labiodental es marca de acento extranjero."
          },
          {
            q: "La palabra \"partido\" dicha por un brasileño descuidado (\"partchidu\") acumula:",
            options: [
              "un error: la u final",
              "dos errores: t palatalizada y o reducida",
              "tres errores: t palatalizada (\"tch\"), d... espera, la d no palataliza ahí — dos errores",
              "ningún error, así se dice"
            ],
            correct: 1,
            explanation: "\"parTIdo\": la t ante i palatalizada (tch) + la -o final reducida a /u/. Correcto: /par-TI-do/ con t dura y o plena."
          },
          {
            q: "La d de \"cansado\" en español natural es:",
            options: [
              "dura, como la d portuguesa de \"dado\"",
              "suave, casi como la th inglesa de \"the\"",
              "muda: \"cansao\" es la única forma correcta",
              "una r suave"
            ],
            correct: 1,
            explanation: "La d intervocálica se relaja a /ð/. Dura suena robótica; omitirla (\"cansao\") es coloquial peninsular."
          },
          {
            q: "¿Qué par es homófono (suena idéntico) en español?",
            options: [
              "tuvo / tubo",
              "pero / perro",
              "caro / carro",
              "casa / caza (en España)"
            ],
            correct: 0,
            explanation: "b = v, así que tuvo/tubo son idénticos. Pero/perro y caro/carro se distinguen por la r. En España casa/caza se distinguen (/s/ vs /θ/)."
          }
        ]
      }
    },
    {
      id: "l3",
      title: "La jota, la erre, la elle y la eñe",
      duration: "14 min",
      content: `
<p>Ahora los sonidos que el portugués directamente <strong>no tiene</strong> — o tiene con otro valor. Son los que exigen entrenamiento muscular, no solo atención.</p>

<h3>1. La jota /x/ — el sonido que hay que fabricar</h3>
<p>La <span class="es">j</span> española (y la <span class="es">g</span> ante e/i) es una fricativa velar /x/: <span class="es">jamón, gente, jugar, Argentina, México</span>. El error brasileño es pronunciarla como la "j" portuguesa /ʒ/ (de "janela"):</p>
<div class="ex">
<span class="wrong">"gente" como o "gente" português · "jugar" como "ju" de "julho"</span>
<span class="right">/XÉN-te/, /xu-GAR/ — el aire raspa el fondo del paladar, como al empañar un espejo con fuerza.</span>
<span class="gloss">Ancla: la jota española suena como la rr de "carro" dicha por un carioca... pero sin voz. En el Caribe y Centroamérica es más suave, casi una /h/ inglesa — ambas valen.</span>
</div>
<div class="callout warn"><span class="callout-title">Mapa de la letra G</span>
<span class="es">ga/go/gu</span> = /g/ (gato, gota) · <span class="es">ge/gi</span> = /x/ (gente, girar) · <span class="es">gue/gui</span> = /g/ con u muda (guerra, guitarra) · <span class="es">güe/güi</span> = /gw/ (pingüino, vergüenza). El portugués funciona casi igual — el problema es solo el VALOR de ge/gi: /x/, no /ʒ/.</div>

<h3>2. La erre: fuerte y vibrante, jamás aspirada</h3>
<p>En gran parte de Brasil, la R inicial o doble es una aspiración /h/ ("rio" ≈ <em>hio</em>). En español, la <span class="es">rr</span> es una <strong>vibrante múltiple</strong>: la punta de la lengua golpea varias veces los alvéolos. Y la r simple entre vocales es un solo golpe (como en "cara" — igual en las dos lenguas).</p>
<div class="ex">
<span class="wrong">"perro" pronunciado PE-ho · "Roma" pronunciado HO-ma</span>
<span class="right">PE-rro con vibración de lengua · RRO-ma</span>
<span class="gloss">Pares mínimos: pero/perro, caro/carro, coro/corro. Si \"pero\" y \"perro\" te salen iguales, un nativo puede entender lo contrario de lo que dices.</span>
</div>
<div class="callout tip"><span class="callout-title">Cómo despertar la rr</span>
Si la vibrante no te sale: di \"tededede\" rápido y relajado; la lengua acaba vibrando sola. Luego pasa a \"tra-tre-tri\" y de ahí a \"rra-rre-rri\". Es entrenamiento muscular: cinco minutos diarios durante dos semanas y aparece.</div>

<h3>3. LL e Y: el yeísmo (y la excepción argentina)</h3>
<ul>
<li>Para la gran mayoría de los hispanohablantes, <span class="es">ll</span> y <span class="es">y</span> suenan igual: \"calle\" = /KA-ye/, \"lluvia\" = /YU-bia/. Es el <strong>yeísmo</strong>, y es la norma culta actual.</li>
<li>En el <strong>Río de la Plata</strong> suenan /ʃ/ (\"cashe\", \"shuvia\") — el famoso sonido porteño. Si vives allí, adóptalo; si no, reconócelo al escuchar.</li>
<li>Error brasileño: pronunciar ll como el <span class="pt">lh</span> portugués (\"CA-lhe\"). Suena arcaico/regional — evítalo.</li>
</ul>

<h3>4. La eñe y el ch</h3>
<ul>
<li>La <span class="es">ñ</span> equivale al <span class="pt">nh</span>, pero más tensa y palatal: \"niño\", \"año\", \"señor\". No la relajes en \"iñ\" débil: \"anho\" suena portugués.</li>
<li>El <span class="es">ch</span> español es /tʃ/ como el \"tch\" de \"tchau\": \"noche\", \"mucho\", \"chico\". Fácil para brasileños — solo no lo suavices a /ʃ/ (\"noshe\"), que es rasgo andaluz/chileno coloquial.</li>
</ul>
`,
      quiz: {
        questions: [
          {
            q: "La j de \"jamón\" y la g de \"gente\" se pronuncian:",
            options: [
              "Como la j portuguesa de \"janela\"",
              "Como una fricativa velar /x/, aire raspando el fondo del paladar",
              "Como la ch de \"chave\"",
              "Muda, no se pronuncia"
            ],
            correct: 1,
            explanation: "Es el sonido /x/, que el portugués no tiene como fonema: similar a la rr carioca pero sorda (en el Caribe, más suave, como h inglesa)."
          },
          {
            q: "El par \"pero/perro\" se distingue por:",
            options: [
              "La duración de la e",
              "R simple (un golpe) vs. rr múltiple (vibración de la lengua)",
              "R aspirada vs. r muda",
              "No se distinguen en la práctica"
            ],
            correct: 1,
            explanation: "Contraste fonémico: caro/carro, pero/perro, coro/corro. La rr aspirada al estilo carioca borra la distinción y causa malentendidos."
          },
          {
            q: "¿Cómo pronuncia \"calle\" la mayoría del mundo hispánico?",
            options: [
              "/KA-lhe/, como el lh portugués",
              "/KA-ye/ — yeísmo: ll = y",
              "/KA-she/ en todas partes",
              "/KA-le/"
            ],
            correct: 1,
            explanation: "El yeísmo (ll = y) es la norma general. /KA-she/ es rioplatense; /KA-lhe/ suena arcaico — es el error brasileño típico."
          },
          {
            q: "En \"guerra\" y \"pingüino\", la u...",
            options: [
              "se pronuncia en ambas",
              "es muda en \"guerra\" y suena en \"pingüino\" (por la diéresis)",
              "es muda en ambas",
              "suena en \"guerra\" y es muda en \"pingüino\""
            ],
            correct: 1,
            explanation: "gue/gui = u muda (guerra, guitarra); güe/güi con diéresis = u pronunciada (pingüino, vergüenza)."
          },
          {
            q: "¿Cuál palabra contiene el sonido /x/ (jota)?",
            options: [
              "gato",
              "girasol",
              "guitarra",
              "gol"
            ],
            correct: 1,
            explanation: "g + e/i = /x/: girasol, gente, gimnasio. Ga/go/gu y gue/gui son /g/: gato, gol, guitarra."
          },
          {
            q: "El ejercicio recomendado para desarrollar la rr vibrante es:",
            options: [
              "aspirar más fuerte, como la rr carioca",
              "decir \"tededede\" rápido hasta que la lengua vibre sola",
              "sustituirla por /h/",
              "pronunciar una l larga"
            ],
            correct: 1,
            explanation: "La vibrante es entrenamiento muscular: \"tededede\" rápido → \"tra-tre-tri\" → \"rra-rre-rri\", cinco minutos diarios."
          }
        ]
      }
    },
    {
      id: "l4",
      title: "Sílabas tónicas que cambian de lugar (y las tildes)",
      duration: "15 min",
      content: `
<p>Decenas de palabras casi idénticas en las dos lenguas <strong>llevan el acento en otra sílaba</strong>. Este error es traicionero porque la palabra es "correcta" — solo que dicha con música portuguesa. Los nativos lo notan de inmediato. Son los llamados <strong>heterotónicos</strong>.</p>

<h3>La lista de oro</h3>
<div class="table-scroll"><table>
<tr><th>Español (tónica marcada)</th><th>Portugués (tónica marcada)</th></tr>
<tr><td><span class="es">poli-CÍ-a</span></td><td><span class="pt">po-LÍ-cia</span></td></tr>
<tr><td><span class="es">aca-DE-mia</span></td><td><span class="pt">acade-MI-a</span></td></tr>
<tr><td><span class="es">te-LÉ-fono</span></td><td><span class="pt">tele-FO-ne</span></td></tr>
<tr><td><span class="es">HÉ-roe</span></td><td><span class="pt">he-RÓI</span></td></tr>
<tr><td><span class="es">o-CÉ-ano</span></td><td><span class="pt">oce-A-no</span></td></tr>
<tr><td><span class="es">LÍ-mite</span></td><td><span class="pt">li-MI-te</span></td></tr>
<tr><td><span class="es">ni-VEL</span></td><td><span class="pt">NÍ-vel</span></td></tr>
<tr><td><span class="es">im-BÉ-cil</span></td><td><span class="pt">imbe-CIL</span></td></tr>
<tr><td><span class="es">a-LER-gia</span></td><td><span class="pt">aler-GI-a</span></td></tr>
<tr><td><span class="es">MA-gia</span></td><td><span class="pt">ma-GI-a</span></td></tr>
<tr><td><span class="es">buro-CRA-cia</span></td><td><span class="pt">burocra-CI-a</span></td></tr>
<tr><td><span class="es">epi-DE-mia</span></td><td><span class="pt">epide-MI-a</span></td></tr>
<tr><td><span class="es">RÉ-gimen</span></td><td><span class="pt">re-GI-me</span></td></tr>
<tr><td><span class="es">proto-TI-po</span></td><td><span class="pt">pro-TÓ-tipo</span></td></tr>
<tr><td><span class="es">alco-HOL</span></td><td><span class="pt">ÁL-cool</span></td></tr>
<tr><td><span class="es">at-MÓS-fera</span></td><td><span class="pt">atmos-FE-ra</span></td></tr>
<tr><td><span class="es">É-lite</span></td><td><span class="pt">e-LI-te</span></td></tr>
<tr><td><span class="es">ce-RE-bro</span></td><td><span class="pt">CÉ-rebro</span></td></tr>
<tr><td><span class="es">ca-NÍ-bal</span></td><td><span class="pt">cani-BAL</span></td></tr>
</table></div>

<div class="callout note"><span class="callout-title">El patrón escondido</span>
Muchos de estos siguen una regla: los cultismos en <strong>-ia</strong> suelen ser llanos en español (aca-DE-mia, MA-gia, buro-CRA-cia) pero llevan hiato tónico en portugués (acade-MI-a, ma-GI-a). Si dudas con una palabra en -ia, apuesta por la versión llana en español — acertarás casi siempre. Excepciones con tilde: día, María, policía, economía, geografía.</div>

<h3>Las tildes: un sistema, tres reglas</h3>
<p>La tilde española es más sistemática que el acento portugués. Tres reglas cubren todo:</p>
<div class="table-scroll"><table>
<tr><th>Tipo</th><th>Tónica en...</th><th>Lleva tilde cuando termina en...</th><th>Ejemplos</th></tr>
<tr><td><strong>Aguda</strong> (oxítona)</td><td>última sílaba</td><td>vocal, n, s</td><td>café, canción, detrás — pero: nivel, reloj</td></tr>
<tr><td><strong>Llana</strong> (paroxítona)</td><td>penúltima</td><td>cualquier cosa QUE NO SEA vocal, n, s</td><td>árbol, lápiz, fácil — pero: casa, libro</td></tr>
<tr><td><strong>Esdrújula</strong> (proparoxítona)</td><td>antepenúltima</td><td><strong>siempre</strong></td><td>teléfono, médico, sábado</td></tr>
</table></div>
<ul>
<li>El hiato con vocal cerrada tónica siempre se marca: <span class="es">día, país, oído, María</span> — de ahí policía, economía.</li>
<li>Tildes diacríticas: <span class="es">tú/tu, él/el, sí/si, más/mas, té/te, sé/se, mí/mi</span> — distinguen palabras, no pronunciación.</li>
<li>Diferencia clave con el portugués: el español no tiene circunflejo (ˆ), ni til (˜), ni acento grave — <strong>solo la tilde aguda ´</strong> (más la diéresis ü).</li>
</ul>

<div class="ex">
<span class="wrong">Escribir "portugués" como "portuguès" o "português"</span>
<span class="right">portugués — única tilde posible: la aguda (´).</span>
<span class="gloss">Los teclados brasileños traicionan: ê, ô, à no existen en español. Si ves un circunflejo en tu texto español, es un intruso.</span>
</div>
`,
      quiz: {
        questions: [
          {
            q: "¿Dónde cae la sílaba tónica de \"policía\" en español?",
            options: [
              "po-LI-cía, como en portugués",
              "PO-licía",
              "poli-CÍ-a",
              "policí-A"
            ],
            correct: 2,
            explanation: "Español: poli-CÍ-a (hiato tónico marcado por la tilde). Portugués: po-LÍ-cia. Mismo patrón en día, economía, geografía."
          },
          {
            q: "¿Cuál palabra es esdrújula (proparoxítona) en español pero no en portugués?",
            options: [
              "academia",
              "teléfono",
              "nivel",
              "alcohol"
            ],
            correct: 1,
            explanation: "te-LÉ-fo-no es esdrújula; en portugués, tele-FO-ne es llana. (Academia es llana en español; nivel y alcohol son agudas.)"
          },
          {
            q: "Dudas entre \"ma-GI-a\" y \"MA-gia\". La regla del patrón -ia dice:",
            options: [
              "en español, los cultismos en -ia suelen ser llanos: MA-gia",
              "en español siempre hay hiato: ma-GÍ-a",
              "las dos valen",
              "depende del país"
            ],
            correct: 0,
            explanation: "Los cultismos en -ia son llanos en español (magia, academia, burocracia). Excepciones con tilde marcada: día, policía, economía."
          },
          {
            q: "¿Por qué \"teléfono\" lleva tilde?",
            options: [
              "Porque termina en vocal",
              "Porque es esdrújula, y las esdrújulas siempre llevan tilde",
              "Porque es palabra extranjera",
              "No debería llevarla"
            ],
            correct: 1,
            explanation: "Las esdrújulas (tónica en la antepenúltima) llevan tilde SIEMPRE: teléfono, médico, sábado, régimen."
          },
          {
            q: "¿Cuál de estos acentos gráficos existe en español?",
            options: [
              "el circunflejo (ê)",
              "la tilde aguda (é)",
              "el til (ã)",
              "la grave (è)"
            ],
            correct: 1,
            explanation: "El español solo usa la tilde aguda ´ (y la diéresis ü). Si aparece ê, ã o è en tu texto español, es el teclado portugués."
          },
          {
            q: "\"Nivel\" y \"reloj\" no llevan tilde porque...",
            options: [
              "son llanas terminadas en consonante",
              "son agudas que NO terminan en vocal, n ni s",
              "son esdrújulas",
              "es una excepción sin regla"
            ],
            correct: 1,
            explanation: "Agudas solo llevan tilde si terminan en vocal, n o s (café, canción). Nivel y reloj terminan en l/j → sin tilde. (Y ojo: ni-VEL, no NÍ-vel.)"
          },
          {
            q: "¿Cuál par heterotónico está descrito correctamente?",
            options: [
              "ES ce-RE-bro (llana) / PT CÉ-rebro (esdrújula)",
              "ES CE-rebro (esdrújula) / PT ce-RE-bro (llana)",
              "ES ÁL-cohol / PT alco-OL",
              "ES NÍ-vel / PT ni-VEL"
            ],
            correct: 0,
            explanation: "cerebro es llana en español (ce-RE-bro) y esdrújula en portugués (CÉ-rebro). Los otros pares están invertidos: es alco-HOL (ES) / ÁL-cool (PT) y ni-VEL (ES) / NÍ-vel (PT)."
          }
        ]
      }
    },
    {
      id: "l5",
      title: "Ritmo, entonación y música del español",
      duration: "13 min",
      content: `
<p>Puedes pronunciar cada sonido perfecto y aún sonar brasileño: la <strong>melodía</strong> te delata. Esta lección trabaja la prosodia — el nivel que casi ningún curso enseña.</p>

<h3>El ritmo: sílabas como un metrónomo</h3>
<p>El portugués brasileño es de <strong>ritmo acentual</strong>: estira las sílabas tónicas y comprime las átonas. El español es de <strong>ritmo silábico</strong>: cada sílaba dura prácticamente lo mismo, como un metrónomo. Por eso el español suena "ametrallado" al oído brasileño, y el portuñol suena "cantado" al oído hispano.</p>
<div class="callout tip"><span class="callout-title">Ejercicio del metrónomo</span>
Toma la frase <span class="es">"La bi-blio-te-ca es-tá a-bier-ta has-ta las nue-ve"</span> y dila golpeando la mesa en cada sílaba, todas con la misma duración. Suena artificial al principio — ese "robotito" es exactamente el ritmo nativo.</div>

<h3>El enlace: las palabras se encadenan</h3>
<p>En español fluido, la consonante final se une a la vocal siguiente: <span class="es">"los otros amigos"</span> suena /lo-SO-tro-sa-MI-gos/. El brasileño tiende a insertar semivocales o pausas ("los^otros^amigos"). Practica leyendo en voz alta y marcando los enlaces: <span class="es">"vamos‿a‿empezar", "el‿avión‿aterrizó"</span>.</p>

<h3>La entonación de las preguntas</h3>
<ul>
<li><strong>Pregunta total (sí/no):</strong> sube al final, más marcado que en portugués — <span class="es">"¿Vienes mañana?↗"</span></li>
<li><strong>Pregunta parcial (qué, dónde, cuándo):</strong> baja al final — <span class="es">"¿Dónde vives?↘"</span></li>
<li>El brasileño aplica la curva ondulada del portugués — suena simpático pero extranjero. Escucha e imita frases interrogativas enteras, no palabras sueltas.</li>
</ul>

<h3>Acentos regionales: qué vas a escuchar</h3>
<div class="table-scroll"><table>
<tr><th>Rasgo</th><th>Dónde</th><th>Ejemplo</th></tr>
<tr><td>seseo (z, ce/ci = /s/)</td><td>toda América, Canarias, parte de Andalucía</td><td>"zapato" = /sa-PA-to/</td></tr>
<tr><td>distinción /θ/</td><td>centro y norte de España</td><td>"zapato" = /θa-PA-to/, "casa"≠"caza"</td></tr>
<tr><td>aspiración de -s final</td><td>Caribe, Andalucía, Chile, Río de la Plata (parcial)</td><td>"estás" ≈ /eh-TAH/</td></tr>
<tr><td>ll/y = /ʃ/</td><td>Argentina, Uruguay</td><td>"calle" = /KA-she/</td></tr>
<tr><td>jota suave /h/</td><td>Caribe, Centroamérica, Colombia</td><td>"trabajo" ≈ /tra-BA-ho/</td></tr>
</table></div>
<div class="callout note"><span class="callout-title">¿Qué acento elegir?</span>
Para PRODUCIR: el seseo americano estándar es la opción natural para brasileños (y mayoritaria en el mundo). Para COMPRENDER: entrena el oído con las cinco variantes de la tabla — pódcasts de España, México y Argentina cubren el 90% de lo que encontrarás.</div>
`,
      quiz: {
        questions: [
          {
            q: "El ritmo del español es...",
            options: [
              "acentual: estira las tónicas como el portugués",
              "silábico: cada sílaba dura prácticamente lo mismo",
              "libre: depende del hablante",
              "más lento que el portugués"
            ],
            correct: 1,
            explanation: "Ritmo silábico, tipo metrónomo — por eso suena \"ametrallado\". El portugués BR es acentual: estira tónicas y comprime átonas."
          },
          {
            q: "\"Los otros amigos\" en español fluido suena:",
            options: [
              "/los ˈotros aˈmigos/, bien separado",
              "/lo-SO-tro-sa-MI-gos/, todo encadenado",
              "/lus otrus amigus/",
              "con pausa entre cada palabra"
            ],
            correct: 1,
            explanation: "El enlace (consonante final + vocal inicial) es esencial para sonar natural: las palabras se encadenan sin pausas."
          },
          {
            q: "La entonación de \"¿Dónde vives?\" (pregunta con interrogativo)...",
            options: [
              "sube al final",
              "baja al final",
              "se mantiene plana",
              "sube y baja dos veces"
            ],
            correct: 1,
            explanation: "Las preguntas parciales (qué/dónde/cuándo) bajan al final; las totales (sí/no) suben: \"¿Vienes mañana?↗\"."
          },
          {
            q: "El seseo — pronunciar z y ce/ci como /s/ — es...",
            options: [
              "un error que hay que evitar",
              "la norma de toda América y la opción natural para brasileños",
              "exclusivo de Argentina",
              "obligatorio también en Madrid"
            ],
            correct: 1,
            explanation: "El seseo es la norma culta de América (y Canarias). La distinción /θ/ es del centro-norte de España — ambas son correctas."
          },
          {
            q: "En San Juan de Puerto Rico escuchas /eh-TAH kan-SAO/. ¿Qué dijo la persona?",
            options: [
              "\"está casado\"",
              "\"estás cansado\"",
              "\"esta casa\"",
              "\"estar sano\""
            ],
            correct: 1,
            explanation: "Aspiración de -s final (estás → /eh-TAH/) + d intervocálica omitida (cansado → cansao): rasgos caribeños que debes reconocer al escuchar."
          },
          {
            q: "En Buenos Aires, \"lluvia\" y \"calle\" suenan:",
            options: [
              "/LU-via/ y /KA-le/",
              "/SHU-via/ y /KA-she/",
              "/JU-via/ y /KA-je/ con jota fuerte",
              "/LHU-via/ y /KA-lhe/ como en portugués"
            ],
            correct: 1,
            explanation: "El rasgo rioplatense: ll/y = /ʃ/ (\"sh\"). Reconocerlo es esencial para entender a argentinos y uruguayos."
          }
        ]
      }
    },
    {
      id: "l6",
      title: "Taller práctico: pares mínimos y trabalenguas",
      duration: "15 min",
      content: `
<p>Última lección del módulo: pura práctica. Aquí está tu <strong>gimnasio de pronunciación</strong> — ejercicios concretos para automatizar todo lo anterior. Marca esta página y vuelve cada semana.</p>

<h3>Pares mínimos: el test del oído y de la boca</h3>
<p>Di cada par en voz alta; si suenan iguales, ahí está tu tarea:</p>
<div class="table-scroll"><table>
<tr><th>Contraste</th><th>Pares</th><th>Controla</th></tr>
<tr><td>r / rr</td><td>pero–perro · caro–carro · coro–corro · vara–barra</td><td>un golpe vs. vibración múltiple</td></tr>
<tr><td>t sin palatalizar</td><td>tico–chico · tino–chino · tiesto–chisto</td><td>si \"tico\" suena \"chico\", palatalizaste</td></tr>
<tr><td>d sin palatalizar</td><td>dio–yo · diez–yes · día dicho limpio</td><td>\"dio\" ≠ \"yo\"</td></tr>
<tr><td>s sorda</td><td>\"casa\" ES vs. \"casa\" PT · presidente · música</td><td>cero vibración en la s</td></tr>
<tr><td>jota</td><td>jugo–yugo · caja–calla · jota–yate</td><td>/x/ raspada vs. /y/</td></tr>
<tr><td>vocal final plena</td><td>paso–pasó · hablo–habló · término–terminó</td><td>¡la tónica cambia el TIEMPO verbal!</td></tr>
</table></div>

<div class="callout warn"><span class="callout-title">Paso–pasó: cuando la fonética es gramática</span>
<span class="es">hablo</span> (presente) vs. <span class="es">habló</span> (pasado) · <span class="es">paso</span> vs. <span class="es">pasó</span>. Si tu -o final es débil y tu acento vago, un nativo no sabrá NI EL TIEMPO NI LA PERSONA del verbo. La vocal final plena no es cosmética: es gramática audible.</div>

<h3>Trabalenguas de entrenamiento</h3>
<ul>
<li><strong>rr:</strong> <span class="es">"Erre con erre guitarra, erre con erre barril; rápido ruedan los carros cargados de azúcar del ferrocarril."</span></li>
<li><strong>jota:</strong> <span class="es">"Juan Junco juntó juncos junto al jardín del general."</span></li>
<li><strong>t/d duras:</strong> <span class="es">"Tía Matilde tiende diez toallas divinas todos los días."</span></li>
<li><strong>ñ:</strong> <span class="es">"El niño añora las mañanas de otoño con la araña en la cabaña."</span></li>
<li><strong>ritmo silábico:</strong> <span class="es">"Pá-blo-cla-vó-un-cla-vi-to-qué-cla-vi-to-cla-vó-Pá-blo"</span> — con metrónomo mental.</li>
</ul>

<h3>La rutina de 10 minutos diarios</h3>
<ol>
<li><strong>2 min — calentamiento:</strong> \"tededede\" → \"rra-rre-rri\" + tres jotas largas /xxxxa/.</li>
<li><strong>3 min — pares mínimos:</strong> una fila de la tabla, diez repeticiones lentas → rápidas.</li>
<li><strong>3 min — lectura marcada:</strong> un párrafo de noticia. Subraya: -e/-o finales, ti/di, s intervocálica, j/g, rr. Léelo 3 veces.</li>
<li><strong>2 min — grabación:</strong> graba la tercera lectura y compárala con la de la semana pasada.</li>
</ol>

<div class="callout tip"><span class="callout-title">Regla del progreso</span>
Dos semanas de rutina diaria cambian tu acento más que un año de conversación desatenta. La conversación consolida lo que ya haces (bien o mal); el ejercicio deliberado es lo único que lo CAMBIA. Ahora demuestra lo aprendido en la evaluación — y después, tarjetas.</div>
`,
      quiz: {
        questions: [
          {
            q: "¿Por qué el par \"paso/pasó\" es más que una cuestión estética?",
            options: [
              "Porque pasó es más formal",
              "Porque el acento distingue presente de pasado: la fonética es gramática audible",
              "Porque en América se dice distinto",
              "No hay diferencia real"
            ],
            correct: 1,
            explanation: "hablo/habló, paso/pasó: la posición del acento (y una vocal final clara) codifica tiempo y persona del verbo."
          },
          {
            q: "\"Tico\" te sale igual que \"chico\". ¿Cuál es tu problema?",
            options: [
              "La r vibrante",
              "Estás palatalizando la t ante i (hábito del portugués brasileño)",
              "La jota",
              "El seseo"
            ],
            correct: 1,
            explanation: "t + i → \"tchi\" es la palatalización brasileña. La t española es siempre dental dura: /TI-ko/."
          },
          {
            q: "El trabalenguas \"Juan Junco juntó juncos...\" entrena:",
            options: [
              "la rr vibrante",
              "la jota /x/",
              "la ñ",
              "el enlace"
            ],
            correct: 1,
            explanation: "Todas las j: /x/ raspada en el velo del paladar. El de \"erre con erre\" entrena la vibrante."
          },
          {
            q: "En la rutina diaria, la grabación semanal sirve para...",
            options: [
              "practicar la escritura",
              "comparar tu progreso objetivamente — el oído propio engaña en tiempo real",
              "enviarla a un profesor",
              "nada, es opcional"
            ],
            correct: 1,
            explanation: "Mientras hablas no te oyes con precisión. La grabación comparada semana a semana es la única medición honesta del acento."
          },
          {
            q: "¿Cuál afirmación sobre el cambio de acento es correcta según el módulo?",
            options: [
              "Solo conversar mucho ya corrige el acento",
              "El ejercicio deliberado cambia el acento; la conversación solo consolida lo que ya haces",
              "El acento no se puede cambiar de adulto",
              "Basta escuchar pódcasts pasivamente"
            ],
            correct: 1,
            explanation: "La conversación refuerza hábitos (buenos o malos). El cambio viene del ejercicio deliberado: pares mínimos, lectura marcada, grabación."
          },
          {
            q: "\"Caja\" vs. \"calla\": ¿qué contraste entrenan?",
            options: [
              "jota /x/ vs. ll–y /y/",
              "rr vs. r",
              "s sorda vs. sonora",
              "t dura vs. palatalizada"
            ],
            correct: 0,
            explanation: "caja lleva /x/ (jota raspada); calla lleva /y/ (yeísmo). Si te suenan parecidas, tu jota está saliendo como la j portuguesa."
          }
        ]
      }
    }
  ],
  flashcards: [
    { front: "\"noite\" → noche: ¿cómo termina?", back: "NO-che<small>-e final plena, nunca \"nochi\"</small>" },
    { front: "\"dia\" → día: ¿la d?", back: "DÍ-a, con d dental dura<small>nunca \"djía\"</small>" },
    { front: "\"gente\" en español: ¿la g?", back: "/XEN-te/ — jota raspada /x/<small>no la j portuguesa /ʒ/</small>" },
    { front: "\"casa\": ¿la s?", back: "/KA-sa/ — s siempre sorda<small>nunca /z/ como en portugués</small>" },
    { front: "vaca vs. baca", back: "Suenan idénticas: /BA-ka/<small>b = v en todo el mundo hispánico</small>" },
    { front: "pero vs. perro", back: "r de un golpe vs. rr vibrante múltiple<small>la rr aspirada carioca borra el contraste</small>" },
    { front: "\"calle\" (mayoría hispánica)", back: "/KA-ye/ — yeísmo<small>Río de la Plata: /KA-she/</small>" },
    { front: "polícia → policía: ¿tónica?", back: "poli-CÍ-a<small>PT: po-LÍ-cia</small>" },
    { front: "telefone → teléfono: ¿tónica?", back: "te-LÉ-fo-no (esdrújula)<small>PT: tele-FO-ne (llana)</small>" },
    { front: "nível → nivel: ¿tónica?", back: "ni-VEL (aguda, sin tilde)<small>PT: NÍ-vel</small>" },
    { front: "cérebro → cerebro: ¿tónica?", back: "ce-RE-bro (llana)<small>PT: CÉ-rebro (esdrújula)</small>" },
    { front: "magia, academia, burocracia: ¿patrón?", back: "Llanas en español: MA-gia, aca-DE-mia<small>PT: hiato tónico ma-GI-a, acade-MI-a</small>" },
    { front: "¿Qué acentos gráficos tiene el español?", back: "Solo la tilde aguda ´ (y la diéresis ü)<small>ê, ã, à no existen</small>" },
    { front: "tempo → tiempo, porta → puerta: ¿regla?", back: "El español conserva diptongos ie/ue<small>pienso, puedo, quiero, fuego, siempre</small>" },
    { front: "El ritmo del español es...", back: "Silábico: cada sílaba dura lo mismo<small>PT-BR: acentual (estira las tónicas)</small>" },
    { front: "paso vs. pasó", back: "Presente vs. pasado: el acento es gramática<small>hablo/habló — vocal final siempre plena</small>" },
    { front: "\"banco\": ¿la a?", back: "Oral pura + n bien articulada<small>el español nunca nasaliza vocales</small>" },
    { front: "seseo", back: "z, ce/ci = /s/ — norma de toda América<small>distinción /θ/: centro-norte de España</small>" }
  ]
});
