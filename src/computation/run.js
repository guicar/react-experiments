import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App.js';

let state = {
  urls: ['gg', 'rr'],
  url: '',
};

export function render(runCallback) {
  ReactDOM.render(
    <App state={state} run={runCallback} />,
    document.getElementById('react'));
}

function runCommand(command, runCallback) {
  console.log('runCommand', state, command);
  switch (command.type) {
    case 'init':
      return render(runCallback);
    case 'input':
      const { value } = command;
      state = { input: value };
      return render(runCallback);
    default:
      console.log('unknown command type', command);
  }
}

export function run(computation) {
  console.log('run', state, computation);
  switch (computation.type) {
    case 'return':
      const { value } = computation;
      return value;
    case 'call':
      const { command } = computation;
      return runCommand(command, run);
    case 'then':
      const { x, f } = computation;
      return run(f(run(x)));
    default:
      console.log('unknown computation type', computation);
  }
}
