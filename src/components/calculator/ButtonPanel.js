import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const board = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  const createButton = name => (
    <Button name={name} clickHandler={() => clickHandler(name)} key={name} />
  );

  const createRow = (row, index) => {
    const buttons = row.map(btn => createButton(btn));
    return (
      <div key={index} style={{ height: '100px' }}>
        { buttons }
      </div>
    );
  };

  const printBoard = board => {
    const display = board.map((row, index) => createRow(row, index));
    return display;
  };

  return (
    <>
      { printBoard(board) }
    </>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
