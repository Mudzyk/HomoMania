// ============================================================
// HOMO MANIA - GAME.JS
// 35 PREGUNTAS / 6 NIVELES
// API independiente del juego
// ============================================================


// ============================================================
// ETAPAS / CARTAS
// ============================================================

const etapas = [
    {
        nombre: "HOMÍNIDO",
        imagen: "assets/Mono1.png"
    },
    {
        nombre: "AUSTRALOPITHECUS",
        imagen: "assets/Mono2.png"
    },
    {
        nombre: "HOMO HABILIS",
        imagen: "assets/Mono3.png"
    },
    {
        nombre: "HOMO ERECTUS",
        imagen: "assets/Mono4.png"
    },
    {
        nombre: "NEANDERTAL",
        imagen: "assets/Mono5.png"
    },
    {
        nombre: "HOMO SAPIENS",
        imagen: "assets/Mono6.png"
    }
];


// ============================================================
// 35 PREGUNTAS
//
// bloque 0 = Homínido
// bloque 1 = Australopithecus
// bloque 2 = Homo habilis
// bloque 3 = Homo erectus
// bloque 4 = Neandertal
// bloque 5 = Homo sapiens
//
// correcta:
// 0 = primera opción
// 1 = segunda opción
// 2 = tercera opción
// ============================================================

