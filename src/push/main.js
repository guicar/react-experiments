import { render } from './render';

export function handle(event, state) {
  switch (event.type) {
    case 'render':
      render(state, handle);
      break;
    case 'input':
      const { value } = event;
      state = value;
      handle({ type: 'render' });
      break;
    default:
      console.log('Unknown event', event);
  }
}
