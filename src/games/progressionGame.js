import gameRules from '../index.js';
import getRandomNumbers from '../helper.js';

const description = 'What number is missing in the progression?';

const getProgression = () => {
  const differenceBetweenTheNumbers = getRandomNumbers(1, 10);
  const progressionNum = [];
  for (let i = 0; i < 9; i += 1) {
    progressionNum[i + 1] = progressionNum[i] + differenceBetweenTheNumbers;
  }
};

const getQuestionAndAnswer = () => {
  const firstProgressionNumber = getRandomNumbers(1, 100);
  const indexOfHiddenNumber = getRandomNumbers(0, 9);
  const progression = getProgression(firstProgressionNumber);
  const correctAnswer = String(progression[indexOfHiddenNumber]);
  progression[indexOfHiddenNumber] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};
export default () => gameRules(description, getQuestionAndAnswer);
