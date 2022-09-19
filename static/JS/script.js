// Creacion de las cartas de los lugares
let j = 0;
function cartasVehiculos() {
  let cartaLugar = document.getElementsByClassName("cartas-lugares")[0];

  function creacionCartas(
    placeImage,
    name,
    tel,
    desc,
    location,
    time,
    func,
    funcComentario,
    idContenedor,
    idComentario
  ) {
    const div = document.createElement("div");
    const div2 = document.createElement("div");
    const divComentario = document.createElement("div");
    const divMostrarComent = document.createElement("div");
    const divContenedorComent = document.createElement("div");
    const image = document.createElement("img");
    const botonComentario = document.createElement("button");
    var p = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    const formComentario = document.createElement("form");
    //const labelForm = document.createElement("label");
    const textareaForm = document.createElement("textarea");
    const buttonForm = document.createElement("button");

    var nombre = document.createTextNode(name);
    var telefono = document.createTextNode("Tel: " + tel);
    var descrip = document.createTextNode(desc);
    var ubicacion = document.createTextNode("Ubicacion: " + location);
    var horario = document.createTextNode("Horario: " + time);
    var tituloBoton = document.createTextNode("Mostrar Opiniones");
    //var titulolabel = document.createTextNode("Escribe una opinion");
    var tituloBoton2 = document.createTextNode("Publicar");

    image.src = "./../assets/lugares/" + placeImage + ".jpg";

    div.classList.add("carta");
    div2.classList.add("titulos-carta");
    divMostrarComent.classList.add("mostrar-comentarios");
    divContenedorComent.classList.add("comentarios");
    formComentario.classList.add("hacer-comentario");
    //labelForm.classList.add("label-comentario");
    textareaForm.classList.add("area-comentario");
    buttonForm.classList.add("publicar-comentario");

    divContenedorComent.setAttribute("id", idContenedor);
    formComentario.setAttribute("id", idComentario);
    textareaForm.setAttribute("id", "comment");
    div.setAttribute("id", "m" + j);
    j++;

    botonComentario.appendChild(tituloBoton);
    buttonForm.appendChild(tituloBoton2);
    //labelForm.appendChild(titulolabel);
    p.appendChild(nombre);
    p2.appendChild(telefono);
    p3.appendChild(descrip);
    p4.appendChild(ubicacion);
    p5.appendChild(horario);

    divComentario.classList.add("comentarios-centrado");
    botonComentario.classList.add("btn-mostrar");
    p3.classList.add("desc-carta");
    p4.classList.add("desc-carta");
    p5.classList.add("desc-carta");

    botonComentario.setAttribute("onclick", func);
    buttonForm.setAttribute("onclick", funcComentario);

    div2.appendChild(p);
    div2.appendChild(p2);
    div2.classList.add("titulos-carta");

    textareaForm.placeholder = "Escribe una opinion";

    //formComentario.appendChild(labelForm);
    formComentario.appendChild(textareaForm);
    formComentario.appendChild(buttonForm);

    divMostrarComent.appendChild(divContenedorComent);
    divMostrarComent.appendChild(formComentario);
    divComentario.appendChild(botonComentario);
    divComentario.appendChild(divMostrarComent);
    div.appendChild(image);
    div.appendChild(div2);
    div.appendChild(p3);
    div.appendChild(p4);
    div.appendChild(p5);
    div.appendChild(divComentario);

    cartaLugar.appendChild(div);
  }

  creacionCartas(
    "panpanteca",
    "La Papanteca — Fonda Jarocha",
    "81 2955 8924",
    "Desde la huasteca potosina trajo las enchiladas de baile o enchiladas rojas.",
    "Lincoln 4600 Col. valle de las mitras, Monterrey, Nuevo León",
    "Lunes a Domingo de 10:00am a 8:00pm",
    "cargarComentarios()",
    "submitComentario()",
    "contenedor",
    "comments"
  );

  creacionCartas(
    "ZonaUno",
    "Zona Uno",
    "81 2704 4009",
    "Elote amarillo preparado con chipotle casero + parmesano + perejil junto con unas papas fritas sazonadas y su porción de los mejores sin hueso de la zona.",
    "Santa Lucia 749, 66495 Guadalupe, Nuevo León",
    "Lunes a Domingo de 12:00pm a 5:00pm",
    "cargarComentarios2()",
    "submitComentario2()",
    "contenedor2",
    "comments2"
  );

  creacionCartas(
    "Morelia",
    "Morelia Gourmet Paletas",
    "81 3143 4040",
    "Tienen sus famosas Paletas Gourmet ahora envueltas en Waffle o con canastilla. Además, puedes pedirla cubierta de Nutella o bombón y con Toppings.",
    "Plaza rocallosos, calle sierra nevada #219, Colonia San Agustín, San Pedro Garza García, Nuevo León",
    "Lunes a Domingo de 10:00am a 8:00pm",
    "cargarComentarios3()",
    "submitComentario3()",
    "contenedor3",
    "comments3"
  );

  creacionCartas(
    "Dolce",
    "Dolce Amore Frappé",
    "81 3106 5667",
    "Frappés y Crepas, ya probaste los existimos sabores de Magnum, Mordisco, Kínder Delice, Ferrero y muchos más",
    "Av. Félix Galván 132 cerca de Paseo la fe, San Nicolás de los Garza, Nuevo Leon",
    "Lunes a Domingo de 10:00am a 7:00pm",
    "cargarComentarios4()",
    "submitComentario4()",
    "contenedor4",
    "comments4"
  );

  creacionCartas(
    "Calderas",
    "Taquería Calderas",
    "81 35 500 1407",
    "Tienen unos excelentes desayunos, por ejemplo, chilaquiles de pollo o de top sirloin, el mejor machacado estilo noreste, los mejores y más llenadores molletes de la ciudad.",
    "Plaza TEC Local 19 Planta Alta - Av. del Estado No. 215, Col. Tecnológico, Monterrey NL",
    "Lunes a Domingo de 8:00am a 4:00pm",
    "cargarComentarios5()",
    "submitComentario5()",
    "contenedor5",
    "comments5"
  );

  creacionCartas(
    "SelfieLand",
    "SelfieLandmx",
    "81 2218 3178",
    "Famoso por sus más de 20 sets diferentes desde muy cute hasta muy urbanos. Ideal para tomar fotos o videos, tiene un ticket de $500 por 3 personas.",
    "Museo de la selfie, Selfieland, 64989 Monterrey, Nuevo León, México",
    "Lunes a Domingo de 11:00am a 9:00pm",
    "cargarComentarios6()",
    "submitComentario6()",
    "contenedor6",
    "comments6"
  );

  creacionCartas(
    "Rayland",
    "Rayland Party",
    "81 1306 5463",
    "Además de un museo de colecciones de tamaño real de Super héroes, videojuegos y películas donde puedes tomarte fotos. Tiene una enorme sala de juegos con Trampolines, resbaladeros, Video Juegos etc.",
    "Av. Paseo de los Leones # 100 Col.cumbres Elite, 7 sector",
    "Lunes a Domingo de 10:00am a 9:00pm",
    "cargarComentarios7()",
    "submitComentario7()",
    "contenedor7",
    "comments7"
  );

  creacionCartas(
    "MuseoHistoriaMexicana",
    "Museo de Historia Mexicana",
    "81 2033 9898",
    "Es la exhibición histórica más importante en el norte de México. Está conformada por más de 1,200 piezas, distribuidas en un área de 15 mil metros cuadrados, que ilustran distintos aspectos de la vida en México.",
    "Dr José Ma. Coss 445, Centro, 64000 Monterrey, N.L",
    "Martes a Domingo de 10:00am a 6:00pm",
    "cargarComentarios8()",
    "submitComentario8()",
    "contenedor8",
    "comments8"
  );

  creacionCartas(
    "MuseoHorno",
    "Museo del Acero horno 3",
    "81 3158 6555",
    "Museo de Ciencias en un antiguo alto horno, dedicado a la historia de la industria de la región.",
    "Av. Fundidora Parque, Fundidora, 64010 Monterrey, N.L.",
    "Martes a Domingo de 12:00am a 7:00pm",
    "cargarComentarios9()",
    "submitComentario9()",
    "contenedor9",
    "comments9"
  );

  creacionCartas(
    "MuseoMetropolitano",
    "Museo Metropolitano De Monterrey",
    "81 8344 1971",
    "Este museo cuenta con cuatro salas de exposiciones temporales para albergar todo tipo de expresiones plásticas, un patio central y un auditorio en donde se llevan a cabo diferentes actividades.",
    "Ignacio Zaragoza, Corregidora &, Centro, 64720 Monterrey, N.L.",
    "Martes a Domingo de 11:00am a 5:00pm",
    "cargarComentarios10()",
    "submitComentario10()",
    "contenedor10",
    "comments10"
  );

  creacionCartas(
    "MuseoArte",
    "Museo de Arte Contemporáneo de Monterrey",
    "81 2379 9629",
    "Es uno de los centros culturales más importantes de América Latina cuyos esfuerzos se encaminan a la promoción del arte contemporáneo internacional, enfatizando en la difusión de las artes visuales latinoamericanas.",
    "Juan Zuazua, Padre Raymundo Jardón y, Centro, 64000 Monterrey, N.L.",
    "Martes a Domingo de 10:00am a 6:00pm",
    "cargarComentarios11()",
    "submitComentario11()",
    "contenedor11",
    "comments11"
  );

  creacionCartas(
    "SantaLucia",
    "Paseo Santa Lucía",
    "81 8126 8500",
    "Es el río artificial más largo de Latinoamérica con una extensión de 2.5 kilómetros y es considerado como una de las 13 maravillas de México creadas por el hombre.",
    "Santa Lucia, Centro, 64000 Monterrey, N.L.",
    "Lunes a Sabado de 10:00am a 9:30pm",
    "cargarComentarios12()",
    "submitComentario12()",
    "contenedor12",
    "comments12"
  );

  creacionCartas(
    "Bioparque",
    "Bioparque Estrella",
    "81 8221 0010",
    "Parque con rutas de estilo safari para ver animales, réplicas de dinosaurios y un sendero boscoso que lleva a una cascada.",
    "Rayon Km. 9, 64700 Montemorelos, N.L.",
    "Martes a Domingo de 10:00am. a 6:00pm",
    "cargarComentarios13()",
    "submitComentario13()",
    "contenedor13",
    "comments13"
  );

  creacionCartas(
    "ParqueFundidora",
    "Parque Fundidora",
    "81 8126 8500",
    "Es un parque urbano incluyente y multifuncional, que contribuye a reforzar el tejido social ofreciendo un espacio verde, seguro, y de acceso 100% gratuito.",
    "Avenida Fundidora y, Adolfo Prieto S/N, Obrera, 64010 Monterrey, N.L.",
    "Lunes a Domingo de 6:00am a 10:00pm",
    "cargarComentarios14()",
    "submitComentario14()",
    "contenedor14",
    "comments14"
  );

  creacionCartas(
    "ParqueEstanzuela",
    "Parque Natural La Estanzuela Monterrey",
    "81 2033 1200",
    "Espectacular parque al aire libre, con rutas de senderismo, cañones, cascadas y zonas de pícnic cubiertas.",
    "Camino, Antiguo Camino a Valle Alto S/N, La Estanzuela, 64780 Monterrey, N.L.",
    "Miércoles a Domingo de 7:00am a 4:00pm",
    "cargarComentarios15()",
    "submitComentario15()",
    "contenedor15",
    "comments15"
  );

  creacionCartas(
    "ParqueChipinque",
    "Parque Ecológico Chipinque",
    "81 8303 0000",
    "Parque ecológico en un entorno boscoso, famoso por sus rutas naturales y su observatorio en la montaña.",
    "Carretera a Chipinque Km. 2.5, Valle de San Angel, 66290 San Pedro Garza García, N.L.",
    "Lunes a Domingo de 6:00am a 8:00pm ",
    "cargarComentarios16()",
    "submitComentario16()",
    "contenedor16",
    "comments16"
  );

  creacionCartas(
    "TopGolf",
    "Top Golf",
    "81 1548 1001",
    "La cadena de golf más grande de todo México, Topgolf, llega al municipio de San Pedro Garza García, con el campo de golf más moderno de latinoamérica, aquí no necesitas ser un especialista en golf, solo basta con tener ganas de pasarla bien.",
    "Av. Morones Prieto #100, San Francisco San Pedro Garza",
    "Lunes a Domingo de 10:00 am a 1:00 am",
    "cargarcomentarios17()",
    "submitcomentarios17()",
    "contenedor17",
    "comments17"
    );

    creacionCartas(
      "Macroplaza",
      "Macroplaza",
      "8181268500",
      "Visita la Macroplaza, cuarta plaza más grande del mundo, cuenta con una extensión de 40 hectáreas donde podrás admirar antiguos monumentos, edificios coloniales y bellísimas fuentes para un sano esparcimiento, disfrutar de sus extensas áreas verdes al aire libre y conoce con tu familia uno de los iconos más importantes de nuestro estado.",
      "5 de Mayo, Zaragoza, Zuazua y Constitución",
      "Lunes a Domingo de 00:00 am a 24:00 pm",
      "cargarComentarios18()",
      "submitComentarios18()",
      "contenedor18",
      "comments18",
      );

    creacionCartas(
      "Barrio",
      "Barrio Antiguo",
      "8181268500",
      "Es uno de los spots favoritos para viajeros jóvenes y foodies, que encuentran en sus restaurantes los sabores típicos y cocina contemporánea, además de una cantidad envidiable de mixología, lo que convierte al barrio en una de las paradas finales del viaje. ",
      "Dr José Ma. Coss, Barrio Antiguo, Centro",
      "Lunes a Domingo de 00:00 am a 24:00 pm",
      "cargarComentarios19()",
      "submitComentarios19()",
      "contenedor19",
      "comments19",
      );
    
    creacionCartas(
      "Rey_del_cabrito",
      "Rey del Cabrito",
      "81 8345 3232",
      "Más allá de ser uno de los lugares más emblemáticos de la ciudad por ser uno de los pioneros en ofrecer una de las delicias culinarias más arraigados en la cultura regiomontana es, en esencia, un pequeño museo kitsch. Nos referimos al Rey del Cabrito. ",
      "Constitución 817-Oriente, Centro",
      "Lunes a Domingo de 11:30 am a 23:00 pm",
      "cargarComentarios20()",
      "submitComentarios20()",
      "contenedor20",
      "comments20",
    );
      
    creacionCartas(
      "Cola_de_caballo",
      "Cascada cola de caballo",
      "8183961128",
      "Uno de los principales atractivos de Santiago se encuentra a apenas diez kilómetros del pueblo. La cascada Cola de Caballo, en el Parque Nacional Cumbres de Monterrey, es un salto de 27 metros de alto, rodeado de abundante vegetación, y el centro de un gran número de actividades.",
      "Km. 6 Carretera Cola de Caballo, Santiago, N.",
      "Lunes a Domingo de 9:00 am a 6:00 pm",
      "cargarComentarios21()",
      "submitComentarios21()",
      "contenedor21",
      "comments21",
    );

    creacionCartas(
      "Grutas",
      "Cañón y Grutas de Bustamante",
      "818 371 6941",
      "Si tu plan es relajarte en la naturaleza debes recorrer el Cañón de Bustamante en donde te sorprenderán las formas de las enormes rocas que lo integran, además de los ojos de agua en los que podrás darte un chapuzón. Lleva traje de baño porque puede ser que lo necesites",
      "Gral Padre Mier, Las Flores, Bustamante",
      "Martes a Domingo de 9:00 am a 5:00 pm",
      "cargarComentarios22()",
      "submitComentarios22()",
      "contenedor22",
      "comments22",
    );

    creacionCartas(
      "Go_karts",
      "Go Karts  - Santiago Racing Track",
      "8112930224",
      "Si eres amante de la velocidad o sólo buscas algo distinto visita Santiago Racing Track, única en el país con diferentes go karts, desde el sencillo hasta el conjunto donde si quieres puedes acompañar a tu hijo o dejarlo manejar por su cuenta, también tienen karts para personas de tallas grandes, aquí hay diversión para todos",
      "Lupita, Cieneguilla, Santiago",
      "Lunes a Domingo de 11:00 am a 7:00 pm",
      "cargarComentarios23()",
      "submitComentarios23()",
      "contenedor23",
      "comments23",
    );

    creacionCartas(
      "Estadio_beisbol",
      "Estadio beisbol Mobil Super",
      "81 2270 2000",
      "El Estadio de Béisbol Monterrey, conocido simplemente como Estadio Monterrey, es un estadio de béisbol localizado en Monterrey, Nuevo León, México. Fue construido entre 1987 y 1989. Sus 22,061 asientos lo convierten en el estadio de béisbol de mayor capacidad en México y el tercero en América Latina.",
      "Av. Manuel L. Barragán S/N,Regina, CP64290 Monterrey",
      "A disponibilidad de juego",
      "cargarComentarios24()",
      "submitComentarios24()",
      "contenedor24",
      "comments24",
    );

    creacionCartas(
      "Huasteca",
      "La Huasteca",
      "8181268500",
      "Desde la metrópoli puedes identificar los grandiosos paisajes creados por sus montañas, un escenario que le roba miradas a cualquiera. En esta ciudad llena de montañas, La Huasteca se destaca por sus filosas formaciones rocosas, un panorama que te envuelve desde el momento de adentrarte al parque.",
      "Santa Catarina De La Huasteca, Parques la Fama, 66196 Ciudad Santa Catarina",
      "Lunes a Domingo de 9:00 am a 5:00 pm",
      "cargarComentarios25()",
      "submitComentarios25()",
      "contenedor25",
      "comments25",
    );  
      
}

