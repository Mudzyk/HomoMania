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
    // NIVEL 1 - HOMÍNIDOS
    // ========================================================

    {
        bloque: 0,
        imagen: "assets/material/hominido_01.jpg",
        pregunta: "¿Qué característica fue importante en la evolución humana?",
        opciones: [
            "Volar",
            "Caminar sobre dos piernas",
            "Vivir bajo el agua"
        ],
        correcta: 1
    },

    {
        bloque: 0,
        imagen: "assets/material/hominido_02.png",
        pregunta: "¿En qué continente aparecieron muchos de los primeros antepasados humanos?",
        opciones: [
            "Australia",
            "África",
            "América"
        ],
        correcta: 1
    },

    {
        bloque: 0,
        imagen: "assets/material/hominido_03.jpg",
        pregunta: "¿Qué significa ser bípedo?",
        opciones: [
            "Caminar sobre cuatro patas",
            "Vivir en los árboles",
            "Caminar sobre dos piernas"
        ],
        correcta: 2
    },

    {
        bloque: 0,
        imagen: "assets/material/hominido_04.jpg",
        pregunta: "¿Qué estudian los científicos cuando encuentran fósiles humanos?",
        opciones: [
            "Los planetas",
            "La evolución humana",
            "Los océanos"
        ],
        correcta: 1
    },

    {
        bloque: 0,
        imagen: "assets/material/hominido_05.jpg",
        pregunta: "¿Qué es un fósil?",
        opciones: [
            "Un animal que vive actualmente",
            "Un resto o huella de un ser vivo del pasado",
            "Una herramienta moderna"
        ],
        correcta: 1
    },

    {
        bloque: 0,
        imagen: "assets/material/hominido_06.avif",
        pregunta: "¿Cuál de estos es un famoso fósil de un Australopithecus?",
        opciones: [
            "Dinosaurio",
            "Mamut",
            "Lucy"
        ],
        correcta: 2
    },


    // ========================================================
    // NIVEL 2 - AUSTRALOPITHECUS
    // ========================================================

    {
        bloque: 1,
        imagen: "assets/material/australopithecus_01.jpg",
        pregunta: "¿Quién era Lucy?",
        opciones: [
            "Una Neandertal",
            "Una persona actual",
            "Una Australopithecus"
        ],
        correcta: 2
    },

    {
        bloque: 1,
        imagen: "assets/material/australopithecus_02.jpg",
        pregunta: "¿Dónde fue encontrada Lucy?",
        opciones: [
            "Etiopía",
            "Argentina",
            "España"
        ],
        correcta: 0
    },

    {
        bloque: 1,
        imagen: "assets/material/australopithecus_03.jpg",
        pregunta: "¿Hace aproximadamente cuánto tiempo vivió Lucy?",
        opciones: [
            "Hace 100 años",
            "Hace más de 3 millones de años",
            "Hace 500 años"
        ],
        correcta: 1
    },

    {
        bloque: 1,
        imagen: "assets/material/australopithecus_04.jpg",
        pregunta: "¿Los Australopithecus podían caminar sobre dos piernas?",
        opciones: [
            "No",
            "Sí",
            "Solo podían nadar"
        ],
        correcta: 1
    },

    {
        bloque: 1,
        imagen: "assets/material/australopithecus_05.webp",
        pregunta: "¿Los Australopithecus vivieron antes que los humanos actuales?",
        opciones: [
            "No",
            "Vivieron al mismo tiempo que nosotros",
            "Sí"
        ],
        correcta: 2
    },

    {
        bloque: 1,
        imagen: "assets/material/australopithecus_06.jpg",
        pregunta: "¿Qué era Lucy?",
        opciones: [
            "Un fósil de Australopithecus afarensis",
            "Un dinosaurio",
            "Una herramienta de piedra"
        ],
        correcta: 0
    },


    // ========================================================
    // NIVEL 3 - HOMO HABILIS
    // ========================================================

    {
        bloque: 2,
        imagen: "assets/material/habilis_01.jpg",
        pregunta: "¿Qué significa aproximadamente Homo habilis?",
        opciones: [
            "Hombre de hielo",
            "Hombre hábil",
            "Hombre gigante"
        ],
        correcta: 1
    },

    {
        bloque: 2,
        imagen: "assets/material/habilis_02.jpg",
        pregunta: "¿Qué utilizaba Homo habilis para fabricar herramientas?",
        opciones: [
            "Plástico",
            "Vidrio",
            "Piedra"
        ],
        correcta: 2
    },

    {
        bloque: 2,
        imagen: "assets/material/habilis_03.jpg",
        pregunta: "¿Para qué podían servir las herramientas de piedra?",
        opciones: [
            "Para cortar y conseguir alimentos",
            "Para usar electricidad",
            "Para conducir"
        ],
        correcta: 0
    },

    {
        bloque: 2,
        imagen: "assets/material/habilis_04.jpg",
        pregunta: "¿Homo habilis fabricaba herramientas?",
        opciones: [
            "No",
            "Solo herramientas de plástico",
            "Sí"
        ],
        correcta: 2
    },

    {
        bloque: 2,
        imagen: "assets/material/habilis_05.jpg",
        pregunta: "¿Homo habilis vivió hace mucho tiempo?",
        opciones: [
            "Sí",
            "No, vivió hace pocos años",
            "Vivió en la actualidad"
        ],
        correcta: 0
    },

    {
        bloque: 2,
        imagen: "assets/material/habilis_06.jpg",
        pregunta: "¿Qué era importante para Homo habilis?",
        opciones: [
            "Los teléfonos celulares",
            "El uso de herramientas",
            "Los autos"
        ],
        correcta: 1
    },


    // ========================================================
    // NIVEL 4 - HOMO ERECTUS
    // ========================================================

    {
        bloque: 3,
        imagen: "assets/material/erectus_01.webp",
        pregunta: "¿Qué significa Homo erectus?",
        opciones: [
            "Hombre acuático",
            "Hombre erguido",
            "Hombre volador"
        ],
        correcta: 1
    },

    {
        bloque: 3,
        imagen: "assets/material/erectus_02.jpg",
        pregunta: "¿Homo erectus podía caminar sobre dos piernas?",
        opciones: [
            "No",
            "Solo podía caminar usando las manos",
            "Sí"
        ],
        correcta: 2
    },

    {
        bloque: 3,
        imagen: "assets/material/erectus_03.jpg",
        pregunta: "¿Qué herramienta utilizaba Homo erectus?",
        opciones: [
            "Bifaces de piedra",
            "Computadoras",
            "Teléfonos"
        ],
        correcta: 0
    },

    {
        bloque: 3,
        imagen: "assets/material/erectus_04.jfif",
        pregunta: "¿Qué elemento fue importante para Homo erectus?",
        opciones: [
            "La electricidad",
            "Los motores",
            "El fuego"
        ],
        correcta: 2
    },

    {
        bloque: 3,
        imagen: "assets/material/erectus_05.jfif",
        pregunta: "¿Homo erectus se desplazó fuera de África?",
        opciones: [
            "Sí",
            "No",
            "Nunca salió de un solo lugar"
        ],
        correcta: 0
    },

    {
        bloque: 3,
        imagen: "assets/material/erectus_06.png",
        pregunta: "¿Para qué podía servir el fuego?",
        opciones: [
            "Para usar internet",
            "Para cocinar y calentarse",
            "Para fabricar autos"
        ],
        correcta: 1
    },


    // ========================================================
    // NIVEL 5 - NEANDERTAL
    // ========================================================

    {
        bloque: 4,
        imagen: "assets/material/neandertal_01.jpg",
        pregunta: "¿Cuál era el nombre científico de los Neandertales?",
        opciones: [
            "Homo habilis",
            "Homo neanderthalensis",
            "Homo sapiens"
        ],
        correcta: 1
    },

    {
        bloque: 4,
        imagen: "assets/material/neandertal_02.jpg",
        pregunta: "¿Dónde vivieron principalmente los Neandertales?",
        opciones: [
            "Europa y parte de Asia",
            "Australia",
            "América del Sur"
        ],
        correcta: 0
    },

    {
        bloque: 4,
        imagen: "assets/material/neandertal_03.jpg",
        pregunta: "¿Los Neandertales fabricaban herramientas?",
        opciones: [
            "No",
            "Solo herramientas modernas",
            "Sí"
        ],
        correcta: 2
    },

    {
        bloque: 4,
        imagen: "assets/material/neandertal_04.jpg",
        pregunta: "¿Los Neandertales utilizaban el fuego?",
        opciones: [
            "No",
            "Sí",
            "Nunca habían visto fuego"
        ],
        correcta: 1
    },

    {
        bloque: 4,
        imagen: "assets/material/neandertal_05.jfif",
        pregunta: "¿Los Neandertales vivieron durante una época muy fría?",
        opciones: [
            "No",
            "Vivieron solamente en lugares tropicales",
            "Sí"
        ],
        correcta: 2
    },

    {
        bloque: 4,
        imagen: "assets/material/neandertal_06.jfif",
        pregunta: "¿Los Neandertales eran humanos antiguos?",
        opciones: [
            "Sí",
            "No, eran dinosaurios",
            "No, eran plantas"
        ],
        correcta: 0
    },


    // ========================================================
    // NIVEL 6 - HOMO SAPIENS
    // ========================================================

    {
        bloque: 5,
        imagen: "assets/material/sapiens_01.jfif",
        pregunta: "¿Cuál es nuestro nombre científico?",
        opciones: [
            "Homo erectus",
            "Homo habilis",
            "Homo sapiens"
        ],
        correcta: 2
    },

    {
        bloque: 5,
        imagen: "assets/material/sapiens_02.webp",
        pregunta: "¿Qué especie corresponde a los humanos actuales?",
        opciones: [
            "Australopithecus",
            "Homo sapiens",
            "Homo habilis"
        ],
        correcta: 1
    },

    {
        bloque: 5,
        imagen: "assets/material/sapiens_03.jfif",
        pregunta: "¿Los Homo sapiens podían fabricar herramientas?",
        opciones: [
            "Sí",
            "No",
            "Solo podían usar piedras sin modificarlas"
        ],
        correcta: 0
    },

    {
        bloque: 5,
        imagen: "assets/material/sapiens_04.jpg",
        pregunta: "¿Qué podían crear los Homo sapiens?",
        opciones: [
            "Solo piedras",
            "Herramientas, pinturas y otros objetos",
            "Nada"
        ],
        correcta: 1
    },

    {
        bloque: 5,
        imagen: "assets/material/sapiens_05.jfif",
        pregunta: "¿Los humanos actuales pertenecemos a Homo sapiens?",
        opciones: [
            "No",
            "Solo algunas personas",
            "Sí"
        ],
        correcta: 2
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

let aciertosTotales = 0;
let erroresTotales = 0;


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
    // xd
    aciertosTotales = 0;
    erroresTotales = 0;


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
        aciertosTotales;

    document.getElementById("errores").innerText =
        erroresTotales;

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


        // Sumamos un acierto al bloque

        aciertosDelBloque++;


        // NUEVO: sumamos un acierto total

        aciertosTotales++;


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


    // NUEVO: sumamos un error total

    erroresTotales++;


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
