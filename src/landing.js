import { mostrarLogo, limpiarContenedorUniversal, botonIniciarSesion, botonRegistrarse } from "./contents";

function landing(navigateTo) {
    mostrarLogo();
    // imagen del sarten de bienvenida
    const imagenBienvenida = document.createElement('div');
    imagenBienvenida.classList = 'imagenBienvenida';
    imagenBienvenida.innerHTML = '<img src="imagenes/ImagenBienvenida.png">';
    contenedorUniversal.appendChild(imagenBienvenida);
    // parrafos de bienvenida
    const h1Bienvenida = document.createElement('div');
    h1Bienvenida.classList = 'h1Bienvenida';
    h1Bienvenida.innerHTML = '<h1> ¡Bienvenido! </h1>';
    contenedorUniversal.appendChild(h1Bienvenida);
    // parrafo que viene despues del bienvenida
    const parrafoBienvenida = document.createElement('div');
    parrafoBienvenida.classList = 'parrafoBienvenida';
    parrafoBienvenida.innerHTML = '<p> Mas que una dieta un estilo de vida </p>';
    contenedorUniversal.appendChild(parrafoBienvenida);
    // boton iniciar sesion
    const botonIniciar = document.createElement('div');
    botonIniciar.classList = 'divBotonVista1';
    botonIniciar.innerHTML = botonIniciarSesion;
    contenedorUniversal.appendChild(botonIniciar);
    // boton registro
    const botonRegistro = document.createElement('div');
    botonRegistro.classList = 'divBotonVista1';
    botonRegistro.innerHTML = botonRegistrarse;
    contenedorUniversal.appendChild(botonRegistro);
    // primera ultima linea
    const parrafocondiciones1 = document.createElement('div');
    parrafocondiciones1.classList = 'parrafocondiciones1';
    parrafocondiciones1.innerHTML = '<p> Al registrarse esta de acuerdo con nuestras </p>';
    contenedorUniversal.appendChild(parrafocondiciones1);
    // segunda ultima linea
    const parrafocondiciones2 = document.createElement('div');
    parrafocondiciones2.classList = 'parrafocondiciones2';
    parrafocondiciones2.innerHTML = '<a href="#"> Politicas de ususario </a>';
    contenedorUniversal.appendChild(parrafocondiciones2);
    // addEventListener-iniciarsesion-vista2-frame17
    botonRegistro.addEventListener('click', () => {
      limpiarContenedorUniversal();
      navigateTo('/singUp');
      
     
    });
    botonIniciar.addEventListener('click', () => {
      limpiarContenedorUniversal();
      navigateTo('/login');
      
    })
  }

export default landing;