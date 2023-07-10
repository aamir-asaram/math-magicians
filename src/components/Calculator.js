import React, { useState } from 'react';
import Key from './Key';
import './Calculator.css';

import calculate from '../logic/calculate';

const keys = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

function Calculator() {
  const [state, setState] = useState({ total: null, next: null, operation: null });

  const handleClick = (e) => {
    const value = e.target.textContent;
    setState(calculate(state, value));
  };

  const { total, next, operation } = state;

  return (
    <div className="container">
      <h2>Let's do some Math!</h2>
      <div className="calculator">
        <div className="display" data-testid="display">{ next || operation || total || 0 }</div>
        {keys.map((k, index) => (
          <
          Key
          keyValue={k}
          keyType={typeof k}
          keyIndex={index}
          handleButtonClick={handleClick}
          key={k}
        />))}
      </div>
    </div>
  );
}
export default Calculator;
