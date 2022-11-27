import gameRules from '../index.js';
import getRandomNumbers from '../helper.js';

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
  const correctAnswer = String(getGcd(numFirst, numSecond));
  return [question, correctAnswer];
};
export default () => gameRules(description, getQuestionAndAnswer);
