import readlineSync from 'readline-sync';
const getName = () => {
   const userName = readlineSync.question('May I have your name? ');
   return `Hello, ${userName}!`;
};
export default getName