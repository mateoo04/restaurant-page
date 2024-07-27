export default function loadContact() {
    const content = document.getElementById('content');
    
    content.innerHTML = '';

    const headline = document.createElement('h1');
    headline.textContent = 'Contact';

    content.appendChild(headline);
}