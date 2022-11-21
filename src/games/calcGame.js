import gameRules from '../index.js';
import getRandomNumbers from '../getRandomNumbers.js';

const description = 'What is the result of the expression?';

const calculate = (num1, num2, operators) => {
  let result;
  switch (operators) {
    case '+':
      result = (num1 + num2);
      break;
    case '-':
      result = (num1 - num2);
      break;
    case '*':
      result = (num1 * num2);
      break;
    default:
  }
  return result;
};

const getQuestionAndAnswer = () => {
  const numFirst = getRandomNumbers(1, 10);
  const numSecond = getRandomNumbers(1, 10);
  const operators = ['+', '-', '*'];
  const getRandomOperators = Math.floor(Math.random() * operators.length);
  const randomOperators = operators[getRandomOperators];
  const question = `${numFirst} ${randomOperators} ${numSecond}`;
  let correctAnswer = calculate(numFirst, numSecond, randomOperators);
  correctAnswer = String(correctAnswer);
  return [question, correctAnswer];
};
export default () => gameRules(description, getQuestionAndAnswer);
