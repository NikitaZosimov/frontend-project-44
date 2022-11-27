import gameRules from '../index.js';
import getRandomNumbers from '../helper.js';

const description = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const firstProgressionNumber = getRandomNumbers(1, 100);
  const differenceBetweenTheNumbers = getRandomNumbers(1, 10);
  const indexOfHiddenNumber = getRandomNumbers(0, 9);
  const progressionNum = [firstProgressionNumber];
  for (let i = 0; i < 9; i += 1) {
    progressionNum[i + 1] = progressionNum[i] + differenceBetweenTheNumbers;
  }
  const correctAnswer = String(progressionNum[indexOfHiddenNumber]);
  progressionNum[indexOfHiddenNumber] = '..';
  const question = progressionNum.join(' ');
  return [question, correctAnswer];
};
export default () => gameRules(description, getQuestionAndAnswer);
