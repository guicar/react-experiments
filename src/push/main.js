import { render } from './render';

export function handle(event, state) {
  switch (event.type) {
    case 'init':
      render(state, handle);
      break;
    default:
      console.log('Unknown event', event);
  }
}