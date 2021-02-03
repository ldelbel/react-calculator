import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = props => {
  const { name, clickHandler } = props;
  const operators = ['÷', 'x', '+', '-', '='];
  const StyledButton = styled.button`
  background-color: ${operators.includes(name) ? '#F5913E' : '#E0E0E0'};
  border: 3px solid #D0D0D0;
  border-bottom: 3px solid #BABABA;
  color: black;
  text-align: center;
  width: ${name === '0' ? '50%' : '25%'};
  height: 100%;
  font-size: 1.3em;
  font-weight: bold;
`;

  return (
    <StyledButton type="submit" onClick={clickHandler}>{name}</StyledButton>
  );
};
Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