// Import the functions you need from the SDKs you need
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT9s58SLiJ23ZSYXgPjpfwrPu0ARAKJeU",
  authDomain: "regios-check.firebaseapp.com",
  projectId: "regios-check",
  storageBucket: "regios-check.appspot.com",
  messagingSenderId: "481013256356",
  appId: "1:481013256356:web:c640ec3b3458d3dc095631",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// USUARIO DENTRO
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    // Se muestra logout
    document.getElementById("registrar-ses").style.display = "none";
    document.getElementById("abrir-ses").style.display = "none";
    document.getElementById("cerrar-ses").style.display = "block";

    // SACAR EL CORREO
    if (user != null) {
      var email_id = user.email;
      window.email_id = email_id;

      // db.collection("users")
      //   .doc(user.uid)
      //   .get()
      //   .then((doc) => {
      //     var nombreUsuario = doc.data().bio;
      //     window.nombreUsuario = nombreUsuario;
      //   });
    }

    // ...
  } else {
    // User is signed out
    // ...
    // Se muestran los metodos de registro
    document.getElementById("registrar-ses").style.display = "block";
    document.getElementById("abrir-ses").style.display = "block";
    document.getElementById("cerrar-ses").style.display = "none";
  }
});

// INICIO SESION
function login() {
  let userEmail = document.getElementById("email_field").value;
  let userPass = document.getElementById("password_field").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(userEmail, userPass)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      window.location.href = "inicio.html";

      if (user !== null) {
        //document.getElementById("texto").innerHTML = user.email;
      }
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      alert("Error: " + errorMessage);
    });
}

// REGISTRARSE
function signUp() {
  let userEmail = document.getElementById("email").value;
  let confirEmail = document.getElementById("confirEmail").value;
  let userPass = document.getElementById("password").value;
  let confirPass = document.getElementById("confirPasssword").value;
  let userName = document.getElementById("nombre").value;

  if (
    userEmail.trim() === "" ||
    userPass.trim() === "" ||
    userName.trim() === "" ||
    confirEmail.trim() === "" ||
    confirPass.trim() === ""
  ) {
    alert("Favor de llenar todos los campos");
    return;
  }

  if (userEmail !== confirEmail) {
    alert("Los correos ingresados no son iguales");
    return;
  }

  if (userPass !== confirPass) {
    alert("Las contraseñas ingresadas no son iguales");
    return;
  }

  firebase
    .auth()
    .createUserWithEmailAndPassword(userEmail, userPass)
    .then((userCredential) => {
      return db.collection("users").doc(userCredential.user.uid).set({
        username: userName,
      });
    })
    .then(() => {
      // Signed in
      //var user = userCredential.user;
      window.location.href = "inicio.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      if (errorCode === "auth/email-already-in-use") {
        alert("Error: Este correo ya esta siendo utilizado");
      } else if (errorCode === "auth/invalid-email") {
        alert("Error: El correo ingresado no es valido");
      }
      // ..
    });
}

// SALIRSE
function logout() {
  firebase
    .auth()
    .signOut()
    .then(function () {
      // Sign-out succesful.
    })
    .catch(function (error) {
      // An error happend.
    });
}

// OLVIDAR CONTRA
function resetPassword() {
  const auth = firebase.auth();
  const email = document.getElementById("email").value;

  if (email == "") {
    alert("Ingrese el correo");
    return;
  }

  auth
    .sendPasswordResetEmail(email)
    .then(function () {
      alert("Se ha enviado un mensaje a tu correo, favor de checarlo.");
    })
    .catch(function (error) {
      alert("Error: " + error.message);
    });
}
// SUSCRIBIRSE
let usuarioSuscrito = false;
let firebaseRef = firebase.database().ref("usuarios-suscritos");
const firestore = firebase.firestore();

