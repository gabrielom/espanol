/* Módulo 4 — Pronombres y estructuras verbales */
window.COURSE_MODULES = window.COURSE_MODULES || [];
window.COURSE_MODULES.push({
  id: "m4",
  icon: "🔗",
  title: "Pronombres y estructuras que el brasileño evita",
  description: "La colocación pronominal, los clíticos obligatorios que el portugués brasileño dejó de usar, el mapa tú/vos/usted, el verbo gustar con toda su familia y los verbos que se vuelven pronominales al cruzar la frontera.",
  lessons: [
    {
      id: "l1",
      title: "Colocación pronominal: dónde vive el pronombre",
      duration: "14 min",
      content: `
<p>El portugués brasileño hablado tiene una colocación pronominal flexible y cada vez más analítica. El español tiene reglas <strong>fijas y sin excepciones</strong>. La buena noticia: son solo tres.</p>

<h3>Las tres reglas</h3>
<div class="table-scroll"><table>
<tr><th>Contexto</th><th>Posición</th><th>Ejemplo</th></tr>
<tr><td>Verbo conjugado</td><td><strong>antes</strong> (proclisis)</td><td><span class="es">Te llamo mañana. Me dijeron la verdad.</span></td></tr>
<tr><td>Infinitivo, gerundio, imperativo afirmativo</td><td><strong>pegado detrás</strong> (enclisis, una sola palabra)</td><td><span class="es">llamarte, diciéndome, ¡dímelo!</span></td></tr>
<tr><td>Perífrasis (ir a + inf., estar + ger., poder + inf. ...)</td><td>las dos valen: antes del auxiliar o pegado al final</td><td><span class="es">Te voy a llamar / Voy a llamarte</span></td></tr>
</table></div>

<div class="ex">
<span class="wrong">Voy a te llamar. / Estoy te esperando. / Puedo te ayudar.</span>
<span class="right">Te voy a llamar / Voy a llamarte. · Te estoy esperando / Estoy esperándote. · Te puedo ayudar / Puedo ayudarte.</span>
<span class="gloss">El error brasileño clásico es dejar el pronombre "flotando" en medio de la perífrasis, como en "vou te ligar". En español el pronombre nunca queda suelto entre auxiliar y verbo.</span>
</div>

<div class="callout note"><span class="callout-title">La tilde de la enclisis</span>
Al pegar pronombres, la sílaba tónica no se mueve — por eso aparecen tildes: <span class="es">esperando → esperándote</span>, <span class="es">di → dímelo</span>, <span class="es">explica → explícamelo</span>. Si añades pronombres y no revisas la tilde, delatas la escritura de portuñol.</div>

<h3>El imperativo: "me diz" no existe</h3>
<p>En portugués brasileño coloquial, el imperativo va con próclisis: <span class="pt">"me diz", "me passa o sal", "se senta"</span>. En español, el imperativo <strong>afirmativo</strong> exige enclisis; el <strong>negativo</strong>, próclisis:</p>
<div class="table-scroll"><table>
<tr><th>Portugués (BR)</th><th>Español afirmativo</th><th>Español negativo</th></tr>
<tr><td><span class="pt">me diz</span></td><td><span class="es">dime</span></td><td><span class="es">no me digas</span></td></tr>
<tr><td><span class="pt">me passa o sal</span></td><td><span class="es">pásame la sal</span></td><td><span class="es">no me pases la sal</span></td></tr>
<tr><td><span class="pt">se senta</span></td><td><span class="es">siéntate</span></td><td><span class="es">no te sientes</span></td></tr>
<tr><td><span class="pt">me espera</span></td><td><span class="es">espérame</span></td><td><span class="es">no me esperes</span></td></tr>
</table></div>

<h3>El pronombre que el brasileño borra</h3>
<p>El portugués brasileño permite el <strong>objeto nulo</strong>: "— Você viu meu celular? — Vi." El español <strong>exige</strong> el pronombre:</p>
<div class="ex">
<span class="wrong">— ¿Viste mis llaves? — Sí, vi. Dejé en la mesa.</span>
<span class="right">— ¿Viste mis llaves? — Sí, las vi. Las dejé en la mesa.</span>
<span class="gloss">Omitir el clítico de objeto es de los rasgos de portuñol más persistentes en hablantes avanzados, porque en portugués la frase suena perfecta.</span>
</div>
`,
      quiz: {
        questions: [
          {
            q: "Traduce \"Vou te ligar amanhã\":",
            options: [
              "Voy a te llamar mañana.",
              "Te voy a llamar mañana.",
              "Voy te llamar mañana.",
              "Voy a llamar te mañana."
            ],
            correct: 1,
            explanation: "En la perífrasis, el pronombre va antes del auxiliar (te voy a llamar) o pegado al infinitivo (voy a llamarte). Nunca suelto en el medio."
          },
          {
            q: "\"Me passa o sal\" en español es:",
            options: [
              "Me pasa la sal.",
              "Pásame la sal.",
              "Me pases la sal.",
              "Pasa-me la sal."
            ],
            correct: 1,
            explanation: "Imperativo afirmativo = enclisis obligatoria en una sola palabra, con tilde si hace falta: pásame. (Y la sal es femenino.)"
          },
          {
            q: "El negativo de \"siéntate\" es:",
            options: [
              "no siéntate",
              "no te sientes",
              "no sientes-te",
              "no te sienta"
            ],
            correct: 1,
            explanation: "Imperativo negativo = próclisis + subjuntivo: no te sientes, no me digas, no lo hagas."
          },
          {
            q: "— ¿Viste mis llaves? — ...",
            options: [
              "Sí, vi. Dejé en la mesa.",
              "Sí, las vi. Las dejé en la mesa.",
              "Sí, vi ellas. Dejé ellas en la mesa.",
              "Sí, le vi. Le dejé en la mesa."
            ],
            correct: 1,
            explanation: "El español no admite objeto nulo (\"vi\" solo) ni pronombre tónico sin preposición (\"vi ellas\"). Objeto directo plural femenino: las."
          },
          {
            q: "¿Por qué \"esperándote\" lleva tilde y \"esperando\" no?",
            options: [
              "Porque el gerundio siempre lleva tilde",
              "Porque al pegar el pronombre, la palabra se vuelve esdrújula y la tónica no se mueve",
              "Es un error: no debería llevarla",
              "Por énfasis"
            ],
            correct: 1,
            explanation: "es-pe-RAN-do-te: tónica en la antepenúltima → esdrújula → tilde obligatoria. La enclisis genera tildes: dímelo, explícamelo."
          },
          {
            q: "\"Estou te esperando há meia hora\" →",
            options: [
              "Estoy te esperando hace media hora.",
              "Te estoy esperando desde hace media hora.",
              "Estoy esperando te desde media hora.",
              "Te estoy esperándote hace media hora."
            ],
            correct: 1,
            explanation: "Pronombre antes del auxiliar (te estoy esperando) o pegado al gerundio (estoy esperándote) — nunca suelto en el medio ni duplicado."
          }
        ]
      }
    },
    {
      id: "l2",
      title: "Le, lo, la: el sistema de clíticos",
      duration: "13 min",
      content: `
<p>El brasileño culto conoce <span class="pt">o/a/lhe</span>... y casi nunca los usa al hablar ("eu vi <em>ele</em>", "dei o livro <em>pra ela</em>"). En español los clíticos son <strong>vivos y obligatorios</strong> — no hay registro coloquial que los evite.</p>

<h3>El sistema en dos filas</h3>
<div class="table-scroll"><table>
<tr><th>Función</th><th>Singular</th><th>Plural</th><th>Ejemplo</th></tr>
<tr><td>Objeto directo (cosa/persona)</td><td><span class="es">lo, la</span></td><td><span class="es">los, las</span></td><td>El informe, lo envié ayer. A María la vi hoy.</td></tr>
<tr><td>Objeto indirecto (a alguien)</td><td><span class="es">le</span></td><td><span class="es">les</span></td><td>Le di el libro (a Juan / a Ana).</td></tr>
</table></div>

<div class="ex">
<span class="wrong">Vi ella en la fiesta. / Di el libro para ella.</span>
<span class="right">La vi en la fiesta. / Le di el libro.</span>
<span class="gloss">"Vi ella" es la traducción literal de "vi ela" — agramatical en español. El pronombre tónico solo aparece con preposición y casi siempre duplicado: "La vi a ella (no a él)".</span>
</div>

<h3>¿Directo o indirecto? El test del brasileño</h3>
<p>Tu portugués culto ya sabe la respuesta: ¿dirías <span class="pt">o/a</span> o <span class="pt">lhe</span>?</p>
<ul>
<li><span class="pt">Eu <strong>o</strong> vi</span> → <span class="es">Lo vi</span> (directo).</li>
<li><span class="pt">Eu <strong>lhe</strong> dei o livro</span> → <span class="es">Le di el libro</span> (indirecto).</li>
<li>Trampa: algunos verbos difieren — <span class="es">ayudar, llamar (por teléfono), invitar</span> llevan objeto directo en español estándar: <span class="es">la ayudé, los llamé, las invité</span>.</li>
</ul>

<h3>El "pra ela" que hay que jubilar</h3>
<div class="table-scroll"><table>
<tr><th>Portugués hablado</th><th>Español</th></tr>
<tr><td><span class="pt">Dei o presente pra ela.</span></td><td><span class="es">Le di el regalo.</span></td></tr>
<tr><td><span class="pt">Falei pra ele que sim.</span></td><td><span class="es">Le dije que sí.</span></td></tr>
<tr><td><span class="pt">Comprei um doce pras crianças.</span></td><td><span class="es">Les compré un dulce (a los niños).</span></td></tr>
<tr><td><span class="pt">Mostrei o apê pra eles.</span></td><td><span class="es">Les mostré el apartamento.</span></td></tr>
</table></div>
<div class="callout warn"><span class="callout-title">La regla de conversión automática</span>
Cada vez que tu cerebro genere "para ele/ela/eles" como destinatario, dispara: <span class="es">le/les</span> ANTES del verbo. "Falei pra ela" → "Le dije". Es la conversión más rentable de todo el módulo: el "pra ele" es el rasgo nº 1 del portuñol hablado.</div>
`,
      quiz: {
        questions: [
          {
            q: "\"Eu vi ela ontem\" →",
            options: [
              "Vi ella ayer.",
              "La vi ayer.",
              "Le vi ayer.",
              "Vi a la ayer."
            ],
            correct: 1,
            explanation: "Objeto directo femenino = la: \"la vi\". El pronombre tónico (ella) solo con preposición: \"la vi a ella\"."
          },
          {
            q: "\"Falei pra ele que não\" →",
            options: [
              "Hablé para él que no.",
              "Le dije que no.",
              "Dije para él que no.",
              "Lo dije que no."
            ],
            correct: 1,
            explanation: "Destinatario (\"pra ele\") = objeto indirecto = le, antes del verbo: le dije. \"Para él\" solo aparece para enfatizar: \"a él le dije que no\"."
          },
          {
            q: "\"Comprei flores pras minhas tias\" →",
            options: [
              "Compré flores para las mis tías.",
              "Les compré flores a mis tías.",
              "Las compré flores a mis tías.",
              "Compré flores por mis tías."
            ],
            correct: 1,
            explanation: "Destinatario plural = les (+ duplicación con \"a mis tías\"). \"Las\" sería el objeto directo (las flores)."
          },
          {
            q: "¿Cuál verbo lleva objeto DIRECTO en español estándar?",
            options: [
              "gustar",
              "ayudar (\"la ayudé\")",
              "doler",
              "parecer"
            ],
            correct: 1,
            explanation: "Ayudar, llamar e invitar llevan OD: la ayudé, los llamé. Gustar, doler y parecer llevan OI (le gusta, le duele, le parece)."
          },
          {
            q: "El equivalente español del \"lhe\" portugués culto es:",
            options: [
              "lo/la",
              "le",
              "se",
              "él"
            ],
            correct: 1,
            explanation: "lhe (indirecto) = le/les. o/a (directo) = lo/la. Tu gramática culta portuguesa ya sabe distinguirlos — úsala."
          },
          {
            q: "\"El informe ya ___ envié al cliente.\"",
            options: [
              "le",
              "lo",
              "la",
              "les"
            ],
            correct: 1,
            explanation: "El informe = objeto directo masculino = lo: \"ya lo envié\". (El cliente sería \"le\": \"le envié el informe\".)"
          }
        ]
      }
    },
    {
      id: "l3",
      title: "Se lo, la duplicación y el leísmo",
      duration: "13 min",
      content: `
<p>Nivel dos del sistema de clíticos: las combinaciones y las reglas de duplicación que hacen sonar el español genuinamente nativo.</p>

<h3>Le + lo = se lo</h3>
<p>Cuando coinciden indirecto y directo, <span class="es">le/les</span> se convierte en <span class="es">se</span>:</p>
<ul>
<li>¿Le diste el libro a Ana? → <span class="es">Sí, se lo di.</span> (não "le lo di")</li>
<li>¿Les enviaste las fotos? → <span class="es">Se las envié anoche.</span></li>
<li>¿Me prestas tu coche? → <span class="es">Te lo presto mañana.</span> (me/te no cambian: solo le/les → se)</li>
</ul>
<div class="ex">
<span class="wrong">¿El contrato? Le lo mando hoy.</span>
<span class="right">¿El contrato? Se lo mando hoy.</span>
<span class="gloss">le lo / le la / les los... son imposibles: siempre se lo, se la, se los, se las. Orden fijo: indirecto antes de directo.</span>
</div>

<h3>La duplicación obligatoria</h3>
<p>Rasgo sin paralelo en portugués: cuando el objeto indirecto aparece explícito, el clítico <strong>igual va</strong> — no es redundancia, es gramática:</p>
<div class="ex">
<span class="wrong">Di el regalo a mi madre. / Pregunté al profesor.</span>
<span class="right">Le di el regalo a mi madre. / Le pregunté al profesor.</span>
<span class="gloss">"A mi madre le di el regalo" — y si el objeto DIRECTO va antes del verbo, también se duplica: "El informe LO terminé ayer". Tema antepuesto = clítico obligatorio.</span>
</div>
<div class="table-scroll"><table>
<tr><th>Estructura</th><th>¿Duplica?</th><th>Ejemplo</th></tr>
<tr><td>OI explícito (a + persona)</td><td>Sí, casi siempre</td><td>Le escribí a mi abuela.</td></tr>
<tr><td>OD pospuesto normal</td><td>No</td><td>Compré el pan.</td></tr>
<tr><td>OD antepuesto (tema)</td><td>Sí, obligatorio</td><td>El pan lo compré yo.</td></tr>
<tr><td>Pronombre tónico (a mí, a ti...)</td><td>Sí, obligatorio</td><td>A mí me encanta. Te buscan a ti.</td></tr>
</table></div>

<h3>El leísmo: lo que oirás en España</h3>
<div class="callout note"><span class="callout-title">Reconócelo, no lo imites</span>
En gran parte de España se usa <span class="es">le</span> para persona masculina como objeto directo: "A Juan le vi ayer". La norma general (y lo más seguro para ti) es <span class="es">lo</span>: "A Juan lo vi ayer". El "leísmo de cortesía" ("¿Le atienden?") sí es general y correcto en todas partes.</div>

<h3>Combos de alta frecuencia para automatizar</h3>
<ul>
<li><span class="es">¿Me lo pasas?</span> — Me passa (isso)?</li>
<li><span class="es">Te lo juro.</span> — Eu te juro.</li>
<li><span class="es">Se lo dije mil veces.</span> — Falei (isso) mil vezes para ele/ela.</li>
<li><span class="es">¡No me lo puedo creer!</span> — Não acredito!</li>
<li><span class="es">¿Quién te lo contó?</span> — Quem te contou (isso)?</li>
</ul>
`,
      quiz: {
        questions: [
          {
            q: "¿Le diste el informe al jefe? — Sí, ___ di esta mañana.",
            options: [
              "le lo",
              "se lo",
              "lo le",
              "se le"
            ],
            correct: 1,
            explanation: "Cuando le/les se combina con lo/la/los/las, se transforma en \"se\": se lo di."
          },
          {
            q: "¿Les mandaste las fotos a tus primos? — Sí, ___ mandé anoche.",
            options: [
              "les las",
              "se las",
              "se los",
              "las les"
            ],
            correct: 1,
            explanation: "les → se; las fotos = las: \"se las mandé\". El indirecto siempre va antes del directo."
          },
          {
            q: "\"Dei um presente para minha mãe\" en español nativo:",
            options: [
              "Di un regalo a mi madre.",
              "Le di un regalo a mi madre.",
              "La di un regalo a mi madre.",
              "Di un regalo para mi madre."
            ],
            correct: 1,
            explanation: "El OI explícito (\"a mi madre\") exige duplicación con le. Sin el clítico suena extranjero; \"la di\" sería laísmo (error)."
          },
          {
            q: "\"El pan ___ compré yo, no mi hermano.\"",
            options: [
              "∅ (nada)",
              "lo",
              "le",
              "se"
            ],
            correct: 1,
            explanation: "Objeto directo antepuesto (tema) = duplicación obligatoria: \"El pan lo compré yo\". Sin \"lo\" es agramatical."
          },
          {
            q: "\"A Juan le vi ayer\" es...",
            options: [
              "la única forma correcta",
              "leísmo peninsular: común en España; la norma general es \"lo vi\"",
              "un error grave en todas partes",
              "obligatorio en América"
            ],
            correct: 1,
            explanation: "El leísmo (le por lo para persona masculina) es típico de España. Para ti, lo seguro es \"lo vi\". El leísmo de cortesía (\"¿Le atienden?\") sí es universal."
          },
          {
            q: "\"— Quem te contou isso? — ...\" ¿Cuál respuesta es correcta?",
            options: [
              "Ana me lo contó.",
              "Ana me contó.",
              "Ana contó-me lo.",
              "Ana lo me contó."
            ],
            correct: 0,
            explanation: "El OD (\"isso\" = lo) no puede omitirse: \"me lo contó\". Orden fijo: me/te/se antes de lo/la."
          }
        ]
      }
    },
    {
      id: "l4",
      title: "Tú, vos, usted: el mapa que \"você\" confunde",
      duration: "14 min",
      content: `
<p>Aquí hay una trampa de interferencia sutil: <span class="pt">você</span> se parece a <span class="es">usted</span> (ambos vienen de fórmulas de cortesía, ambos usan verbo en tercera persona), y por eso el brasileño tiende a hablar de usted con todo el mundo. Resultado: suena <strong>frío, distante o irónico</strong> sin querer.</p>

<h3>La equivalencia real</h3>
<div class="table-scroll"><table>
<tr><th>Portugués (BR)</th><th>Español</th><th>Registro</th></tr>
<tr><td><span class="pt">você</span> (uso cotidiano)</td><td><span class="es">tú</span> (o <span class="es">vos</span> según el país)</td><td>informal — amigos, colegas, familia, gente de tu edad</td></tr>
<tr><td><span class="pt">o senhor / a senhora</span></td><td><span class="es">usted</span></td><td>formal — clientes, mayores, autoridades, desconocidos de edad</td></tr>
<tr><td><span class="pt">vocês</span></td><td><span class="es">ustedes</span> (América) / <span class="es">vosotros</span> (España informal)</td><td>—</td></tr>
</table></div>

<div class="ex">
<span class="wrong">(a un colega de tu edad) ¿Usted quiere un café?</span>
<span class="right">¿Quieres un café? / ¿Querés un café?</span>
<span class="gloss">Regla mental: ¿dirías "o senhor" en portugués? Sí → usted. No → tú/vos. "Você" ≠ "usted".</span>
</div>

<h3>Conjugación comparada: presente de "tener"</h3>
<div class="table-scroll"><table>
<tr><th></th><th>tú</th><th>vos</th><th>usted</th><th>vosotros</th><th>ustedes</th></tr>
<tr><td>tener</td><td>tienes</td><td>tenés</td><td>tiene</td><td>tenéis</td><td>tienen</td></tr>
<tr><td>poder</td><td>puedes</td><td>podés</td><td>puede</td><td>podéis</td><td>pueden</td></tr>
<tr><td>ser</td><td>eres</td><td>sos</td><td>es</td><td>sois</td><td>son</td></tr>
<tr><td>imperativo</td><td>¡ven! ¡dime!</td><td>¡vení! ¡decime!</td><td>¡venga!</td><td>¡venid!</td><td>¡vengan!</td></tr>
</table></div>

<h3>El voseo: media América habla de vos</h3>
<p>En Argentina, Uruguay, Paraguay y buena parte de Centroamérica, <span class="es">vos</span> sustituye a tú. No necesitas producirlo, pero sí <strong>entenderlo sin parpadear</strong> — y si vives en Buenos Aires o Montevideo, adoptarlo te integra de inmediato.</p>
<div class="callout tip"><span class="callout-title">Ventaja brasileña</span>
El voseo no diptonga: "vos tenés, vos podés" suena como "você tem, você pode" con -s. Para un brasileño, conjugar el voseo es MÁS fácil que el tuteo — se forma desde el infinitivo: tener→tenés, poder→podés, venir→venís.</div>

<h3>Vosotros: solo en España</h3>
<p>En España, el plural informal es <span class="es">vosotros</span> (<span class="es">tenéis, queréis, venid</span>); <span class="es">ustedes</span> queda para lo formal. En toda América, <span class="es">ustedes</span> cubre ambos registros — como <span class="pt">vocês</span>. Si tu español es "americano", puedes vivir sin conjugar vosotros, pero debes <strong>reconocerlo</strong>: "¿Vosotros venís mañana?"</p>

<h3>¿Y "a gente"?</h3>
<div class="ex">
<span class="wrong">La gente vamos al cine. (calco de "a gente vai")</span>
<span class="right">Nosotros vamos al cine. / Vamos al cine.</span>
<span class="gloss">El "a gente" brasileño (= nós) NO existe en español: "la gente" significa "as pessoas" y va en tercera persona singular ("la gente va").</span>
</div>
`,
      quiz: {
        questions: [
          {
            q: "Hablas con un colega de tu misma edad en México. ¿Qué tratamiento usas?",
            options: [
              "Usted, porque \"você\" = usted",
              "Tú, porque \"você\" cotidiano equivale a tú",
              "Vos, porque es México",
              "Vosotros"
            ],
            correct: 1,
            explanation: "El você brasileño cotidiano = tú. Usted equivale a \"o senhor/a senhora\". El voseo es rioplatense/centroamericano, no mexicano."
          },
          {
            q: "\"Vos sos\" y \"vos tenés\" son formas de:",
            options: [
              "España (vosotros)",
              "El voseo rioplatense (Argentina, Uruguay)",
              "Un error de conjugación",
              "El español antiguo, ya no se usan"
            ],
            correct: 1,
            explanation: "El voseo es plenamente vigente y estándar en el Río de la Plata: vos sos, tenés, podés, vení, decime."
          },
          {
            q: "¿Por qué el voseo es fácil para brasileños?",
            options: [
              "Porque usa las mismas formas que \"você\"",
              "Porque no diptonga: tener→tenés, poder→podés (como tem/pode)",
              "Porque no se conjuga",
              "No es fácil: diptonga más que el tuteo"
            ],
            correct: 1,
            explanation: "El voseo se forma desde el infinitivo sin diptongar: tenés, podés, querés — paralelo a \"você tem, pode, quer\"."
          },
          {
            q: "\"¿Vosotros venís mañana?\" — ¿quién habla y a quiénes?",
            options: [
              "Un argentino a un grupo",
              "Un español a un grupo, en registro informal",
              "Un mexicano a una persona",
              "Cualquier hispanohablante, es la forma universal"
            ],
            correct: 1,
            explanation: "Vosotros es el plural informal DE ESPAÑA (venís, tenéis, queréis). En América se usa ustedes para todo."
          },
          {
            q: "\"A gente chega às oito\" →",
            options: [
              "La gente llega a las ocho.",
              "Llegamos a las ocho.",
              "La gente llegamos a las ocho.",
              "A gente llega a las ocho."
            ],
            correct: 1,
            explanation: "\"A gente\" (= nós) → nosotros/primera persona plural. \"La gente\" = as pessoas (tercera persona singular)."
          },
          {
            q: "El imperativo voseante de \"venir\" y \"decir\":",
            options: [
              "ven / di",
              "vení / decime",
              "venga / diga",
              "venid / decid"
            ],
            correct: 1,
            explanation: "Voseo: vení, decí (decime con pronombre) — agudos, desde el infinitivo. Ven/di = tuteo; venga/diga = usted; venid/decid = vosotros."
          }
        ]
      }
    },
    {
      id: "l5",
      title: "Gustar y su familia: girar la frase",
      duration: "14 min",
      content: `
<p>El portugués dice <span class="pt">"eu gosto de música"</span> — sujeto yo, verbo gostar, complemento con "de". El español invierte todo: <span class="es">"me gusta la música"</span> — la música es el <strong>sujeto</strong>, y tú eres el objeto indirecto. Quien traduce la estructura portuguesa produce el error más famoso del portuñol: <em>"yo gusto de..."</em></p>

<h3>La mecánica</h3>
<div class="table-scroll"><table>
<tr><th>Portugués</th><th>Español</th><th>Análisis</th></tr>
<tr><td><span class="pt">Eu gosto de café.</span></td><td><span class="es">Me gusta el café.</span></td><td>el café = sujeto → verbo en singular</td></tr>
<tr><td><span class="pt">Eu gosto de viajar.</span></td><td><span class="es">Me gusta viajar.</span></td><td>infinitivo = sujeto singular</td></tr>
<tr><td><span class="pt">Eu gosto de livros.</span></td><td><span class="es">Me gustan los libros.</span></td><td>sujeto plural → <strong>gustan</strong></td></tr>
<tr><td><span class="pt">Ela gosta de você.</span></td><td><span class="es">(Tú) le gustas.</span></td><td>¡tú eres el sujeto: gustas!</td></tr>
</table></div>

<div class="ex">
<span class="wrong">Yo gusto mucho de esta ciudad. / Me gusta los museos.</span>
<span class="right">Me gusta mucho esta ciudad. / Me gustan los museos.</span>
<span class="gloss">Dos controles: (1) nada de "de"; (2) el verbo concuerda con la cosa gustada, no contigo.</span>
</div>

<h3>El énfasis y el contraste: "a mí me gusta"</h3>
<ul>
<li><span class="es">A mí me gusta el fútbol, pero a ella le aburre.</span> — "a mí / a ti / a él..." añade contraste; el clítico (me/te/le) va siempre.</li>
<li>¿"A mí también" o "yo también"? Con gustar: <span class="es">— Me encanta. — A mí también.</span> (não "yo también"!). Y en desacuerdo: <span class="es">— No me gusta. — A mí sí.</span></li>
</ul>

<h3>La familia completa</h3>
<div class="table-scroll"><table>
<tr><th>Verbo</th><th>Ejemplo</th><th>Portugués</th></tr>
<tr><td><span class="es">encantar</span></td><td>Me encanta este barrio.</td><td>adoro este bairro</td></tr>
<tr><td><span class="es">doler</span></td><td>Me duele la cabeza.</td><td>minha cabeça dói / estou com dor</td></tr>
<tr><td><span class="es">molestar</span></td><td>¿Te molesta el ruido?</td><td>o barulho te incomoda?</td></tr>
<tr><td><span class="es">faltar</span></td><td>Me faltan dos páginas.</td><td>faltam-me duas páginas</td></tr>
<tr><td><span class="es">quedar</span></td><td>Te queda bien ese color.</td><td>essa cor fica bem em você</td></tr>
<tr><td><span class="es">parecer</span></td><td>Me parece una buena idea.</td><td>me parece / acho uma boa ideia</td></tr>
<tr><td><span class="es">costar</span></td><td>Me cuesta madrugar.</td><td>é difícil para mim madrugar</td></tr>
<tr><td><span class="es">hacer falta</span></td><td>Nos hace falta más tiempo.</td><td>precisamos de mais tempo</td></tr>
<tr><td><span class="es">dar miedo/pena/rabia</span></td><td>Me da miedo volar.</td><td>tenho medo de voar</td></tr>
</table></div>

<div class="callout tip"><span class="callout-title">"Me cuesta" — tu nueva palabra favorita</span>
<span class="es">Costar</span> + infinitivo expresa dificultad con total naturalidad nativa: "me cuesta entender a los chilenos", "cuesta acostumbrarse". No existe calco portugués posible — usarla bien es puro nivel C1.</div>

<h3>Ojo con "necesitar": aquí desaparece el "de"</h3>
<div class="ex">
<span class="wrong">Necesito de más tiempo. / Preciso de ayuda.</span>
<span class="right">Necesito más tiempo. / Necesito ayuda.</span>
<span class="gloss">El portugués "precisar DE" arrastra el "de" al español. "Necesitar" es transitivo directo: necesito + cosa, sin preposición.</span>
</div>
`,
      quiz: {
        questions: [
          {
            q: "Traduce \"Eu gosto muito de livros de história\":",
            options: [
              "Yo gusto mucho de libros de historia.",
              "Me gusta mucho los libros de historia.",
              "Me gustan mucho los libros de historia.",
              "A mí gusto los libros de historia."
            ],
            correct: 2,
            explanation: "Sin \"de\", con clítico me, y el verbo concuerda con el sujeto plural (los libros): gustan."
          },
          {
            q: "— Me encanta este lugar. — ¿Cómo respondes \"eu também\"?",
            options: [
              "Yo también.",
              "A mí también.",
              "Me también.",
              "También yo gusto."
            ],
            correct: 1,
            explanation: "Con verbos tipo gustar, el que responde es objeto indirecto: \"a mí también\". \"Yo también\" respondería a un verbo normal."
          },
          {
            q: "\"Ela gosta de você\" →",
            options: [
              "Ella gusta de ti.",
              "Le gustas.",
              "Te gusta ella.",
              "Ella te gusta... espera, eso significa lo contrario."
            ],
            correct: 1,
            explanation: "Tú eres lo gustado = sujeto: \"(tú) le gustas (a ella)\". \"Ella te gusta\" = você gosta dela — ¡la dirección se invierte!"
          },
          {
            q: "\"Minha cabeça dói e me faltam forças\" →",
            options: [
              "Mi cabeza duele y me falta fuerzas.",
              "Me duele la cabeza y me faltan fuerzas.",
              "Me duele mi cabeza y me falta fuerzas.",
              "Duele la cabeza y faltan fuerzas."
            ],
            correct: 1,
            explanation: "Estructura gustar: me duele LA cabeza (artículo, no posesivo) y me faltan fuerzas (plural → faltan)."
          },
          {
            q: "\"É difícil para mim acordar cedo\" con total naturalidad nativa:",
            options: [
              "Es difícil para mí despertar temprano.",
              "Me cuesta madrugar.",
              "Cuesto madrugar.",
              "Me es difícil de madrugar."
            ],
            correct: 1,
            explanation: "\"Me cuesta + infinitivo\" es la fórmula nativa para dificultad. Bonus: madrugar = acordar cedo, en un solo verbo."
          },
          {
            q: "Traduce \"Preciso de mais tempo\":",
            options: [
              "Necesito de más tiempo.",
              "Preciso de más tiempo.",
              "Necesito más tiempo.",
              "Me necesita más tiempo."
            ],
            correct: 2,
            explanation: "Necesitar es transitivo directo, sin \"de\": necesito más tiempo."
          },
          {
            q: "\"Tenho medo de voar\" con la estructura de la familia gustar:",
            options: [
              "Tengo miedo de volar... es la única opción.",
              "Me da miedo volar.",
              "Me miedo volar.",
              "Vuelo con miedo."
            ],
            correct: 1,
            explanation: "\"Me da miedo/pena/rabia + infinitivo\" es la estructura idiomática (también es correcto \"tengo miedo de volar\", pero \"me da miedo\" es la marca de naturalidad)."
          }
        ]
      }
    },
    {
      id: "l6",
      title: "Reflexivos y pronominales: irse, quedarse, olvidarse",
      duration: "14 min",
      content: `
<p>Última pieza del sistema pronominal: los verbos que son <strong>pronominales en una lengua y no en la otra</strong>. El error resultante es sutil — la frase se entiende, pero suena rara — y por eso sobrevive años.</p>

<h3>Pronominales en español que el portugués no espera</h3>
<div class="table-scroll"><table>
<tr><th>Español</th><th>Significa</th><th>Portugués</th></tr>
<tr><td><span class="es">irse</span></td><td><strong>ir embora</strong></td><td>Me voy. = Vou embora. (¡ir ≠ irse!)</td></tr>
<tr><td><span class="es">quedarse</span></td><td><strong>ficar</strong> (permanecer)</td><td>Me quedo en casa. = Fico em casa.</td></tr>
<tr><td><span class="es">llevarse</span></td><td><strong>levar (consigo)</strong>; llevarse bien = dar-se bem</td><td>Me llevo esta. = Vou levar esta.</td></tr>
<tr><td><span class="es">dormirse</span></td><td><strong>adormecer</strong> (≠ dormir)</td><td>Me dormí en el sofá. = Adormeci no sofá.</td></tr>
<tr><td><span class="es">comerse/beberse</span></td><td>énfasis: comer/beber por completo</td><td>Se comió toda la pizza. = Comeu a pizza inteira.</td></tr>
<tr><td><span class="es">enterarse (de)</span></td><td><strong>ficar sabendo</strong></td><td>¿Te enteraste? = Ficou sabendo?</td></tr>
<tr><td><span class="es">atreverse (a)</span></td><td><strong>atrever-se, ousar</strong></td><td>No me atrevo. = Não ouso.</td></tr>
</table></div>

<div class="ex">
<span class="wrong">Ya es tarde, voy. / ¿Ya vas?</span>
<span class="right">Ya es tarde, me voy. / ¿Ya te vas?</span>
<span class="gloss">"Ir embora" = irse. "Voy" a secas pide destino ("voy al cine"). El "me voy" es de las primeras cosas que un oído nativo echa de menos en el portuñol.</span>
</div>

<h3>El "se" de los sucesos accidentales</h3>
<p>Joya del español sin paralelo portugués: para accidentes, el español culpa al objeto con <span class="es">se + me/te/le</span>:</p>
<ul>
<li><span class="es">Se me olvidaron las llaves.</span> — Esqueci as chaves (sem querer).</li>
<li><span class="es">Se me cayó el vaso.</span> — Derrubei o copo.</li>
<li><span class="es">Se le rompió el coche.</span> — O carro dele quebrou.</li>
<li><span class="es">Se nos acabó el café.</span> — Nosso café acabou.</li>
</ul>
<div class="callout tip"><span class="callout-title">Por qué usarlo</span>
"Olvidé las llaves" es correcto pero suena a confesión deliberada; <span class="es">"se me olvidaron"</span> es lo que dice un nativo: el accidente "le pasó". Dominar este "se" es un salto de nivel audible.</div>

<h3>Y al revés: pronominales portugueses que pierden el "se"</h3>
<div class="table-scroll"><table>
<tr><th>Portugués</th><th>Español</th></tr>
<tr><td><span class="pt">Ele formou-se em direito.</span></td><td><span class="es">Se graduó en derecho.</span> ✓ pronominal también</td></tr>
<tr><td><span class="pt">tomar café da manhã</span></td><td><span class="es">desayunar</span> (un solo verbo, sin pronombre)</td></tr>
<tr><td><span class="pt">Roubaram meu celular.</span> (roubar alguém)</td><td><span class="es">Me robaron el celular.</span> (robarle algo A alguien)</td></tr>
<tr><td><span class="pt">Sonhei com você.</span></td><td><span class="es">Soñé contigo.</span> — ¡"contigo", no "con ti"!</td></tr>
</table></div>
<div class="ex">
<span class="wrong">Robaron mi celular en el metro.</span>
<span class="right">Me robaron el celular en el metro.</span>
<span class="gloss">El español prefiere el dativo posesivo: me robaron el celular, me duele la cabeza, se me rompió el zapato — el poseedor va en el pronombre, no en el posesivo.</span>
</div>
`,
      quiz: {
        questions: [
          {
            q: "\"Já vou embora\" →",
            options: [
              "Ya voy.",
              "Ya me voy.",
              "Ya voy embora.",
              "Ya salgo afuera."
            ],
            correct: 1,
            explanation: "ir embora = irse: me voy, te vas, se fue. \"Voy\" a secas pide destino: voy al cine."
          },
          {
            q: "\"Esqueci as chaves (sem querer)\" al estilo nativo:",
            options: [
              "Olvidé las llaves.",
              "Se me olvidaron las llaves.",
              "Me olvidaron las llaves.",
              "Las llaves se olvidaron."
            ],
            correct: 1,
            explanation: "El \"se\" accidental: se me olvidaron (plural concordando con las llaves). \"Olvidé\" es correcto pero menos idiomático para accidentes."
          },
          {
            q: "\"Derrubei o copo\" →",
            options: [
              "Derribé el vaso.",
              "Se me cayó el vaso.",
              "Caí el vaso.",
              "El vaso me cayó."
            ],
            correct: 1,
            explanation: "Accidente = se + me + caer: \"se me cayó el vaso\". (\"Tiré el vaso\" sería a propósito.)"
          },
          {
            q: "\"Adormeci no sofá vendo TV\" →",
            options: [
              "Dormí en el sofá viendo TV.",
              "Me dormí en el sofá viendo TV.",
              "Adormecí en el sofá.",
              "Me durmió el sofá."
            ],
            correct: 1,
            explanation: "dormirse = adormecer (el momento de caer dormido); dormir = el estado. \"Me dormí\" captura el \"adormeci\"."
          },
          {
            q: "\"Roubaram minha carteira\" →",
            options: [
              "Robaron mi cartera.",
              "Me robaron la cartera.",
              "Me robaron mi cartera.",
              "Robáronme la cartera."
            ],
            correct: 1,
            explanation: "Dativo posesivo: me robaron LA cartera (pronombre + artículo, no posesivo). Patrón general: me duele la cabeza, se me rompió el zapato."
          },
          {
            q: "\"Ficou sabendo da novidade?\" →",
            options: [
              "¿Quedaste sabiendo la novedad?",
              "¿Te enteraste de la novedad?",
              "¿Supiste quedando la novedad?",
              "¿Encontraste la novedad?"
            ],
            correct: 1,
            explanation: "ficar sabendo = enterarse de: \"¿te enteraste?\". Verbo pronominal con régimen \"de\"."
          },
          {
            q: "\"Sonhei com você\" →",
            options: [
              "Soñé con ti.",
              "Soñé contigo.",
              "Me soñé con usted.",
              "Soñé con te."
            ],
            correct: 1,
            explanation: "con + mí/ti tienen formas especiales: conmigo, contigo (y consigo). \"Con ti\" no existe."
          }
        ]
      }
    }
  ],
  flashcards: [
    { front: "vou te ligar", back: "te voy a llamar / voy a llamarte<small>nunca \"voy a te llamar\"</small>" },
    { front: "me diz / me passa o sal", back: "dime / pásame la sal<small>imperativo afirmativo = ênclise</small>" },
    { front: "não me diga", back: "no me digas<small>imperativo negativo = próclise + subjuntivo</small>" },
    { front: "— Viu minhas chaves? — Vi.", back: "— ¿Viste mis llaves? — Sí, las vi.<small>objeto nulo não existe</small>" },
    { front: "eu vi ela", back: "la vi<small>\"vi ella\" é agramatical</small>" },
    { front: "falei pra ele", back: "le dije<small>pra ele/ela → le, antes do verbo</small>" },
    { front: "dei o livro pra ela (o livro + ela)", back: "se lo di<small>le + lo = se lo, nunca \"le lo\"</small>" },
    { front: "dei um presente para minha mãe", back: "le di un regalo a mi madre<small>duplicação obrigatória do OI</small>" },
    { front: "você (cotidiano)", back: "tú / vos<small>usted = o senhor, a senhora</small>" },
    { front: "vos: tener, poder, ser", back: "tenés, podés, sos<small>sem ditongo — como \"você tem, pode\"</small>" },
    { front: "vocês (na Espanha, informal)", back: "vosotros: tenéis, queréis, venid<small>na América: ustedes</small>" },
    { front: "eu gosto de café / de livros", back: "me gusta el café / me gustan los libros<small>sem \"de\"; verbo concorda com a coisa</small>" },
    { front: "— Adoro isso. — Eu também.", back: "— Me encanta. — A mí también.<small>nunca \"yo también\" com gustar</small>" },
    { front: "é difícil para mim madrugar", back: "me cuesta madrugar" },
    { front: "preciso de ajuda", back: "necesito ayuda<small>sem \"de\"</small>" },
    { front: "vou embora / fico em casa", back: "me voy / me quedo en casa" },
    { front: "esqueci as chaves (sem querer)", back: "se me olvidaron las llaves<small>o \"se\" acidental</small>" },
    { front: "derrubei o copo", back: "se me cayó el vaso" },
    { front: "roubaram meu celular", back: "me robaron el celular<small>dativo possessivo: me + artigo</small>" },
    { front: "sonhei com você", back: "soñé contigo<small>conmigo, contigo, consigo</small>" }
  ]
});
