const counterClick = (e) => {
    const counter = e.currentTarget.closest('.counter');
    const txtCounterValue = counter.querySelector('div[name=txtCounterValue]');
    
    console.log(e.target, e.currentTarget);
    
    if (e.target.name === 'btnReset') {
        reset(txtCounterValue);
    } else if (!intervalId) {
        start(txtCounterValue);
    } else {
        stop();
    }
};

let intervalId = null;
const btnChange = document.querySelector('button[name=btnStartOrStop]');

const reset = (txtCounterValue) => {
    clearInterval(intervalId);
    intervalId = null;

    txtCounterValue.textContent = 0;

    btnChange.textContent = 'Start';
};

const start = (txtCounterValue) => {
    intervalId = setInterval(() => {
        txtCounterValue.textContent = Number(txtCounterValue.textContent || '0') + 1;
    }, 1000);

    btnChange.textContent = 'Stop';
};

const stop = () => {
    clearInterval(intervalId);
    intervalId = null;

    btnChange.textContent = 'Start';
};