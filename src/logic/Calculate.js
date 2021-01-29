import Operate from './Operate';

const Calculate = (data, buttonName) => {
  let { total, next, operation } = data;
  let isTotal = true;
  const operators = ['÷', 'x', '+', '-'];

  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  } else if (buttonName === '+/-') {
    if (isTotal) {
      (total *= -1).toString();
    } else {
      (next *= -1).toString();
    }
  } else if (buttonName === '%') {
    if (isTotal) {
      (total /= 100).toString();
    } else {
      (next /= 100).toString();
    }
  } else if (operators.includes(buttonName)) {
    if (!isTotal) return;
    operation = `${buttonName}`;
    isTotal = !isTotal;
  } else if (!Number.isNaN(buttonName) || buttonName === '.') {
    if (isTotal) {
      total = total === '0' ? buttonName : total + buttonName;
    } else {
      next = next === '0' || next === null ? buttonName : next + buttonName;
    }
  } else if (buttonName === '=') {
    isTotal = !isTotal;
    Operate(total, next, operation);
  }
};

export default Calculate;
