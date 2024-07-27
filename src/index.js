import loadHome from './home.js'
import loadMenu from './menu.js'
import loadContact from './contact.js'

loadHome();

const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const contactButton = document.querySelector('#contact');

homeButton.addEventListener('click', ()=> loadHome());
menuButton.addEventListener('click', ()=> loadMenu());
contactButton.addEventListener('click', ()=> loadContact());

console.log('I am a statement from index.js!');