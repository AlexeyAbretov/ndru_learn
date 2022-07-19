const colors = ['red', 'blue', 'yellow', 'green', 'aqua'];

const changeColor = () => {
    document.body.style.backgroundColor = colors[getRandom(colors.length)];
}

const changeColorByRgb = () => {
    document.body.style.backgroundColor = `rgb(${getRandom(255)}, ${getRandom(255)}, ${getRandom(255)})`;
}

const changeColorByHex = () => {
    const hex = getRandomHex();

    document.body.style.backgroundColor = ('#' + hex);
}

document.querySelector('#btnChangeColor').addEventListener(
    'click', 
    changeColorByHex
);