const preguntas = [

    // ========================================================
    // NIVEL 1 - HOMÍNIDO
    // 6 preguntas
    // ========================================================

    {
        bloque: 0,
        imagen: "assets/material/hominido_01.jpg",
        pregunta: "¿Qué característica distingue especialmente a los primeros homínidos?",
        opciones: [
            "Caminar sobre dos piernas",
            "Vivir en ciudades",
            "Usar vehículos"
        ],
        correcta: 0
    },

    {
        bloque: 0,
        imagen: "assets/material/hominido_02.jpg",
        pregunta: "¿En qué continente se encuentran muchos de los fósiles más antiguos relacionados con la evolución humana?",
        opciones: [
            "África",
            "Europa",
            "Oceanía"
        ],
        correcta: 0
    },

    {
        bloque: 0,
        imagen: "assets/material/hominido_03.jpg",
        pregunta: "¿Qué parte del esqueleto ayuda especialmente a estudiar el bipedismo?",
        opciones: [
            "La pelvis y las piernas",
            "Las costillas",
            "Los dedos de las manos"
        ],
        correcta: 0
    },

    {
        bloque: 0,
        imagen: "assets/material/hominido_04.png",
        pregunta: "¿Qué significa que un homínido sea bípedo?",
        opciones: [
            "Que camina principalmente sobre dos piernas",
            "Que tiene dos cerebros",
            "Que vive en dos continentes"
        ],
        correcta: 0
    },

    {
        bloque: 0,
        imagen: "assets/material/hominido_05.jpg",
        pregunta: "¿Qué se estudia principalmente mediante los fósiles de homínidos?",
        opciones: [
            "La evolución humana",
            "La electricidad",
            "La astronomía"
        ],
        correcta: 0
    },

    {
        bloque: 0,
        imagen: "assets/material/hominido_06.jpg",
        pregunta: "¿Cuál de estos es un ejemplo de fósil relacionado con la evolución humana?",
        opciones: [
            "Lucy",
            "Tyrannosaurus rex",
            "Triceratops"
        ],
        correcta: 0
    },


    // ========================================================
    // NIVEL 2 - AUSTRALOPITHECUS
    // 6 preguntas
    // ========================================================

    {
        bloque: 1,
        imagen: "assets/material/australopithecus_01.jpg",
        pregunta: "¿A qué especie pertenece Lucy?",
        opciones: [
            "Australopithecus afarensis",
            "Homo sapiens",
            "Homo erectus"
        ],
        correcta: 0
    },

    {
        bloque: 1,
        imagen: "assets/material/australopithecus_02.jpg",
        pregunta: "¿Dónde fue encontrada Lucy?",
        opciones: [
            "Etiopía",
            "España",
            "Canadá"
        ],
        correcta: 0
    },

    {
        bloque: 1,
        imagen: "assets/material/australopithecus_03.jpg",
        pregunta: "¿Hace aproximadamente cuánto tiempo vivió Lucy?",
        opciones: [
            "3,2 millones de años",
            "20.000 años",
            "500 años"
        ],
        correcta: 0
    },

    {
        bloque: 1,
        imagen: "assets/material/australopithecus_04.png",
        pregunta: "¿Qué especie representa Lucy?",
        opciones: [
            "Australopithecus afarensis",
            "Homo habilis",
            "Homo sapiens"
        ],
        correcta: 0
    },

    {
        bloque: 1,
        imagen: "assets/material/australopithecus_05.jpg",
        pregunta: "¿Los Australopithecus podían caminar erguidos?",
        opciones: [
            "Sí",
            "No",
            "Solo podían nadar"
        ],
        correcta: 0
    },

    {
        bloque: 1,
        imagen: "assets/material/australopithecus_06.jpg",
        pregunta: "¿Qué famosas huellas están relacionadas con Australopithecus afarensis?",
        opciones: [
            "Las huellas de Laetoli",
            "Las huellas de Pompeya",
            "Las huellas de Roma"
        ],
        correcta: 0
    },


    // ========================================================
    // NIVEL 3 - HOMO HABILIS
    // 6 preguntas
    // ========================================================

    {
        bloque: 2,
        imagen: "assets/material/habilis_01.jpg",
        pregunta: "¿Qué significa aproximadamente 'Homo habilis'?",
        opciones: [
            "Hombre hábil",
            "Hombre gigante",
            "Hombre del hielo"
        ],
        correcta: 0
    },

    {
        bloque: 2,
        imagen: "assets/material/habilis_02.jpg",
        pregunta: "¿Con qué tipo de herramientas se relaciona especialmente Homo habilis?",
        opciones: [
            "Herramientas de piedra simples",
            "Espadas de hierro",
            "Arcos modernos"
        ],
        correcta: 0
    },

    {
        bloque: 2,
        imagen: "assets/material/habilis_03.jpg",
        pregunta: "¿Qué material utilizaban principalmente para fabricar las primeras herramientas?",
        opciones: [
            "Piedra",
            "Plástico",
            "Acero"
        ],
        correcta: 0
    },

    {
        bloque: 2,
        imagen: "assets/material/habilis_04.png",
        pregunta: "¿Qué aparece en la tecnología Oldowan?",
        opciones: [
            "Percutores y lascas de piedra",
            "Pistolas",
            "Martillos eléctricos"
        ],
        correcta: 0
    },

    {
        bloque: 2,
        imagen: "assets/material/habilis_05.jpg",
        pregunta: "¿Cómo era el cerebro de Homo habilis comparado con Australopithecus?",
        opciones: [
            "En general, mayor",
            "Mucho menor",
            "Exactamente igual"
        ],
        correcta: 0
    },

    {
        bloque: 2,
        imagen: "assets/material/habilis_06.jpg",
        pregunta: "¿Cuál de estos fósiles pertenece a Homo habilis?",
        opciones: [
            "KNM-ER 1813",
            "Lucy",
            "Un Neandertal"
        ],
        correcta: 0
    },


    // ========================================================
    // NIVEL 4 - HOMO ERECTUS
    // 6 preguntas
    // ========================================================

    {
        bloque: 3,
        imagen: "assets/material/erectus_01.jpg",
        pregunta: "¿Qué significa 'Homo erectus'?",
        opciones: [
            "Hombre erguido",
            "Hombre acuático",
            "Hombre pequeño"
        ],
        correcta: 0
    },

    {
        bloque: 3,
        imagen: "assets/material/erectus_02.jpg",
        pregunta: "¿Qué especie se expandió fuera de África hacia otras regiones?",
        opciones: [
            "Homo erectus",
            "Australopithecus afarensis",
            "Solo Homo sapiens"
        ],
        correcta: 0
    },

    {
        bloque: 3,
        imagen: "assets/material/erectus_03.jpg",
        pregunta: "¿Qué herramienta está especialmente asociada al Achelense?",
        opciones: [
            "Bifaz",
            "Computadora",
            "Aguja de metal moderna"
        ],
        correcta: 0
    },

    {
        bloque: 3,
        imagen: "assets/material/erectus_04.png",
        pregunta: "¿Qué característica aparece frecuentemente asociada con Homo erectus?",
        opciones: [
            "Uso o control del fuego",
            "Agricultura industrial",
            "Escritura"
        ],
        correcta: 0
    },

    {
        bloque: 3,
        imagen: "assets/material/erectus_05.jpg",
        pregunta: "¿Qué fósil es conocido como 'Turkana Boy'?",
        opciones: [
            "Un Homo erectus/ergaster juvenil",
            "Un Neandertal adulto",
            "Un Homo sapiens medieval"
        ],
        correcta: 0
    },

    {
        bloque: 3,
        imagen: "assets/material/erectus_06.jpg",
        pregunta: "¿Qué tipo de herramienta caracteriza al Achelense?",
        opciones: [
            "Bifaces trabajados por ambas caras",
            "Herramientas de plástico",
            "Herramientas eléctricas"
        ],
        correcta: 0
    },


    // ========================================================
    // NIVEL 5 - NEANDERTAL
    // 6 preguntas
    // ========================================================

    {
        bloque: 4,
        imagen: "assets/material/neandertal_01.jpg",
        pregunta: "¿Cuál es el nombre científico del Neandertal?",
        opciones: [
            "Homo neanderthalensis",
            "Homo habilis",
            "Australopithecus afarensis"
        ],
        correcta: 0
    },

    {
        bloque: 4,
        imagen: "assets/material/neandertal_02.jpg",
        pregunta: "¿En qué regiones vivieron principalmente los Neandertales?",
        opciones: [
            "Europa y partes de Asia occidental",
            "Australia exclusivamente",
            "América del Sur exclusivamente"
        ],
        correcta: 0
    },

    {
        bloque: 4,
        imagen: "assets/material/neandertal_03.jpg",
        pregunta: "¿Los Neandertales fabricaban herramientas?",
        opciones: [
            "Sí",
            "No",
            "Solo herramientas de plástico"
        ],
        correcta: 0
    },

    {
        bloque: 4,
        imagen: "assets/material/neandertal_04.png",
        pregunta: "¿Qué tipo de herramientas está relacionado con los Neandertales?",
        opciones: [
            "Musteriense",
            "Industrial",
            "Digital"
        ],
        correcta: 0
    },

    {
        bloque: 4,
        imagen: "assets/material/neandertal_05.jpg",
        pregunta: "¿Los Neandertales utilizaron herramientas hechas de hueso?",
        opciones: [
            "Sí",
            "No",
            "Nunca"
        ],
        correcta: 0
    },

    {
        bloque: 4,
        imagen: "assets/material/neandertal_06.jpg",
        pregunta: "¿Qué característica presenta generalmente el cráneo neandertal?",
        opciones: [
            "Una forma alargada y robusta",
            "Un cráneo de dinosaurio",
            "Un cráneo completamente redondo y pequeño"
        ],
        correcta: 0
    },


    // ========================================================
    // NIVEL 6 - HOMO SAPIENS
    // 5 preguntas
    // ========================================================

    {
        bloque: 5,
        imagen: "assets/material/sapiens_01.jpg",
        pregunta: "¿Cuál es nuestro nombre científico?",
        opciones: [
            "Homo sapiens",
            "Homo erectus",
            "Homo habilis"
        ],
        correcta: 0
    },

    {
        bloque: 5,
        imagen: "assets/material/sapiens_02.jpg",
        pregunta: "¿Qué especie corresponde a los humanos actuales?",
        opciones: [
            "Homo sapiens",
            "Homo neanderthalensis",
            "Australopithecus"
        ],
        correcta: 0
    },

    {
        bloque: 5,
        imagen: "assets/material/sapiens_03.jpg",
        pregunta: "¿Qué característica diferencia al cráneo de Homo sapiens de muchos homínidos anteriores?",
        opciones: [
            "Una bóveda craneal más alta y redondeada",
            "No tener mandíbula",
            "Tener tres ojos"
        ],
        correcta: 0
    },

    {
        bloque: 5,
        imagen: "assets/material/sapiens_04.png",
        pregunta: "¿Qué tipo de herramientas se desarrollaron durante el Paleolítico Superior?",
        opciones: [
            "Herramientas de piedra más especializadas",
            "Herramientas electrónicas",
            "Herramientas de plástico"
        ],
        correcta: 0
    },

    {
        bloque: 5,
        imagen: "assets/material/sapiens_05.jpg",
        pregunta: "¿Cuál de estas herramientas pertenece al Paleolítico Superior?",
        opciones: [
            "Raspador y perforador de piedra",
            "Martillo neumático",
            "Destornillador eléctrico"
        ],
        correcta: 0
    }

];


