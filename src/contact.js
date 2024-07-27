export default function loadContact() {
    content.innerHTML = '';

    const headline = document.createElement('h1');
    headline.textContent = 'Contact';

    content.appendChild(headline);
}