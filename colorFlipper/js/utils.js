const getRandom = (max) => Math.floor(Math.random() * max);

const getRandomHex = (modificator) => Math.floor(Math.random() * (modificator || 16777215)).toString(16)