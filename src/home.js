import RestaurantImage from './restaurant.jpg'

export default function loadHome() {
    const content = document.getElementById('content');

    content.innerHTML = '';

    const headline = document.createElement('h1');
    headline.textContent = 'Sunset Terrace';

    const paragraph = document.createElement('p');
    paragraph.textContent = "Welcome to Sunset Terrace, where the vibrant flavors of the Mediterranean come alive in an enchanting atmosphere. Nestled in the heart of Mediterranean Europe, our restaurant offers a dining experience like no other, blending culinary artistry with stunning views of the sun setting over the azure waters."

    const imageElement = document.createElement('img');
    imageElement.id = 'restaurant-image';
    imageElement.src = RestaurantImage;

    content.appendChild(headline);
    content.appendChild(paragraph);
    content.appendChild(imageElement);
}