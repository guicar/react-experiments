import { render } from './render';

let state = {
  input: 'hi',
};

export function push(event) {
  console.log('push', event, state);
  switch (event.type) {
    case 'render':
      render(state, push);
      break;
    case 'input':
      const { value } = event;
      state = Object.assign({}, { input: value });
      push({ type: 'render' });
      break;
    default:
      console.log('Unknown event', event);
  }
}
