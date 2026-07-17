/* Módulo 5 — Tiempos verbales */
window.COURSE_MODULES = window.COURSE_MODULES || [];
window.COURSE_MODULES.push({
  id: "m5",
  icon: "⏳",
  title: "Tiempos verbales: donde los sistemas se separan",
  description: "El futuro de subjuntivo que murió en español, el infinitivo personal que nunca existió, el pretérito perfecto que no significa lo que crees, el imperativo completo y las perífrasis que los nativos usan a cada minuto.",
  lessons: [
    {
      id: "l1",
      title: "\"He comido\" no es \"tenho comido\"",
      duration: "14 min",
      content: `
<p>Las dos lenguas tienen un pretérito compuesto con la misma forma... y significados <strong>diferentes</strong>. Es uno de los errores más invisibles del portuñol avanzado, porque nadie te corrige — simplemente entienden otra cosa.</p>

<h3>El contraste central</h3>
<div class="table-scroll"><table>
<tr><th></th><th>Portugués: tenho comido</th><th>Español: he comido</th></tr>
<tr><td>Significado</td><td>acción <strong>repetida</strong> últimamente ("ando comendo")</td><td>acción <strong>concluida</strong> en un período aún abierto o con relevancia presente</td></tr>
<tr><td>Ejemplo</td><td><span class="pt">Tenho estudado muito</span> = venho estudando</td><td><span class="es">He estudiado mucho hoy</span> = estudei (hoje)</td></tr>
</table></div>

<div class="ex">
<span class="wrong">"¿Has comido?" entendido como "você tem comido (ultimamente)?"</span>
<span class="right">"¿Has comido?" = "Você (já) comeu (hoje)?"</span>
<span class="gloss">Y al revés: para decir "tenho trabalhado muito", el español natural es "He estado trabajando mucho" o "Últimamente trabajo mucho" — no "he trabajado mucho" a secas, que suena a balance concluido.</span>
</div>

<h3>¿Cuándo usa el español "he + participio"?</h3>
<ul>
<li><strong>Período abierto:</strong> hoy, esta semana, este año, últimamente → <span class="es">Esta semana he tenido tres reuniones.</span></li>
<li><strong>Experiencia de vida:</strong> alguna vez, nunca, ya, todavía no → <span class="es">¿Has estado en Bogotá? Nunca he probado el mate.</span></li>
<li><strong>Relevancia presente:</strong> <span class="es">Se ha ido la luz</span> (y sigue sin luz).</li>
</ul>

<h3>Perfecto vs. indefinido: la variación regional</h3>
<div class="table-scroll"><table>
<tr><th>Región</th><th>"Hoy por la mañana..."</th></tr>
<tr><td>España (centro-norte)</td><td><span class="es">he desayunado tarde</span> — perfecto para el mismo día</td></tr>
<tr><td>Hispanoamérica (general)</td><td><span class="es">desayuné tarde</span> — indefinido casi siempre</td></tr>
</table></div>
<p>Para un brasileño, el uso americano resulta más cómodo (coincide con el <span class="pt">pretérito perfeito simples</span>). Lo importante: entender el uso español sin pensar que "ha desayunado" implica repetición.</p>

<div class="callout warn"><span class="callout-title">El participio: ojo con los irregulares divergentes</span>
<span class="es">escrito, hecho, dicho, visto, puesto, vuelto, roto, muerto, abierto</span>. Trampas frecuentes desde el portugués: <span class="pt">ganho</span> → <span class="es">ganado</span>; <span class="pt">pago</span> → <span class="es">pagado</span> (participio verbal; "pago" existe como adjetivo en zonas de América); <span class="pt">gasto</span> → <span class="es">gastado</span>; <span class="pt">entregue</span> → <span class="es">entregado</span>.</div>

<h3>Pluscuamperfecto: aquí sí coinciden</h3>
<p><span class="pt">"Quando cheguei, ele já tinha saído"</span> → <span class="es">"Cuando llegué, él ya había salido"</span>. Estructura idéntica (haber en imperfecto + participio). Único cuidado: el auxiliar es <strong>haber</strong>, nunca "tener": "había salido", no "tenía salido".</p>
`,
      quiz: {
        questions: [
          {
            q: "\"Tenho trabalhado muito ultimamente\" se dice naturalmente:",
            options: [
              "He trabajado mucho últimamente... está perfecto así",
              "He estado trabajando mucho últimamente.",
              "Trabajé mucho últimamente.",
              "Habré trabajado mucho últimamente."
            ],
            correct: 1,
            explanation: "La iteración reciente del \"tenho + participio\" corresponde a \"he estado + gerundio\" o \"últimamente + presente\". \"He trabajado mucho\" es un balance concluido."
          },
          {
            q: "Un madrileño te pregunta \"¿Has comido?\" a las 15h. Quiere saber si...",
            options: [
              "você tem comido bem ultimamente",
              "você já almoçou hoje",
              "você come com frequência",
              "você vai comer"
            ],
            correct: 1,
            explanation: "El perfecto español = acción concluida en período abierto (hoy): \"¿ya comiste (hoje)?\". Nada de repetición."
          },
          {
            q: "\"¿Alguna vez ___ mate?\" — experiencia de vida:",
            options: [
              "probaste... y es la única opción correcta",
              "has probado",
              "tienes probado",
              "probabas"
            ],
            correct: 1,
            explanation: "Experiencia vital (alguna vez, nunca, ya) → perfecto: \"¿has probado?\". (En América también se oye \"probaste\" — ambas correctas, pero \"tienes probado\" no existe.)"
          },
          {
            q: "El participio correcto: \"Ya he ___ la cuenta y he ___ el premio.\"",
            options: [
              "pago / gano",
              "pagado / ganado",
              "pagado / gano",
              "pago / ganado"
            ],
            correct: 1,
            explanation: "Los participios verbales son regulares: pagado, ganado, gastado, entregado — aunque el portugués use pago, ganho, gasto, entregue."
          },
          {
            q: "\"Quando cheguei, ele já tinha saído\" →",
            options: [
              "Cuando llegué, él ya tenía salido.",
              "Cuando llegué, él ya había salido.",
              "Cuando he llegado, él ya salió.",
              "Cuando llegaba, él ya ha salido."
            ],
            correct: 1,
            explanation: "Pluscuamperfecto con HABER: había salido. \"Tenía salido\" calca el \"tinha saído\" — el auxiliar español es siempre haber."
          },
          {
            q: "En Ciudad de México, lo más natural para \"hoje de manhã tomei café cedo\":",
            options: [
              "Hoy por la mañana he desayunado temprano.",
              "Hoy por la mañana desayuné temprano.",
              "Hoy por la mañana tengo desayunado temprano.",
              "Hoy por la mañana desayunaba temprano."
            ],
            correct: 1,
            explanation: "América prefiere el indefinido (desayuné) incluso para el mismo día. El perfecto para hoy (\"he desayunado\") es del centro-norte de España."
          }
        ]
      }
    },
    {
      id: "l2",
      title: "El futuro de subjuntivo murió: \"quando eu for\" ≠ \"cuando yo fuere\"",
      duration: "13 min",
      content: `
<p>El portugués usa el futuro de subjuntivo todos los días: <span class="pt">quando eu <strong>for</strong>, se você <strong>quiser</strong>, assim que eles <strong>chegarem</strong></span>. En español ese tiempo está <strong>muerto</strong> — sobrevive solo en textos jurídicos y refranes ("adonde fueres, haz lo que vieres"). El hablante de portuñol o lo calca, o duda. La solución es un mapa de dos reglas:</p>

<h3>Regla 1: cuando/apenas/mientras + futuro → presente de subjuntivo</h3>
<div class="table-scroll"><table>
<tr><th>Portugués (futuro de subjuntivo)</th><th>Español (presente de subjuntivo)</th></tr>
<tr><td><span class="pt">Quando eu <strong>for</strong> a Madri...</span></td><td><span class="es">Cuando <strong>vaya</strong> a Madrid...</span></td></tr>
<tr><td><span class="pt">Assim que ele <strong>chegar</strong>, avise.</span></td><td><span class="es">En cuanto <strong>llegue</strong>, avísame.</span></td></tr>
<tr><td><span class="pt">Enquanto você <strong>estiver</strong> aqui...</span></td><td><span class="es">Mientras <strong>estés</strong> aquí...</span></td></tr>
<tr><td><span class="pt">Faça como <strong>quiser</strong>.</span></td><td><span class="es">Haz como <strong>quieras</strong>.</span></td></tr>
<tr><td><span class="pt">Quem <strong>terminar</strong> primeiro, ganha.</span></td><td><span class="es">El que <strong>termine</strong> primero, gana.</span></td></tr>
</table></div>

<div class="ex">
<span class="wrong">Cuando yo iré a Madrid, te visito. / Cuando yo fuere...</span>
<span class="right">Cuando vaya a Madrid, te visitaré.</span>
<span class="gloss">Ni futuro de indicativo ni futuro de subjuntivo (arcaísmo): presente de subjuntivo.</span>
</div>

<h3>Regla 2: si + futuro → presente de INDICATIVO</h3>
<p>La más contraintuitiva para el brasileño. <span class="pt">"Se eu puder"</span> pide subjuntivo en portugués — pero la condicional real española va con indicativo:</p>
<div class="table-scroll"><table>
<tr><th>Portugués</th><th>Español</th></tr>
<tr><td><span class="pt">Se eu <strong>puder</strong>, vou.</span></td><td><span class="es">Si <strong>puedo</strong>, voy.</span></td></tr>
<tr><td><span class="pt">Se você <strong>quiser</strong>, te ajudo.</span></td><td><span class="es">Si <strong>quieres</strong>, te ayudo.</span></td></tr>
<tr><td><span class="pt">Se <strong>chover</strong> amanhã...</span></td><td><span class="es">Si <strong>llueve</strong> mañana...</span></td></tr>
</table></div>
<div class="callout warn"><span class="callout-title">Nunca "si + presente de subjuntivo"</span>
"Si pueda", "si quieras", "si llueva" — imposibles en español. Tras "si" condicional real: presente de indicativo. (La condicional irreal usa imperfecto de subjuntivo: <span class="es">"si pudiera, iría"</span> = "se eu pudesse, iria" — esta sí coincide con el portugués.)</div>

<h3>El resumen en una tabla</h3>
<div class="table-scroll"><table>
<tr><th>Contexto</th><th>Portugués</th><th>Español</th></tr>
<tr><td>Temporal futura (cuando, en cuanto, mientras, hasta que)</td><td>futuro de subjuntivo</td><td><strong>presente de subjuntivo</strong></td></tr>
<tr><td>Condicional real (si)</td><td>futuro de subjuntivo</td><td><strong>presente de indicativo</strong></td></tr>
<tr><td>Condicional irreal (si)</td><td>imperfeito do subjuntivo (pudesse)</td><td>imperfecto de subjuntivo (pudiera/pudiese) ✓ coinciden</td></tr>
<tr><td>Relativa de futuro (quien quiera...)</td><td>futuro de subjuntivo</td><td><strong>presente de subjuntivo</strong></td></tr>
</table></div>
`,
      quiz: {
        questions: [
          {
            q: "\"Quando eu for a Buenos Aires...\" →",
            options: [
              "Cuando yo fuere a Buenos Aires...",
              "Cuando yo iré a Buenos Aires...",
              "Cuando vaya a Buenos Aires...",
              "Cuando voy a Buenos Aires..."
            ],
            correct: 2,
            explanation: "El futuro de subjuntivo portugués se traduce por presente de subjuntivo tras conjunciones temporales: cuando vaya."
          },
          {
            q: "\"Se eu puder, te ligo\" →",
            options: [
              "Si pueda, te llamo.",
              "Si podré, te llamo.",
              "Si puedo, te llamo.",
              "Si pudiere, te llamo."
            ],
            correct: 2,
            explanation: "Tras \"si\" condicional real: presente de INDICATIVO. \"Si pueda\" es imposible en español."
          },
          {
            q: "\"Assim que chegarem os resultados, avisamos\" →",
            options: [
              "En cuanto llegaren los resultados, avisamos.",
              "En cuanto lleguen los resultados, avisamos.",
              "En cuanto llegarán los resultados, avisamos.",
              "Apenas llegaron los resultados, avisamos."
            ],
            correct: 1,
            explanation: "\"En cuanto\" + futuro = presente de subjuntivo: lleguen. El futuro de subjuntivo (llegaren) es un arcaísmo."
          },
          {
            q: "\"Quem quiser participar, levante a mão\" →",
            options: [
              "Quien quisiere participar, que levante la mano.",
              "El que quiera participar, que levante la mano.",
              "Quien querrá participar, que levante la mano.",
              "El que quiere participar... es la única opción."
            ],
            correct: 1,
            explanation: "Relativa de futuro/generalización: presente de subjuntivo — \"el que quiera\". "
          },
          {
            q: "\"Se eu pudesse, viajaria mais\" →",
            options: [
              "Si pudiera, viajaría más.",
              "Si podría, viajaría más.",
              "Si pueda, viajaría más.",
              "Si pudiere, viajaría más."
            ],
            correct: 0,
            explanation: "Condicional irreal: si + imperfecto de subjuntivo (pudiera/pudiese) + condicional. Aquí portugués y español COINCIDEN — \"si podría\" es el error de otros extranjeros, no tuyo."
          },
          {
            q: "\"Faça como você achar melhor\" →",
            options: [
              "Haz como acharás mejor.",
              "Haz como te parezca mejor.",
              "Haz como te parecerá mejor.",
              "Haz como te parece mejor... única opción válida."
            ],
            correct: 1,
            explanation: "\"Como + futuro indefinido\" → presente de subjuntivo: como quieras, como te parezca, donde prefieras."
          }
        ]
      }
    },
    {
      id: "l3",
      title: "El infinitivo personal no existe: aprende a compensarlo",
      duration: "13 min",
      content: `
<p>El portugués tiene un lujo gramatical único: el <strong>infinitivo flexionado</strong> — <span class="pt">para <strong>fazermos</strong>, antes de <strong>saírem</strong>, o fato de <strong>estarmos</strong> aqui</span>. El español no lo tiene, y el brasileño avanzado lo echa de menos cada día. Hay tres estrategias de compensación:</p>

<h3>Estrategia 1: mismo sujeto → infinitivo simple</h3>
<p>Si el sujeto del infinitivo es el mismo de la frase principal, basta el infinitivo:</p>
<ul>
<li><span class="pt">Saímos cedo para chegarmos a tempo.</span> → <span class="es">Salimos temprano para llegar a tiempo.</span> (nós salimos, nós llegamos)</li>
</ul>

<h3>Estrategia 2: sujetos distintos → que + subjuntivo</h3>
<div class="table-scroll"><table>
<tr><th>Portugués</th><th>Español</th></tr>
<tr><td><span class="pt">Trouxe o mapa para você <strong>entender</strong>.</span></td><td><span class="es">Traje el mapa para que <strong>entiendas</strong>.</span></td></tr>
<tr><td><span class="pt">Antes de eles <strong>chegarem</strong>...</span></td><td><span class="es">Antes de que <strong>lleguen</strong>...</span></td></tr>
<tr><td><span class="pt">Sem nós <strong>percebermos</strong>...</span></td><td><span class="es">Sin que nos <strong>demos cuenta</strong>...</span></td></tr>
<tr><td><span class="pt">É melhor vocês <strong>esperarem</strong>.</span></td><td><span class="es">Es mejor que <strong>esperen</strong>.</span></td></tr>
<tr><td><span class="pt">Depois de os convidados <strong>saírem</strong>...</span></td><td><span class="es">Después de que <strong>salieran/salieron</strong> los invitados...</span></td></tr>
</table></div>

<div class="ex">
<span class="wrong">Traje el mapa para tú entender. / Es mejor ustedes esperar.</span>
<span class="right">Traje el mapa para que entiendas. / Es mejor que esperen.</span>
<span class="gloss">"Para tú entender" es el calco literal del infinitivo personal — inmediatamente reconocible como portuñol. Sujeto nuevo = "que" + subjuntivo, siempre.</span>
</div>

<h3>Estrategia 3: "o fato de sermos..." → "el hecho de que seamos..."</h3>
<ul>
<li><span class="pt">O fato de estarmos aqui já é uma vitória.</span> → <span class="es">El hecho de que estemos aquí ya es una victoria.</span></li>
<li><span class="pt">Apesar de sermos poucos...</span> → <span class="es">A pesar de que somos/seamos pocos... / Aunque somos pocos...</span></li>
</ul>

<div class="callout tip"><span class="callout-title">El reflejo a instalar</span>
Cada vez que tu cerebro genere un infinitivo con sujeto propio (chegarmos, saírem, fazeres), dispara la conversión automática: <strong>que + subjuntivo</strong>. Es una sola regla y cubre todos los casos.</div>

<h3>Bonus: al + infinitivo (aquí coinciden)</h3>
<p><span class="pt">ao chegar</span> = <span class="es">al llegar</span> ✓. Pero con sujeto distinto, el portugués flexiona y el español no puede: <span class="pt">"ao chegarem os convidados"</span> → <span class="es">"cuando llegaron los invitados"</span> o <span class="es">"al llegar los invitados"</span> (con el sujeto pospuesto — esta sí es válida y elegante).</p>
`,
      quiz: {
        questions: [
          {
            q: "\"Trouxe isto para vocês lerem\" →",
            options: [
              "Traje esto para ustedes leer.",
              "Traje esto para que lo lean.",
              "Traje esto para leerem.",
              "Traje esto para ustedes leerlo."
            ],
            correct: 1,
            explanation: "El infinitivo personal no existe: sujeto distinto → \"para que\" + subjuntivo (lean)."
          },
          {
            q: "\"Antes de os convidados chegarem, escondam os presentes\" — la primera parte es:",
            options: [
              "Antes de los invitados llegar",
              "Antes de que lleguen los invitados",
              "Antes de llegaren los invitados",
              "Antes que los invitados llegan"
            ],
            correct: 1,
            explanation: "Sujetos distintos: \"antes de que\" + subjuntivo. \"Antes de los invitados llegar\" es calco del infinitivo personal."
          },
          {
            q: "\"Saímos cedo para chegarmos a tempo\" (mismo sujeto) →",
            options: [
              "Salimos temprano para que lleguemos a tiempo... es la única opción.",
              "Salimos temprano para llegar a tiempo.",
              "Salimos temprano para llegarmos a tiempo.",
              "Salimos temprano a fin de llegarnos a tiempo."
            ],
            correct: 1,
            explanation: "Mismo sujeto → infinitivo simple: \"para llegar\". (\"Para que lleguemos\" no es agramatical, pero el infinitivo es lo natural con sujeto idéntico.)"
          },
          {
            q: "\"O fato de sermos estrangeiros não importa\" →",
            options: [
              "El hecho de ser extranjeros no importa... también válida con mismo referente, pero la estructura con \"que\" es:",
              "El hecho de que seamos extranjeros no importa.",
              "El hecho de seamos extranjeros no importa.",
              "El hecho de nosotros ser extranjeros no importa."
            ],
            correct: 1,
            explanation: "\"O fato de + inf. pessoal\" → \"el hecho de que\" + subjuntivo: que seamos. El calco \"de nosotros ser\" delata portuñol."
          },
          {
            q: "\"Sem percebermos, ficou tarde\" →",
            options: [
              "Sin percibirmos, se hizo tarde.",
              "Sin que nos diéramos cuenta, se hizo tarde.",
              "Sin nosotros percibir, se hizo tarde.",
              "Sin darse cuenta, ficó tarde."
            ],
            correct: 1,
            explanation: "\"Sem + inf. pessoal\" → \"sin que\" + subjuntivo: sin que nos diéramos cuenta. (Y \"ficar tarde\" = hacerse tarde.)"
          },
          {
            q: "\"Ao saírem os resultados, comemoramos\" — la forma elegante en español:",
            options: [
              "Al salieren los resultados, celebramos.",
              "Al salir los resultados, celebramos.",
              "Al los resultados salir, celebramos.",
              "En saliendo los resultados, celebramos."
            ],
            correct: 1,
            explanation: "\"Al + infinitivo\" con sujeto pospuesto es válido y elegante: \"al salir los resultados\". El infinitivo no se flexiona jamás."
          }
        ]
      }
    },
    {
      id: "l4",
      title: "El subjuntivo fino: disparadores que difieren",
      duration: "14 min",
      content: `
<p>La arquitectura del subjuntivo es parecida en las dos lenguas — por eso los errores están en los <strong>detalles de los disparadores</strong>. Estos cinco contextos concentran las diferencias:</p>

<h3>1. Aunque: el "embora" que engaña</h3>
<p><span class="pt">Embora</span> siempre pide subjuntivo. <span class="es">Aunque</span> alterna, y el modo <strong>cambia el significado</strong>:</p>
<ul>
<li><span class="es">Aunque <strong>llueve</strong>, salgo.</span> — indicativo: está lloviendo de hecho (= "embora esteja chovendo").</li>
<li><span class="es">Aunque <strong>llueva</strong>, salgo.</span> — subjuntivo: hipótesis o concesión (= "mesmo que chova").</li>
</ul>

<h3>2. Tal vez / quizá(s): flotan entre los modos</h3>
<ul>
<li><span class="es">Quizás <strong>venga</strong> mañana.</span> — duda real (subjuntivo, lo más común).</li>
<li><span class="es">Quizás <strong>viene</strong> mañana.</span> — el hablante lo cree probable (indicativo, válido).</li>
<li>Pero <span class="es">a lo mejor</span> — sinónimo coloquial — va <strong>siempre con indicativo</strong>: "A lo mejor vengo mañana."</li>
</ul>

<h3>3. Ojalá: la palabra que el portugués perdió</h3>
<p>Del árabe "law šá lláh". Prima del "oxalá" portugués (hoy casi extinto en Brasil; "tomara" ocupó su lugar) y siempre pide subjuntivo:</p>
<ul>
<li><span class="es">Ojalá <strong>gane</strong> Brasil.</span> — deseo posible (presente de subj.)</li>
<li><span class="es">Ojalá <strong>ganara</strong>.</span> — deseo improbable (imperfecto de subj.)</li>
<li><span class="es">Ojalá <strong>hubiera ganado</strong>.</span> — lamento del pasado.</li>
</ul>

<h3>4. Verbos de percepción negados</h3>
<div class="table-scroll"><table>
<tr><th>Afirmativo → indicativo</th><th>Negativo → subjuntivo</th></tr>
<tr><td><span class="es">Creo que <strong>tienes</strong> razón.</span></td><td><span class="es">No creo que <strong>tengas</strong> razón.</span></td></tr>
<tr><td><span class="es">Parece que <strong>es</strong> tarde.</span></td><td><span class="es">No parece que <strong>sea</strong> tarde.</span></td></tr>
</table></div>
<p>Igual que en portugués culto — pero el portugués brasileño hablado relaja esta regla ("não acho que ele vem"), y esa relajación <strong>no existe</strong> en español: "no creo que viene" suena claramente extranjero.</p>

<h3>5. El imperfecto de subjuntivo tiene dos formas</h3>
<p><span class="es">hablara / hablase</span>, <span class="es">fuera / fuese</span> — total equivalencia. La forma en <strong>-ra</strong> domina en el habla (sobre todo en América); la forma en <strong>-se</strong> es más libresca. Al brasileño le resulta natural la -se (por "falasse, fosse") — úsala si quieres, pero acostúmbrate a <strong>oír y producir la -ra</strong>, que es la mayoritaria.</p>

<div class="callout note"><span class="callout-title">Falso amigo estructural: "gostaria"</span>
El condicional de cortesía portugués <span class="pt">"gostaria de..."</span> → español <span class="es">"me gustaría..."</span> (estructura gustar, módulo 4). Y en peticiones, el español prefiere <span class="es">quisiera</span> (imperfecto de subjuntivo de cortesía): "Quisiera una mesa para dos" — fórmula elegantísima que el portuñol nunca usa.</div>
`,
      quiz: {
        questions: [
          {
            q: "¿Cuál frase significa \"está lloviendo de hecho, pero salgo igual\"?",
            options: [
              "Aunque llueva, salgo.",
              "Aunque llueve, salgo.",
              "Aunque lloviera, salgo.",
              "Ojalá llueva, salgo."
            ],
            correct: 1,
            explanation: "Aunque + indicativo = hecho real (embora + subj. en portugués). Aunque + subjuntivo = hipótesis (mesmo que)."
          },
          {
            q: "¿Cuál combinación es IMPOSIBLE en español?",
            options: [
              "Quizás venga mañana.",
              "A lo mejor viene mañana.",
              "A lo mejor venga mañana.",
              "Tal vez viene mañana."
            ],
            correct: 2,
            explanation: "\"A lo mejor\" va siempre con indicativo, aunque exprese duda. Quizás/tal vez admiten ambos modos."
          },
          {
            q: "Deseo improbable en el pasado: \"Tomara que ele tivesse vindo\" →",
            options: [
              "Ojalá hubiera venido.",
              "Ojalá vendría.",
              "Ojalá ha venido.",
              "Ojalá venga."
            ],
            correct: 0,
            explanation: "Lamento sobre el pasado: ojalá + pluscuamperfecto de subjuntivo (hubiera venido)."
          },
          {
            q: "\"Não acho que ele vem\" (coloquial BR) en español correcto:",
            options: [
              "No creo que viene.",
              "No creo que venga.",
              "No creo que vendrá.",
              "No creo que viniera."
            ],
            correct: 1,
            explanation: "Negación de creer → subjuntivo SIEMPRE: no creo que venga. La relajación coloquial brasileña no existe en español."
          },
          {
            q: "\"hablara\" y \"hablase\" son...",
            options: [
              "tiempos distintos: pasado y futuro",
              "equivalentes; -ra domina en el habla, -se es más libresca",
              "-ra es americana y -se es incorrecta",
              "-ra es subjuntivo y -se es indicativo"
            ],
            correct: 1,
            explanation: "Total equivalencia. La forma en -ra es la mayoritaria en el habla; la -se (paralela al portugués falasse) es más formal/literaria."
          },
          {
            q: "En un restaurante, la forma más elegante de pedir:",
            options: [
              "Gustaría de una mesa para dos.",
              "Quisiera una mesa para dos.",
              "Quiera una mesa para dos.",
              "Me gustara una mesa para dos."
            ],
            correct: 1,
            explanation: "\"Quisiera\" (imperfecto de subjuntivo de cortesía) es la fórmula nativa. \"Gostaria de\" → \"me gustaría\", nunca \"gustaría de\"."
          }
        ]
      }
    },
    {
      id: "l5",
      title: "El imperativo completo: ordena como un nativo",
      duration: "14 min",
      content: `
<p>El imperativo español tiene <strong>cinco personas</strong> y dos polaridades — y el brasileño, acostumbrado al imperativo simplificado del habla coloquial ("fala!", "vai!"), suele improvisar. Esta lección arma la tabla completa de una vez.</p>

<h3>El sistema completo (hablar)</h3>
<div class="table-scroll"><table>
<tr><th>Persona</th><th>Afirmativo</th><th>Negativo</th></tr>
<tr><td>tú</td><td><span class="es">habla</span></td><td><span class="es">no hables</span></td></tr>
<tr><td>vos</td><td><span class="es">hablá</span></td><td><span class="es">no hables</span></td></tr>
<tr><td>usted</td><td><span class="es">hable</span></td><td><span class="es">no hable</span></td></tr>
<tr><td>vosotros</td><td><span class="es">hablad</span></td><td><span class="es">no habléis</span></td></tr>
<tr><td>ustedes</td><td><span class="es">hablen</span></td><td><span class="es">no hablen</span></td></tr>
</table></div>
<p>Regla de oro: <strong>todo negativo usa el presente de subjuntivo</strong>. Y usted/ustedes usan subjuntivo también en afirmativo (hable, hablen).</p>

<h3>Los ocho irregulares de "tú" que hay que saber de memoria</h3>
<div class="table-scroll"><table>
<tr><th>Verbo</th><th>Imperativo tú</th><th>Ejemplo</th></tr>
<tr><td>poner</td><td><span class="es">pon</span></td><td>Pon la mesa.</td></tr>
<tr><td>venir</td><td><span class="es">ven</span></td><td>Ven acá.</td></tr>
<tr><td>decir</td><td><span class="es">di</span></td><td>Dime la verdad.</td></tr>
<tr><td>hacer</td><td><span class="es">haz</span></td><td>Haz la tarea.</td></tr>
<tr><td>salir</td><td><span class="es">sal</span></td><td>Sal de ahí.</td></tr>
<tr><td>ser</td><td><span class="es">sé</span></td><td>Sé puntual.</td></tr>
<tr><td>tener</td><td><span class="es">ten</span></td><td>Ten paciencia.</td></tr>
<tr><td>ir</td><td><span class="es">ve</span></td><td>Ve al mercado.</td></tr>
</table></div>
<div class="ex">
<span class="wrong">¡Hace la tarea y dice la verdad! (calco de "faz!" "diz!")</span>
<span class="right">¡Haz la tarea y di la verdad!</span>
<span class="gloss">Los monosílabos irregulares (pon, ven, di, haz, sal, sé, ten, ve) no se parecen al portugués — son pura memorización, y son frecuentísimos.</span>
</div>

<h3>Con pronombres: el ensamblaje</h3>
<ul>
<li>Afirmativo = pegado: <span class="es">dímelo, ponte el abrigo, dáselo, siéntense</span>.</li>
<li>Negativo = separado antes: <span class="es">no me lo digas, no te pongas eso, no se lo des</span>.</li>
<li>Curiosidad: <span class="es">vamos + nos = ¡vámonos!</span> (cae la -s) = vamos embora!</li>
</ul>

<h3>Suavizadores: cómo ordenar sin sonar sargento</h3>
<p>El imperativo español directo es más común y menos rudo que en portugués brasileño — "dame el pan" en una panadería es neutro, no grosero. Aun así, ten el kit de cortesía:</p>
<ul>
<li><span class="es">¿Me pasas la sal?</span> — presente de indicativo como pedido (= "me passa o sal?").</li>
<li><span class="es">¿Podrías ayudarme?</span> / <span class="es">¿Me ayudas?</span></li>
<li><span class="es">Quisiera... / ¿Sería posible...?</span> — cortesía máxima.</li>
<li><span class="es">Dame el pan, porfa.</span> — imperativo + "porfa/por favor": el estándar cotidiano.</li>
</ul>
`,
      quiz: {
        questions: [
          {
            q: "\"Faz o dever e diz a verdade\" (a un niño, tú) →",
            options: [
              "Hace el deber y dice la verdad.",
              "Haz los deberes y di la verdad.",
              "Haga los deberes y diga la verdad.",
              "Hacé los deberes y decí la verdad... en tuteo."
            ],
            correct: 1,
            explanation: "Imperativos irregulares de tú: haz, di (junto con pon, ven, sal, sé, ten, ve). \"Haga/diga\" es usted; \"hacé/decí\" es voseo."
          },
          {
            q: "El negativo de \"dímelo\" es:",
            options: [
              "no dímelo",
              "no me lo digas",
              "no digas-me-lo",
              "no me digas lo"
            ],
            correct: 1,
            explanation: "Negativo = pronombres separados antes + subjuntivo: no me lo digas. Afirmativo = todo pegado: dímelo."
          },
          {
            q: "A un cliente formal (usted): \"siéntese, por favor\". ¿Y el negativo?",
            options: [
              "No siéntese.",
              "No se siente.",
              "No se sienta.",
              "No sientese."
            ],
            correct: 1,
            explanation: "Usted usa subjuntivo en ambos: siéntese (afirmativo, enclisis) / no se siente (negativo, proclisis). \"No se sienta\" sería del verbo sentir."
          },
          {
            q: "\"Vamos embora!\" →",
            options: [
              "¡Vamos fuera!",
              "¡Vámonos!",
              "¡Vamosnos!",
              "¡Nos vamos... es la única forma!"
            ],
            correct: 1,
            explanation: "vamos + nos = vámonos (cae la -s). \"Nos vamos\" también existe como declaración; la orden entusiasta es \"¡vámonos!\"."
          },
          {
            q: "En una panadería de Madrid, \"dame una barra, porfa\" suena...",
            options: [
              "grosero: falta el condicional",
              "neutro y natural: el imperativo directo + porfa es el estándar cotidiano",
              "demasiado formal",
              "incorrecto gramaticalmente"
            ],
            correct: 1,
            explanation: "El imperativo español es menos rudo que su equivalente brasileño: \"dame/ponme + por favor\" es el registro normal de tienda."
          },
          {
            q: "El imperativo voseante afirmativo de \"hablar\" y \"venir\":",
            options: [
              "habla / ven",
              "hablá / vení",
              "hable / venga",
              "hablad / venid"
            ],
            correct: 1,
            explanation: "Voseo: agudo desde el infinitivo — hablá, vení, decí, poné. (habla/ven = tú; hable/venga = usted; hablad/venid = vosotros)."
          }
        ]
      }
    },
    {
      id: "l6",
      title: "Perífrasis y futuro: soler, volver a, llevar + gerundio",
      duration: "15 min",
      content: `
<p>Cierre del módulo con las <strong>perífrasis verbales</strong> — las combinaciones que los nativos usan a cada minuto y que no siempre tienen paralelo portugués. Dominarlas es pasar de "correcto" a "natural".</p>

<h3>Las cinco perífrasis de oro</h3>
<div class="table-scroll"><table>
<tr><th>Perífrasis</th><th>Significa</th><th>Ejemplo</th><th>Portugués</th></tr>
<tr><td><span class="es">soler + inf.</span></td><td>costumar</td><td>Suelo desayunar a las siete.</td><td>costumo tomar café às sete</td></tr>
<tr><td><span class="es">volver a + inf.</span></td><td>fazer de novo</td><td>Volví a ver la película.</td><td>vi o filme de novo</td></tr>
<tr><td><span class="es">acabar de + inf.</span></td><td>acabar de</td><td>Acabo de llegar.</td><td>acabei de chegar ✓</td></tr>
<tr><td><span class="es">llevar + gerundio</span></td><td>tempo acumulado</td><td>Llevo dos años viviendo aquí.</td><td>faz dois anos que moro aqui</td></tr>
<tr><td><span class="es">seguir + gerundio</span></td><td>continuar</td><td>Sigo estudiando español.</td><td>continuo estudando ✓</td></tr>
</table></div>

<div class="ex">
<span class="wrong">Acostumbro desayunar temprano. / Vi la película de nuevo otra vez.</span>
<span class="right">Suelo desayunar temprano. / Volví a ver la película.</span>
<span class="gloss">"Acostumbrar" existe pero es formal; el día a día usa "soler". Y "volver a + infinitivo" es LA forma nativa de "de novo" — más que "otra vez/de nuevo".</span>
</div>

<div class="callout tip"><span class="callout-title">"Llevo dos años viviendo aquí"</span>
La perífrasis <span class="es">llevar + tiempo + gerundio</span> no tiene paralelo portugués y es oro puro: "¿Cuánto llevas esperando?" (Há quanto tempo você espera?), "Llevo horas intentándolo" (Faz horas que tento). Además: <span class="es">"llevo tres cafés hoy"</span> = já tomei três cafés hoje.</div>

<h3>El futuro de probabilidad: "serán las tres"</h3>
<p>El futuro español tiene un segundo empleo que el portugués cubre con "deve": la <strong>conjetura</strong>:</p>
<div class="table-scroll"><table>
<tr><th>Portugués</th><th>Español</th></tr>
<tr><td><span class="pt">Devem ser umas três horas.</span></td><td><span class="es">Serán las tres.</span></td></tr>
<tr><td><span class="pt">Ele deve estar dormindo.</span></td><td><span class="es">Estará durmiendo.</span></td></tr>
<tr><td><span class="pt">Quem deve ser? (na porta)</span></td><td><span class="es">¿Quién será?</span></td></tr>
<tr><td><span class="pt">Devia ter umas 50 pessoas.</span></td><td><span class="es">Habría unas 50 personas.</span></td></tr>
</table></div>
<p>El "deber (de) + infinitivo" también existe (<span class="es">"debe de estar durmiendo"</span>), pero el futuro de conjetura es más ágil y muy nativo.</p>

<h3>Ir a + infinitivo vs. futuro en -ré</h3>
<ul>
<li>Habla cotidiana: <span class="es">voy a viajar, va a llover</span> — como el "vou viajar" brasileño. ✓</li>
<li>El futuro sintético (<span class="es">viajaré, lloverá</span>) vive en promesas, predicciones formales y conjeturas — más vivo que el "viajarei" portugués, que ya suena libresco en Brasil.</li>
<li>Presente pro futuro: <span class="es">"Mañana te llamo"</span> = "amanhã te ligo" ✓ coinciden.</li>
</ul>

<h3>Dos calcos a evitar</h3>
<div class="ex">
<span class="wrong">Estoy a trabajar. (calco del "estou a trabalhar" — ¡que es de Portugal!)</span>
<span class="right">Estoy trabajando.</span>
<span class="gloss">El español usa siempre estar + gerundio. (El brasileño no suele cometer este error — pero conviene saber que "estar a + infinitivo" tampoco existe en español.)</span>
</div>
<div class="ex">
<span class="wrong">Vou indo. / Voy yendo.</span>
<span class="right">Ya me voy. / Voy tirando. (Es., coloquial: "vou levando")</span>
<span class="gloss">El "vou indo" brasileño no se calca. Para despedirse: "bueno, me voy", "ya me marcho". Para "vou levando": "voy tirando" (España) o "ahí vamos" (América).</span>
</div>
`,
      quiz: {
        questions: [
          {
            q: "\"Costumo almoçar em casa\" →",
            options: [
              "Acostumbro almorzar en casa... es la forma más natural.",
              "Suelo almorzar en casa.",
              "Solo almorzar en casa.",
              "Tengo costumbre de almorzar en casa."
            ],
            correct: 1,
            explanation: "soler + infinitivo = costumar: suelo, sueles, suele... La forma cotidiana por excelencia."
          },
          {
            q: "\"Li o livro de novo\" con la perífrasis nativa:",
            options: [
              "Leí el libro de nuevo.",
              "Volví a leer el libro.",
              "Releí al libro.",
              "Torné a leer el libro."
            ],
            correct: 1,
            explanation: "volver a + infinitivo es LA forma natural de \"de novo\": volví a leer, volvió a llamar, no vuelvas a hacerlo."
          },
          {
            q: "\"Faz três anos que moro em Madri\" con \"llevar\":",
            options: [
              "Llevo tres años viviendo en Madrid.",
              "Hace tres años llevando en Madrid.",
              "Llevo viviendo hace tres años Madrid.",
              "Tengo tres años viviendo en Madrid... y es la única correcta."
            ],
            correct: 0,
            explanation: "llevar + tiempo + gerundio: \"llevo tres años viviendo\". (\"Tengo tres años viviendo\" se oye en el Caribe/México, pero \"llevo\" es la forma general.)"
          },
          {
            q: "Tocan a la puerta a medianoche. \"Quem será?\" en español:",
            options: [
              "¿Quién debe ser?",
              "¿Quién será?",
              "¿Quién es?... la conjetura no existe.",
              "¿Quién fuera?"
            ],
            correct: 1,
            explanation: "Futuro de probabilidad: ¿quién será?, serán las tres, estará durmiendo — la conjetura que el portugués expresa con \"deve\"."
          },
          {
            q: "\"Ele deve estar no trânsito\" (conjetura) →",
            options: [
              "Él estará en el tráfico. / Debe de estar en el tráfico.",
              "Él debe estar en el tránsito... único válido.",
              "Él esté en el tráfico.",
              "Él estaría siendo en el tráfico."
            ],
            correct: 0,
            explanation: "Dos opciones nativas: futuro de conjetura (\"estará en el tráfico\") o \"debe de + infinitivo\". Ambas correctas."
          },
          {
            q: "\"Acabei de chegar e continuo cansado\" →",
            options: [
              "Acabo de llegar y sigo cansado.",
              "Acabé de llegar y continúo a estar cansado.",
              "Termino de llegar y sigo cansado.",
              "Acabo de llegar y voy cansando."
            ],
            correct: 0,
            explanation: "acabar de + inf. (en presente: acabo de llegar) y seguir + adjetivo/gerundio (sigo cansado, sigo estudiando)."
          },
          {
            q: "\"Já tomei três cafés hoje\" con \"llevar\":",
            options: [
              "Llevo tres cafés hoy.",
              "Llevo tomado tres cafés hoy.",
              "Traigo tres cafés hoy.",
              "Voy por tres cafés hoy... y las demás son incorrectas."
            ],
            correct: 0,
            explanation: "llevar + cantidad = acumulado hasta ahora: \"llevo tres cafés\", \"llevo la mitad del libro\". Compacto y muy nativo."
          }
        ]
      }
    }
  ],
  flashcards: [
    { front: "tenho trabalhado muito (ultimamente)", back: "he estado trabajando mucho<small>\"he trabajado\" = balanço concluído</small>" },
    { front: "ganho / pago / gasto / entregue (particípios)", back: "ganado / pagado / gastado / entregado" },
    { front: "ele já tinha saído", back: "ya había salido<small>auxiliar sempre HABER</small>" },
    { front: "quando eu for / assim que ele chegar", back: "cuando vaya / en cuanto llegue<small>presente de subjuntivo</small>" },
    { front: "se eu puder / se você quiser", back: "si puedo / si quieres<small>si + INDICATIVO</small>" },
    { front: "se eu pudesse, iria", back: "si pudiera, iría<small>aqui as línguas coincidem</small>" },
    { front: "para vocês lerem / antes de eles chegarem", back: "para que lean / antes de que lleguen<small>que + subjuntivo</small>" },
    { front: "o fato de estarmos aqui", back: "el hecho de que estemos aquí" },
    { front: "embora esteja chovendo / mesmo que chova", back: "aunque llueve / aunque llueva<small>o modo muda o sentido</small>" },
    { front: "tomara que ganhe!", back: "¡ojalá gane!<small>ojalá + subjuntivo sempre</small>" },
    { front: "talvez (com \"a lo mejor\")", back: "a lo mejor viene<small>sempre INDICATIVO</small>" },
    { front: "não acho que ele venha", back: "no creo que venga<small>negação → subjuntivo, sem exceção</small>" },
    { front: "faz! / diz! / põe! / vem! (tú)", back: "¡haz! / ¡di! / ¡pon! / ¡ven!<small>+ sal, sé, ten, ve</small>" },
    { front: "vamos embora!", back: "¡vámonos!<small>vamos + nos, cai o -s</small>" },
    { front: "costumo madrugar", back: "suelo madrugar<small>soler + infinitivo</small>" },
    { front: "vi o filme de novo", back: "volví a ver la película<small>volver a + infinitivo</small>" },
    { front: "faz dois anos que moro aqui", back: "llevo dos años viviendo aquí" },
    { front: "deve ser umas três horas", back: "serán las tres<small>futuro de conjectura</small>" },
    { front: "gostaria de... (pedido formal)", back: "quisiera...<small>imperfecto de subjuntivo de cortesía</small>" }
  ]
});
