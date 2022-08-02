// настройка
let setTimeInSeconds = 140;

// определяем переменные переменные
let btnRequestCode = document.querySelector('.request-code');
let requestTimer = document.querySelector('.sms__counter');
let timer = document.querySelector('.times');
let inputSmsCode = document.querySelector('.input-code');
let btnShowHidePassword = document.querySelector('.password-control');
let phoneNumber = document.querySelector('.sms__phone-number');
let timerId = null;

// запуск функций при загрузке странице
document.addEventListener('DOMContentLoaded', () => {
    hidePhoneNumber();
    addRemoveClass();
    startCountDown();
});

// запуск фукнций по нажатию "Запросить код"
btnRequestCode.addEventListener('click', () => {
    addRemoveClass();
    startCountDown();
});

// запуск функции при нажатии 'Eye'
btnShowHidePassword.addEventListener('click', () => {
    showHidePassword();
});

// функция скрытия номера телефона
let hidePhoneNumber = () => {
    let phone = phoneNumber.innerHTML;
    phone = phone.substring(0, 9) + '*** **' + phone.substring(15);

    phoneNumber.innerHTML = phone;
};

// функция добавление и удаление классов
let addRemoveClass = () => {
    btnRequestCode.setAttribute('disabled', true);
    btnRequestCode.classList.add('button_disabled');
    requestTimer.classList.add('sms__counter_display_block');

    setTimeout(() => {
        btnRequestCode.removeAttribute('disabled');
        btnRequestCode.classList.remove('button_disabled');
        requestTimer.classList.remove('sms__counter_display_block');
    },
    setTimeInSeconds*1000);
};

// функция отсчета времени
let startCountDown = () => {
    let count = setTimeInSeconds;

    // let minutes = Math.floor(count / 60);
    // let seconds = count % 60;

    timer.textContent = ` ${count}`;
    
    let timerId = setInterval(() => {
        if ( count > 0 ) {
            count--;
            timer.textContent = ` ${count}`;
        } else {
            count = setTimeInSeconds;

            clearInterval(timerId);
        }
    }, 1000);
};

// функция показа и скрытия введенного кода
let showHidePassword = () => {
    if ( inputSmsCode.type === 'password' ) {
        inputSmsCode.setAttribute('type', 'text');
        btnShowHidePassword.classList.add('password-control_hide');
    } else {
        inputSmsCode.setAttribute('type', 'password');
        btnShowHidePassword.classList.remove('password-control_hide');
    }
};