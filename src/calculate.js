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
         result = (num1 * num2)
         break;
      default:
   }
   return result;
};
export default calculate;