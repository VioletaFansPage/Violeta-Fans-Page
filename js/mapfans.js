document.addEventListener("DOMContentLoaded", function () {
    const map = L.map('mapa-fans', { // Asegúrate de que el ID sea correcto
        center: [37.177336, -2.92528],
        zoom: 5,
        minZoom: 3,
        maxZoom: 10
    });

    // Cargar el mapa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
        maxZoom: 10,
    }).addTo(map);

    // Función para agregar un pin al mapa
    function addPin(lat, lng, nombre, mensaje) {
        const marker = L.marker([lat, lng]).addTo(map);
        marker.bindPopup(`<b>${nombre}</b><br>${mensaje}`).openPopup();
    }

    
    addPin(28.3659943, -14.0563347, 'La NeferViki ౨ৎ', '<br>Querida Violeta, he organizado este proyecto con el objetivo de que puedas acudir a nosotrxs y a nuestros mensajes de apoyo cada vez que lo necesites. <br>Has logrado conquistar corazones a través de tu voz, tu increíble magnetismo, tu brillante personalidad y tu destacable humildad. El amor que transmites traspasa las pantallas, a tal nivel que se podría decir que enamorarse de ti es una epidemia que no para de extenderse, y ojalá nunca deje de hacerlo, porque eres un fenómeno que todo el mundo debería conocer.<br>Sin duda, eres tan bonita como la luna reflejada en el mar.<br>Con muchísimo amor, Viki💜');
    addPin(39.8621406, -4.0287841, 'Triana', '<br>Para la persona con más luz y bondad que tengo el placer de conocer, gracias Violeta por transmitir tanto con tu manera de pensar, cantar o escribir, no tengo palabras para describir lo que es verte subida a un escenario haciendo lo que más te gusta y brillando de esa forma tan única y natural como solo tú sabes, eres maravillosa y el brillo de la luna se queda corto a tu lado, brillas porque eres luz, trasmites esa paz y esa libertá que muchos por desgracia tenemos que buscar pero que por suerte hemos encontrado viéndote cantar, no te haces una idea de la admiración y el amor que siento por ti y todo lo que con tu voz eres capaz de transimitir.<br>Que el arte te acompañe allá donde vayas, prometo estar a tu lado para todo lo que está x venir. Te amo pa siempre 💜');
    addPin(41.3799786, 2.165595, 'Paula', '<br>¡Violeta eres una estrella!💫 <br><br>Te quiero y te admiro muchisimo, me has enseñado muchas cosas y entre ellas me has hecho creer en que de verdad hay gente que empatiza y entiende a la gente con mentes un poco distintas como la mia.<br><br>Tienes una personalidad tan peculiar y maravillosa que no la puedes perder nunca xq es lo que te define como la la luz distinta a las demás que eres, siempre apoyando y entendiendo a todos y dando lo mejor de ti para que todo el mundo esté bien. <br><br>No infravalores nunca lo que haces ni tengas prisa xq todo lo q sale de ti es especial y decirte que aunque las cosas no siempre salgan tan perfectas como tu quieres no mires atrás y preguntes: ¿xq? mira adelante y pregúntate: ¿xq no? y despega sin miedo xq tienes un potencial y un magnetismo increíble. <br><br>No dejes nunca de ser tu misma, xq das vida a todo el que está a tu lado y alegras los días a aquellos que te seguimos, en esta nueva etapa te espera algo precioso y conseguirás lo que quieras por lo curranta que eres y por todo lo que has demostrado, eres admirable! <br><br>Me robaste el corazón des del dia 1 y voy a seguir a tu lado en todo tu futuro, uno de mis sueños es verte cumplir los tuyos y poder estar siguiendo tus logros, ojalá conocerte algun día y poder contarte lo tanto q me has ayudado🥹💜<br><br>Pd: en el museo Van Gogh hay escrito stream el x venir ;) (en la tienda de la salida no en medio del museo que no soy ilegal😁)');
    addPin(43.296791, -2.9853146, 'Mai', '<br>gracias vio por haber sido un referente todo este tiempo, por haberme ayudado a aceptarme a mí misma y por haber hecho que momentos difíciles fuesen más fáciles. eres luz, sensibilidad y magnetismo, pero sobre todo eres arte.');
    addPin(27.9837202, -15.5126655, 'Inés', '<br>holi violeta, bueno a mi eso de expresarme por escrito se me da un poco mal pero lo voy a hacer, quiero agradecerte lo mucho que me has ayudado estos meses, me has trasmitido una felicidad inigualable solo viendo cosas tuyas por redes y escuchando tu musica (deseando que saques más;), quiero que sepas que gracias por inspirarme a seguir con mis metas y mis sueños y nunca rendirme porque tu nunca lo hiciste y mira lo que estás consiguiendo reina, también decirte que me veo muy reflejada en ti, eres una gran persona y con un grandísimo corazoncito y me has enseñado a que por muy mal que te traten nunca tengo que dejar de ser esa gran persona que soy. Eres mi ejemplo a seguir violeta, te quiero mucho y ojalá poder conocerte algún día, tengo muchas cosas más por decirte pero sería escribir mucho jajdjaja. Estaré en cada gira que hagas y deseo con ansias escuchar todo lo que nos tienes preparado. Con esto y un bizcocho termino mi escrito, un besazo💋<br><br>Inés, desde gran canaria😎🩷');
    addPin(38.1273444, -0.8733912, 'Julia', '<br>Puede parecer mentira que una persona que, al principio, parecía ser una simple concursante más dentro de la academia, ha acabado siendo alguien fundamental en el concurso. Y no solo eso, sino que también me has salvado sacándome una sonrisa en los días más duros, aunque tú pensabas que no eras para nada graciosa. Simplemente quería darte las gracias por ser mi lugar seguro en la academia y también quiero que sepas que sufrí mucho en cada gala por tu salvación y siempre obligue a mis amigas a votarte porque te lo mereces. Tuve la suerte de poder escucharte en directo y lo volveré ha hacer en cuanto saques música nueva porque me quedé con ganas de más. Te adoro, brilla siempre como la luna 💜💜.');
    addPin(36.521566, -6.2810939, 'Alba', '<br>que te quiero mucho y que siempre te voy a apoyar en todo lo que hagas y que eres muy especial, me has ayudado muchísimo a ser yo misma y que sigas así y no cambies nunca');
    addPin(38.2291633, -1.4235195, 'Mayte', '<br>Hola Violeta soy Mayte, simplemente darte las gracias por todo. Te vi en los castings de ot2020 y al volver a verte este año supe que ibas a entrar que ibas a marcar un antes y un después en mi. He estado pasando por una etapa muy difícil y siempre me refugiaba en ti. Te voté favorita desde el 20 de noviembre hasta el 15 de enero sin dudarlo ni un segundo. Gracias por devolverme mi sonrisa y el brillo de mis ojos con únicamente escuchar tu nombre o tu voz, espero que me sigas sanando el resto de mi vida. Estaré a tu lado para apoyarte en cada paso que des porque se que llegarás muy lejos, te quiero muchísimo 💜');
    addPin(36.7197187, -4.4269509, 'Adriana', '<br>violeta lo es todo para mi, mi lugar seguro, cuando la veo siento algo muy muy especial, ella es luz me hace la persona más feliz del mundo, gracias violeta por presentarte a ese casting y por ser como eres,lo tienes todo para convertirte en una estrella, admiro cada parte de ti, de como eres con los demás y la forma que tienes de ser, eres el referente que toda adolescente necesita, y yo tengo la suerte de tenerte, me siento tan afortunada por eso, gracias por enseñarme que las verdaderas amistades existen y que cuidar y hacer feliz a la gente que tienes a tu alrededor sale de ti, y de nadie mas, vio eres muy importante para mi de verdad mucho mas de lo que te crees, el 20 de noviembre de 2023 , me levante de la cama sin saber que te convertirías en mi persona favorita y mi lugar seguro para el resto de mi vida, gracias por hacerme feliz, hacer que por un ratito olvide todo lo malo de mi alrededor y me sienta bien, por curarme . con tu sonrisa, tu voz, tu música, por estar siempre para los demás y por ser así, como eres, sonríe, sonríe mucho, tu sonrisa me hace la persona más feliz. te quiero de aquí a la luna y devuelta, que nunca nunca se te olvide.');
    addPin(40.9717889, -5.6633756, 'Irene', '<br>hola vivi queria decirte que me inspiras mucho y que toda la musica que saques me va a gustar un montón porque le pones especial cariño y detalle en hacerla. PD estas vacaciones me animé a leer el romancero gitano y me encantó :)');
    addPin(37.1852541, -5.7797475, 'Lola', '<br>gracias violeta por ser un ejemplo a seguir y por ser tan pura, te quiero mucho, no cambies 🩷');
    addPin(40.4178374, -3.7056292, 'Clau', '<br>es un placer seguirte en tu camino como artista y como persona, gracias por ser tal y como eres violeta.');
    addPin(4.4991709, -74.3390061, 'KAREN', 'Es imposible no sentirse atraído por tu presencia magnética y tu increíble talento. Cada vez que veo tu arte, me maravillo de tu habilidad para capturar la esencia de la vida con tanta pasión y precisión. Eres una inspiración constante, y tu creatividad y dedicación son verdaderamente admirables. Gracias por compartir tu luz y tu arte con el mundo.');
    addPin(19.4390829, -99.1367462, 'YAYIS', 'Violeta: gracias por tu arte y por lo que transmites en él, tienes una de las almas más lindas que he conocido, y espero poder acompañarte mucho tiempo. Un abrazo desde México, te quiero.');
    addPin(41.616478, 0.6207932, 'LAURA', 'Violetita, gracias por ser la persona que eres y por demostrar tanto cariño a todos tus fans. Eres única, con mucho talento y arte. Me has salvado la vida. Gracias por haber aparecido en mi vida. Te quiero un montón y ahí estaré viéndote siempre brillar en el escenario que sea💜💜💜. Recuerda: hay que apuntar al sol para llegar a la luna, y la luna es un sitio que me encanta. ⭐️⭐');
    addPin(41.5634051, 2.0051183, 'AYLIN', 'Gracias, Violeta, por todo lo que haces. Es increíble la manera que tienes de transmitir a la hora de cantar y lo bien que te portas con todo el mundo. Gracias también por alegrarme un poco los días sin saberlo. Espero poder verte en directo más veces de las que ya lo he hecho.');
    addPin(29.8938249, -81.3150245, 'MARIA', 'Violeta, eres luz. Tu música es lo mejor que me ha pasado. Estaremos contigo siempre. Gracias por ser una persona importante en mi vida. Quiero que sepas que eres increíble y que te mereces todo lo bueno que te pase. Te quiero mucho 💘.');
    addPin(36.7150402, -4.4296975, 'CARMEN', 'Hola Vio, me llamo Carmen y soy de Málaga. Desde los castings fuiste la que más me llamó la atención, y en la gala 0 ya te adopté como mi favorita. Con tu música y tus palabras me has ayudado a ser mejor persona y a quererme más. Estoy muy orgullosa de todo lo que estás consiguiendo y todo lo que vas a conseguir. Te quiero muchísimo 💜💜💜💜.');
    addPin(41.3856457, 2.1662816, 'MAX', 'No pensaba seguir esta edición de OT, pero encontré tu video y me llamó mucho la atención tu carisma. Has marcado un antes y un después en mi vida. Gracias por todo lo que haces. No sabes las ganas que tengo de verte en directo y disfrutar de tu música. Me has salvado la vida. Te quiero mil 💜.');
    addPin(28.4633278, -16.2520023, 'LUCÍA', 'Verte cada día en el directo me hacía sentir una calma y tranquilidad que en mi vida cotidiana no había, porque eso es lo que transmites con simplemente tu forma de ser. Gracias por todo lo que has hecho por nosotras las fans. Eres como una obra de arte y nos llenas el corazoncito siempre❤️‍🩹.');

    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    /*addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(34.052235, -118.243683, 'Lucía', 'Violeta me inspira.');
    */
});
