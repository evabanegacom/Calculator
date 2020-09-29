import operate from './operate';

const calculate = (data, button) => {
  let { total, next, operation } = data;
  const operators = ['+', 'multiply;', 'subtract;', '÷'];
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (button === '=') {
    if (total && next && operation) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  }

  if (button === '+/-') {
    total = (total * (-1)).toString();
    next = (next * (-1)).toString();
  }

  if (button === '%') {
    next = (0.01 * total).toString();
    operation = '%';
  }

  if (button === 'AC') {
    total = null;
    next = null;
    operation = null;
  }

  if (operators.includes(button)) {
    operation = button;
  } else if (operation && nums.includes(button)) {
    next = next ? next + button : button;
  } else if (nums.includes(button)) {
    total = total ? total + button : button;
  }
  return { total, next, operation };
};

export default calculate;
