import gameRules from '../index.js';
import getRandomNumbers from '../getRandomNumbers.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const getsNumber = getRandomNumbers(1, 10);
  const question = `${getsNumber}`;
  const correctAnswer = (isEven(getsNumber) ? 'yes' : 'no');
  return [question, correctAnswer];
};
export default () => gameRules(description, getQuestionAndAnswer);
