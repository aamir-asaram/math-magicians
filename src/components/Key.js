import React from 'react';
import PropTypes from 'prop-types';

function Key({keyValue, keyType, keyIndex}) {
  keyIndex < 3 && (keyType = 'number');
  let className = `key ${keyType}`;
  keyValue === 0 && (className += ' key-0');
  return (
    <div className={className}>{keyValue}</div>
  );
}


export default Key;