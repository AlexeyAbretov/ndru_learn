const txtCounterValue = document.querySelector(
    'div[name=txtCounterValue]'
);

const counterClick = (btn) => {
    if (btn.name === 'btnDecrease') {
        decrease();
    } else if (btn.name === 'btnReset') {
        reset();
    } else if (btn.name === 'btnIncrease') {
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