import React, { Component, PropTypes } from 'react';
import Input from './Input';

export default class Application extends Component {
  render() {
    const { state, push } = this.props;
    const { input } = state;
    return (
      <div>
        <h1>Experiments</h1>
        <Input value={input} onChange={event => push({ type: 'input', value: event.target.value })} />
      </div>
    );
  }
}

Application.propTypes = {
  state: PropTypes.shape({
    input: PropTypes.string.isRequired,
  }).isRequired,
  push: PropTypes.func.isRequired,
};
