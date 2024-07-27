const mainDishes = [
    {
        name: 'Spaghetti Carbonara',
        description: 'Classic Roman pasta dish with a creamy sauce made from eggs, cheese, pancetta, and black pepper.'
    }, {
        name: 'Lasagna Bolognese',
        description: 'Layers of pasta with rich Bolognese meat sauce, béchamel, and melted cheese.'
    }, {
        name: 'Chicken Marsala',
        description: 'Sautéed chicken breasts in a savory Marsala wine sauce with mushrooms.'
    }, {
        name: 'Eggplant Parmesan',
        description: 'Breaded and baked eggplant slices layered with marinara sauce and mozzarella cheese.'
    }
];

const salads = [
    {
        name: 'Caprese Salad',
        description: 'Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze and olive oil.'
    }, {
        name: 'Insalata di Rucola',
        description: 'Arugula salad with cherry tomatoes, shaved Parmesan, pine nuts, and a lemon vinaigrette.'
    }, {
        name: 'Garlic Parmesan Roasted Potatoes',
        description: 'Crispy roasted potatoes seasoned with garlic, Parmesan cheese, and fresh herbs.'
    },
    {
        name: 'Mediterranean Quinoa Salad',
        description: 'Quinoa tossed with cucumbers, cherry tomatoes, Kalamata olives, feta cheese, and a lemon-oregano dressing.'
    }
];

export default function loadMenu() {
    const content = document.getElementById('content');
    content.classList = 'menu-content';

    content.innerHTML = '';

    const headline = document.createElement('h2');
    headline.textContent = 'Menu';

    content.appendChild(headline);

    const mainDishesHeadline = document.createElement('h2');
    mainDishesHeadline.textContent = 'Main Dishes';

    const mainDishesContainer = document.createElement('div');
    mainDishesContainer.classList.add('dishes-grid');

    for(let i = 0; i <4; i++){
        const dish = document.createElement('div');
        dish.classList.add('dish');
        
        const dishName = document.createElement('h3');
        const dishDescription = document.createElement('p');

        dishName.textContent = mainDishes[i].name;
        dishDescription.textContent  = mainDishes[i].description;

        dish.append(dishName,dishDescription);

        mainDishesContainer.append(dish);
    }

    content.append(mainDishesHeadline, mainDishesContainer);

    const saladsHeadline = document.createElement('h2');
    saladsHeadline.textContent = 'Salads';

    const saladsContainer = document.createElement('div');
    saladsContainer.classList.add('dishes-grid');

    for(let i = 0; i < salads.length; i++){
        const dish = document.createElement('div');
        dish.classList.add('dish');
        
        const dishName = document.createElement('h3');
        const dishDescription = document.createElement('p');

        dishName.textContent = salads[i].name;
        dishDescription.textContent  = salads[i].description;

        dish.append(dishName,dishDescription);

        saladsContainer.append(dish);
    }

    content.append(saladsHeadline, saladsContainer);

}