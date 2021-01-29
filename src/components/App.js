import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/Calculate';

const App = () => {
  const state = { total: null, next: null, operation: null };
  calculate(state, 'name');
  return (
    <>
      <Display />
      <ButtonPanel />
    </>
  );
};

calculate();

export default App;
