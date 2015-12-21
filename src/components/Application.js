import React, { Component, PropTypes } from 'react';
import Input from './Input';

export default class Application extends Component {
  render() {
    const { state, push } = this.props;
    return (
      <div>
        <h1>Experiments</h1>
        <Input value={state} onChange={event => push({ type: 'input', value: event.target.value })} />
      </div>
    );
  }
}

Application.propTypes = {
  state: PropTypes.string.isRequired,
  push: PropTypes.func.isRequired,
};
