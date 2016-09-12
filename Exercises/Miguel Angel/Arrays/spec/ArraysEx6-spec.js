/****************************************************************************

Name: ArraysEx6.js
Search: label:interns subject:arrex6 
Target: Exercises/$1/Arrays
Function: morseDec

****************************************************************************/

"use strict";

var getScriptMetadata = require("./../../../../get_script_metadata");

const DeliveryLimit = new Date(2016, 9, 8, 10, 0, 1);

// var MORSE = 'var MORSE = [{"morse": ".-","char": "A"},{"morse": "-...","char": "B"},{"morse": "-.-.","char": "C"},{"morse": "-..","char": "D"},{"morse": ".","char": "E"},{"morse": "..-.","char": "F"},{"morse": "--.","char": "G"},{"morse": "....","char": "H"},{"morse": "..","char": "I"},{"morse": ".---","char": "J"},{"morse": "-.-","char": "K"},{"morse": ".-..","char": "L"},{"morse": "--","char": "M"},{"morse": "-.","char": "N"},{"morse": "---","char": "O"},{"morse": ".--.","char": "P"},{"morse": "--.-","char": "Q"},{"morse": ".-.","char": "R"},{"morse": "...","char": "S"},{"morse": "-","char": "T"},{"morse": "..-","char": "U"},{"morse": "...-","char": "V"},{"morse": ".--","char": "W"},{"morse": "-..-","char": "X"},{"morse": "-.--","char": "Y"},{"morse": "--..","char": "Z"},{"morse": "-----","char": "0"},{"morse": ".----","char": "1"},{"morse": "..---","char": "2"},{"morse": "...--","char": "3"},{"morse": "....-","char": "4"},{"morse": ".....","char": "5"},{"morse": "-....","char": "6"},{"morse": "--...","char": "7"},{"morse": "---..","char": "8"},{"morse": "----.","char": "9"} ];';
var MORSE = [{"morse": ".-","char": "A"},{"morse": "-...","char": "B"},{"morse": "-.-.","char": "C"},{"morse": "-..","char": "D"},{"morse": ".","char": "E"},{"morse": "..-.","char": "F"},{"morse": "--.","char": "G"},{"morse": "....","char": "H"},{"morse": "..","char": "I"},{"morse": ".---","char": "J"},{"morse": "-.-","char": "K"},{"morse": ".-..","char": "L"},{"morse": "--","char": "M"},{"morse": "-.","char": "N"},{"morse": "---","char": "O"},{"morse": ".--.","char": "P"},{"morse": "--.-","char": "Q"},{"morse": ".-.","char": "R"},{"morse": "...","char": "S"},{"morse": "-","char": "T"},{"morse": "..-","char": "U"},{"morse": "...-","char": "V"},{"morse": ".--","char": "W"},{"morse": "-..-","char": "X"},{"morse": "-.--","char": "Y"},{"morse": "--..","char": "Z"},{"morse": "-----","char": "0"},{"morse": ".----","char": "1"},{"morse": "..---","char": "2"},{"morse": "...--","char": "3"},{"morse": "....-","char": "4"},{"morse": ".....","char": "5"},{"morse": "-....","char": "6"},{"morse": "--...","char": "7"},{"morse": "---..","char": "8"},{"morse": "----.","char": "9"} ];

const texts = [
  {
    text: "hoLa muNdO",
    morse: ".... --- .-.. .-     -- ..- -. -.. ---"
  },
  {
    text: "hola  mundo",
    morse: ".... --- .-.. .-         -- ..- -. -.. ---"
  },
  {
    text: " this string starts with an space",
    morse: "    - .... .. ...     ... - .-. .. -. --.     ... - .- .-. - ...     .-- .. - ....     .- -.     ... .--. .- -.-. ."
  },
  {
    text: "this string has an space at the end ",
    morse: "- .... .. ...     ... - .-. .. -. --.     .... .- ...     .- -.     ... .--. .- -.-. .     .- -     - .... .     . -. -..    "
  }
];

