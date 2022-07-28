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
const cardElement = document.querySelector('.card');
const nameElement = document.querySelector('.card__name');
const jobElement = document.querySelector('.card__job');
const descElement = document.querySelector('.card__desc');
const counterElement = document.querySelector('.counter');
const avatarElement = document.querySelector('.card__avatar');

// рендерим карточку
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

// задаем переменные
let data = null;
let currentCard = 0;
let timeOutId = null;

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
    document.querySelector('.reviews__button-prev').addEventListener('click', () => {
        cardElement.classList.add('card_visibility_hidden');
        
        timeOutId = setTimeout(() => {
            
            // номер карточки -1
            currentCard--;

            // зацикливание карусели
            if (currentCard < 0) {
                currentCard = data.length - 1;
            }

            // рендерим карточку
            renderCard(currentCard, data);

            cardElement.classList.remove('card_visibility_hidden');
    
        }, 400);
    });

    // клик вперед
    document.querySelector('.reviews__button-next').addEventListener('click', () => {
        cardElement.classList.add('card_visibility_hidden');

        timeOutId = setTimeout(() => {
            
            // номер карточки +1
            currentCard++;

            // зацикливание карусели
            if (currentCard > data.length - 1) {
                currentCard = 0;
            }

            // рендерим карту
            renderCard(currentCard, data);

            cardElement.classList.remove('card_visibility_hidden');
    
        }, 400);
    });

    // рандомная карточка
    document.querySelector('.reviews__button-surprise').addEventListener('click', () => {
        cardElement.classList.add('card_visibility_hidden');

        timeOutId = setTimeout(() => {
            
            // получаем рандомный номер карточки
            currentCard = getRandom(data.length);

            // рендерим карту
            renderCard(currentCard, data);

            cardElement.classList.remove('card_visibility_hidden');
    
        }, 400);
    });
});