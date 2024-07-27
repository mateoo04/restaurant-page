/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadContact)
/* harmony export */ });
function loadContact() {
    const content = document.getElementById('content');

    content.innerHTML = '';

    const headline = document.createElement('h1');
    headline.textContent = 'Contact';

    const contactInfo = document.createElement('div');

    const telephoneNumText = document.createElement('p');
    telephoneNumText.textContent = '+39 01 2222 444'
    const email = document.createElement('p');
    email.textContent = 'info@sunshineterrace.com';

    contactInfo.append(telephoneNumText, email);

    content.append(headline, contactInfo);

    const form = document.createElement('form');
    form.method = 'post';

    const formLegend = document.createElement('legend');
    formLegend.textContent = 'Make a reservation';

    const fullNameLabel = document.createElement('label');
    fullNameLabel.for = 'full-name';
    fullNameLabel.innerHTML = 'Full Name';
    const fullNameInput = document.createElement('input');
    fullNameInput.name = 'full-name';
    fullNameInput.id = 'full-name';
    fullNameInput.type = 'text';
    fullNameLabel.append(fullNameInput);

    const emailLabel = document.createElement('label');
    emailLabel.for = 'email';
    emailLabel.innerHTML = 'Email';
    const emailInput = document.createElement('input');
    emailInput.name = 'email';
    emailInput.id = 'email';
    emailInput.type = 'email';
    emailLabel.append(emailInput);

    const phoneNumLabel = document.createElement('label');
    phoneNumLabel.for = 'phone-number';
    phoneNumLabel.innerHTML = 'Phone number';
    const phoneNumInput = document.createElement('input');
    phoneNumInput.name = 'phone-number';
    phoneNumInput.id = 'phone-number';
    phoneNumInput.type = 'tel';
    phoneNumLabel.append(phoneNumInput);

    const guestNumberLabel = document.createElement('label');
    guestNumberLabel.for = 'guest-number';
    guestNumberLabel.innerHTML = 'Choose number of guests:';
    const guestNumberInput = document.createElement('input');
    guestNumberInput.name='guest-number';
    guestNumberInput.type = 'range';
    guestNumberInput.min = '1';
    guestNumberInput.max = '16';
    guestNumberInput.defaultValue = 2;

    const guestNumberValue = document.createElement('p');
    guestNumberValue.textContent = guestNumberInput.value;
    guestNumberInput.oninput = ()=>{
        guestNumberValue.textContent = guestNumberInput.value;
    }

    const guestNumberContainer = document.createElement('div');
    guestNumberContainer.classList.add('guest-num-container');
    guestNumberContainer.append(guestNumberInput,guestNumberValue);

    guestNumberLabel.append(guestNumberContainer);

    const sumbit = document.createElement('input');
    sumbit.type = 'submit';


    form.append(formLegend,fullNameLabel, emailLabel, phoneNumLabel, guestNumberLabel, sumbit);


    content.append(form);
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant.jpg */ "./src/restaurant.jpg");


function loadHome() {
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
    imageElement.src = _restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__;

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

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
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

function loadMenu() {
    const content = document.getElementById('content');
    content.classList = 'menu-content';

    content.innerHTML = '';

    const headline = document.createElement('h1');
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

/***/ }),

/***/ "./src/borna-nova-sc.woff":
/*!********************************!*\
  !*** ./src/borna-nova-sc.woff ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "borna-nova-sc.woff";

/***/ }),

/***/ "./src/borna-nova-sc.woff2":
/*!*********************************!*\
  !*** ./src/borna-nova-sc.woff2 ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "borna-nova-sc.woff2";

/***/ }),

/***/ "./src/restaurant.jpg":
/*!****************************!*\
  !*** ./src/restaurant.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "197e8e3fe84d4ae13c5c.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _borna_nova_sc_woff2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./borna-nova-sc.woff2 */ "./src/borna-nova-sc.woff2");
/* harmony import */ var _borna_nova_sc_woff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./borna-nova-sc.woff */ "./src/borna-nova-sc.woff");






