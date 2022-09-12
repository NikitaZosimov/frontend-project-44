import gameRules from "../index.js";
import getRandomNumbers from "../getRandomNumbers.js";
import calculate from "../calculate.js";

const brainCalc = () => {
   const countRounds = [];
   while (countRounds.length < 3) {
      const num1 = getRandomNumbers(1, 100);
      const num2 = getRandomNumbers(1, 100);
      const operators = ['+', '-', '*'];
      const getRandomOperators = Math.floor(Math.random() * operators.length);
      const randomOperators = operators[getRandomOperators];
      const question = `${num1} ${randomOperators} ${num2}`;
      let correctAnswer = calculate(num1, num2, randomOperators);
      correctAnswer = String(correctAnswer);
      countRounds.push([question, correctAnswer]);
   };
   const task = 'What is the result of the expression?';
   const game = [countRounds, task].flat();
   return gameRules(game);
};
export default brainCalc;
