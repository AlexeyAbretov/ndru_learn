// const createCounter = (id) => {
//     const counter = document.getElementById('counter').content.cloneNode(true);

//     counter.querySelector('.counter').setAttribute('id', id);
//     counter.querySelector('.buttons').addEventListener('click', counterClick);

//     document.getElementById('root').append(counter);
// }

const counterClick = (e) => {
    const counter = e.currentTarget.closest('.counter');
    const txtCounterValue = counter.querySelector('div[name=txtCounterValue]');
    
    console.log(e.target, e.currentTarget);
    
    if (e.target.name === 'btnReset') {
        reset(txtCounterValue);
    } else if (e.target.name === 'btnStart') {
        start(txtCounterValue);
    } else if (e.target.name === 'btnStop') {
        stop(txtCounterValue);
    }
};

let intervalId = {};
const btnChange = document.querySelector('button[name=btnStart]');

const reset = (txtCounterValue) => {
    const counter = txtCounterValue.closest('.counter');
    
    clearInterval(intervalId[counter]);

    txtCounterValue.textContent = 0;

    btnChange.textContent = 'Start';
    btnChange.setAttribute('name', 'btnStart');
};

const start = (txtCounterValue) => {
    const counter = txtCounterValue.closest('.counter');

    intervalId[counter] = setInterval(() => {
        txtCounterValue.textContent = Number(txtCounterValue.textContent || '0') + 1;
    }, 1000);

    btnChange.textContent = 'Stop';
    btnChange.setAttribute('name', 'btnStop');
};

const stop = (txtCounterValue) => {
    const counter = txtCounterValue.closest('.counter');
    
    clearInterval(intervalId[counter]);

    btnChange.textContent = 'Start';
    btnChange.setAttribute('name', 'btnStart');
};