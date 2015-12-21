import React, { Component, PropTypes } from 'react';

export default class Add extends Component {
  render() {
    const { value, onChange, onSubmit } = this.props;
    return (
      <div>
        <input type="text" value={value} onChange={onChange} />
        <button onClick={onSubmit}>Add</button>
      </div>
    );
  }
}

Add.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
