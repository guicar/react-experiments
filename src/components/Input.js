import React, { Component, PropTypes } from 'react';

export default class Input extends Component {
  render() {
    const { value, onChange } = this.props;
    return <input type="text" value={value} onChange={onChange} />;
  }
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