// ============================================================
// VARIABLES DEL JUEGO
// ============================================================

let preguntaActual = 0;

let aciertosDelBloque = 0;

let bloqueActual = 0;

let bloqueado = false;

let finalizado = false;


// ============================================================
// OBTENER PREGUNTAS DEL NIVEL ACTUAL
// ============================================================

function obtenerPreguntasDelBloque(bloque) {
    return preguntas.filter(function(p) {
        return p.bloque === bloque;
    });
}


// ============================================================
// OCULTAR TODAS LAS PANTALLAS
// ============================================================

function ocultarTodo() {

    document.getElementById("menu").style.display = "none";

    document.getElementById("seleccion-juego").style.display = "none";

    document.getElementById("juego").style.display = "none";

    document.getElementById("stats").style.display = "none";

    document.getElementById("creditos").style.display = "none";

    var popup = document.getElementById("popup");

    if (popup) {
        popup.classList.add("oculto");
    }
}


// ============================================================
// IR A SELECCIÓN DE JUEGO
// ============================================================

function irASeleccion() {

    ocultarTodo();

    document.getElementById("seleccion-juego").style.display = "flex";
}


// ============================================================
// INICIAR JUEGO
// ============================================================

function jugar() {

    preguntaActual = 0;

    aciertosDelBloque = 0;

    bloqueActual = 0;

    bloqueado = false;

    finalizado = false;


    var opciones = document.querySelector(".opciones");

    if (opciones) {
        opciones.style.display = "flex";
    }


    var popup = document.getElementById("popup");

    if (popup) {
        popup.classList.add("oculto");
    }


    actualizarUI();

    ocultarTodo();

    document.getElementById("juego").style.display = "flex";

    mostrarPregunta();
}


