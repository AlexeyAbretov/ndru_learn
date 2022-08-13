let setTimeInSeconds = 10; // время обратного отсчета

const input = document.querySelectorAll('.input');

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
    timeOutId = null;


//////////////////////////////////////////////////////////////

btnNext.addEventListener('click', () => {
    divTel.classList.replace('show', 'hide');
    divSms.classList.replace('hide', 'show');
    inputPassword.value = '';

    hidePhoneNumber(strPhoneNumber);
    startCountDown(setTimeInSeconds, timer);
    disableButton(btnGetPassword);
    activateCounter();
});

btnBack.addEventListener('click', () => {
    divTel.classList.replace('hide', 'show');
    divSms.classList.replace('show', 'hide');
    inputPhoneNumber.value = '';
    strPhoneNumber = '';
    chboxPersonalData.checked = false;

    disableButton(btnNext);
    clearInterval(timeOutId);
    hidePassword();
    toggleInputLabel();
});

btnGetPassword.addEventListener('click', () => {
    startCountDown(setTimeInSeconds, timer);
    disableButton(btnGetPassword);
});

btnTogglePasswordVisibility.addEventListener('click', () => {
    if ( inputPassword.type === 'password' ) {
        showPassword();
    } else {
        hidePassword();
    }
});

inputPhoneNumber.addEventListener('input', (tel) => {                
    mask(tel);
    strPhoneNumber = inputPhoneNumber.value;

    toggleNextButton();
});

chboxPersonalData.addEventListener('click', () => {
    toggleNextButton();
});

//////////////////////////////////////////////////////////////

let disableButton = (btn) => {
    btn.setAttribute('disabled', true);
    btn.classList.add('button_disabled');
};

let activateButton = (btn) => {
    btn.removeAttribute('disabled');
    btn.classList.remove('button_disabled');
};

let toggleNextButton = () => {
    if(chboxPersonalData.checked && strPhoneNumber.length === 18) {
        activateButton(btnNext);
    } else {
        disableButton(btnNext);
    }
};

let hidePassword = () => {
    inputPassword.setAttribute('type', 'password');
    btnTogglePasswordVisibility.classList.remove('password-control_hide');
};

let showPassword = () => {
    inputPassword.setAttribute('type', 'text');
    btnTogglePasswordVisibility.classList.add('password-control_hide');
};

let disableCounter = () => {
    txtCounter.classList.remove('sms__counter_display_block');
};

let activateCounter = () => {
    txtCounter.classList.add('sms__counter_display_block');
};

input.forEach((element) => {
    element.addEventListener('blur', (e) => {
        if (e.target.value !== '') {
            e.target.nextElementSibling.classList.add('filled');
        } else {
            e.target.nextElementSibling.classList.remove('filled');
        }
    });
});

let toggleInputLabel = () => {
    input.forEach((e) => {
        e.nextElementSibling.classList.remove('filled');
    });
};


//////////////////////////////////////////////////////////////

let hidePhoneNumber = (phone) => {
    phone = phone.substring(0, 9) + '*** ** ' + phone.substring(16);

    txtPhoneNumber.textContent = phone;
};


//////////////////////////////////////////////////////////////

let startCountDown = (start, item) => {
    item.textContent = transformTime(start);
    activateCounter();
    
    timeOutId = setInterval(() => {
        if ( start > 1 ) {
            start--;
            item.textContent = transformTime(start);
        } else {
            disableCounter();
            activateButton(btnGetPassword);
            clearInterval(timeOutId);
        }
    }, 1000);
};

let transformTime = (start) => {
    let minutes = Math.floor(start / 60);
    let seconds = start % 60;

    return `${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`;
};


//////////////////////////////////////////////////////////////

let mask = (tel) => {
    let x = tel.target.value.replace(/\D/g, '')
            .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);

        if (!x[0]) {
            tel.target.value = '+';
            return;
        }

        if (!x[1]) {
            tel.target.value = `7`;
            return;
        }

        tel.target.value = `+7 `
            +`(${x[2]}`
            + ( x[3] ? `) ${x[3]}` : '' )
            + ( x[4] ? `-${x[4]}` : '' )
            + ( x[5] ? `-${x[5]}` : '' );
};