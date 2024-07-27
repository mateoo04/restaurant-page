export default function loadContact() {
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
    phoneNumInput.pattern = "[0-9]{8,16}"
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