// определение переменных
const colors = ['red', 'blue', 'yellow', 'green', 'aqua'];
const txtColorName = document.querySelector("#txtColorName");

// функция смены цвета
const changeColor = () => {
    // рандомайзер на основе массива данных
    let randomColor = colors[getRandom(colors.length)];
    
    // изменение стилей
    document.body.style.backgroundColor = randomColor;
    txtColorName.innerHTML = randomColor;
    txtColorName.style.color = randomColor;
    txtColorName.style.textTransform = 'capitalize';
}

// const changeColorByRgb = () => {
//     document.body.style.backgroundColor = `rgb(${getRandom(255)}, ${getRandom(255)}, ${getRandom(255)})`;
// }

// const changeColorByHex = () => {
//     const hex = getRandomHex();

//     document.body.style.backgroundColor = ('#' + hex);
// }

// активация функции по нажатии на кнопку
document.querySelector('#btnChangeColor').addEventListener(
    'click',
    changeColor
);