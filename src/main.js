import {handle} from './push/main';

let state = 'hi';

handle({type: 'init'}, state);
