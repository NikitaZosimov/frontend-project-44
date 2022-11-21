import gameRules from '../index.js';
import getRandomNumbers from '../getRandomNumbers.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num2 > num1) {
    return getGcd(num2, num1);
  }
  if (!num2) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
};

const getQuestionAndAnswer = () => {
  const numFirst = getRandomNumbers(1, 10);
  const numSecond = getRandomNumbers(1, 10);
  const question = `${numFirst} ${numSecond}`;
  let correctAnswer = getGcd(numFirst, numSecond);
  correctAnswer = String(correctAnswer);
  return [question, correctAnswer];
};
export default () => gameRules(description, getQuestionAndAnswer);
