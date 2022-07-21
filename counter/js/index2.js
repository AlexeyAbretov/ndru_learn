const txtCounterValue = document.querySelector(
    'div[name=txtCounterValue]'
);

const counterClick = (e) => {
    e.stopPropagation();
    
    console.log(e.target, e.currentTarget);

    if (e.target.name === 'btnDecrease') {
        decrease();
    } else if (e.target.name === 'btnReset') {
        reset();
    } else if (e.target.name === 'btnIncrease') {
        increase();
    }
}

const decrease = () => {
    txtCounterValue.textContent = Number(txtCounterValue.textContent || '0') - 1;
}

const reset = () => {
    txtCounterValue.textContent = 0;
}

const increase = () => {
    txtCounterValue.textContent = Number(txtCounterValue.textContent || '0') + 1;
}