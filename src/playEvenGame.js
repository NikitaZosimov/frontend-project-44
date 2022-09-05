import readlineSync from 'readline-sync';

const playEvenGame = (game) => {
   console.log('Welcome to the Brain Games!');
   const userName = readlineSync.question('May I have your name? ');
   console.log(`Hello, ${userName}!`);
   console.log('Answer "yes" if the number is even, otherwise answer "no".');


   for (let i = 0; i < game.length - 1;) {
      const question = game[i][0];
      const correctAnswer = game[i][1];
      console.log(`Question: ${question}`);
      const userAnswer = readlineSync.question('Your answer: ');

      if (userAnswer === correctAnswer) {
         console.log('Correct!');
         i += 1;
      } else {
         console.log(`${userAnswer} is wrong answer;(. Correct answer was ${correctAnswer})`);
         return `Let's try again, ${userName}`;
      }
   }
   return `Congratulations, ${userName}!`;
};
export default playEvenGame;