(0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const contactButton = document.querySelector('#contact');

homeButton.addEventListener('click', ()=> (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
menuButton.addEventListener('click', ()=> (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
contactButton.addEventListener('click', ()=> (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])());

console.log('I am a statement from index.js!');
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRjhDOztBQUUvQjtBQUNmO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1Qiw0Q0FBZTs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1CQUFtQixNQUFNO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtQkFBbUIsbUJBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEJnQztBQUNBO0FBQ007QUFDYztBQUNGOztBQUVsRCxvREFBUTs7QUFFUjtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDLG9EQUFRO0FBQ2xELDBDQUEwQyxvREFBUTtBQUNsRCw2Q0FBNkMsdURBQVc7O0FBRXhELCtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG5cbiAgICBjb25zdCBjb250YWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgdGVsZXBob25lTnVtVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZWxlcGhvbmVOdW1UZXh0LnRleHRDb250ZW50ID0gJyszOSAwMSAyMjIyIDQ0NCdcbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBlbWFpbC50ZXh0Q29udGVudCA9ICdpbmZvQHN1bnNoaW5ldGVycmFjZS5jb20nO1xuXG4gICAgY29udGFjdEluZm8uYXBwZW5kKHRlbGVwaG9uZU51bVRleHQsIGVtYWlsKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kKGhlYWRsaW5lLCBjb250YWN0SW5mbyk7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0ubWV0aG9kID0gJ3Bvc3QnO1xuXG4gICAgY29uc3QgZm9ybUxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpO1xuICAgIGZvcm1MZWdlbmQudGV4dENvbnRlbnQgPSAnTWFrZSBhIHJlc2VydmF0aW9uJztcblxuICAgIGNvbnN0IGZ1bGxOYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGZ1bGxOYW1lTGFiZWwuZm9yID0gJ2Z1bGwtbmFtZSc7XG4gICAgZnVsbE5hbWVMYWJlbC5pbm5lckhUTUwgPSAnRnVsbCBOYW1lJztcbiAgICBjb25zdCBmdWxsTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBmdWxsTmFtZUlucHV0Lm5hbWUgPSAnZnVsbC1uYW1lJztcbiAgICBmdWxsTmFtZUlucHV0LmlkID0gJ2Z1bGwtbmFtZSc7XG4gICAgZnVsbE5hbWVJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIGZ1bGxOYW1lTGFiZWwuYXBwZW5kKGZ1bGxOYW1lSW5wdXQpO1xuXG4gICAgY29uc3QgZW1haWxMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZW1haWxMYWJlbC5mb3IgPSAnZW1haWwnO1xuICAgIGVtYWlsTGFiZWwuaW5uZXJIVE1MID0gJ0VtYWlsJztcbiAgICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBlbWFpbElucHV0Lm5hbWUgPSAnZW1haWwnO1xuICAgIGVtYWlsSW5wdXQuaWQgPSAnZW1haWwnO1xuICAgIGVtYWlsSW5wdXQudHlwZSA9ICdlbWFpbCc7XG4gICAgZW1haWxMYWJlbC5hcHBlbmQoZW1haWxJbnB1dCk7XG5cbiAgICBjb25zdCBwaG9uZU51bUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwaG9uZU51bUxhYmVsLmZvciA9ICdwaG9uZS1udW1iZXInO1xuICAgIHBob25lTnVtTGFiZWwuaW5uZXJIVE1MID0gJ1Bob25lIG51bWJlcic7XG4gICAgY29uc3QgcGhvbmVOdW1JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcGhvbmVOdW1JbnB1dC5uYW1lID0gJ3Bob25lLW51bWJlcic7XG4gICAgcGhvbmVOdW1JbnB1dC5pZCA9ICdwaG9uZS1udW1iZXInO1xuICAgIHBob25lTnVtSW5wdXQudHlwZSA9ICd0ZWwnO1xuICAgIHBob25lTnVtTGFiZWwuYXBwZW5kKHBob25lTnVtSW5wdXQpO1xuXG4gICAgY29uc3QgZ3Vlc3ROdW1iZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZ3Vlc3ROdW1iZXJMYWJlbC5mb3IgPSAnZ3Vlc3QtbnVtYmVyJztcbiAgICBndWVzdE51bWJlckxhYmVsLmlubmVySFRNTCA9ICdDaG9vc2UgbnVtYmVyIG9mIGd1ZXN0czonO1xuICAgIGNvbnN0IGd1ZXN0TnVtYmVySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGd1ZXN0TnVtYmVySW5wdXQubmFtZT0nZ3Vlc3QtbnVtYmVyJztcbiAgICBndWVzdE51bWJlcklucHV0LnR5cGUgPSAncmFuZ2UnO1xuICAgIGd1ZXN0TnVtYmVySW5wdXQubWluID0gJzEnO1xuICAgIGd1ZXN0TnVtYmVySW5wdXQubWF4ID0gJzE2JztcbiAgICBndWVzdE51bWJlcklucHV0LmRlZmF1bHRWYWx1ZSA9IDI7XG5cbiAgICBjb25zdCBndWVzdE51bWJlclZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGd1ZXN0TnVtYmVyVmFsdWUudGV4dENvbnRlbnQgPSBndWVzdE51bWJlcklucHV0LnZhbHVlO1xuICAgIGd1ZXN0TnVtYmVySW5wdXQub25pbnB1dCA9ICgpPT57XG4gICAgICAgIGd1ZXN0TnVtYmVyVmFsdWUudGV4dENvbnRlbnQgPSBndWVzdE51bWJlcklucHV0LnZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0IGd1ZXN0TnVtYmVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3Vlc3ROdW1iZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ3Vlc3QtbnVtLWNvbnRhaW5lcicpO1xuICAgIGd1ZXN0TnVtYmVyQ29udGFpbmVyLmFwcGVuZChndWVzdE51bWJlcklucHV0LGd1ZXN0TnVtYmVyVmFsdWUpO1xuXG4gICAgZ3Vlc3ROdW1iZXJMYWJlbC5hcHBlbmQoZ3Vlc3ROdW1iZXJDb250YWluZXIpO1xuXG4gICAgY29uc3Qgc3VtYml0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzdW1iaXQudHlwZSA9ICdzdWJtaXQnO1xuXG5cbiAgICBmb3JtLmFwcGVuZChmb3JtTGVnZW5kLGZ1bGxOYW1lTGFiZWwsIGVtYWlsTGFiZWwsIHBob25lTnVtTGFiZWwsIGd1ZXN0TnVtYmVyTGFiZWwsIHN1bWJpdCk7XG5cblxuICAgIGNvbnRlbnQuYXBwZW5kKGZvcm0pO1xufSIsImltcG9ydCBSZXN0YXVyYW50SW1hZ2UgZnJvbSAnLi9yZXN0YXVyYW50LmpwZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdob21lLWNvbnRlbnQnKVxuXG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkbGluZS50ZXh0Q29udGVudCA9ICdTdW5zZXQgVGVycmFjZSc7XG5cbiAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoJ2Fib3V0Jyk7XG4gICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIFN1bnNldCBUZXJyYWNlLCB3aGVyZSB0aGUgdmlicmFudCBmbGF2b3JzIG9mIHRoZSBNZWRpdGVycmFuZWFuIGNvbWUgYWxpdmUgaW4gYW4gZW5jaGFudGluZyBhdG1vc3BoZXJlLiBOZXN0bGVkIGluIHRoZSBoZWFydCBvZiBNZWRpdGVycmFuZWFuIEV1cm9wZSwgb3VyIHJlc3RhdXJhbnQgb2ZmZXJzIGEgZGluaW5nIGV4cGVyaWVuY2UgbGlrZSBubyBvdGhlciwgYmxlbmRpbmcgY3VsaW5hcnkgYXJ0aXN0cnkgd2l0aCBzdHVubmluZyB2aWV3cyBvZiB0aGUgc3VuIHNldHRpbmcgb3ZlciB0aGUgYXp1cmUgd2F0ZXJzLlwiXG5cbiAgICBjb25zdCBpbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZUVsZW1lbnQuaWQgPSAncmVzdGF1cmFudC1pbWFnZSc7XG4gICAgaW1hZ2VFbGVtZW50LnNyYyA9IFJlc3RhdXJhbnRJbWFnZTtcblxuICAgIGNvbnN0IGhvdXJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaG91cnNIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaG91cnNIZWFkbGluZS50ZXh0Q29udGVudCA9ICdIb3Vycyc7XG4gICAgY29uc3QgaG91cnNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGhvdXJzVGV4dC5pbm5lckhUTUw9ICdNb25kYXkgLSBUaHVyc2RheTogMTY6MDAgLSAyMjowMDxicj5GcmlkYXkgLSBTYXR1cmRheTogMTI6MDAgLSAyMzowMDxicj5TdW5kYXk6IDE2OjAwIC0gMjM6MDAnXG4gICAgaG91cnNDb250YWluZXIuYXBwZW5kKGhvdXJzSGVhZGxpbmUsIGhvdXJzVGV4dCk7XG5cbiAgICBjb25zdCBsb2NhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxvY2F0aW9uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBsb2NhdGlvbkhlYWRlci50ZXh0Q29udGVudCA9ICdMb2NhdGlvbic7XG4gICAgY29uc3QgbG9jYXRpb25UZXh0ID0gJ1ZpYSBUaWxsYSAzNCwgUm9tZSwgSXRhbHknXG4gICAgbG9jYXRpb25Db250YWluZXIuYXBwZW5kKGxvY2F0aW9uSGVhZGVyLGxvY2F0aW9uVGV4dCk7XG4gICAgY29udGVudC5hcHBlbmQoaGVhZGxpbmUsIHBhcmFncmFwaCwgaW1hZ2VFbGVtZW50LCBob3Vyc0NvbnRhaW5lciwgbG9jYXRpb25Db250YWluZXIpO1xufSIsImNvbnN0IG1haW5EaXNoZXMgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiAnU3BhZ2hldHRpIENhcmJvbmFyYScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQ2xhc3NpYyBSb21hbiBwYXN0YSBkaXNoIHdpdGggYSBjcmVhbXkgc2F1Y2UgbWFkZSBmcm9tIGVnZ3MsIGNoZWVzZSwgcGFuY2V0dGEsIGFuZCBibGFjayBwZXBwZXIuJ1xuICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ0xhc2FnbmEgQm9sb2duZXNlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdMYXllcnMgb2YgcGFzdGEgd2l0aCByaWNoIEJvbG9nbmVzZSBtZWF0IHNhdWNlLCBiw6ljaGFtZWwsIGFuZCBtZWx0ZWQgY2hlZXNlLidcbiAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdDaGlja2VuIE1hcnNhbGEnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1NhdXTDqWVkIGNoaWNrZW4gYnJlYXN0cyBpbiBhIHNhdm9yeSBNYXJzYWxhIHdpbmUgc2F1Y2Ugd2l0aCBtdXNocm9vbXMuJ1xuICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ0VnZ3BsYW50IFBhcm1lc2FuJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdCcmVhZGVkIGFuZCBiYWtlZCBlZ2dwbGFudCBzbGljZXMgbGF5ZXJlZCB3aXRoIG1hcmluYXJhIHNhdWNlIGFuZCBtb3p6YXJlbGxhIGNoZWVzZS4nXG4gICAgfVxuXTtcblxuY29uc3Qgc2FsYWRzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ0NhcHJlc2UgU2FsYWQnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0ZyZXNoIG1venphcmVsbGEsIHRvbWF0b2VzLCBhbmQgYmFzaWwgZHJpenpsZWQgd2l0aCBiYWxzYW1pYyBnbGF6ZSBhbmQgb2xpdmUgb2lsLidcbiAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdJbnNhbGF0YSBkaSBSdWNvbGEnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0FydWd1bGEgc2FsYWQgd2l0aCBjaGVycnkgdG9tYXRvZXMsIHNoYXZlZCBQYXJtZXNhbiwgcGluZSBudXRzLCBhbmQgYSBsZW1vbiB2aW5haWdyZXR0ZS4nXG4gICAgfSwge1xuICAgICAgICBuYW1lOiAnR2FybGljIFBhcm1lc2FuIFJvYXN0ZWQgUG90YXRvZXMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0NyaXNweSByb2FzdGVkIHBvdGF0b2VzIHNlYXNvbmVkIHdpdGggZ2FybGljLCBQYXJtZXNhbiBjaGVlc2UsIGFuZCBmcmVzaCBoZXJicy4nXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdNZWRpdGVycmFuZWFuIFF1aW5vYSBTYWxhZCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnUXVpbm9hIHRvc3NlZCB3aXRoIGN1Y3VtYmVycywgY2hlcnJ5IHRvbWF0b2VzLCBLYWxhbWF0YSBvbGl2ZXMsIGZldGEgY2hlZXNlLCBhbmQgYSBsZW1vbi1vcmVnYW5vIGRyZXNzaW5nLidcbiAgICB9XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdCA9ICdtZW51LWNvbnRlbnQnO1xuXG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkbGluZS50ZXh0Q29udGVudCA9ICdNZW51JztcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuXG4gICAgY29uc3QgbWFpbkRpc2hlc0hlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBtYWluRGlzaGVzSGVhZGxpbmUudGV4dENvbnRlbnQgPSAnTWFpbiBEaXNoZXMnO1xuXG4gICAgY29uc3QgbWFpbkRpc2hlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5EaXNoZXNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGlzaGVzLWdyaWQnKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPDQ7IGkrKyl7XG4gICAgICAgIGNvbnN0IGRpc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGlzaC5jbGFzc0xpc3QuYWRkKCdkaXNoJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkaXNoTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGNvbnN0IGRpc2hEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICBkaXNoTmFtZS50ZXh0Q29udGVudCA9IG1haW5EaXNoZXNbaV0ubmFtZTtcbiAgICAgICAgZGlzaERlc2NyaXB0aW9uLnRleHRDb250ZW50ICA9IG1haW5EaXNoZXNbaV0uZGVzY3JpcHRpb247XG5cbiAgICAgICAgZGlzaC5hcHBlbmQoZGlzaE5hbWUsZGlzaERlc2NyaXB0aW9uKTtcblxuICAgICAgICBtYWluRGlzaGVzQ29udGFpbmVyLmFwcGVuZChkaXNoKTtcbiAgICB9XG5cbiAgICBjb250ZW50LmFwcGVuZChtYWluRGlzaGVzSGVhZGxpbmUsIG1haW5EaXNoZXNDb250YWluZXIpO1xuXG4gICAgY29uc3Qgc2FsYWRzSGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHNhbGFkc0hlYWRsaW5lLnRleHRDb250ZW50ID0gJ1NhbGFkcyc7XG5cbiAgICBjb25zdCBzYWxhZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzYWxhZHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGlzaGVzLWdyaWQnKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzYWxhZHMubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBkaXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpc2guY2xhc3NMaXN0LmFkZCgnZGlzaCcpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGlzaE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBjb25zdCBkaXNoRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAgICAgZGlzaE5hbWUudGV4dENvbnRlbnQgPSBzYWxhZHNbaV0ubmFtZTtcbiAgICAgICAgZGlzaERlc2NyaXB0aW9uLnRleHRDb250ZW50ICA9IHNhbGFkc1tpXS5kZXNjcmlwdGlvbjtcblxuICAgICAgICBkaXNoLmFwcGVuZChkaXNoTmFtZSxkaXNoRGVzY3JpcHRpb24pO1xuXG4gICAgICAgIHNhbGFkc0NvbnRhaW5lci5hcHBlbmQoZGlzaCk7XG4gICAgfVxuXG4gICAgY29udGVudC5hcHBlbmQoc2FsYWRzSGVhZGxpbmUsIHNhbGFkc0NvbnRhaW5lcik7XG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgbG9hZEhvbWUgZnJvbSAnLi9ob21lLmpzJ1xuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbWVudS5qcydcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnXG5pbXBvcnQgQm9ybmFOb3ZhU2NXb2ZmMiBmcm9tICcuL2Jvcm5hLW5vdmEtc2Mud29mZjInXG5pbXBvcnQgQm9ybmFOb3ZhU2NXb2ZmIGZyb20gJy4vYm9ybmEtbm92YS1zYy53b2ZmJ1xuXG5sb2FkSG9tZSgpO1xuXG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUnKTtcbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudScpO1xuY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0Jyk7XG5cbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IGxvYWRIb21lKCkpO1xubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4gbG9hZE1lbnUoKSk7XG5jb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiBsb2FkQ29udGFjdCgpKTtcblxuY29uc29sZS5sb2coJ0kgYW0gYSBzdGF0ZW1lbnQgZnJvbSBpbmRleC5qcyEnKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=