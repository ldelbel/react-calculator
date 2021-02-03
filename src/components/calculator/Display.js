import PropTypes from 'prop-types';

const Display = props => {
  const { result } = props;
  const styles = {
    background: '#858694',
    display: 'flex',
    'justify-content': 'flex-end',
    'align-items': 'center',
    color: 'white',
    height: '100px',
    margin: '0',
    padding: '0 20px',
    'font-size': '2.5em',
  };
  return (
    <h1 style={styles}>{result}</h1>
  );
};
Display.defaultProps = { result: '0' };
Display.propTypes = { result: PropTypes.string };

export default Display;
