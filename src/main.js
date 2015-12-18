import { handle } from './push/main';

const state = 'hi';

handle({ type: 'render' }, state);
