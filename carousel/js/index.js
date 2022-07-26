const getData = async () => {
    const images = await Promise.all(new Array(10)
        .fill('')
        .map(() => fetch('https://loremflickr.com/150/150/people')));

    return new Array(10).fill({}).map((_, i) => ({
        avatar: images[i].url,
        name: faker.name.findName(),
        job: faker.name.jobType(),
        desc: faker.lorem.sentence(25)
    }))
}

const nameElement = document.querySelector('.name');
const jobElement = document.querySelector('.job');
const descElement = document.querySelector('.desc');
const counterElement = document.querySelector('.counter');
const avatarElement = document.querySelector('.avatar');

const renderCard = (index, data) => {
    const cardInfo = data[index];

    counterElement.textContent = `${(index + 1)}/${data.length}`;

    if (cardInfo) {
        nameElement.textContent = cardInfo.name;
        jobElement.textContent = cardInfo.job;
        descElement.textContent = cardInfo.desc;
        avatarElement.src = cardInfo.avatar;
    }
}

let data = null;
let currentCard = 0;

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

    document.querySelector('.button__prev').addEventListener('click', () => {
        currentCard--;

        if (currentCard < 0) {
            currentCard = data.length - 1;
        }

        renderCard(currentCard, data);
    });

    document.querySelector('.button__next').addEventListener('click', () => {
        currentCard++;

        if (currentCard > data.length - 1) {
            currentCard = 0;
        }

        renderCard(currentCard, data);
    });

    
});