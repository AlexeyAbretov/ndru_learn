const colors = ['red', 'blue', 'yellow', 'green', 'aqua'];

const changeColor = () => {
    let randomColor = colors[getRandom(colors.length)];
    
    document.body.style.backgroundColor = randomColor;
    document.querySelector("#color-name").innerHTML = randomColor;
    document.querySelector("#color-name").style.color = randomColor;
}

// const changeColorByRgb = () => {
//     document.body.style.backgroundColor = `rgb(${getRandom(255)}, ${getRandom(255)}, ${getRandom(255)})`;
// }

// const changeColorByHex = () => {
//     const hex = getRandomHex();

//     document.body.style.backgroundColor = ('#' + hex);
// }

document.querySelector('#btnChangeColor').addEventListener(
    'click', 
    changeColor
);