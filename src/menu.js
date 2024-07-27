export default function loadMenu() {
    content.innerHTML = '';

    const headline = document.createElement('h1');
    headline.textContent = 'Menu';

    content.appendChild(headline);
}