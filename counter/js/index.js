const txtCounterValue = document.querySelector(
    'div[name=txtCounterValue]'
);

const decrease = () => {
    txtCounterValue.textContent = Number(txtCounterValue.textContent || '0') - 1;
}

const reset = () => {
    txtCounterValue.textContent = 0;
}

const increase = () => {
    txtCounterValue.textContent = Number(txtCounterValue.textContent || '0') + 1;
}