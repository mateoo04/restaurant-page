import RestaurantImage from './restaurant.jpg'

export default function loadHome() {
    const content = document.getElementById('content');
    content.classList.add('home-content')

    content.innerHTML = '';

    const headline = document.createElement('h1');
    headline.textContent = 'Sunset Terrace';

    const paragraph = document.createElement('p');
    paragraph.classList.add('about');
    paragraph.textContent = "Welcome to Sunset Terrace, where the vibrant flavors of the Mediterranean come alive in an enchanting atmosphere. Nestled in the heart of Mediterranean Europe, our restaurant offers a dining experience like no other, blending culinary artistry with stunning views of the sun setting over the azure waters."

    const imageElement = document.createElement('img');
    imageElement.id = 'restaurant-image';
    imageElement.src = RestaurantImage;

    const hoursContainer = document.createElement('div');
    const hoursHeadline = document.createElement('h2');
    hoursHeadline.textContent = 'Hours';
    const hoursText = document.createElement('p');
    hoursText.innerHTML= 'Monday - Thursday: 16:00 - 22:00<br>Friday - Saturday: 12:00 - 23:00<br>Sunday: 16:00 - 23:00'
    hoursContainer.append(hoursHeadline, hoursText);

    const locationContainer = document.createElement('div');
    const locationHeader = document.createElement('h2');
    locationHeader.textContent = 'Location';
    const locationText = 'Via Tilla 34, Rome, Italy'
    locationContainer.append(locationHeader,locationText);
    content.append(headline, paragraph, imageElement, hoursContainer, locationContainer);
}