import React from 'react';
import PropTypes from 'prop-types';

function Key(
  {
   keyValue, keyType, keyIndex, handleButtonClick,
}
) {
  let type = keyType;
  if (keyIndex < 3) {
    type = 'number';
  }
  let className = `key ${type}`;
  if (keyValue === 0) {
    className += ' key-0';
  }
  return (
    <div
      role="button"
      className={className}
      onClick={handleButtonClick}
      onKeyDown={handleButtonClick}>
        {keyValue}
    </div>
  );
}

Key.propTypes = {
  keyValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  keyType: PropTypes.string.isRequired,
  keyIndex: PropTypes.number.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
};

export default Key;
