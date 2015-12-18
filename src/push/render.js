import React from 'react';
import ReactDOM from 'react-dom';
import Application from '../components/Application.js';

export function render(state, push) {
  ReactDOM.render(<Application state={state} push={push} />, document.getElementById('react'));
}
