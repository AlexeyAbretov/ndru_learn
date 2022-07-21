const createCounter = (id) => {
    const counter = document.getElementById('counter').content.cloneNode(true);

    counter.querySelector('.counter').setAttribute('id', id);
    counter.querySelector('.buttons').addEventListener('click', counterClick);

    document.getElementById('root').append(counter);
}

const getCounterId = () => {
    const id = document.getElementById('counterId').value;

    alert(document.getElementById(id).querySelector('.counter__value').textContent);
}

const counterClick = (e) => {
    const counter = e.currentTarget.closest('.counter');
    const txtCounterValue = counter.querySelector('div[name=txtCounterValue]');
    
    console.log(e.target, e.currentTarget);
    
    if (e.target.name === 'btnDecrease') {
        decrease(txtCounterValue);
    } else if (e.target.name === 'btnReset') {
        reset(txtCounterValue);
    } else if (e.target.name === 'btnIncrease') {
        increase(txtCounterValue);
    }
}

document.querySelectorAll(
    '.buttons'
).forEach((el) => 
    el.addEventListener('click', counterClick)
);

const decrease = (txtCounterValue) => {
    txtCounterValue.textContent = Number(txtCounterValue.textContent || '0') - 1;
}

const reset = (txtCounterValue) => {
    txtCounterValue.textContent = 0;
}

const increase = (txtCounterValue) => {
    txtCounterValue.textContent = Number(txtCounterValue.textContent || '0') + 1;
}