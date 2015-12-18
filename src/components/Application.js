import React from 'react';
import Input from './Input';

export default ({ state, push }) =>
  <div>
    <h1>Experiments</h1>
    <Input value={state} onChange={event => push({ type: 'input', value: event.target.value })} />
  </div>;
