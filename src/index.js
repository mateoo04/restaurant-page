import loadHome from './home.js'
import loadMenu from './menu.js'
import loadContact from './contact.js'
import './fonts.css'

const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const contactButton = document.querySelector('#contact');

homeButton.addEventListener('click', ()=> loadHome());
menuButton.addEventListener('click', ()=> loadMenu());
contactButton.addEventListener('click', ()=> loadContact());

console.log('I am a statement from index.js!');

loadHome();

const imageCredits = document.querySelector('footer p');
imageCredits.innerHTML = 'Photo by <a href="https://unsplash.com/@annamariechurch?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Anna Church</a> on <a href="https://unsplash.com/photos/clear-footed-wine-glasses-on-brown-table-KGIj7pMSbRM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>';  
document.querySelector('footer').append(imageCredits);