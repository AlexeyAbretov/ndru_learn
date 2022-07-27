// получаем данные с faker
const getData = async () => {
    // подгружаем изображения
    const images = await Promise.all(new Array(10)
        .fill('')
        .map(() => fetch('https://loremflickr.com/150/150/people')));

    // возвращаем массив
    return new Array(10).fill({}).map((_, i) => ({
        avatar: images[i].url,
        name: faker.name.findName(),
        job: faker.name.jobType(),
        desc: faker.lorem.sentence(25)
    }));
};

// задаем переменные
const nameElement = document.querySelector('.name');
const jobElement = document.querySelector('.job');
const descElement = document.querySelector('.desc');
const counterElement = document.querySelector('.counter');
const avatarElement = document.querySelector('.avatar');

// вставляем данные в карточку
const renderCard = (index, data) => {
    const cardInfo = data[index];

    counterElement.textContent = `${(index + 1)}/${data.length}`;

    if (cardInfo) {
        nameElement.textContent = cardInfo.name;
        jobElement.textContent = cardInfo.job;
        descElement.textContent = cardInfo.desc;
        avatarElement.src = cardInfo.avatar;
    }
};

// задаем стартовые переменные
let data = null;
let currentCard = 0;

// подгружаем данные в карточку
document.addEventListener('DOMContentLoaded', () => {
    getData().then((result) => {
        data = result;
        renderCard(currentCard, data);

        // setInterval(() => {
        //     currentCard++;
            
        //     if (currentCard > data.length - 1) {
        //         currentCard = 0;
        //     }

        //     renderCard(currentCard, data);
        // }, 1000);
    });

    // клик назад
    document.querySelector('.button__prev').addEventListener('click', () => {
        currentCard--;

        // зацикливание карусели
        if (currentCard < 0) {
            currentCard = data.length - 1;
        }

        renderCard(currentCard, data);
    });

    // клик вперед
    document.querySelector('.button__next').addEventListener('click', () => {
        currentCard++;

        // зацикливание карусели
        if (currentCard > data.length - 1) {
            currentCard = 0;
        }

        renderCard(currentCard, data);
    });

    // рандомная карточка
    document.querySelector('.button_suprise').addEventListener('click', () => {
        currentCard = getRandom(data.length);
    
        renderCard(currentCard, data);
    });
});