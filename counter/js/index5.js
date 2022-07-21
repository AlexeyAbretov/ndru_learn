const createCounter = (id) => {
    const counter = document.getElementById('counter').content.cloneNode(true);

    counter.querySelector('.counter').setAttribute('id', id);
    counter.querySelector('.buttons').addEventListener('click', counterClick);

    document.getElementById('root').append(counter);
}

const counterClick = (e) => {
    const counter = e.currentTarget.closest('.counter');
    const txtCounterValue = counter.querySelector('div[name=txtCounterValue]');
    
    console.log(e.target, e.currentTarget);
    
    if (e.target.name === 'btnReset') {
        reset(txtCounterValue);
    } else if (e.target.name === 'btnStart') {
        start(txtCounterValue);
    }
}

let intervalId = {};

const reset = (txtCounterValue) => {
    const counter = txtCounterValue.closest('.counter');
    
    clearInterval(intervalId[counter.id]);

    txtCounterValue.textContent = 0;
}

const start = (txtCounterValue) => {
    const counter = txtCounterValue.closest('.counter');

    intervalId[counter.id] = setInterval(() => {
        txtCounterValue.textContent = Number(txtCounterValue.textContent || '0') + 1;
    }, 1000)
}