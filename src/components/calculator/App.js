import React, { useState } from 'react';
import '../../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../../logic/calculate';

const App = () => {
  const [state, setState] = useState({ total: null, next: null, operation: null });
  const { total, next, operation } = state;

  const handleClick = buttonName => {
    setState(calculate({ total, next, operation }, buttonName));
  };

  return (
    <div style={{ width: '700px' }}>
      <Display result={next || total || '0'} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
