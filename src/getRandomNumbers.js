const getRandomNumbers = (min, max) => {
   let randomNumber = Math.random() * (max - min + 1) + min;
   return Math.floor(randomNumber);
};
export default getRandomNumbers;
