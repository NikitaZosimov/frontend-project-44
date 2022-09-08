import readlineSync from 'readline-sync';

const gameRules = (game) => {
   console.log('Welcome to the Brain Games!');
   const userName = readlineSync.question('May I have your name? ');
   console.log(`Hello, ${userName}!`);
   const task = game[3];
   console.log(task);


   for (let i = 0; i < game.length - 1;) {
      const question = game[i][0];
      const correctAnswer = game[i][1];
      console.log(`Question: ${question}`);
      const userAnswer = readlineSync.question('Your answer: ');

      if (userAnswer === correctAnswer) {
         console.log('Correct!');
         i += 1;
      } else {
         console.log(`Your answer: '${userAnswer}' is wrong answer;(. Correct answer was ${correctAnswer})`);
         return `Let's try again, ${userName}!`;
      }
   }
   return `Congratulations, ${userName}!`;
};
export default gameRules;