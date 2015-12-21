// Handling of events coming in push.
import C from './index';

function runCommand(command) {
  switch (command.type) {
    case 'changeUrl':
      return C.call({
        type: 'store',
        value: {
          type: 'changeUrl',
          value: command.value,
        },
      });
    case 'addUrl':
      return C.call({
        type: 'store',
        value: {
          type: 'addUrl',
        },
      });
    case 'refresh':
      return C.ret(); // TODO
    default:
      console.log('unknown command type', command);
  }
}

export function run(computation) {
  switch (computation.type) {
    case 'return':
      const { value } = computation;
      return value;
    case 'call':
      const { command } = computation;
      return runCommand(command);
    case 'then':
      const { x, f } = computation;
      return run(f(run(x)));
    default:
      console.log('unknown computation type', computation);
  }
}