// Suscribirse
function suscripcion() {
  let docId;
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      if (user != null) {
      }

      db.collection("usuariosregistrados")
        .add({
          correo: user.email,
        })
        .then(function (docRef) {
          console.log("Document written with ID: ", docRef.id);
          docId = docRef.id;

          alert("Te has suscrito.");
          localStorage.setItem("usuarioSuscrito", true);

          let wrapDiv = document.getElementById("wrapDivAviso");
          wrapDiv.setAttribute("data-id", docId);

          // let aviso = document.createElement("span");

          let desus = document.createElement("button");
          desus.setAttribute("id", "btn-desuscrito");
          desus.textContent = "Desuscribirte";

          wrapDiv.appendChild(desus);

          // aviso.textContent = "Estas Suscrito";

          // wrapDiv.appendChild(aviso);

          let estaSuscrito = localStorage.getItem("usuarioSuscrito");

          if (estaSuscrito == "true") {
            document.getElementById("btn-desuscrito").style.display = "flex";
            document.getElementById("btn-suscrito").style.display = "none";
          } else {
            document.getElementById("btn-desuscrito").style.display = "none";
            document.getElementById("btn-suscrito").style.display = "flex";
          }

          // Desuscribirse
          desus.addEventListener("click", (e) => {
            e.stopPropagation();
            let id = e.target.parentElement.getAttribute("data-id");
            console.log(id);

            db.collection("usuariosregistrados")
              .doc(id)
              .delete()
              .then(() => {
                console.log("Document successfully deleted!");
                localStorage.setItem("usuarioSuscrito", false);
                alert("Te has desuscrito.");
                const botonDesus = document.getElementById("btn-desuscrito");
                botonDesus.parentNode.removeChild(botonDesus);
              })
              .catch((error) => {
                console.error("Error removing document: ", error);
              });

            localStorage.setItem("usuarioSuscrito", false);

            let estaSuscrito = localStorage.getItem("usuarioSuscrito");

            if (estaSuscrito == "true") {
              document.getElementById("btn-desuscrito").style.display = "flex";
              document.getElementById("btn-suscrito").style.display = "none";
            } else {
              document.getElementById("btn-desuscrito").style.display = "none";
              document.getElementById("btn-suscrito").style.display = "flex";
            }
          });
        });
    } else {
      alert("Debes de tener cuenta para suscribirte.");
      return;
    }
  });
}

// SEARCH BAR
const searchBar = document.getElementById("searchBar");
let lugares = [
  {
    id: 0,
    nombre: "la papanteca fona jarocha",
    tags: "comida",
  },
  {
    id: 1,
    nombre: "zona uno",
    tags: "comida",
  },
  {
    id: 2,
    nombre: "morelia gourmet paletas",
    tags: "comida",
  },
  {
    id: 3,
    nombre: "dolce amore frappe",
    tags: "comida",
  },
  {
    id: 4,
    nombre: "taqueria calderas",
    tags: "comida",
  },
  {
    id: 5,
    nombre: "selfielandmx",
    tags: "diversion",
  },
  {
    id: 6,
    nombre: "rayland party",
    tags: "museo",
  },
  {
    id: 7,
    nombre: "museo de historia mexicana",
    tags: "museo",
  },
  {
    id: 8,
    nombre: "museo del acero horno 3",
    tags: "museo",
  },
  {
    id: 9,
    nombre: "museo metropolitano de monterrey",
    tags: "museo",
  },
  {
    id: 10,
    nombre: "museo de arte contemporáneo de monterrey",
    tags: "museo",
  },
  {
    id: 11,
    nombre: "paseo santa lucía",
    tags: "diversion",
  },
  {
    id: 12,
    nombre: "bioparque estrella",
    tags: "parque",
  },
  {
    id: 13,
    nombre: "parque fundidora",
    tags: "parque",
  },
  {
    id: 14,
    nombre: "parque natural la estanzuela mMonterrey",
    tags: "parque",
  },
  {
    id: 15,
    nombre: "parque ecológico chipinque",
    tags: "parque",
  },
  {
    id: 16,
    nombre: "Top Golf",
    tags: "diversion",
  },
  {
    id: 17,
    nombre: "Macroplaza",
    tags: "Turismo",
  },
  {
    id: 18,
    nombre: "Barrio Antiguo",
    tags: "caminar",
  },
  {
    id: 19,
    nombre: "Rey del cabrito",
    tags: "comer",
  },
  {
    id: 20,
    nombre: "Cascada cola de caballo",
    tags: "Turismo",
  },
  {
    id: 21,
    nombre: "Cañón y grutas de Bustamante",
    tags: "Turismo",
  },
  {
    id: 22,
    nombre: "Go Karts  - Santiago Racing Track",
    tags: "diversion",
  },
  {
    id: 23,
    nombre: "Estadio beisbol Mobil Super",
    tags: "diversion",
  },
  {
    id: 24,
    nombre: "La Huasteca",
    tags: "Turismo",
  },
  
];

const buscadorLugares = () => {
  searchBar.addEventListener("keyup", (e) => {
    const busqueda = e.target.value.toLowerCase();

    const filteredLugares = lugares.filter((lugar) => {
      return lugar.nombre.includes(busqueda) || lugar.tags.includes(busqueda);
    });

    const lugar1 = document.getElementById("m0");
    const lugar2 = document.getElementById("m1");
    const lugar3 = document.getElementById("m2");
    const lugar4 = document.getElementById("m3");
    const lugar5 = document.getElementById("m4");
    const lugar6 = document.getElementById("m5");
    const lugar7 = document.getElementById("m6");
    const lugar8 = document.getElementById("m7");
    const lugar9 = document.getElementById("m8");
    const lugar10 = document.getElementById("m9");
    const lugar11 = document.getElementById("m10");
    const lugar12 = document.getElementById("m11");
    const lugar13 = document.getElementById("m12");
    const lugar14 = document.getElementById("m13");
    const lugar15 = document.getElementById("m14");
    const lugar16 = document.getElementById("m15");
    const lugar17 = document.getElementById("m16");
    const lugar18 = document.getElementById("m17");
    const lugar19 = document.getElementById("m18");
    const lugar20 = document.getElementById("m19");
    const lugar21 = document.getElementById("m20");
    const lugar22 = document.getElementById("m21");
    const lugar23 = document.getElementById("m22");
    const lugar24 = document.getElementById("m23");
    const lugar25 = document.getElementById("m24");

    let lugaresFiltro = [
      lugar1,
      lugar2,
      lugar3,
      lugar4,
      lugar5,
      lugar6,
      lugar7,
      lugar8,
      lugar9,
      lugar10,
      lugar11,
      lugar12,
      lugar13,
      lugar14,
      lugar15,
      lugar16,
      lugar17,
      lugar18,
      lugar19,
      lugar20,
      lugar21,
      lugar22,
      lugar23,
      lugar24,
      lugar25,
    ];

    const idFiltrado = filteredLugares.map((filteredLugar) => {
      return filteredLugar.id;
    });

    for (let i = 0; i < lugaresFiltro.length; i++) {
      if (idFiltrado.includes(i)) {
        lugaresFiltro[i].style.display = "block";
      } else {
        lugaresFiltro[i].style.display = "none";
      }
    }
  });
};

