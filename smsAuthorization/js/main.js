let setTimeInSeconds = 10; // время обратного отсчета

const divTel = document.querySelector('.tel'),
      btnNext = divTel.querySelector('.next'),
      inputPhoneNumber = divTel.querySelector('.input-tel'),
      chboxPersonalData = divTel.querySelector('.checkbox');

const divSms = document.querySelector('.sms'),
      btnTogglePasswordVisibility = divSms.querySelector('.password-control'),
      btnGetPassword = divSms.querySelector('.request-code'),
      btnBack = divSms.querySelector('.sms__return'),
      inputPassword = divSms.querySelector('.input-code'),
      txtPhoneNumber = divSms.querySelector('.sms__phone-number'),
      txtCounter = divSms.querySelector('.sms__counter'),
      timer = divSms.querySelector('.timer');

let strPhoneNumber = '',
    intervalId = null;


// Ввод номера телефона
inputPhoneNumber.addEventListener('input', (phone) => {                
    addPhoneMask(phone);
    strPhoneNumber = inputPhoneNumber.value;

    toggleNextButton();
});


// Чекбокс "Обработка персональных данных"
chboxPersonalData.addEventListener('click', () => {
    toggleNextButton();
});


// Переключение кнопки
let toggleNextButton = () => {
    if(chboxPersonalData.checked && strPhoneNumber.length === 18) {
        activateButton(btnNext);
    } else {
        disableButton(btnNext);
    }
};


// Активация кнопки
let activateButton = (btn) => {
    btn.removeAttribute('disabled');
    btn.classList.remove('button_disabled');
};


// Отключение кнопки
let disableButton = (btn) => {
    btn.setAttribute('disabled', true);
    btn.classList.add('button_disabled');
};


// Кнопка "Продолжить"
btnNext.addEventListener('click', () => {
    divTel.classList.replace('show', 'hide');
    divSms.classList.replace('hide', 'show');

    hidePhoneNumber(strPhoneNumber);
    startCountDown(setTimeInSeconds, timer);
});


// Скрытие номера телефона
let hidePhoneNumber = (phone) => {
    phone = phone.substring(0, 9) + '*** ** ' + phone.substring(16);

    txtPhoneNumber.textContent = phone;
};


// Кнопка "Назад"
btnBack.addEventListener('click', () => {
    divSms.classList.replace('show', 'hide');
    divTel.classList.replace('hide', 'show');
    inputPhoneNumber.value = '';
    strPhoneNumber = '';
    inputPassword.value = '';
    chboxPersonalData.checked = false;

    disableButton(btnNext);
    clearInterval(intervalId);
    hidePassword();
    resetInputLabel();
});


// Кнопка "Запросить код"
btnGetPassword.addEventListener('click', () => {
    startCountDown(setTimeInSeconds, timer);
});


// Кнопка показа/скрытия пароля
btnTogglePasswordVisibility.addEventListener('click', () => {
    if ( inputPassword.type === 'password' ) {
        showPassword();
    } else {
        hidePassword();
    }
});


// Показ пароля
let showPassword = () => {
    inputPassword.setAttribute('type', 'text');
    btnTogglePasswordVisibility.classList.add('password-control_hide');
};


// Скрытие пароля
let hidePassword = () => {
    inputPassword.setAttribute('type', 'password');
    btnTogglePasswordVisibility.classList.remove('password-control_hide');
};


// Поля ввода
const input = document.querySelectorAll('.input'),
      label = document.querySelectorAll('.label');

input.forEach(item => {
    let inputId = item.getAttribute(`id`),
        labelElem = document.querySelector(`label[for='${inputId}']`);

    item.addEventListener('blur', (e) => {        
        if (e.target.value !== '') {
            labelElem.classList.add('filled');
        } else {
            labelElem.classList.remove('filled');
        }
    }); // end blur
}); // end foreach

let resetInputLabel = () => {
    label.forEach(item => {
        item.classList.remove('filled');
    }); // end foreach
};


// Обратный отсчет
let startCountDown = (time, item) => {
    disableButton(btnGetPassword);
    item.textContent = transformTime(time);
    txtCounter.classList.add('sms__counter_display_block');
    
    intervalId = setInterval(() => {
        if ( time > 1 ) {
            time--;
            item.textContent = transformTime(time);
        } else {
            txtCounter.classList.remove('sms__counter_display_block');
            activateButton(btnGetPassword);
            clearInterval(intervalId);
        }
    }, 1000);
};

let transformTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    return `${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`;
};

// Маска телефона
let addPhoneMask = (phone) => {
    let x = phone.target.value.replace(/\D/g, '')
            .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    
    if (!x[0]) {
        phone.target.value = '+';
        return;
    }
    
    if (!x[1]) {
        phone.target.value = `7`;
        return;
    }

    phone.target.value = `+7 `
        + `(${x[2]}`
        + ( x[3] ? `) ${x[3]}` : '' )
        + ( x[4] ? `-${x[4]}` : '' )
        + ( x[5] ? `-${x[5]}` : '' );
};