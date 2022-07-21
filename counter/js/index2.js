// создаем переменную, определяющую блок изменения данных
const txtCounterValue = document.querySelector(
    'div[name=txtCounterValue]'
);

// функция присвоения цвета в зависимости от текущего значения
const counterColorChanger = () => {
    if (txtCounterValue.textContent == 0) {
        txtCounterValue.style.removeProperty('color');
    } else if (txtCounterValue.textContent > 0) {
        txtCounterValue.style.color = 'green';
    } else if (txtCounterValue.textContent < 0) {
        txtCounterValue.style.color = 'red';
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