// ============================================================
// HOMO MANIA RUN
// ============================================================

function irAlRun() {

    alert("¡Homo Mania Run próximamente!");
}


// ============================================================
// ESTADÍSTICAS
// ============================================================

function estadisticas() {

    document.getElementById("aciertos").innerText =
        aciertosDelBloque;

    document.getElementById("etapa-actual").innerText =
        etapas[bloqueActual].nombre;

    ocultarTodo();

    document.getElementById("stats").style.display = "flex";
}


// ============================================================
// CRÉDITOS
// ============================================================

function creditos() {

    ocultarTodo();

    document.getElementById("creditos").style.display = "flex";
}


// ============================================================
// VOLVER AL MENÚ
// ============================================================

function volverMenu() {

    ocultarTodo();

    document.getElementById("menu").style.display = "flex";
}


// ============================================================
// ACTUALIZAR UI
// ============================================================

function actualizarUI() {

    var texto = document.getElementById("progreso-texto");

    var barra = document.getElementById("barra-progreso-relleno");


    if (texto) {

        texto.innerText =
            aciertosDelBloque + "/3";
    }


    if (barra) {

        var porcentaje =
            (aciertosDelBloque / 3) * 100;

        barra.style.width =
            porcentaje + "%";
    }
}


// ============================================================
// MOSTRAR PREGUNTA
// ============================================================

function mostrarPregunta() {

    var preguntasBloque =
        obtenerPreguntasDelBloque(bloqueActual);


    // --------------------------------------------------------
    // Si ya no hay preguntas en este nivel
    // --------------------------------------------------------

    if (preguntasBloque.length === 0) {

        finalizarJuego();

        return;
    }


    // --------------------------------------------------------
    // Elegimos una pregunta del nivel
    // --------------------------------------------------------

    var indice =
        preguntaActual % preguntasBloque.length;

    var p =
        preguntasBloque[indice];


    // --------------------------------------------------------
    // Imagen
    // --------------------------------------------------------

    var imagen =
        document.getElementById("imagen-pregunta");

    if (imagen) {

        imagen.src =
            p.imagen;

        imagen.onerror = function() {

            console.warn(
                "No se pudo cargar la imagen: " +
                p.imagen
            );
        };
    }


    // --------------------------------------------------------
    // Pregunta
    // --------------------------------------------------------

    var textoPregunta =
        document.getElementById("pregunta-texto");

    if (textoPregunta) {

        textoPregunta.innerText =
            p.pregunta;
    }


    // --------------------------------------------------------
    // Nombre del nivel
    // --------------------------------------------------------

    var nombreEtapa =
        document.getElementById("nombre-etapa");

    if (nombreEtapa) {

        nombreEtapa.innerText =
            etapas[bloqueActual].nombre;
    }


    // --------------------------------------------------------
    // Opciones
    // --------------------------------------------------------

    var contenedores =
        document.querySelectorAll(
            ".opcion-contenedor"
        );


    contenedores.forEach(function(cont, index) {

        var texto =
            cont.querySelector(
                ".texto-opcion"
            );


        if (p.opciones[index] !== undefined) {

            if (texto) {

                texto.innerText =
                    p.opciones[index];
            }

            cont.style.display =
                "flex";

        } else {

            cont.style.display =
                "none";
        }


        cont.classList.remove(
            "correcta",
            "incorrecta"
        );
    });


    bloqueado = false;

    actualizarUI();
}


// ============================================================
// RESPONDER
// ============================================================

