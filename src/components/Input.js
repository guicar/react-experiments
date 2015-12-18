import React, { PropTypes } from 'react';

export default function Input({ value, onChange }) {
  return <input type="text" value={value} onChange={onChange} />;
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
