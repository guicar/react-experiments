import C from './index';

export function run(computation, runCommand) {
  switch (computation.type) {
    case 'return':
      return computation;
    case 'call':
      return runCommand(computation.command);
    case 'then':
      const { x, f } = computation;
      return C.then(run(x, runCommand), result => run(f(result), runCommand));
    case 'join':
      const { x, y } = computation;
      return C.join(run(x, runCommand), run(y, runCommand));
    default:
      console.log('unknown computation type', computation);
  }
}

export function iterPar(array, f) {
  const [x, ...xs] = array;
  if (x === undefined) {
    return C.ret();
  }
  return C.then(
    C.join(f(x), iterPar(xs, f)),
    () => C.ret());
}
