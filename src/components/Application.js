import React, { Component, PropTypes } from 'react';
import Input from './Input';
import C from '../computation/index';

export default class Application extends Component {
  render() {
    const { state, run } = this.props;
    const { input } = state;
    const onChange = event => C.call({
      type: 'input',
      value: event.target.value,
    });
    return (
      <div>
        <h1>Experiments</h1>
        <Input value={input} onChange={event => run(onChange(event))} />
      </div>
    );
  }
}

Application.propTypes = {
  state: PropTypes.shape({
    input: PropTypes.string.isRequired,
  }).isRequired,
  run: PropTypes.func.isRequired,
};
