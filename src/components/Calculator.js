import React from 'react';
import Key from './Key';
import './Calculator.css';

const keys = ['AC', '+/-', '%', '\u00F7', 7, 8, 9, '\u00D7', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

function Calculator() {
  return (
    <div className="container">
      <div className="display">0</div>
      {keys.map((k, index) => (<Key keyValue={k} keyType={typeof k} keyIndex={index} key={index}/> ))}
    </div>
  );
}
export default Calculator;
