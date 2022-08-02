// настройка
let timeInSeconds = 30;

// определяем переменные переменные
let btnRequest = document.querySelector('.request-code');
let requestTimer = document.querySelector('.sms__counter');
let timer = document.querySelector('.times');
let inputSmsCode = document.querySelector('.input-code');
let btnShowHidePassword = document.querySelector('.password-control');
let timerId = null;

// нажатие на "Запросить код"
btnRequest.addEventListener('click', () => {
    addRemoveClass();
    countDown();
});

// добавление и удаление классов
let addRemoveClass = () => {
    btnRequest.setAttribute('disabled', true);
    btnRequest.classList.add('button_disabled');
    requestTimer.classList.add('sms__counter_visibility_block');

    setTimeout(() => {
        btnRequest.removeAttribute('disabled');
        btnRequest.classList.remove('button_disabled');
        requestTimer.classList.remove('sms__counter_visibility_block');
    },
    timeInSeconds*1000);
};

// отсчет времени
let countDown = () => {
    let count = timeInSeconds;
    timer.textContent = ` ${count}`;
    
    let timerId = setInterval(() => {
        if ( count > 0 ) {
            count--;
            timer.textContent = ` ${count}`;
        } else {
            count = timeInSeconds;

            clearInterval(timerId);
        }
    }, 1000);
};

// показать/скрыть код
btnShowHidePassword.addEventListener('click', () => {
    if ( inputSmsCode.type === 'password' ) {
        inputSmsCode.setAttribute('type', 'text');
        btnShowHidePassword.classList.add('password-control_hide');
    } else {
        inputSmsCode.setAttribute('type', 'password');
        btnShowHidePassword.classList.remove('password-control_hide');
    }
});