const veryLongText = {
  text: "EN UN LUGAR DE LA MANCHA, DE CUYO NOMBRE NO QUIERO ACORDARME, NO HA MUCHO TIEMPO QUE VIVIA UN HIDALGO DE LOS DE LANZA EN ASTILLERO, ADARGA ANTIGUA, ROCIN FLACO Y GALGO CORREDOR. UNA OLLA DE ALGO MAS VACA QUE CARNERO, SALPICON LAS MAS NOCHES, DUELOS Y QUEBRANTOS LOS SÁBADOS, LANTEJAS LOS VIERNES, ALGUN PALOMINO DE AÑADIDURA LOS DOMINGOS CONSUMIAN LAS TRES PARTES DE SU HACIENDA. EL RESTO DELLA CONCLUIAN SAYO DE VELARTE, CALZAS DE VELLUDO PARA LAS FIESTAS CON SUS PANTUFLOS DE LO MISMO, Y LOS DIAS DE ENTRE SEMANA SE HONRABA CON SU VELLORÍ DE LO MAS FINO. TENIA EN SU CASA UNA AMA QUE PASABA DE LOS CUARENTA, Y UNA SOBRINA QUE NO LLEGABA Á LOS VEINTE, Y UN MOZO DE CAMPO Y PLAZA, QUE ASI ENSILLABA EL ROCIN COMO TOMABA LA PODADERA. FRISABA LA EDAD DE NUESTRO HIDALGO CON LOS CINCUENTA AÑOS ERA DE COMPLEXION RECIA, SECO DE CARNES, ENJUTO DE ROSTRO, GRAN MADRUGADOR Y AMIGO DE LA CAZA. QUIEREN DECIR QUE TENIA EL SOBRENOMBRE DE QUIJADA Ó QUESADA QUE EN ESTO HAY ALGUNA DIFERENCIA EN LOS AUTORES QUE DESTE CASO ESCRIBEN, AUNQUE POR CONJETURAS VEROSÍMILES SE DEJA ENTENDER QUE SE LLAMABA QUIJANA. PERO ESTO IMPORTA POCO Á NUESTRO CUENTO BASTA QUE EN LA NARRACION DÉL NO SE SALGA UN PUNTO DE LA VERDAD. ES PUES DE SABER QUE ESTE SOBREDICHO HIDALGO LOS RATOS QUE ESTABA OCIOSO QUE ERAN LOS MAS DEL AÑO SE DABA Á LEER LIBROS DE CABALLERÍAS, CON TANTA AFICION Y GUSTO, QUE OLVIDÓ CASI DE TODO PUNTO EL EJERCICIO DE LA CAZA, Y AUN LA ADMINISTRACION DE SU HACIENDA Y LLEGÓ Á TANTO SU CASA TODOS CUANTOS PUDO HABER DELLOS Y DE TODOS NINGUNOS LE PARECIAN TAN BIEN COMO LOS QUE COMPUSO EL FAMOSO FELICIANO DE SILVA PORQUE LA CLARIDAD DE SU PROSA, Y AQUELLAS ENTRICADAS RAZONES SUYAS LE PARECIAN DE PERLAS Y MAS CUANDO LLEGABA Á LEER AQUELLOS REQUIEBROS Y CARTAS DE DESAFÍO, DONDE EN MUCHAS PARTES HALLABA ESCRITO LA RAZON DE LA SINRAZON QUE Á MI RAZON SE HACE, DE TAL MANERA MI RAZON ENFLAQUECE , QUE CON RA ZON ME QUEJO DE LA VUESTRA FERMOSURA. Y TAMBIEN CUANDO LEIA LOS ALTOS CIELOS QUE DE VUESTRA DIVINIDAD DIVINAMENTE CON LAS ESTRELLAS OS FORTIFICAN , Y OS HACEN MERECEDORA DEL MERECIMIENTO QUE MERECE LA VUESTRA GRANDEZA. CON ESTAS RAZONES PERDIA EL POBRE CABALLERO EL JUICIO, Y DESVELÁBASE POR ENTENDERLAS Y DESENTRAÑARLES EL SENTIDO, QUE NO SE LO SACÁRA NI LAS ENTENDIERA EL MISMO ARISTÓTELES SI RESUCITÁRA PARA SOLO ELLO. NO ESTABA MUY BIEN CON LAS HERIDAS QUE DON BELIANÍS DABA Y RECIBIA, PORQUE SE IMAGINABA QUE POR GRANDES MAESTROS QUE LE HUBIESEN CURADO NO DEJARIA DE TENER EL ROSTRO Y TODO EL CUERPO LLENO DE CICATRICES Y SEÑ ALES. PERO CON TODO ALABABA EN SU AUTOR AQUEL ACABAR SU LIBRO CON LA PROMESA DE AQUELLA INACABABLE AVENTURA, Y MUCHAS VECES LE VINO DESEO DE TOMAR LA PLUMA, Y DALLE FIN AL PIE DE LA LETRA COMO ALLÍ SE PROMETE Y SIN DUDA ALGUNA LO HICIERA, Y AUN SALIERA CON ELLO, SI OTROS MAYORES Y CONTINUOS PENSAMIENTOS NO SE LO ESTORBÁRAN. TUVO MUCHAS VECES COMPETENCIA CON EL CURA DE SU LUGAR QUE ERA HOMBRE DOCTO, GRADUADO EN SIGÜENZA SOBRE CUAL HABIA SIDO MEJOR CABALLERO, PALMERIN DE INGLATERRA, Ó AMADIS DE GAULA MAS MAESE NICOLÁS, BARBERO DEL MISMO PUEBLO, DECIA QUE NINGUNO LLEGABA AL CABALLERO DEL FEBO, Y QUE SI ALGUNO SE LE PODIA COMPARAR, ERA DON GALAOR, HERMANO DE AMADIS DE GAULA, PORQUE TENIA MUY ACOMODADA CONDICION PARA TODO QUE NO ERA CABALLERO MELINDROSO, NI TAN LLORON COMO SU HERMANO, Y QUE EN LO DE LA VALENTÍA NO LE IBA EN ZAGA. EN RESOLUCION, ÉL SE ENFRASCÓ TANTO EN SU LECTURA, QUE SE LE PASABAN LAS NOCHES LEYENDO DE CLARO EN CLARO, Y LOS DIAS DE TURBIO EN TURBIO, Y ASI DEL POCO DORMIR Y DEL MUCHO LEER SE LE SECÓ EL CELEBRO DE MANERA QUE VINO Á PERDER EL JUICIO. LLENÓSELE LA FANTASÍA DE TODO AQUELLO QUE LEIA EN LOS LIBROS, ASI DE ENCANTAMENTOS, COMO DE PENDENCIAS, BATALLAS, DESAFÍOS, HERIDAS, REQUIEBROS, AMORES, TORMENTAS Y DISPARATES IMPOSIBLES. Y ASENTÓSELE DE TAL MODO EN LA IMAGINACION QUE ERA VERDAD TODA AQUELLA MÁQUINA DE AQUELLAS SOÑADAS INVENCIONES QUE LEIA, QUE PARA ÉL NO HABIA OTRA HISTORIA MAS CIERTA EN EL MUNDO. DECIA ÉL QUE EL CID RUI DIAZ HABIA SIDO MUY BUEN CABALLERO PERO QUE NO TENIA QUE VER CON EL CABALLERO DE LA ARDIENTE ESPADA, QUE DE SOLO UN REVÉS HABIA PARTIDO POR MEDIO DOS FIEROS Y DESCOMUNALES GIGANTES. MEJOR ESTABA CON BERNARDO DEL CARPIO PORQUE EN RONCESVALLES HABIA MUERTO Á ROLDAN EL ENCANTADO, VALIÉNDOSE DE LA INDUSTRIA DE HÉRCULES CUANDO AHOGÓ Á ANTEON, EL HIJO DE LA TIERRA ENTRE LOS BRAZOS. DECIA MUCHO BIEN DEL GIGANTE MORGANTE, PORQUE CON SER DE AQUELLA GENERACION GIGANTEA, QUE TODOS SON SOBERBIOS Y DESCOMEDIDOS, ÉL SOLO ERA AFABLE Y BIEN CRIADO. PERO SOBRE TODOS ESTABA BIEN CON REYNALDOS DE MONTALVAN, Y MAS CUANDO LE VEIA SALIR DE SU CASTILLO, Y ROBAR CUANTOS TOPABA, Y CUANDO EN ALLENDE ROBÓ AQUEL ÍDOLO DE MAHOMA, QUE ERA TODO DE ORO, SEGUN DICE SU HISTORIA. DIERA ÉL, POR DAR UNA MANO DE COCES AL TRAIDOR DE GALALON, AL AMA QUE TENIA Y AUN Á SU SOBRINA DE AÑADIDURA.",
  morse: ". -.     ..- -.     .-.. ..- --. .- .-.     -.. .     .-.. .-     -- .- -. -.-. .... .- --..--     -.. .     -.-. ..- -.-- ---     -. --- -- -... .-. .     -. ---     --.- ..- .. . .-. ---     .- -.-. --- .-. -.. .- .-. -- . --..--     -. ---     .... .-     -- ..- -.-. .... ---     - .. . -- .--. ---     --.- ..- .     ...- .. ...- .. .-     ..- -.     .... .. -.. .- .-.. --. ---     -.. .     .-.. --- ...     -.. .     .-.. .- -. --.. .-     . -.     .- ... - .. .-.. .-.. . .-. --- --..--     .- -.. .- .-. --. .-     .- -. - .. --. ..- .- --..--     .-. --- -.-. .. -.     ..-. .-.. .- -.-. ---     -.--     --. .- .-.. --. ---     -.-. --- .-. .-. . -.. --- .-. ---...     ..- -. .-     --- .-.. .-.. .-     -.. .     .- .-.. --. ---     -- .- ...     ...- .- -.-. .-     --.- ..- .     -.-. .- .-. -. . .-. --- --..--     ... .- .-.. .--. .. -.-. --- -.     .-.. .- ...     -- .- ...     -. --- -.-. .... . ... --..--     -.. ..- . .-.. --- ...     -.--     --.- ..- . -... .-. .- -. - --- ...     .-.. --- ...     ... .--.- -... .- -.. --- ... --..--     .-.. .- -. - . .--- .- ...     .-.. --- ...     ...- .. . .-. -. . ... --..--     .- .-.. --. ..- -.     .--. .- .-.. --- -- .. -. ---     -.. .     .- --.-- .- -.. .. -.. ..- .-. .-     .-.. --- ...     -.. --- -- .. -. --. --- ...     -.-. --- -. ... ..- -- .. .- -.     .-.. .- ...     - .-. . ...     .--. .- .-. - . ...     -.. .     ... ..-     .... .- -.-. .. . -. -.. .- ---...     . .-..     .-. . ... - ---     -.. . .-.. .-.. .-     -.-. --- -. -.-. .-.. ..- .. .- -.     ... .- -.-- ---     -.. .     ...- . .-.. .- .-. - . --..--     -.-. .- .-.. --.. .- ...     -.. .     ...- . .-.. .-.. ..- -.. ---     .--. .- .-. .-     .-.. .- ...     ..-. .. . ... - .- ...     -.-. --- -.     ... ..- ...     .--. .- -. - ..- ..-. .-.. --- ...     -.. .     .-.. ---     -- .. ... -- --- --..--     -.--     .-.. --- ...     -.. .. .- ...     -.. .     . -. - .-. .     ... . -- .- -. .-     ... .     .... --- -. .-. .- -... .-     -.-. --- -.     ... ..-     ...- . .-.. .-.. --- .-. ..--     -.. .     .-.. ---     -- .- ...     ..-. .. -. --- ---...     - . -. .. .-     . -.     ... ..-     -.-. .- ... .-     ..- -. .-     .- -- .-     --.- ..- .     .--. .- ... .- -... .-     -.. .     .-.. --- ...     -.-. ..- .- .-. . -. - .- --..--     -.--     ..- -. .-     ... --- -... .-. .. -. .-     --.- ..- .     -. ---     .-.. .-.. . --. .- -... .-     .--.-     .-.. --- ...     ...- . .. -. - . --..--     -.--     ..- -.     -- --- --.. ---     -.. .     -.-. .- -- .--. ---     -.--     .--. .-.. .- --.. .- --..--     --.- ..- .     .- ... ..     . -. ... .. .-.. .-.. .- -... .-     . .-..     .-. --- -.-. .. -.     -.-. --- -- ---     - --- -- .- -... .-     .-.. .-     .--. --- -.. .- -.. . .-. .- ---...     ..-. .-. .. ... .- -... .-     .-.. .-     . -.. .- -..     -.. .     -. ..- . ... - .-. ---     .... .. -.. .- .-.. --. ---     -.-. --- -.     .-.. --- ...     -.-. .. -. -.-. ..- . -. - .-     .- --.-- --- ...     . .-. .-     -.. .     -.-. --- -- .--. .-.. . -..- .. --- -.     .-. . -.-. .. .- --..--     ... . -.-. ---     -.. .     -.-. .- .-. -. . ... --..--     . -. .--- ..- - ---     -.. .     .-. --- ... - .-. --- --..--     --. .-. .- -.     -- .- -.. .-. ..- --. .- -.. --- .-.     -.--     .- -- .. --. ---     -.. .     .-.. .-     -.-. .- --.. .- ---...     --.- ..- .. . .-. . -.     -.. . -.-. .. .-.     --.- ..- .     - . -. .. .-     . .-..     ... --- -... .-. . -. --- -- -... .-. .     -.. .     --.- ..- .. .--- .- -.. .-     ---...---     --.- ..- . ... .- -.. .-     --.- ..- .     . -.     . ... - ---     .... .- -.--     .- .-.. --. ..- -. .-     -.. .. ..-. . .-. . -. -.-. .. .-     . -.     .-.. --- ...     .- ..- - --- .-. . ...     --.- ..- .     -.. . ... - .     -.-. .- ... ---     . ... -.-. .-. .. -... . -. --..--     .- ..- -. --.- ..- .     .--. --- .-.     -.-. --- -. .--- . - ..- .-. .- ...     ...- . .-. --- ... ..-- -- .. .-.. . ...     ... .     -.. . .--- .-     . -. - . -. -.. . .-.     --.- ..- .     ... .     .-.. .-.. .- -- .- -... .-     --.- ..- .. .--- .- -. .- ---...     .--. . .-. ---     . ... - ---     .. -- .--. --- .-. - .-     .--. --- -.-. ---     .--.-     -. ..- . ... - .-. ---     -.-. ..- . -. - ---     -... .- ... - .-     --.- ..- .     . -.     .-.. .-     -. .- .-. .-. .- -.-. .. --- -.     -.. ..-.. .-..     -. ---     ... .     ... .- .-.. --. .-     ..- -.     .--. ..- -. - ---     -.. .     .-.. .-     ...- . .-. -.. .- -.. ---...     . ...     .--. ..- . ...     -.. .     ... .- -... . .-.     --.- ..- .     . ... - .     ... --- -... .-. . -.. .. -.-. .... ---     .... .. -.. .- .-.. --. ---     .-.. --- ...     .-. .- - --- ...     --.- ..- .     . ... - .- -... .-     --- -.-. .. --- ... ---     --.- ..- .     . .-. .- -.     .-.. --- ...     -- .- ...     -.. . .-..     .- --.-- ---     ... .     -.. .- -... .-     .--.-     .-.. . . .-.     .-.. .. -... .-. --- ...     -.. .     -.-. .- -... .- .-.. .-.. . .-. ..-- .- ... --..--     -.-. --- -.     - .- -. - .-     .- ..-. .. -.-. .. --- -.     -.--     --. ..- ... - --- --..--     --.- ..- .     --- .-.. ...- .. -.. ---...---     -.-. .- ... ..     -.. .     - --- -.. ---     .--. ..- -. - ---     . .-..     . .--- . .-. -.-. .. -.-. .. ---     -.. .     .-.. .-     -.-. .- --.. .- --..--     -.--     .- ..- -.     .-.. .-     .- -.. -- .. -. .. ... - .-. .- -.-. .. --- -.     -.. .     ... ..-     .... .- -.-. .. . -. -.. .-     -.--     .-.. .-.. . --. ---...---     .--.-     - .- -. - ---     ... ..-     -.-. .- ... .-     - --- -.. --- ...     -.-. ..- .- -. - --- ...     .--. ..- -.. ---     .... .- -... . .-.     -.. . .-.. .-.. --- ...     -.--     -.. .     - --- -.. --- ...     -. .. -. --. ..- -. --- ...     .-.. .     .--. .- .-. . -.-. .. .- -.     - .- -.     -... .. . -.     -.-. --- -- ---     .-.. --- ...     --.- ..- .     -.-. --- -- .--. ..- ... ---     . .-..     ..-. .- -- --- ... ---     ..-. . .-.. .. -.-. .. .- -. ---     -.. .     ... .. .-.. ...- .-     .--. --- .-. --.- ..- .     .-.. .-     -.-. .-.. .- .-. .. -.. .- -..     -.. .     ... ..-     .--. .-. --- ... .- --..--     -.--     .- --.- ..- . .-.. .-.. .- ...     . -. - .-. .. -.-. .- -.. .- ...     .-. .- --.. --- -. . ...     ... ..- -.-- .- ...     .-.. .     .--. .- .-. . -.-. .. .- -.     -.. .     .--. . .-. .-.. .- ...     -.--     -- .- ...     -.-. ..- .- -. -.. ---     .-.. .-.. . --. .- -... .-     .--.-     .-.. . . .-.     .- --.- ..- . .-.. .-.. --- ...     .-. . --.- ..- .. . -... .-. --- ...     -.--     -.-. .- .-. - .- ...     -.. .     -.. . ... .- ..-. ..-- --- --..--     -.. --- -. -.. .     . -.     -- ..- -.-. .... .- ...     .--. .- .-. - . ...     .... .- .-.. .-.. .- -... .-     . ... -.-. .-. .. - ---     .-.. .-     .-. .- --.. --- -.     -.. .     .-.. .-     ... .. -. .-. .- --.. --- -.     --.- ..- .     .--.-     -- ..     .-. .- --.. --- -.     ... .     .... .- -.-. . --..--     -.. .     - .- .-..     -- .- -. . .-. .-     -- ..     .-. .- --.. --- -.     . -. ..-. .-.. .- --.- ..- . -.-. .     --..--     --.- ..- .     -.-. --- -.     .-. .-     --.. --- -.     -- .     --.- ..- . .--- ---     -.. .     .-.. .-     ...- ..- . ... - .-. .-     ..-. . .-. -- --- ... ..- .-. .- ---...     -.--     - .- -- -... .. . -.     -.-. ..- .- -. -.. ---     .-.. . .. .-     .-.. --- ...     .- .-.. - --- ...     -.-. .. . .-.. --- ...     --.- ..- .     -.. .     ...- ..- . ... - .-. .-     -.. .. ...- .. -. .. -.. .- -..     -.. .. ...- .. -. .- -- . -. - .     -.-. --- -.     .-.. .- ...     . ... - .-. . .-.. .-.. .- ...     --- ...     ..-. --- .-. - .. ..-. .. -.-. .- -.     --..--     -.--     --- ...     .... .- -.-. . -.     -- . .-. . -.-. . -.. --- .-. .-     -.. . .-..     -- . .-. . -.-. .. -- .. . -. - ---     --.- ..- .     -- . .-. . -.-. .     .-.. .-     ...- ..- . ... - .-. .-     --. .-. .- -. -.. . --.. .- ---...     -.-. --- -.     . ... - .- ...     .-. .- --.. --- -. . ...     .--. . .-. -.. .. .-     . .-..     .--. --- -... .-. .     -.-. .- -... .- .-.. .-.. . .-. ---     . .-..     .--- ..- .. -.-. .. --- --..--     -.--     -.. . ... ...- . .-.. .--.- -... .- ... .     .--. --- .-.     . -. - . -. -.. . .-. .-.. .- ...     -.--     -.. . ... . -. - .-. .- --.-- .- .-. .-.. . ...     . .-..     ... . -. - .. -.. --- --..--     --.- ..- .     -. ---     ... .     .-.. ---     ... .- -.-. .--.- .-. .-     -. ..     .-.. .- ...     . -. - . -. -.. .. . .-. .-     . .-..     -- .. ... -- ---     .- .-. .. ... - ---...--- - . .-.. . ...     ... ..     .-. . ... ..- -.-. .. - .--.- .-. .-     .--. .- .-. .-     ... --- .-.. ---     . .-.. .-.. --- ---...     -. ---     . ... - .- -... .-     -- ..- -.--     -... .. . -.     -.-. --- -.     .-.. .- ...     .... . .-. .. -.. .- ...     --.- ..- .     -.. --- -.     -... . .-.. .. .- -. ..-- ...     -.. .- -... .-     -.--     .-. . -.-. .. -... .. .- --..--     .--. --- .-. --.- ..- .     ... .     .. -- .- --. .. -. .- -... .-     --.- ..- .     .--. --- .-.     --. .-. .- -. -.. . ...     -- .- . ... - .-. --- ...     --.- ..- .     .-.. .     .... ..- -... .. . ... . -.     -.-. ..- .-. .- -.. ---     -. ---     -.. . .--- .- .-. .. .-     -.. .     - . -. . .-.     . .-..     .-. --- ... - .-. ---     -.--     - --- -.. ---     . .-..     -.-. ..- . .-. .--. ---     .-.. .-.. . -. ---     -.. .     -.-. .. -.-. .- - .-. .. -.-. . ...     -.--     ... . --.--     .- .-.. . ... ---...     .--. . .-. ---     -.-. --- -.     - --- -.. ---     .- .-.. .- -... .- -... .-     . -.     ... ..-     .- ..- - --- .-.     .- --.- ..- . .-..     .- -.-. .- -... .- .-.     ... ..-     .-.. .. -... .-. ---     -.-. --- -.     .-.. .-     .--. .-. --- -- . ... .-     -.. .     .- --.- ..- . .-.. .-.. .-     .. -. .- -.-. .- -... .- -... .-.. .     .- ...- . -. - ..- .-. .- --..--     -.--     -- ..- -.-. .... .- ...     ...- . -.-. . ...     .-.. .     ...- .. -. ---     -.. . ... . ---     -.. .     - --- -- .- .-.     .-.. .-     .--. .-.. ..- -- .- --..--     -.--     -.. .- .-.. .-.. .     ..-. .. -.     .- .-..     .--. .. .     -.. .     .-.. .-     .-.. . - .-. .-     -.-. --- -- ---     .- .-.. .-.. ..--     ... .     .--. .-. --- -- . - .     -.--     ... .. -.     -.. ..- -.. .-     .- .-.. --. ..- -. .-     .-.. ---     .... .. -.-. .. . .-. .- --..--     -.--     .- ..- -.     ... .- .-.. .. . .-. .-     -.-. --- -.     . .-.. .-.. --- --..--     ... ..     --- - .-. --- ...     -- .- -.-- --- .-. . ...     -.--     -.-. --- -. - .. -. ..- --- ...     .--. . -. ... .- -- .. . -. - --- ...     -. ---     ... .     .-.. ---     . ... - --- .-. -... .--.- .-. .- -. ---...     - ..- ...- ---     -- ..- -.-. .... .- ...     ...- . -.-. . ...     -.-. --- -- .--. . - . -. -.-. .. .-     -.-. --- -.     . .-..     -.-. ..- .-. .-     -.. .     ... ..-     .-.. ..- --. .- .-.     --.- ..- .     . .-. .-     .... --- -- -... .-. .     -.. --- -.-. - --- --..--     --. .-. .- -.. ..- .- -.. ---     . -.     ... .. --. ..--. . -. --.. .-     ... --- -... .-. .     -.-. ..- .- .-..     .... .- -... .. .-     ... .. -.. ---     -- . .--- --- .-.     -.-. .- -... .- .-.. .-.. . .-. --- --..--     .--. .- .-.. -- . .-. .. -.     -.. .     .. -. --. .-.. .- - . .-. .-. .- --..--     ---...---     .- -- .- -.. .. ...     -.. .     --. .- ..- .-.. .-     -- .- ...     -- .- . ... .     -. .. -.-. --- .-.. .--.- ... --..--     -... .- .-. -... . .-. ---     -.. . .-..     -- .. ... -- ---     .--. ..- . -... .-.. --- --..--     -.. . -.-. .. .-     --.- ..- .     -. .. -. --. ..- -. ---     .-.. .-.. . --. .- -... .-     .- .-..     -.-. .- -... .- .-.. .-.. . .-. ---     -.. . .-..     ..-. . -... --- --..--     -.--     --.- ..- .     ... ..     .- .-.. --. ..- -. ---     ... .     .-.. .     .--. --- -.. .. .-     -.-. --- -- .--. .- .-. .- .-. --..--     . .-. .-     -.. --- -.     --. .- .-.. .- --- .-. --..--     .... . .-. -- .- -. ---     -.. .     .- -- .- -.. .. ...     -.. .     --. .- ..- .-.. .- --..--     .--. --- .-. --.- ..- .     - . -. .. .-     -- ..- -.--     .- -.-. --- -- --- -.. .- -.. .-     -.-. --- -. -.. .. -.-. .. --- -.     .--. .- .-. .-     - --- -.. ---     --.- ..- .     -. ---     . .-. .-     -.-. .- -... .- .-.. .-.. . .-. ---     -- . .-.. .. -. -.. .-. --- ... --- --..--     -. ..     - .- -.     .-.. .-.. --- .-. --- -.     -.-. --- -- ---     ... ..-     .... . .-. -- .- -. --- --..--     -.--     --.- ..- .     . -.     .-.. ---     -.. .     .-.. .-     ...- .- .-.. . -. - ..-- .-     -. ---     .-.. .     .. -... .-     . -.     --.. .- --. .- ---...     . -.     .-. . ... --- .-.. ..- -.-. .. --- -. --..--     ..-.. .-..     ... .     . -. ..-. .-. .- ... -.-. ---...---     - .- -. - ---     . -.     ... ..-     .-.. . -.-. - ..- .-. .- --..--     --.- ..- .     ... .     .-.. .     .--. .- ... .- -... .- -.     .-.. .- ...     -. --- -.-. .... . ...     .-.. . -.-- . -. -.. ---     -.. .     -.-. .-.. .- .-. ---     . -.     -.-. .-.. .- .-. --- --..--     -.--     .-.. --- ...     -.. .. .- ...     -.. .     - ..- .-. -... .. ---     . -.     - ..- .-. -... .. --- --..--     -.--     .- ... ..     -.. . .-..     .--. --- -.-. ---     -.. --- .-. -- .. .-.     -.--     -.. . .-..     -- ..- -.-. .... ---     .-.. . . .-.     ... .     .-.. .     ... . -.-. ---...---     . .-..     -.-. . .-.. . -... .-. ---     -.. .     -- .- -. . .-. .-     --.- ..- .     ...- .. -. ---     .--.-     .--. . .-. -.. . .-.     . .-..     .--- ..- .. -.-. .. --- ---...     .-.. .-.. . -. ---...--- ... . .-.. .     .-.. .-     ..-. .- -. - .- ... ..-- .-     -.. .     - --- -.. ---     .- --.- ..- . .-.. .-.. ---     --.- ..- .     .-.. . .. .-     . -.     .-.. --- ...     .-.. .. -... .-. --- ... --..--     .- ... ..     -.. .     . -. -.-. .- -. - .- -- . -. - --- ... --..--     -.-. --- -- ---     -.. .     .--. . -. -.. . -. -.-. .. .- ... --..--     -... .- - .- .-.. .-.. .- ... --..--     -.. . ... .- ..-. ..-- --- ... --..--     .... . .-. .. -.. .- ... --..--     .-. . --.- ..- .. . -... .-. --- ... --..--     .- -- --- .-. . ... --..--     - --- .-. -- . -. - .- ...     -.--     -.. .. ... .--. .- .-. .- - . ...     .. -- .--. --- ... .. -... .-.. . ... ---...     -.--     .- ... . -. - ---...--- ... . .-.. .     -.. .     - .- .-..     -- --- -.. ---     . -.     .-.. .-     .. -- .- --. .. -. .- -.-. .. --- -.     --.- ..- .     . .-. .-     ...- . .-. -.. .- -..     - --- -.. .-     .- --.- ..- . .-.. .-.. .-     -- .--.- --.- ..- .. -. .-     -.. .     .- --.- ..- . .-.. .-.. .- ...     ... --- --.-- .- -.. .- ...     .. -. ...- . -. -.-. .. --- -. . ...     --.- ..- .     .-.. . .. .- --..--     --.- ..- .     .--. .- .-. .-     ..-.. .-..     -. ---     .... .- -... .. .-     --- - .-. .-     .... .. ... - --- .-. .. .-     -- .- ...     -.-. .. . .-. - .-     . -.     . .-..     -- ..- -. -.. --- ---...     -.. . -.-. .. .-     ..-.. .-..     --.- ..- .     . .-..     -.-. .. -..     .-. ..- ..     -.. .. .- --..     .... .- -... .. .-     ... .. -.. ---     -- ..- -.--     -... ..- . -.     -.-. .- -... .- .-.. .-.. . .-. ---     .--. . .-. ---     --.- ..- .     -. ---     - . -. .. .-     --.- ..- .     ...- . .-.     -.-. --- -.     . .-..     -.-. .- -... .- .-.. .-.. . .-. ---     -.. .     .-.. .-     .- .-. -.. .. . -. - .     . ... .--. .- -.. .- --..--     --.- ..- .     -.. .     ... --- .-.. ---     ..- -.     .-. . ...- ..-.. ...     .... .- -... .. .-     .--. .- .-. - .. -.. ---     .--. --- .-.     -- . -.. .. ---     -.. --- ...     ..-. .. . .-. --- ...     -.--     -.. . ... -.-. --- -- ..- -. .- .-.. . ...     --. .. --. .- -. - . ... ---...     -- . .--- --- .-.     . ... - .- -... .-     -.-. --- -.     -... . .-. -. .- .-. -.. ---     -.. . .-..     -.-. .- .-. .--. .. ---     .--. --- .-. --.- ..- .     . -.     .-. --- -. -.-. . ... ...- .- .-.. .-.. . ...     .... .- -... .. .-     -- ..- . .-. - ---     .--.-     .-. --- .-.. -.. .- -.     . .-..     . -. -.-. .- -. - .- -.. --- --..--     ...- .- .-.. .. ..-.. -. -.. --- ... .     -.. .     .-.. .-     .. -. -.. ..- ... - .-. .. .-     -.. .     .... ..-.. .-. -.-. ..- .-.. . ...     -.-. ..- .- -. -.. ---     .- .... --- --. ---...---     .--.-     .- -. - . --- -. --..--     . .-..     .... .. .--- ---     -.. .     .-.. .-     - .. . .-. .-. .-     . -. - .-. .     .-.. --- ...     -... .-. .- --.. --- ... ---...     -.. . -.-. .. .-     -- ..- -.-. .... ---     -... .. . -.     -.. . .-..     --. .. --. .- -. - .     -- --- .-. --. .- -. - . --..--     .--. --- .-. --.- ..- .     -.-. --- -.     ... . .-.     -.. .     .- --.- ..- . .-.. .-.. .-     --. . -. . .-. .- -.-. .. --- -.     --. .. --. .- -. - . .- --..--     --.- ..- .     - --- -.. --- ...     ... --- -.     ... --- -... . .-. -... .. --- ...     -.--     -.. . ... -.-. --- -- . -.. .. -.. --- ... --..--     ..-.. .-..     ... --- .-.. ---     . .-. .-     .- ..-. .- -... .-.. .     -.--     -... .. . -.     -.-. .-. .. .- -.. --- ---...     .--. . .-. ---     ... --- -... .-. .     - --- -.. --- ...     . ... - .- -... .-     -... .. . -.     -.-. --- -.     .-. . -.-- -. .- .-.. -.. --- ...     -.. .     -- --- -. - .- .-.. ...- .- -. --..--     -.--     -- .- ...     -.-. ..- .- -. -.. ---     .-.. .     ...- . .. .-     ... .- .-.. .. .-.     -.. .     ... ..-     -.-. .- ... - .. .-.. .-.. --- --..--     -.--     .-. --- -... .- .-.     -.-. ..- .- -. - --- ...     - --- .--. .- -... .- --..--     -.--     -.-. ..- .- -. -.. ---     . -.     .- .-.. .-.. . -. -.. .     .-. --- -... ---...---     .- --.- ..- . .-..     ..-- -.. --- .-.. ---     -.. .     -- .- .... --- -- .- --..--     --.- ..- .     . .-. .-     - --- -.. ---     -.. .     --- .-. --- --..--     ... . --. ..- -.     -.. .. -.-. .     ... ..-     .... .. ... - --- .-. .. .- ---...     -.. .. . .-. .-     ..-.. .-.. --..--     .--. --- .-.     -.. .- .-.     ..- -. .-     -- .- -. ---     -.. .     -.-. --- -.-. . ...     .- .-..     - .-. .- .. -.. --- .-.     -.. .     --. .- .-.. .- .-.. --- -. --..--     .- .-..     .- -- .-     --.- ..- .     - . -. .. .-     -.--     .- ..- -.     .--.-     ... ..-     ... --- -... .-. .. -. .-     -.. .     .- --.-- .- -.. .. -.. ..- .-. .- ---..."
};

