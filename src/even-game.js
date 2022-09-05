import playEvenGame from "./playEvenGame.js";

const getRandomNumbers = (min, max) => {
   let randomNumber = Math.random() * (max - min + 1) + min;
   return Math.floor(randomNumber);
};

const brainEvenCheckAndStart = () => {
   const countRounds = [];
   while (countRounds.length <= 3) {
      const getsNumber = getRandomNumbers(1, 100);
      let question = `${getsNumber}`
      let correctAnswer;
      if (getsNumber % 2 === 0) {
         correctAnswer = 'yes';
      };
      if (getsNumber % 2 !== 0) {
         correctAnswer = 'no';
      }
      countRounds.push([question, correctAnswer]);
   }
   return playEvenGame(countRounds);

};
export default brainEvenCheckAndStart;

