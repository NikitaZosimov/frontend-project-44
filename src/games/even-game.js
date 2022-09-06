import gameRules from "../index.js";
import getRandomNumbers from "../getRandomNumbers.js";


const brainEvenCheckAndStart = () => {
   const countRounds = [];
   while (countRounds.length < 3) {
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
   const task = 'Answer "yes" if the number is even, otherwise answer "no".';
   const game = [countRounds, task].flat();
   return gameRules(game);

};
export default brainEvenCheckAndStart;

