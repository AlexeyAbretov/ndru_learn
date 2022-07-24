// создаем переменную, определяющую блок изменения данных
const txtCounterValue = document.querySelector(
    'div[name=txtCounterValue]'
);

// функция присвоения цвета в зависимости от текущего значения
const counterColorChanger = () => {
    if (Number(txtCounterValue.textContent) === 0) {
        txtCounterValue.classList.remove('counter__value_positive', 'counter__value_negative');
    } else if (Number(txtCounterValue.textContent) > 0) {
        txtCounterValue.classList.add('counter__value_positive');
    } else if (Number(txtCounterValue.textContent) < 0) {
        txtCounterValue.classList.add('counter__value_negative');
    }
};

// 
const counterClick = (e) => {
    e.stopPropagation();
    
    // console.log(e.target, e.currentTarget);

    if (e.target.name === 'btnDecrease') {
        decrease();
    } else if (e.target.name === 'btnReset') {
        reset();
    } else if (e.target.name === 'btnIncrease') {
        increase();
    }

    console.log(txtCounterValue.textContent);
    counterColorChanger();
};

// функция уменьшения на 1
const decrease = () => {
    txtCounterValue.textContent = Number(txtCounterValue.textContent || '0') - 1;
};

// функция сброса значения до 0
const reset = () => {
    txtCounterValue.textContent = 0;
};

// функция увеличения на 1
const increase = () => {
    txtCounterValue.textContent = Number(txtCounterValue.textContent || '0') + 1;
};