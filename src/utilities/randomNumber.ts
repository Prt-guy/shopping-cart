function getRandomNumber() {
    return Math.floor(Math.random() * (100 - 10 + 1)) + 10;
}

const randomSales = getRandomNumber() * 1000;
const randomUsers = getRandomNumber() * 75;
const randomOrders = getRandomNumber() * 169;

export { randomOrders, randomSales, randomUsers };