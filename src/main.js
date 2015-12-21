// import C from './computation/index';
import { render } from './computation/run';
import { run as logRun } from './computation/log';
import { run as logPush } from './computation/push';

// run(C.call({ type: 'init' }));
render(c => logRun(logPush(c)));
