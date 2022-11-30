import gameRules from '../index.js';
import getRandomNumbers from '../helper.js';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgression = (startNum, step) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startNum + step * i);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const startNum = getRandomNumbers(0, 50);
  const step = getRandomNumbers(2, 8);
  const progression = getProgression(startNum, step);
  const randomIndex = getRandomNumbers(0, 9);

  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};
export default () => gameRules(description, getQuestionAndAnswer);
