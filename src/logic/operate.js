const BigJs = require('big.js');

const operate = (numeroUno, numeroDos, operation) => {
  const numb1 = new BigJs(numeroUno);
  const numb2 = new BigJs(numeroDos);
  switch (operation) {
    case 'add':
      return numb1.plus(numb2).toString();
    case 'multiply;':
      return numb1.times(numb2).toString();
    case 'subtract;':
      return numb1.minus(numb2).toString();
    case 'percentage':
      return numb1.times(numb2).div(100).toString();
    case 'divide':
      return numb1.div(numb2).toString();
    default:
      return 0;
  }
};

export default operate;
