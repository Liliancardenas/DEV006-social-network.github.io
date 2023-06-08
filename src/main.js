import { landing } from './components/landing';
import { singUp } from './components/singUp';
import { welcome } from './components/welcome';
import { login } from './components/login';
import { error } from './components/error';
import { home } from './components/home';
import { modal } from './components/modal';
import {getAuth, onAuthStateChanged } from "firebase/auth"; // importacion de firebase

const routes = [
  { path: '/', component: landing },
  { path: '/singUp', component: singUp },
  { path: '/welcome', component: welcome },
  { path: '/login', component: login },
  { path: '/error', component: error },
  { path: '/home', component: home },
  { path: '/post', component: modal },
];

const defaultRoute = '/'; // Ruta que queda por defecto (aca se define  que siempre se abre en landing )
const contenedor = document.getElementById('contenedorUniversal'); // variable que accede al nodo de HTML


function navigateTo(hash) { // funcion que permite navegar en diferentes rutas
  // esta linea es la que se encarga de  de path (que estan dentro del objeto routes)
  // sea igual a hash (que es a la ruta en la que el usuario quiere acceser)
  // lo hace a través del metodo find(que es una propiedad para iterar sobre objetos
  // y busca coincidencia)
  // DEFINICION DE COMPONENTE:  Un componente en el contexto de desarrollo de aplicaciones
  // se refiere a una parte modular y reutilizable de la interfaz de usuario que encapsula
  // su propio comportamiento, estado y estilo.
  const route = routes.find((routeFound) => routeFound.path === hash);
  // Crearemos route cuyo valor será el objeto que retorne el método find. routerfound, funcion de retorno(representa cada elemento del arreglo)
  if (route && route.component) {
    // este bloque hace que se genere el cambio de url si es que las coincidencias del if son true
    // pasa 3 argumento , titulo(string de ruta), url
    window.history.pushState( // agregando un registro al historial de navegacion con el metodo push
      // vacio, se conoce como state asociado con el historial
      // en el se almacena info importante)
      {}, //estado (vacio)
      // ruta encontrada y se muestra en el navegador. ej: /login
      route.path,
      // url completa
      // window.location.origin  devuelve el origen de la URL actual y route.path,
      // es la ruta encontrada en el objeto ambas se concatenan y se crea la url
      window.location.origin + route.path,
    );
    while (contenedor.firstChild) { // elementos que vamos a renderizar en el DOM
      contenedor.removeChild(contenedor.firstChild);
    }
    contenedor.appendChild(route.component(navigateTo));
  } else {
    navigateTo('/error'); // para queno tire undefine
  }
}

// este evento ocurre cuando el usuario se mueve hacia a tras o adelente en la pagina
// se llama nuevamentea navigateTo para actualizar la ruta
window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute); // ruta que la persona escriba o la que va por defecto



// Funcion para que solo usuarios registrados puedan entrar al home
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('me logie', user);
    navigateTo('/home');

    const uid = user.uid;
    
  } else {
    console.log('Sin logear', user);
    navigateTo('/');
 
  }
});
