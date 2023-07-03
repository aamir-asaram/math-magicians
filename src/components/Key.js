import React from 'react';
import PropTypes from 'prop-types';

function Key({ keyValue, keyType, keyIndex }) {
  let type = keyType;
  if (keyIndex < 3) {
    type = 'number';
  }
  let className = `key ${type}`;
  if (keyValue === 0) {
    className += ' key-0';
  }
  return (
    <div className={className}>{keyValue}</div>
  );
}

Key.propTypes = {
  keyValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  keyType: PropTypes.string.isRequired,
  keyIndex: PropTypes.number.isRequired,
};

export default Key;