// HAMBURGUESA
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".back-barra");
  const navLinks = document.querySelectorAll(".disenonav"); // .nav-list li

  burger.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 30 + 0.01
        }s`;
      }
    });

    // Burger Animation
    burger.classList.toggle("toggle");

    // Se cierre el menu si se cierra la hamburgesa
    navLinks.forEach((e) => {
      if (e.classList.contains("activado")) {
        e.classList.toggle("activado");
      }
    });
  });
};

function expandirMenu() {
  const opcion = document.querySelector(".activado");

  opcion.classList.toggle(".activado");
}

// COMENTARIOS
const btnMostrar = document.getElementsByClassName("btn-mostrar")[0];

function submitComentario() {
  const formComentario = document.getElementById("comments");

  // AGREGAR COMENTARIOS A LA BASE DE DATOS
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      if (user != null) {
      }
    } else {
      alert("Debes de tener cuenta para publicar un comentario.");
      return;
    }
  });

  formComentario.addEventListener("submit", (e) => {
    e.preventDefault();

    if (formComentario.comment.value.trim() === "") {
      alert("El campo esta vacío");
      return;
    }

    db.collection("comments").add({
      name: email_id,
      comment: formComentario.comment.value,
    });
    formComentario.comment.value = "";
  });
}

// LEER COMENTARIOS
let i = 0;
const cargarComentarios = () => {
  const contenedor = document.getElementById("contenedor");

  renderList = (doc) => {
    let main_div = document.createElement("div");
    let card_body = document.createElement("div");
    let name = document.createElement("h5");
    let comment = document.createElement("p");

    main_div.setAttribute("class", "card");
    card_body.setAttribute("class", "card-body");
    name.setAttribute("class", "card-title");
    comment.setAttribute("class", "card-text");

    name.textContent = doc.data().name;
    comment.textContent = doc.data().comment;

    card_body.appendChild(name);
    card_body.appendChild(comment);
    main_div.appendChild(card_body);

    contenedor.appendChild(main_div);
  };

  db.collection("comments").onSnapshot((snap) => {
    let changes = snap.docChanges();
    changes.forEach((change) => {
      if (change.type == "added") {
        renderList(change.doc);
      }
    });
  });

  if (i % 2 === 0) {
    contenedor.style.display = "block";
    while (contenedor.firstChild) {
      contenedor.removeChild(contenedor.firstChild);
    }
  } else {
    while (contenedor.firstChild) {
      contenedor.removeChild(contenedor.firstChild);
    }
    contenedor.style.display = "none";
  }

  const btnMostrar = document.getElementsByClassName("btn-mostrar")[0];

  if (i % 2 === 0) {
    btnMostrar.innerText = "Ocultar Opiniones";
  } else {
    btnMostrar.innerText = "Mostrar Opiniones";
  }

  i++;
};

// COMENTARIOS 2
const btnMostrar2 = document.getElementsByClassName("btn-mostrar")[1];

function submitComentario2() {
  const formComentario = document.getElementById("comments2");

  // AGREGAR COMENTARIOS A LA BASE DE DATOS
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      if (user != null) {
      }
    } else {
      alert("Debes de tener cuenta para publicar un comentario.");
      return;
    }
  });

  formComentario.addEventListener("submit", (e) => {
    e.preventDefault();

    if (formComentario.comment.value.trim() === "") {
      alert("El campo esta vacío");
      return;
    }

    db.collection("comments2").add({
      name: email_id,
      comment: formComentario.comment.value,
    });
    formComentario.comment.value = "";
  });
}

let i2 = 0;
const cargarComentarios2 = () => {
  // LEER COMENTARIOS
  const contenedor2 = document.getElementById("contenedor2");

  renderList2 = (doc) => {
    let main_div = document.createElement("div");
    let card_body = document.createElement("div");
    let name = document.createElement("h5");
    let comment = document.createElement("p");

    main_div.setAttribute("class", "card");
    card_body.setAttribute("class", "card-body");
    name.setAttribute("class", "card-title");
    comment.setAttribute("class", "card-text");

    name.textContent = doc.data().name;
    comment.textContent = doc.data().comment;

    card_body.appendChild(name);
    card_body.appendChild(comment);
    main_div.appendChild(card_body);

    contenedor2.appendChild(main_div);
  };

  db.collection("comments2").onSnapshot((snap) => {
    let changes2 = snap.docChanges();
    changes2.forEach((change) => {
      if (change.type == "added") {
        renderList2(change.doc);
      }
    });
  });

  if (i2 % 2 === 0) {
    contenedor2.style.display = "block";
    while (contenedor2.firstChild) {
      contenedor2.removeChild(contenedor2.firstChild);
    }
  } else {
    while (contenedor2.firstChild) {
      contenedor2.removeChild(contenedor2.firstChild);
    }
    contenedor2.style.display = "none";
  }

  const btnMostrar2 = document.getElementsByClassName("btn-mostrar")[1];

  if (i2 % 2 === 0) {
    btnMostrar2.innerText = "Ocultar Opiniones";
  } else {
    btnMostrar2.innerText = "Mostrar Opiniones";
  }

  i2++;
};

// COMENTARIOS 3
const btnMostrar3 = document.getElementsByClassName("btn-mostrar")[2];

function submitComentario3() {
  const formComentario = document.getElementById("comments3");

  // AGREGAR COMENTARIOS A LA BASE DE DATOS
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      if (user != null) {
      }
    } else {
      alert("Debes de tener cuenta para publicar un comentario.");
      return;
    }
  });

  formComentario.addEventListener("submit", (e) => {
    e.preventDefault();

    if (formComentario.comment.value.trim() === "") {
      alert("El campo esta vacío");
      return;
    }

    db.collection("comments3").add({
      name: email_id,
      comment: formComentario.comment.value,
    });
    formComentario.comment.value = "";
  });
}

let i3 = 0;
const cargarComentarios3 = () => {
  // LEER COMENTARIOS
  const contenedor3 = document.getElementById("contenedor3");

  renderList3 = (doc) => {
    let main_div = document.createElement("div");
    let card_body = document.createElement("div");
    let name = document.createElement("h5");
    let comment = document.createElement("p");

    main_div.setAttribute("class", "card");
    card_body.setAttribute("class", "card-body");
    name.setAttribute("class", "card-title");
    comment.setAttribute("class", "card-text");

    name.textContent = doc.data().name;
    comment.textContent = doc.data().comment;

    card_body.appendChild(name);
    card_body.appendChild(comment);
    main_div.appendChild(card_body);

    contenedor3.appendChild(main_div);
  };

  db.collection("comments3").onSnapshot((snap) => {
    let changes3 = snap.docChanges();
    changes3.forEach((change) => {
      if (change.type == "added") {
        renderList3(change.doc);
      }
    });
  });

  if (i3 % 2 === 0) {
    contenedor3.style.display = "block";
    while (contenedor3.firstChild) {
      contenedor3.removeChild(contenedor3.firstChild);
    }
  } else {
    while (contenedor3.firstChild) {
      contenedor3.removeChild(contenedor3.firstChild);
    }
    contenedor3.style.display = "none";
  }

  const btnMostrar3 = document.getElementsByClassName("btn-mostrar")[2];

  if (i3 % 2 === 0) {
    btnMostrar3.innerText = "Ocultar Opiniones";
  } else {
    btnMostrar3.innerText = "Mostrar Opiniones";
  }

  i3++;
};

// COMENTARIOS 4
const btnMostrar4 = document.getElementsByClassName("btn-mostrar")[3];

function submitComentario4() {
  const formComentario = document.getElementById("comments4");

  // AGREGAR COMENTARIOS A LA BASE DE DATOS
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      if (user != null) {
      }
    } else {
      alert("Debes de tener cuenta para publicar un comentario.");
      return;
    }
  });

  formComentario.addEventListener("submit", (e) => {
    e.preventDefault();

    if (formComentario.comment.value.trim() === "") {
      alert("El campo esta vacío");
      return;
    }

    db.collection("comments4").add({
      name: email_id,
      comment: formComentario.comment.value,
    });
    formComentario.comment.value = "";
  });
}

let i4 = 0;
const cargarComentarios4 = () => {
  // LEER COMENTARIOS
  const contenedor4 = document.getElementById("contenedor4");

  renderList4 = (doc) => {
    let main_div = document.createElement("div");
    let card_body = document.createElement("div");
    let name = document.createElement("h5");
    let comment = document.createElement("p");

    main_div.setAttribute("class", "card");
    card_body.setAttribute("class", "card-body");
    name.setAttribute("class", "card-title");
    comment.setAttribute("class", "card-text");

    name.textContent = doc.data().name;
    comment.textContent = doc.data().comment;

    card_body.appendChild(name);
    card_body.appendChild(comment);
    main_div.appendChild(card_body);

    contenedor4.appendChild(main_div);
  };

  db.collection("comments4").onSnapshot((snap) => {
    let changes4 = snap.docChanges();
    changes4.forEach((change) => {
      if (change.type == "added") {
        renderList4(change.doc);
      }
    });
  });

  if (i4 % 2 === 0) {
    contenedor4.style.display = "block";
    while (contenedor4.firstChild) {
      contenedor4.removeChild(contenedor4.firstChild);
    }
  } else {
    while (contenedor4.firstChild) {
      contenedor4.removeChild(contenedor4.firstChild);
    }
    contenedor4.style.display = "none";
  }

  const btnMostrar4 = document.getElementsByClassName("btn-mostrar")[3];

  if (i4 % 2 === 0) {
    btnMostrar4.innerText = "Ocultar Opiniones";
  } else {
    btnMostrar4.innerText = "Mostrar Opiniones";
  }

  i4++;
};

// COMENTARIOS 5
const btnMostrar5 = document.getElementsByClassName("btn-mostrar")[4];

function submitComentario5() {
  const formComentario = document.getElementById("comments5");

  // AGREGAR COMENTARIOS A LA BASE DE DATOS
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      if (user != null) {
      }
    } else {
      alert("Debes de tener cuenta para publicar un comentario.");
      return;
    }
  });

  formComentario.addEventListener("submit", (e) => {
    e.preventDefault();

    if (formComentario.comment.value.trim() === "") {
      alert("El campo esta vacío");
      return;
    }

    db.collection("comments5").add({
      name: email_id,
      comment: formComentario.comment.value,
    });
    formComentario.comment.value = "";
  });
}

let i5 = 0;
const cargarComentarios5 = () => {
  // LEER COMENTARIOS
  const contenedor5 = document.getElementById("contenedor5");

  renderList5 = (doc) => {
    let main_div = document.createElement("div");
    let card_body = document.createElement("div");
    let name = document.createElement("h5");
    let comment = document.createElement("p");

    main_div.setAttribute("class", "card");
    card_body.setAttribute("class", "card-body");
    name.setAttribute("class", "card-title");
    comment.setAttribute("class", "card-text");

    name.textContent = doc.data().name;
    comment.textContent = doc.data().comment;

    card_body.appendChild(name);
    card_body.appendChild(comment);
    main_div.appendChild(card_body);

    contenedor5.appendChild(main_div);
  };

  db.collection("comments5").onSnapshot((snap) => {
    let changes5 = snap.docChanges();
    changes5.forEach((change) => {
      if (change.type == "added") {
        renderList5(change.doc);
      }
    });
  });

  if (i5 % 2 === 0) {
    contenedor5.style.display = "block";
    while (contenedor5.firstChild) {
      contenedor5.removeChild(contenedor5.firstChild);
    }
  } else {
    while (contenedor5.firstChild) {
      contenedor5.removeChild(contenedor5.firstChild);
    }
    contenedor5.style.display = "none";
  }

  const btnMostrar5 = document.getElementsByClassName("btn-mostrar")[4];

  if (i5 % 2 === 0) {
    btnMostrar5.innerText = "Ocultar Opiniones";
  } else {
    btnMostrar5.innerText = "Mostrar Opiniones";
  }

  i5++;
};

// COMENTARIOS 6
const btnMostrar6 = document.getElementsByClassName("btn-mostrar")[5];

function submitComentario6() {
  const formComentario = document.getElementById("comments6");

  // AGREGAR COMENTARIOS A LA BASE DE DATOS
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      if (user != null) {
      }
    } else {
      alert("Debes de tener cuenta para publicar un comentario.");
      return;
    }
  });

  formComentario.addEventListener("submit", (e) => {
    e.preventDefault();

    if (formComentario.comment.value.trim() === "") {
      alert("El campo esta vacío");
      return;
    }

    db.collection("comments6").add({
      name: email_id,
      comment: formComentario.comment.value,
    });
    formComentario.comment.value = "";
  });
}

let i6 = 0;
const cargarComentarios6 = () => {
  // LEER COMENTARIOS
  const contenedor6 = document.getElementById("contenedor6");

  renderList6 = (doc) => {
    let main_div = document.createElement("div");
    let card_body = document.createElement("div");
    let name = document.createElement("h5");
    let comment = document.createElement("p");

    main_div.setAttribute("class", "card");
    card_body.setAttribute("class", "card-body");
    name.setAttribute("class", "card-title");
    comment.setAttribute("class", "card-text");

    name.textContent = doc.data().name;
    comment.textContent = doc.data().comment;

    card_body.appendChild(name);
    card_body.appendChild(comment);
    main_div.appendChild(card_body);

    contenedor6.appendChild(main_div);
  };

  db.collection("comments6").onSnapshot((snap) => {
    let changes6 = snap.docChanges();
    changes6.forEach((change) => {
      if (change.type == "added") {
        renderList6(change.doc);
      }
    });
  });

  if (i6 % 2 === 0) {
    contenedor6.style.display = "block";
    while (contenedor6.firstChild) {
      contenedor6.removeChild(contenedor6.firstChild);
    }
  } else {
    while (contenedor6.firstChild) {
      contenedor6.removeChild(contenedor6.firstChild);
    }
    contenedor6.style.display = "none";
  }

  const btnMostrar6 = document.getElementsByClassName("btn-mostrar")[5];

  if (i6 % 2 === 0) {
    btnMostrar6.innerText = "Ocultar Opiniones";
  } else {
    btnMostrar6.innerText = "Mostrar Opiniones";
  }

  i6++;
};

// COMENTARIOS 7
const btnMostrar7 = document.getElementsByClassName("btn-mostrar")[6];

function submitComentario7() {
  const formComentario = document.getElementById("comments7");

  // AGREGAR COMENTARIOS A LA BASE DE DATOS
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      if (user != null) {
      }
    } else {
      alert("Debes de tener cuenta para publicar un comentario.");
      return;
    }
  });

  formComentario.addEventListener("submit", (e) => {
    e.preventDefault();

    if (formComentario.comment.value.trim() === "") {
      alert("El campo esta vacío");
      return;
    }

    db.collection("comments7").add({
      name: email_id,
      comment: formComentario.comment.value,
    });
    formComentario.comment.value = "";
  });
}

let i7 = 0;
const cargarComentarios7 = () => {
  // LEER COMENTARIOS
  const contenedor7 = document.getElementById("contenedor7");

  renderList7 = (doc) => {
    let main_div = document.createElement("div");
    let card_body = document.createElement("div");
    let name = document.createElement("h5");
    let comment = document.createElement("p");

    main_div.setAttribute("class", "card");
    card_body.setAttribute("class", "card-body");
    name.setAttribute("class", "card-title");
    comment.setAttribute("class", "card-text");

    name.textContent = doc.data().name;
    comment.textContent = doc.data().comment;

    card_body.appendChild(name);
    card_body.appendChild(comment);
    main_div.appendChild(card_body);

    contenedor7.appendChild(main_div);
  };

  db.collection("comments7").onSnapshot((snap) => {
    let changes7 = snap.docChanges();
    changes7.forEach((change) => {
      if (change.type == "added") {
        renderList7(change.doc);
      }
    });
  });

  if (i7 % 2 === 0) {
    contenedor7.style.display = "block";
    while (contenedor7.firstChild) {
      contenedor7.removeChild(contenedor7.firstChild);
    }
  } else {
    while (contenedor7.firstChild) {
      contenedor7.removeChild(contenedor7.firstChild);
    }
    contenedor7.style.display = "none";
  }

  const btnMostrar7 = document.getElementsByClassName("btn-mostrar")[6];

  if (i7 % 2 === 0) {
    btnMostrar7.innerText = "Ocultar Opiniones";
  } else {
    btnMostrar7.innerText = "Mostrar Opiniones";
  }

  i7++;
};

// COMENTARIOS 8
const btnMostrar8 = document.getElementsByClassName("btn-mostrar")[7];

function submitComentario8() {
  const formComentario = document.getElementById("comments8");

  // AGREGAR COMENTARIOS A LA BASE DE DATOS
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      if (user != null) {
      }
    } else {
      alert("Debes de tener cuenta para publicar un comentario.");
      return;
    }
  });

  formComentario.addEventListener("submit", (e) => {
    e.preventDefault();

    if (formComentario.comment.value.trim() === "") {
      alert("El campo esta vacío");
      return;
    }

    db.collection("comments8").add({
      name: email_id,
      comment: formComentario.comment.value,
    });
    formComentario.comment.value = "";
  });
}

let i8 = 0;
const cargarComentarios8 = () => {
  // LEER COMENTARIOS
  const contenedor8 = document.getElementById("contenedor8");

  renderList8 = (doc) => {
    let main_div = document.createElement("div");
    let card_body = document.createElement("div");
    let name = document.createElement("h5");
    let comment = document.createElement("p");

    main_div.setAttribute("class", "card");
    card_body.setAttribute("class", "card-body");
    name.setAttribute("class", "card-title");
    comment.setAttribute("class", "card-text");

    name.textContent = doc.data().name;
    comment.textContent = doc.data().comment;

    card_body.appendChild(name);
    card_body.appendChild(comment);
    main_div.appendChild(card_body);

    contenedor8.appendChild(main_div);
  };

  db.collection("comments8").onSnapshot((snap) => {
    let changes8 = snap.docChanges();
    changes8.forEach((change) => {
      if (change.type == "added") {
        renderList8(change.doc);
      }
    });
  });

  if (i8 % 2 === 0) {
    contenedor8.style.display = "block";
    while (contenedor8.firstChild) {
      contenedor8.removeChild(contenedor8.firstChild);
    }
  } else {
    while (contenedor8.firstChild) {
      contenedor8.removeChild(contenedor8.firstChild);
    }
    contenedor8.style.display = "none";
  }

  const btnMostrar8 = document.getElementsByClassName("btn-mostrar")[7];

  if (i8 % 2 === 0) {
    btnMostrar8.innerText = "Ocultar Opiniones";
  } else {
    btnMostrar8.innerText = "Mostrar Opiniones";
  }

  i8++;
};

// COMENTARIOS 9
const btnMostrar9 = document.getElementsByClassName("btn-mostrar")[8];

function submitComentario9() {
  const formComentario = document.getElementById("comments9");

  // AGREGAR COMENTARIOS A LA BASE DE DATOS
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      if (user != null) {
      }
    } else {
      alert("Debes de tener cuenta para publicar un comentario.");
      return;
    }
  });

  formComentario.addEventListener("submit", (e) => {
    e.preventDefault();

    if (formComentario.comment.value.trim() === "") {
      alert("El campo esta vacío");
      return;
    }

    db.collection("comments9").add({
      name: email_id,
      comment: formComentario.comment.value,
    });
    formComentario.comment.value = "";
  });
}

let i9 = 0;
const cargarComentarios9 = () => {
  // LEER COMENTARIOS
  const contenedor9 = document.getElementById("contenedor9");

  renderList9 = (doc) => {
    let main_div = document.createElement("div");
    let card_body = document.createElement("div");
    let name = document.createElement("h5");
    let comment = document.createElement("p");

    main_div.setAttribute("class", "card");
    card_body.setAttribute("class", "card-body");
    name.setAttribute("class", "card-title");
    comment.setAttribute("class", "card-text");

    name.textContent = doc.data().name;
    comment.textContent = doc.data().comment;

    card_body.appendChild(name);
    card_body.appendChild(comment);
    main_div.appendChild(card_body);

    contenedor9.appendChild(main_div);
  };

  db.collection("comments9").onSnapshot((snap) => {
    let changes9 = snap.docChanges();
    changes9.forEach((change) => {
      if (change.type == "added") {
        renderList9(change.doc);
      }
    });
  });

  if (i9 % 2 === 0) {
    contenedor9.style.display = "block";
    while (contenedor9.firstChild) {
      contenedor9.removeChild(contenedor9.firstChild);
    }
  } else {
    while (contenedor9.firstChild) {
      contenedor9.removeChild(contenedor9.firstChild);
    }
    contenedor9.style.display = "none";
  }

  const btnMostrar9 = document.getElementsByClassName("btn-mostrar")[8];

  if (i9 % 2 === 0) {
    btnMostrar9.innerText = "Ocultar Opiniones";
  } else {
    btnMostrar9.innerText = "Mostrar Opiniones";
  }

  i9++;
};

// COMENTARIOS 10
const btnMostrar10 = document.getElementsByClassName("btn-mostrar")[9];

function submitComentario10() {
  const formComentario = document.getElementById("comments10");

  // AGREGAR COMENTARIOS A LA BASE DE DATOS
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      if (user != null) {
      }
    } else {
      alert("Debes de tener cuenta para publicar un comentario.");
      return;
    }
  });

  formComentario.addEventListener("submit", (e) => {
    e.preventDefault();

    if (formComentario.comment.value.trim() === "") {
      alert("El campo esta vacío");
      return;
    }

    db.collection("comments10").add({
      name: email_id,
      comment: formComentario.comment.value,
    });
    formComentario.comment.value = "";
  });
}

let i10 = 0;
const cargarComentarios10 = () => {
  // LEER COMENTARIOS
  const contenedor10 = document.getElementById("contenedor10");

  renderList10 = (doc) => {
    let main_div = document.createElement("div");
    let card_body = document.createElement("div");
    let name = document.createElement("h5");
    let comment = document.createElement("p");

    main_div.setAttribute("class", "card");
    card_body.setAttribute("class", "card-body");
    name.setAttribute("class", "card-title");
    comment.setAttribute("class", "card-text");

    name.textContent = doc.data().name;
    comment.textContent = doc.data().comment;

    card_body.appendChild(name);
    card_body.appendChild(comment);
    main_div.appendChild(card_body);

    contenedor10.appendChild(main_div);
  };

  db.collection("comments10").onSnapshot((snap) => {
    let changes10 = snap.docChanges();
    changes10.forEach((change) => {
      if (change.type == "added") {
        renderList10(change.doc);
      }
    });
  });

  if (i10 % 2 === 0) {
    contenedor10.style.display = "block";
    while (contenedor10.firstChild) {
      contenedor10.removeChild(contenedor10.firstChild);
    }
  } else {
    while (contenedor10.firstChild) {
      contenedor10.removeChild(contenedor10.firstChild);
    }
    contenedor10.style.display = "none";
  }

  const btnMostrar10 = document.getElementsByClassName("btn-mostrar")[9];

  if (i10 % 2 === 0) {
    btnMostrar10.innerText = "Ocultar Opiniones";
  } else {
    btnMostrar10.innerText = "Mostrar Opiniones";
  }

  i10++;
};

// COMENTARIOS 11
const btnMostrar11 = document.getElementsByClassName("btn-mostrar")[10];

function submitComentario11() {
  const formComentario = document.getElementById("comments11");

  // AGREGAR COMENTARIOS A LA BASE DE DATOS
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      if (user != null) {
      }
    } else {
      alert("Debes de tener cuenta para publicar un comentario.");
      return;
    }
  });

  formComentario.addEventListener("submit", (e) => {
    e.preventDefault();

    if (formComentario.comment.value.trim() === "") {
      alert("El campo esta vacío");
      return;
    }

    db.collection("comments11").add({
      name: email_id,
      comment: formComentario.comment.value,
    });
    formComentario.comment.value = "";
  });
}

let i11 = 0;
const cargarComentarios11 = () => {
  // LEER COMENTARIOS
  const contenedor11 = document.getElementById("contenedor11");

  renderList11 = (doc) => {
    let main_div = document.createElement("div");
    let card_body = document.createElement("div");
    let name = document.createElement("h5");
    let comment = document.createElement("p");

    main_div.setAttribute("class", "card");
    card_body.setAttribute("class", "card-body");
    name.setAttribute("class", "card-title");
    comment.setAttribute("class", "card-text");

    name.textContent = doc.data().name;
    comment.textContent = doc.data().comment;

    card_body.appendChild(name);
    card_body.appendChild(comment);
    main_div.appendChild(card_body);

    contenedor11.appendChild(main_div);
  };

  db.collection("comments11").onSnapshot((snap) => {
    let changes11 = snap.docChanges();
    changes11.forEach((change) => {
      if (change.type == "added") {
        renderList11(change.doc);
      }
    });
  });

  if (i11 % 2 === 0) {
    contenedor11.style.display = "block";
    while (contenedor11.firstChild) {
      contenedor11.removeChild(contenedor11.firstChild);
    }
  } else {
    while (contenedor11.firstChild) {
      contenedor11.removeChild(contenedor11.firstChild);
    }
    contenedor11.style.display = "none";
  }

  const btnMostrar11 = document.getElementsByClassName("btn-mostrar")[10];

  if (i11 % 2 === 0) {
    btnMostrar11.innerText = "Ocultar Opiniones";
  } else {
    btnMostrar11.innerText = "Mostrar Opiniones";
  }

  i11++;
};

// COMENTARIOS 12
const btnMostrar12 = document.getElementsByClassName("btn-mostrar")[11];

function submitComentario12() {
  const formComentario = document.getElementById("comments12");

  // AGREGAR COMENTARIOS A LA BASE DE DATOS
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      if (user != null) {
      }
    } else {
      alert("Debes de tener cuenta para publicar un comentario.");
      return;
    }
  });

  formComentario.addEventListener("submit", (e) => {
    e.preventDefault();

    if (formComentario.comment.value.trim() === "") {
      alert("El campo esta vacío");
      return;
    }

    db.collection("comments12").add({
      name: email_id,
      comment: formComentario.comment.value,
    });
    formComentario.comment.value = "";
  });
}

let i12 = 0;
const cargarComentarios12 = () => {
  // LEER COMENTARIOS
  const contenedor12 = document.getElementById("contenedor12");

  renderList12 = (doc) => {
    let main_div = document.createElement("div");
    let card_body = document.createElement("div");
    let name = document.createElement("h5");
    let comment = document.createElement("p");

    main_div.setAttribute("class", "card");
    card_body.setAttribute("class", "card-body");
    name.setAttribute("class", "card-title");
    comment.setAttribute("class", "card-text");

    name.textContent = doc.data().name;
    comment.textContent = doc.data().comment;

    card_body.appendChild(name);
    card_body.appendChild(comment);
    main_div.appendChild(card_body);

    contenedor12.appendChild(main_div);
  };

  db.collection("comments12").onSnapshot((snap) => {
    let changes12 = snap.docChanges();
    changes12.forEach((change) => {
      if (change.type == "added") {
        renderList12(change.doc);
      }
    });
  });

  if (i12 % 2 === 0) {
    contenedor12.style.display = "block";
    while (contenedor12.firstChild) {
      contenedor12.removeChild(contenedor12.firstChild);
    }
  } else {
    while (contenedor12.firstChild) {
      contenedor12.removeChild(contenedor12.firstChild);
    }
    contenedor12.style.display = "none";
  }

  const btnMostrar12 = document.getElementsByClassName("btn-mostrar")[11];

  if (i12 % 2 === 0) {
    btnMostrar12.innerText = "Ocultar Opiniones";
  } else {
    btnMostrar12.innerText = "Mostrar Opiniones";
  }

  i12++;
};

// COMENTARIOS 13
const btnMostrar13 = document.getElementsByClassName("btn-mostrar")[12];

function submitComentario13() {
  const formComentario = document.getElementById("comments13");

  // AGREGAR COMENTARIOS A LA BASE DE DATOS
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      if (user != null) {
      }
    } else {
      alert("Debes de tener cuenta para publicar un comentario.");
      return;
    }
  });

  formComentario.addEventListener("submit", (e) => {
    e.preventDefault();

    if (formComentario.comment.value.trim() === "") {
      alert("El campo esta vacío");
      return;
    }

    db.collection("comments13").add({
      name: email_id,
      comment: formComentario.comment.value,
    });
    formComentario.comment.value = "";
  });
}

let i13 = 0;
const cargarComentarios13 = () => {
  // LEER COMENTARIOS
  const contenedor13 = document.getElementById("contenedor13");

  renderList13 = (doc) => {
    let main_div = document.createElement("div");
    let card_body = document.createElement("div");
    let name = document.createElement("h5");
    let comment = document.createElement("p");

    main_div.setAttribute("class", "card");
    card_body.setAttribute("class", "card-body");
    name.setAttribute("class", "card-title");
    comment.setAttribute("class", "card-text");

    name.textContent = doc.data().name;
    comment.textContent = doc.data().comment;

    card_body.appendChild(name);
    card_body.appendChild(comment);
    main_div.appendChild(card_body);

    contenedor13.appendChild(main_div);
  };

  db.collection("comments13").onSnapshot((snap) => {
    let changes13 = snap.docChanges();
    changes13.forEach((change) => {
      if (change.type == "added") {
        renderList13(change.doc);
      }
    });
  });

  if (i13 % 2 === 0) {
    contenedor13.style.display = "block";
    while (contenedor13.firstChild) {
      contenedor13.removeChild(contenedor13.firstChild);
    }
  } else {
    while (contenedor13.firstChild) {
      contenedor13.removeChild(contenedor13.firstChild);
    }
    contenedor13.style.display = "none";
  }

  const btnMostrar13 = document.getElementsByClassName("btn-mostrar")[12];

  if (i13 % 2 === 0) {
    btnMostrar13.innerText = "Ocultar Opiniones";
  } else {
    btnMostrar13.innerText = "Mostrar Opiniones";
  }

  i13++;
};

// COMENTARIOS 14
const btnMostrar14 = document.getElementsByClassName("btn-mostrar")[13];

function submitComentario14() {
  const formComentario = document.getElementById("comments14");

  // AGREGAR COMENTARIOS A LA BASE DE DATOS
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      if (user != null) {
      }
    } else {
      alert("Debes de tener cuenta para publicar un comentario.");
      return;
    }
  });

  formComentario.addEventListener("submit", (e) => {
    e.preventDefault();

    if (formComentario.comment.value.trim() === "") {
      alert("El campo esta vacío");
      return;
    }

    db.collection("comments14").add({
      name: email_id,
      comment: formComentario.comment.value,
    });
    formComentario.comment.value = "";
  });
}

let i14 = 0;
const cargarComentarios14 = () => {
  // LEER COMENTARIOS
  const contenedor14 = document.getElementById("contenedor14");

  renderList14 = (doc) => {
    let main_div = document.createElement("div");
    let card_body = document.createElement("div");
    let name = document.createElement("h5");
    let comment = document.createElement("p");

    main_div.setAttribute("class", "card");
    card_body.setAttribute("class", "card-body");
    name.setAttribute("class", "card-title");
    comment.setAttribute("class", "card-text");

    name.textContent = doc.data().name;
    comment.textContent = doc.data().comment;

    card_body.appendChild(name);
    card_body.appendChild(comment);
    main_div.appendChild(card_body);

    contenedor14.appendChild(main_div);
  };

  db.collection("comments14").onSnapshot((snap) => {
    let changes14 = snap.docChanges();
    changes14.forEach((change) => {
      if (change.type == "added") {
        renderList14(change.doc);
      }
    });
  });

  if (i14 % 2 === 0) {
    contenedor14.style.display = "block";
    while (contenedor14.firstChild) {
      contenedor14.removeChild(contenedor14.firstChild);
    }
  } else {
    while (contenedor14.firstChild) {
      contenedor14.removeChild(contenedor14.firstChild);
    }
    contenedor14.style.display = "none";
  }

  const btnMostrar14 = document.getElementsByClassName("btn-mostrar")[13];

  if (i14 % 2 === 0) {
    btnMostrar14.innerText = "Ocultar Opiniones";
  } else {
    btnMostrar14.innerText = "Mostrar Opiniones";
  }

  i14++;
};

// COMENTARIOS 15
const btnMostrar15 = document.getElementsByClassName("btn-mostrar")[14];

function submitComentario15() {
  const formComentario = document.getElementById("comments15");

  // AGREGAR COMENTARIOS A LA BASE DE DATOS
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      if (user != null) {
      }
    } else {
      alert("Debes de tener cuenta para publicar un comentario.");
      return;
    }
  });

  formComentario.addEventListener("submit", (e) => {
    e.preventDefault();

    if (formComentario.comment.value.trim() === "") {
      alert("El campo esta vacío");
      return;
    }

    db.collection("comments15").add({
      name: email_id,
      comment: formComentario.comment.value,
    });
    formComentario.comment.value = "";
  });
}

let i15 = 0;
const cargarComentarios15 = () => {
  // LEER COMENTARIOS
  const contenedor15 = document.getElementById("contenedor15");

  renderList15 = (doc) => {
    let main_div = document.createElement("div");
    let card_body = document.createElement("div");
    let name = document.createElement("h5");
    let comment = document.createElement("p");

    main_div.setAttribute("class", "card");
    card_body.setAttribute("class", "card-body");
    name.setAttribute("class", "card-title");
    comment.setAttribute("class", "card-text");

    name.textContent = doc.data().name;
    comment.textContent = doc.data().comment;

    card_body.appendChild(name);
    card_body.appendChild(comment);
    main_div.appendChild(card_body);

    contenedor15.appendChild(main_div);
  };

  db.collection("comments15").onSnapshot((snap) => {
    let changes15 = snap.docChanges();
    changes15.forEach((change) => {
      if (change.type == "added") {
        renderList15(change.doc);
      }
    });
  });

  if (i15 % 2 === 0) {
    contenedor15.style.display = "block";
    while (contenedor15.firstChild) {
      contenedor15.removeChild(contenedor15.firstChild);
    }
  } else {
    while (contenedor15.firstChild) {
      contenedor15.removeChild(contenedor15.firstChild);
    }
    contenedor15.style.display = "none";
  }

  const btnMostrar15 = document.getElementsByClassName("btn-mostrar")[14];

  if (i15 % 2 === 0) {
    btnMostrar15.innerText = "Ocultar Opiniones";
  } else {
    btnMostrar15.innerText = "Mostrar Opiniones";
  }

  i15++;
};

// COMENTARIOS 16
const btnMostrar16 = document.getElementsByClassName("btn-mostrar")[15];

function submitComentario16() {
  const formComentario = document.getElementById("comments16");

  // AGREGAR COMENTARIOS A LA BASE DE DATOS
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      if (user != null) {
      }
    } else {
      alert("Debes de tener cuenta para publicar un comentario.");
      return;
    }
  });

  formComentario.addEventListener("submit", (e) => {
    e.preventDefault();

    if (formComentario.comment.value.trim() === "") {
      alert("El campo esta vacío");
      return;
    }

    db.collection("comments16").add({
      name: email_id,
      comment: formComentario.comment.value,
    });
    formComentario.comment.value = "";
  });
}

let i16 = 0;
const cargarComentarios16 = () => {
  // LEER COMENTARIOS
  const contenedor16 = document.getElementById("contenedor16");

  renderList16 = (doc) => {
    let main_div = document.createElement("div");
    let card_body = document.createElement("div");
    let name = document.createElement("h5");
    let comment = document.createElement("p");

    main_div.setAttribute("class", "card");
    card_body.setAttribute("class", "card-body");
    name.setAttribute("class", "card-title");
    comment.setAttribute("class", "card-text");

    name.textContent = doc.data().name;
    comment.textContent = doc.data().comment;

    card_body.appendChild(name);
    card_body.appendChild(comment);
    main_div.appendChild(card_body);

    contenedor16.appendChild(main_div);
  };

  db.collection("comments16").onSnapshot((snap) => {
    let changes16 = snap.docChanges();
    changes16.forEach((change) => {
      if (change.type == "added") {
        renderList16(change.doc);
      }
    });
  });

  if (i16 % 2 === 0) {
    contenedor16.style.display = "block";
    while (contenedor16.firstChild) {
      contenedor16.removeChild(contenedor16.firstChild);
    }
  } else {
    while (contenedor16.firstChild) {
      contenedor16.removeChild(contenedor16.firstChild);
    }
    contenedor16.style.display = "none";
  }

  const btnMostrar16 = document.getElementsByClassName("btn-mostrar")[15];

  if (i16 % 2 === 0) {
    btnMostrar16.innerText = "Ocultar Opiniones";
  } else {
    btnMostrar16.innerText = "Mostrar Opiniones";
  }

  i16++;
};
  
  // COMENTARIOS 17
const btnMostrar17 = document.getElementsByClassName("btn-mostrar")[17];

function submitComentario17() {
  const formComentario = document.getElementById("comments17");

  // AGREGAR COMENTARIOS A LA BASE DE DATOS
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      if (user != null) {
      }
    } else {
      alert("Debes de tener cuenta para publicar un comentario.");
      return;
    }
  });

  formComentario.addEventListener("submit", (e) => {
    e.preventDefault();

    if (formComentario.comment.value.trim() === "") {
      alert("El campo esta vacío");
      return;
    }

    db.collection("comments17").add({
      name: email_id,
      comment: formComentario.comment.value,
    });
    formComentario.comment.value = "";
  });
}

let i17 = 0;
const cargarComentarios17 = () => {
  // LEER COMENTARIOS
  const contenedor17 = document.getElementById("contenedor17");

  renderList17 = (doc) => {
    let main_div = document.createElement("div");
    let card_body = document.createElement("div");
    let name = document.createElement("h5");
    let comment = document.createElement("p");

    main_div.setAttribute("class", "card");
    card_body.setAttribute("class", "card-body");
    name.setAttribute("class", "card-title");
    comment.setAttribute("class", "card-text");

    name.textContent = doc.data().name;
    comment.textContent = doc.data().comment;

    card_body.appendChild(name);
    card_body.appendChild(comment);
    main_div.appendChild(card_body);

    contenedor17.appendChild(main_div);
  };

  db.collection("comments17").onSnapshot((snap) => {
    let changes17 = snap.docChanges();
    changes4.forEach((change) => {
      if (change.type == "added") {
        renderList17(change.doc);
      }
    });
  });

  if (i17 % 2 === 0) {
    contenedor4.style.display = "block";
    while (contenedor17.firstChild) {
      contenedor17.removeChild(contenedor17.firstChild);
    }
  } else {
    while (contenedor17.firstChild) {
      contenedor17.removeChild(contenedor17.firstChild);
    }
    Contenedor17.style.display = "none";
  }

  const btnMostrar18 = document.getElementsByClassName("btn-mostrar")[16];

  if (i17 % 2 === 0) {
    btnMostrar17.innerText = "Ocultar Opiniones";
  } else {
    btnMostrar17innerText = "Mostrar Opiniones";
  }

  I17++;
};

// COMENTARIOS 18
const btnMostrar18 = document.getElementsByClassName("btn-mostrar")[18];

function submitComentario18() {
  const formComentario = document.getElementById("comments18");

  // AGREGAR COMENTARIOS A LA BASE DE DATOS
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      if (user != null) {
      }
    } else {
      alert("Debes de tener cuenta para publicar un comentario.");
      return;
    }
  });

  formComentario.addEventListener("submit", (e) => {
    e.preventDefault();

    if (formComentario.comment.value.trim() === "") {
      alert("El campo esta vacío");
      return;
    }

    db.collection("comments18").add({
      name: email_id,
      comment: formComentario.comment.value,
    });
    formComentario.comment.value = "";
  });
}

let i18 = 0;
const cargarComentarios18 = () => {
  // LEER COMENTARIOS
  const contenedor18 = document.getElementById("contenedor18");

  renderList18 = (doc) => {
    let main_div = document.createElement("div");
    let card_body = document.createElement("div");
    let name = document.createElement("h5");
    let comment = document.createElement("p");

    main_div.setAttribute("class", "card");
    card_body.setAttribute("class", "card-body");
    name.setAttribute("class", "card-title");
    comment.setAttribute("class", "card-text");

    name.textContent = doc.data().name;
    comment.textContent = doc.data().comment;

    card_body.appendChild(name);
    card_body.appendChild(comment);
    main_div.appendChild(card_body);

    contenedor18.appendChild(main_div);
  };

  db.collection("comments18").onSnapshot((snap) => {
    let changes18 = snap.docChanges();
    changes4.forEach((change) => {
      if (change.type == "added") {
        renderList18(change.doc);
      }
    });
  });

  if (i18 % 2 === 0) {
    contenedor4.style.display = "block";
    while (contenedor18.firstChild) {
      contenedor18.removeChild(contenedor18.firstChild);
    }
  } else {
    while (contenedor18.firstChild) {
      contenedor18.removeChild(contenedor18.firstChild);
    }
    Contenedor18.style.display = "none";
  }

  const btnMostrar4 = document.getElementsByClassName("btn-mostrar")[17];

  if (i18 % 2 === 0) {
    btnMostrar18.innerText = "Ocultar Opiniones";
  } else {
    btnMostrar18.innerText = "Mostrar Opiniones";
  }

  I18++;
};
// COMENTARIOS 19
const btnMostrar19 = document.getElementsByClassName("btn-mostrar")[19];

function submitComentario19() {
  const formComentario = document.getElementById("comments19");

  // AGREGAR COMENTARIOS A LA BASE DE DATOS
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      if (user != null) {
      }
    } else {
      alert("Debes de tener cuenta para publicar un comentario.");
      return;
    }
  });

  formComentario.addEventListener("submit", (e) => {
    e.preventDefault();

    if (formComentario.comment.value.trim() === "") {
      alert("El campo esta vacío");
      return;
    }

    db.collection("comments19").add({
      name: email_id,
      comment: formComentario.comment.value,
    });
    formComentario.comment.value = "";
  });
}

let i19 = 0;
const cargarComentarios19 = () => {
  // LEER COMENTARIOS
  const contenedor19 = document.getElementById("contenedor19");

  renderList19 = (doc) => {
    let main_div = document.createElement("div");
    let card_body = document.createElement("div");
    let name = document.createElement("h5");
    let comment = document.createElement("p");

    main_div.setAttribute("class", "card");
    card_body.setAttribute("class", "card-body");
    name.setAttribute("class", "card-title");
    comment.setAttribute("class", "card-text");

    name.textContent = doc.data().name;
    comment.textContent = doc.data().comment;

    card_body.appendChild(name);
    card_body.appendChild(comment);
    main_div.appendChild(card_body);

    contenedor19.appendChild(main_div);
  };

  db.collection("comments19").onSnapshot((snap) => {
    let changes19 = snap.docChanges();
    changes4.forEach((change) => {
      if (change.type == "added") {
        renderList19(change.doc);
      }
    });
  });

  if (i19 % 2 === 0) {
    contenedor4.style.display = "block";
    while (contenedor19.firstChild) {
      contenedor19.removeChild(contenedor19.firstChild);
    }
  } else {
    while (contenedor19.firstChild) {
      contenedor19.removeChild(contenedor19.firstChild);
    }
    Contenedor19.style.display = "none";
  }

  const btnMostrar4 = document.getElementsByClassName("btn-mostrar")[18];

  if (i19 % 2 === 0) {
    btnMostrar18.innerText = "Ocultar Opiniones";
  } else {
    btnMostrar18.innerText = "Mostrar Opiniones";
  }

  I19++;
};
// COMENTARIOS 20
const btnMostrar20 = document.getElementsByClassName("btn-mostrar")[20];

function submitComentario20() {
  const formComentario = document.getElementById("comments20");

  // AGREGAR COMENTARIOS A LA BASE DE DATOS
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      if (user != null) {
      }
    } else {
      alert("Debes de tener cuenta para publicar un comentario.");
      return;
    }
  });

  formComentario.addEventListener("submit", (e) => {
    e.preventDefault();

    if (formComentario.comment.value.trim() === "") {
      alert("El campo esta vacío");
      return;
    }

    db.collection("comments20").add({
      name: email_id,
      comment: formComentario.comment.value,
    });
    formComentario.comment.value = "";
  });
}

let i20 = 0;
const cargarComentarios20 = () => {
  // LEER COMENTARIOS
  const contenedor20 = document.getElementById("contenedor20");

  renderList20 = (doc) => {
    let main_div = document.createElement("div");
    let card_body = document.createElement("div");
    let name = document.createElement("h5");
    let comment = document.createElement("p");

    main_div.setAttribute("class", "card");
    card_body.setAttribute("class", "card-body");
    name.setAttribute("class", "card-title");
    comment.setAttribute("class", "card-text");

    name.textContent = doc.data().name;
    comment.textContent = doc.data().comment;

    card_body.appendChild(name);
    card_body.appendChild(comment);
    main_div.appendChild(card_body);

    contenedor20.appendChild(main_div);
  };

  db.collection("comments20").onSnapshot((snap) => {
    let changes20 = snap.docChanges();
    changes4.forEach((change) => {
      if (change.type == "added") {
        renderList20(change.doc);
      }
    });
  });

  if (i20 % 2 === 0) {
    contenedor4.style.display = "block";
    while (contenedor20.firstChild) {
      contenedor20.removeChild(contenedor20.firstChild);
    }
  } else {
    while (contenedor20.firstChild) {
      contenedor20.removeChild(contenedor20.firstChild);
    }
    Contenedor20.style.display = "none";
  }

  const btnMostrar4 = document.getElementsByClassName("btn-mostrar")[19];

  if (i20 % 2 === 0) {
    btnMostrar18.innerText = "Ocultar Opiniones";
  } else {
    btnMostrar18.innerText = "Mostrar Opiniones";
  }

  I20++;
};
// COMENTARIOS 21
const btnMostrar21 = document.getElementsByClassName("btn-mostrar")[21];

function submitComentario21() {
  const formComentario = document.getElementById("comments21");

  // AGREGAR COMENTARIOS A LA BASE DE DATOS
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      if (user != null) {
      }
    } else {
      alert("Debes de tener cuenta para publicar un comentario.");
      return;
    }
  });

  formComentario.addEventListener("submit", (e) => {
    e.preventDefault();

    if (formComentario.comment.value.trim() === "") {
      alert("El campo esta vacío");
      return;
    }

    db.collection("comments21").add({
      name: email_id,
      comment: formComentario.comment.value,
    });
    formComentario.comment.value = "";
  });
}

let i21 = 0;
const cargarComentarios21 = () => {
  // LEER COMENTARIOS
  const contenedor21 = document.getElementById("contenedor21");

  renderList21 = (doc) => {
    let main_div = document.createElement("div");
    let card_body = document.createElement("div");
    let name = document.createElement("h5");
    let comment = document.createElement("p");

    main_div.setAttribute("class", "card");
    card_body.setAttribute("class", "card-body");
    name.setAttribute("class", "card-title");
    comment.setAttribute("class", "card-text");

    name.textContent = doc.data().name;
    comment.textContent = doc.data().comment;

    card_body.appendChild(name);
    card_body.appendChild(comment);
    main_div.appendChild(card_body);

    contenedor21.appendChild(main_div);
  };

  db.collection("comments21").onSnapshot((snap) => {
    let changes21 = snap.docChanges();
    changes4.forEach((change) => {
      if (change.type == "added") {
        renderList21(change.doc);
      }
    });
  });

  if (i21 % 2 === 0) {
    contenedor4.style.display = "block";
    while (contenedor21.firstChild) {
      contenedor21.removeChild(contenedor21.firstChild);
    }
  } else {
    while (contenedor21.firstChild) {
      contenedor21.removeChild(contenedor21.firstChild);
    }
    Contenedor21.style.display = "none";
  }

  const btnMostrar4 = document.getElementsByClassName("btn-mostrar")[20];

  if (i21 % 2 === 0) {
    btnMostrar18.innerText = "Ocultar Opiniones";
  } else {
    btnMostrar18.innerText = "Mostrar Opiniones";
  }

  I21++;
};
// COMENTARIOS 22
const btnMostrar22 = document.getElementsByClassName("btn-mostrar")[22];

function submitComentario22() {
  const formComentario = document.getElementById("comments22");

  // AGREGAR COMENTARIOS A LA BASE DE DATOS
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      if (user != null) {
      }
    } else {
      alert("Debes de tener cuenta para publicar un comentario.");
      return;
    }
  });

  formComentario.addEventListener("submit", (e) => {
    e.preventDefault();

    if (formComentario.comment.value.trim() === "") {
      alert("El campo esta vacío");
      return;
    }

    db.collection("comments22").add({
      name: email_id,
      comment: formComentario.comment.value,
    });
    formComentario.comment.value = "";
  });
}

let i22 = 0;
const cargarComentarios22 = () => {
  // LEER COMENTARIOS
  const contenedor22 = document.getElementById("contenedor22");

  renderList22 = (doc) => {
    let main_div = document.createElement("div");
    let card_body = document.createElement("div");
    let name = document.createElement("h5");
    let comment = document.createElement("p");

    main_div.setAttribute("class", "card");
    card_body.setAttribute("class", "card-body");
    name.setAttribute("class", "card-title");
    comment.setAttribute("class", "card-text");

    name.textContent = doc.data().name;
    comment.textContent = doc.data().comment;

    card_body.appendChild(name);
    card_body.appendChild(comment);
    main_div.appendChild(card_body);

    contenedor22.appendChild(main_div);
  };

  db.collection("comments22").onSnapshot((snap) => {
    let changes22 = snap.docChanges();
    changes4.forEach((change) => {
      if (change.type == "added") {
        renderList22(change.doc);
      }
    });
  });

  if (i22 % 2 === 0) {
    contenedor4.style.display = "block";
    while (contenedor22.firstChild) {
      contenedor22.removeChild(contenedor22.firstChild);
    }
  } else {
    while (contenedor22.firstChild) {
      contenedor22.removeChild(contenedor22.firstChild);
    }
    Contenedor22.style.display = "none";
  }

  const btnMostrar4 = document.getElementsByClassName("btn-mostrar")[21];

  if (i22 % 2 === 0) {
    btnMostrar18.innerText = "Ocultar Opiniones";
  } else {
    btnMostrar18.innerText = "Mostrar Opiniones";
  }

  I22++;
};
// COMENTARIOS 23
const btnMostrar23 = document.getElementsByClassName("btn-mostrar")[23];

function submitComentario23() {
  const formComentario = document.getElementById("comments23");

  // AGREGAR COMENTARIOS A LA BASE DE DATOS
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      if (user != null) {
      }
    } else {
      alert("Debes de tener cuenta para publicar un comentario.");
      return;
    }
  });

  formComentario.addEventListener("submit", (e) => {
    e.preventDefault();

    if (formComentario.comment.value.trim() === "") {
      alert("El campo esta vacío");
      return;
    }

    db.collection("comments23").add({
      name: email_id,
      comment: formComentario.comment.value,
    });
    formComentario.comment.value = "";
  });
}

let i23 = 0;
const cargarComentarios23 = () => {
  // LEER COMENTARIOS
  const contenedor23 = document.getElementById("contenedor23");

  renderList23 = (doc) => {
    let main_div = document.createElement("div");
    let card_body = document.createElement("div");
    let name = document.createElement("h5");
    let comment = document.createElement("p");

    main_div.setAttribute("class", "card");
    card_body.setAttribute("class", "card-body");
    name.setAttribute("class", "card-title");
    comment.setAttribute("class", "card-text");

    name.textContent = doc.data().name;
    comment.textContent = doc.data().comment;

    card_body.appendChild(name);
    card_body.appendChild(comment);
    main_div.appendChild(card_body);

    contenedor23.appendChild(main_div);
  };

  db.collection("comments23").onSnapshot((snap) => {
    let changes23 = snap.docChanges();
    changes4.forEach((change) => {
      if (change.type == "added") {
        renderList23(change.doc);
      }
    });
  });

  if (i23 % 2 === 0) {
    contenedor4.style.display = "block";
    while (contenedor23.firstChild) {
      contenedor23.removeChild(contenedor23.firstChild);
    }
  } else {
    while (contenedor23.firstChild) {
      contenedor23.removeChild(contenedor23.firstChild);
    }
    Contenedor23.style.display = "none";
  }

  const btnMostrar4 = document.getElementsByClassName("btn-mostrar")[22];

  if (i23 % 2 === 0) {
    btnMostrar18.innerText = "Ocultar Opiniones";
  } else {
    btnMostrar18.innerText = "Mostrar Opiniones";
  }

  I23++;
};
// COMENTARIOS 24
const btnMostrar24 = document.getElementsByClassName("btn-mostrar")[24];

function submitComentario24() {
  const formComentario = document.getElementById("comments24");

  // AGREGAR COMENTARIOS A LA BASE DE DATOS
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      if (user != null) {
      }
    } else {
      alert("Debes de tener cuenta para publicar un comentario.");
      return;
    }
  });

  formComentario.addEventListener("submit", (e) => {
    e.preventDefault();

    if (formComentario.comment.value.trim() === "") {
      alert("El campo esta vacío");
      return;
    }

    db.collection("comments24").add({
      name: email_id,
      comment: formComentario.comment.value,
    });
    formComentario.comment.value = "";
  });
}

let i24 = 0;
const cargarComentarios24 = () => {
  // LEER COMENTARIOS
  const contenedor24 = document.getElementById("contenedor24");

  renderList24 = (doc) => {
    let main_div = document.createElement("div");
    let card_body = document.createElement("div");
    let name = document.createElement("h5");
    let comment = document.createElement("p");

    main_div.setAttribute("class", "card");
    card_body.setAttribute("class", "card-body");
    name.setAttribute("class", "card-title");
    comment.setAttribute("class", "card-text");

    name.textContent = doc.data().name;
    comment.textContent = doc.data().comment;

    card_body.appendChild(name);
    card_body.appendChild(comment);
    main_div.appendChild(card_body);

    contenedor24.appendChild(main_div);
  };

  db.collection("comments24").onSnapshot((snap) => {
    let changes24 = snap.docChanges();
    changes4.forEach((change) => {
      if (change.type == "added") {
        renderList24(change.doc);
      }
    });
  });

  if (i24 % 2 === 0) {
    contenedor4.style.display = "block";
    while (contenedor24.firstChild) {
      contenedor24.removeChild(contenedor24.firstChild);
    }
  } else {
    while (contenedor24.firstChild) {
      contenedor24.removeChild(contenedor24.firstChild);
    }
    Contenedor24.style.display = "none";
  }

  const btnMostrar4 = document.getElementsByClassName("btn-mostrar")[23];

  if (i24 % 2 === 0) {
    btnMostrar18.innerText = "Ocultar Opiniones";
  } else {
    btnMostrar18.innerText = "Mostrar Opiniones";
  }

  I24++;
};
// COMENTARIOS 25
const btnMostrar25 = document.getElementsByClassName("btn-mostrar")[25];

function submitComentario25() {
  const formComentario = document.getElementById("comments25");

  // AGREGAR COMENTARIOS A LA BASE DE DATOS
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      if (user != null) {
      }
    } else {
      alert("Debes de tener cuenta para publicar un comentario.");
      return;
    }
  });

  formComentario.addEventListener("submit", (e) => {
    e.preventDefault();

    if (formComentario.comment.value.trim() === "") {
      alert("El campo esta vacío");
      return;
    }

    db.collection("comments25").add({
      name: email_id,
      comment: formComentario.comment.value,
    });
    formComentario.comment.value = "";
  });
}

let i25 = 0;
const cargarComentarios25 = () => {
  // LEER COMENTARIOS
  const contenedor25 = document.getElementById("contenedor25");

  renderList25 = (doc) => {
    let main_div = document.createElement("div");
    let card_body = document.createElement("div");
    let name = document.createElement("h5");
    let comment = document.createElement("p");

    main_div.setAttribute("class", "card");
    card_body.setAttribute("class", "card-body");
    name.setAttribute("class", "card-title");
    comment.setAttribute("class", "card-text");

    name.textContent = doc.data().name;
    comment.textContent = doc.data().comment;

    card_body.appendChild(name);
    card_body.appendChild(comment);
    main_div.appendChild(card_body);

    contenedor25.appendChild(main_div);
  };

  db.collection("comments25").onSnapshot((snap) => {
    let changes25 = snap.docChanges();
    changes4.forEach((change) => {
      if (change.type == "added") {
        renderList25(change.doc);
      }
    });
  });

  if (i25 % 2 === 0) {
    contenedor4.style.display = "block";
    while (contenedor25.firstChild) {
      contenedor25.removeChild(contenedor25.firstChild);
    }
  } else {
    while (contenedor25.firstChild) {
      contenedor25.removeChild(contenedor25.firstChild);
    }
    Contenedor25.style.display = "none";
  }

  const btnMostrar4 = document.getElementsByClassName("btn-mostrar")[24];

  if (i25 % 2 === 0) {
    btnMostrar18.innerText = "Ocultar Opiniones";
  } else {
    btnMostrar18.innerText = "Mostrar Opiniones";
  }

  I25++;
};





// import * as sgMail from "@sendgrid/mail";

// const API_KEY =
//   "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";
// const TEMPLATE_ID = "d-8419c8fe761243f0a712f5da83a6f387";
// sgMail.setApiKey(API_KEY);

// export const weeklySummary = functions.pusub
//   .schedule("every friday 05:00")
//   .onRun(async (context) => {
//     const userSnapshots = await admin
//       .firestore()
//       .collection("usuariosregistrados")
//       .get();
//     const emails = userSnapshots.docs.map((snap) => snap.data().email);

//   const msg = {
//     to: emails,
//     from: 'RegiosCheck@hotmail.com',
//     templateId: TEMPLATE_ID,
//     dynamic_template_data = {
//       nombreLugar: 'Bioparque Estrella',
//       descrpcion: 'Descubrelo',
//       ubicacion: 'Monterrey',
//       horario: 'De 9 am a 6 pm'
//     }
//   };

//   return sgMail.send(msg);
// });

/* Iniciar funciones */
const app = () => {
  navSlide();
  buscadorLugares();
};

app();
