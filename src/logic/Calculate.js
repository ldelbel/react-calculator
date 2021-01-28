import Operate from './Operate';

const Calculate = (data, buttonName) => {
  let { total,next,operation } = data;
  let isTotal = true;
  const operators = ['÷', '*','+','-'];

  if(buttonName === 'AC') {
    total = next = operation = null;
  } else if(buttonName === '+/-') {
      isTotal ? (total *= -1).toString() : (next *= -1).toString();
  } else if(buttonName === '%') {
      isTotal ? (total /= 100).toString() : (next /= 100).toString();
  } else if(operators.includes(buttonName)) {
      if(!isTotal) return;
      buttonName === '÷' ? operation = `/` : operation = `${buttonName}`;
      isTotal = !isTotal;
  } else if(!isNaN(buttonName) || buttonName === '.') {
      if(isTotal) {
        total === '0' ? total = buttonName : total = total + buttonName;
      } else {
        next === '0' || next === null ? next = buttonName : next = next + buttonName;
      }
  } else if(buttonName === '=') {
    Operate(total,next,operation);
  }
}

export default Calculate;