function responder(indexSeleccionado) {

    if (bloqueado) {
        return;
    }


    if (finalizado) {
        return;
    }


    bloqueado = true;


    // --------------------------------------------------------
    // Obtener preguntas del nivel
    // --------------------------------------------------------

    var preguntasBloque =
        obtenerPreguntasDelBloque(bloqueActual);


    if (preguntasBloque.length === 0) {
        return;
    }


    // --------------------------------------------------------
    // Obtener pregunta actual
    // --------------------------------------------------------

    var indice =
        preguntaActual % preguntasBloque.length;


    var p =
        preguntasBloque[indice];


    var contenedores =
        document.querySelectorAll(
            ".opcion-contenedor"
        );


    // ========================================================
    // RESPUESTA CORRECTA
    // ========================================================

    if (indexSeleccionado === p.correcta) {

        if (contenedores[indexSeleccionado]) {

            contenedores[indexSeleccionado]
                .classList.add("correcta");
        }


        // Sumamos un acierto

        aciertosDelBloque++;


        actualizarUI();


        // ----------------------------------------------------
        // LLEGÓ A 3/3
        // ----------------------------------------------------

        if (aciertosDelBloque >= 3) {

            setTimeout(function() {

                mostrarPopup(
                    etapas[bloqueActual]
                );

            }, 600);

            return;
        }


        // ----------------------------------------------------
        // Todavía no llegó a 3
        // ----------------------------------------------------

        setTimeout(function() {

            preguntaActual++;

            mostrarPregunta();

        }, 800);


        return;
    }


    // ========================================================
    // RESPUESTA INCORRECTA
    // ========================================================

    if (contenedores[indexSeleccionado]) {

        contenedores[indexSeleccionado]
            .classList.add("incorrecta");
    }


    // Mostramos cuál era la correcta

    if (contenedores[p.correcta]) {

        contenedores[p.correcta]
            .classList.add("correcta");
    }


    // --------------------------------------------------------
    // IMPORTANTE:
    // NO se resta ningún acierto.
    //
    // Ejemplo:
    //
    // ✅ 1/3
    // ❌ 1/3
    // ✅ 2/3
    // ❌ 2/3
    // ✅ 3/3
    //
    // Así se acumulan aunque no sean seguidas.
    // --------------------------------------------------------

    setTimeout(function() {

        preguntaActual++;

        mostrarPregunta();

    }, 1500);
}


// ============================================================
// MOSTRAR POPUP DE NUEVA CARTA
// ============================================================

function mostrarPopup(etapa) {

    var popup =
        document.getElementById("popup");


    if (!popup) {
        return;
    }


    var titulo =
        document.getElementById(
            "nueva-etapa-titulo"
        );


    var imagen =
        document.getElementById(
            "popup-imagen"
        );


    if (titulo) {

        titulo.innerText =
            etapa.nombre;
    }


    if (imagen) {

        imagen.src =
            etapa.imagen;
    }


    // IMPORTANTE:
    // Ahora SÍ se muestra porque
    // realmente llegamos a 3/3.

    popup.classList.remove("oculto");
}


// ============================================================
// CERRAR POPUP / CONTINUAR
// ============================================================

function cerrarPopup() {

    var popup =
        document.getElementById("popup");


    if (popup) {

        popup.classList.add("oculto");
    }


    // --------------------------------------------------------
    // ¿Terminamos todos los niveles?
    // --------------------------------------------------------

    if (bloqueActual >= etapas.length - 1) {

        finalizarJuego();

        return;
    }


    // --------------------------------------------------------
    // Pasamos al siguiente nivel
    // --------------------------------------------------------

    bloqueActual++;

    preguntaActual = 0;

    aciertosDelBloque = 0;

    bloqueado = false;


    actualizarUI();

    mostrarPregunta();
}


// ============================================================
// FINALIZAR JUEGO
// ============================================================

function finalizarJuego() {

    finalizado = true;

    bloqueado = true;


    var textoPregunta =
        document.getElementById(
            "pregunta-texto"
        );


    if (textoPregunta) {

        textoPregunta.innerText =
            "¡FELICITACIONES! DESCUBRISTE TODAS LAS CARTAS.";
    }


    var imagen =
        document.getElementById(
            "imagen-pregunta"
        );


    if (imagen) {

        imagen.src =
            "assets/Mono6.png";
    }


    var nombreEtapa =
        document.getElementById(
            "nombre-etapa"
        );


    if (nombreEtapa) {

        nombreEtapa.innerText =
            "HOMO SAPIENS";
    }


    var opciones =
        document.querySelector(".opciones");


    if (opciones) {

        opciones.style.display =
            "none";
    }


    aciertosDelBloque = 3;

    actualizarUI();
}