describe("Testing Arrays exercise 6 (morse decoder)", function() {
  var fs = require('fs');
  var script = fs.readFileSync('./ArraysEx6.js')+'';
  var metadata = getScriptMetadata(script);
  // var req = new Function(MORSE + script + " return morseDec; ");
  // var morseDec = req();
  var morseDec = require("./../ArraysEx6")(MORSE);

  var optionalTest, res;


  if(metadata.timestamp) {
    optionalTest = describe
  } else {
    optionalTest = xdescribe
  }

  optionalTest("Was delivered on time", function(){
    it("Before " + DeliveryLimit, function(){
      expect(new Date(+metadata.timestamp)).toBeLessThan(DeliveryLimit);
    })
  });
  
  res = morseDec(".... --- .-.. .-     -- ..- -. -.. ---");

  describe("Simple tests", function(){
    it("return an string", function() {
      expect(typeof res).toBe("string");
    });

    it("hola mundo", function() {
      expect(res).toBe("HOLA MUNDO");
    });

    it("handle empty string", function() {
      expect(morseDec("")).toBe("");
    });

    it("handle single space", function() {
      expect(morseDec("   ")).toBe(" ");
    });

    it("only not handled chars", function() {
      expect(morseDec("............ ----------")).toBe("");
    });

  });

  describe("good encoding (strings)", function() {

    texts.forEach(function(test) {
      it(test.text, function(){
        expect(morseDec(test.morse)).toBe(test.text.toUpperCase());
      });
    });

  });

  describe("good encoding (arrays)", function() {

    texts.forEach(function(test) {
      it(test.text, function(){
        expect(morseDec(test.morse.split(''))).toBe(test.text.toUpperCase());
      });
    });

  });

  describe("Long text with new dictionary", function() {

    // var MORSE = 'var MORSE = [ { "morse": ".-", "char": "A" }, { "morse": "-...", "char": "B" }, { "morse": "-.-.", "char": "C" }, { "morse": "-..", "char": "D" }, { "morse": ".", "char": "E" }, { "morse": "..-.", "char": "F" }, { "morse": "--.", "char": "G" }, { "morse": "....", "char": "H" }, { "morse": "..", "char": "I" }, { "morse": ".---", "char": "J" }, { "morse": "-.-", "char": "K" }, { "morse": ".-..", "char": "L" }, { "morse": "--", "char": "M" }, { "morse": "-.", "char": "N" }, { "morse": "---", "char": "O" }, { "morse": ".--.", "char": "P" }, { "morse": "--.-", "char": "Q" }, { "morse": ".-.", "char": "R" }, { "morse": "...", "char": "S" }, { "morse": "-", "char": "T" }, { "morse": "..-", "char": "U" }, { "morse": "...-", "char": "V" }, { "morse": ".--", "char": "W" }, { "morse": "-..-", "char": "X" }, { "morse": "-.--", "char": "Y" }, { "morse": "--..", "char": "Z" }, { "morse": "-----", "char": "0" }, { "morse": ".----", "char": "1" }, { "morse": "..---", "char": "2" }, { "morse": "...--", "char": "3" }, { "morse": "....-", "char": "4" }, { "morse": ".....", "char": "5" }, { "morse": "-....", "char": "6" }, { "morse": "--...", "char": "7" }, { "morse": "---..", "char": "8" }, { "morse": "----.", "char": "9" }, { "morse": ".--.-", "char": "Á" }, { "morse": "..-..", "char": "É" }, { "morse": "..--", "char": "Í" }, { "morse": "---...---", "char": "Ó" }, { "morse": "..-..-", "char": "Ú" }, { "morse": "..--.", "char": "Ü" }, { "morse": "--.--", "char": "Ñ" }, { "morse": "--..--", "char": "," }, { "morse": "---...", "char": "." } ];';
    var MORSE = [ { "morse": ".-", "char": "A" }, { "morse": "-...", "char": "B" }, { "morse": "-.-.", "char": "C" }, { "morse": "-..", "char": "D" }, { "morse": ".", "char": "E" }, { "morse": "..-.", "char": "F" }, { "morse": "--.", "char": "G" }, { "morse": "....", "char": "H" }, { "morse": "..", "char": "I" }, { "morse": ".---", "char": "J" }, { "morse": "-.-", "char": "K" }, { "morse": ".-..", "char": "L" }, { "morse": "--", "char": "M" }, { "morse": "-.", "char": "N" }, { "morse": "---", "char": "O" }, { "morse": ".--.", "char": "P" }, { "morse": "--.-", "char": "Q" }, { "morse": ".-.", "char": "R" }, { "morse": "...", "char": "S" }, { "morse": "-", "char": "T" }, { "morse": "..-", "char": "U" }, { "morse": "...-", "char": "V" }, { "morse": ".--", "char": "W" }, { "morse": "-..-", "char": "X" }, { "morse": "-.--", "char": "Y" }, { "morse": "--..", "char": "Z" }, { "morse": "-----", "char": "0" }, { "morse": ".----", "char": "1" }, { "morse": "..---", "char": "2" }, { "morse": "...--", "char": "3" }, { "morse": "....-", "char": "4" }, { "morse": ".....", "char": "5" }, { "morse": "-....", "char": "6" }, { "morse": "--...", "char": "7" }, { "morse": "---..", "char": "8" }, { "morse": "----.", "char": "9" }, { "morse": ".--.-", "char": "Á" }, { "morse": "..-..", "char": "É" }, { "morse": "..--", "char": "Í" }, { "morse": "---...---", "char": "Ó" }, { "morse": "..-..-", "char": "Ú" }, { "morse": "..--.", "char": "Ü" }, { "morse": "--.--", "char": "Ñ" }, { "morse": "--..--", "char": "," }, { "morse": "---...", "char": "." } ];

    // req = new Function(MORSE + script + " return morseDec; ");
    // var morseDec = req();
    var morseDec = require("./../ArraysEx6")(MORSE);

    it("Don Quijote", function(){
      expect(morseDec(veryLongText.morse)).toBe(veryLongText.text.toUpperCase());
    });

  });

});