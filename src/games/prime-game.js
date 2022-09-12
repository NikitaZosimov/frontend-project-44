import gameRules from "../index.js";
import getRandomNumbers from "../getRandomNumbers.js";

const isPrimeNumber = (num) => {
   for (let i = 2; i < num; i++) {
      if (num % i == 0){
         return false;
      };
   };
   return true;
};

const brainPrime = () => {
  const countRounds = [];
  while (countRounds.length < 3) {
   const getsNumber = getRandomNumbers(1, 50);
   let question = `${getsNumber}`;
   let correctAnswer;
   correctAnswer = isPrimeNumber(getsNumber) ? correctAnswer = 'yes' : correctAnswer = 'no';
   countRounds.push([question, correctAnswer]);
  };
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const game = [countRounds, task].flat();
  return gameRules(game);
};
export default brainPrime;
