import gameRules from "../index.js";
import getRandomNumbers from "../getRandomNumbers.js";

const brainGcd = () => {
   const countRounds = [];
   while (countRounds.length < 3) {
      const num1 = getRandomNumbers(1, 20);
      const num2 = getRandomNumbers(1, 40);
      const getGcd = (num1, num2) => {
         if (num2 > num1) {
            return getGcd(num2, num1);
         } if (!num2){
            return num1;
         } return getGcd(num2, num1 % num2);
      };
      const question = `${num1} ${num2}`;
      let correctAnswer = getGcd(num1, num2);
      correctAnswer = String(correctAnswer);
      countRounds.push([question,correctAnswer]);
      
   }
   const task = 'Find the greatest common divisor of given numbers.';
   const game = [countRounds, task].flat();
   return gameRules(game);
};
export default brainGcd