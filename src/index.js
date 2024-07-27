import loadHome from './home.js'
import loadMenu from './menu.js'
import loadContact from './contact.js'
import BornaNovaScWoff2 from './borna-nova-sc.woff2'
import BornaNovaScWoff from './borna-nova-sc.woff'

loadHome();

const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const contactButton = document.querySelector('#contact');

document.querySelector('header h1').style.fontFamily = `${BornaNovaScWoff2}`;

homeButton.addEventListener('click', ()=> loadHome());
menuButton.addEventListener('click', ()=> loadMenu());
contactButton.addEventListener('click', ()=> loadContact());

console.log('I am a statement from index.js!');