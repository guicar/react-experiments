import C from './index';

export function iterPar(array, f) {
  const [x, ...xs] = array;
  if (x === undefined) {
    return C.ret();
  }
  return C.then(
    C.join(f(x), iterPar(xs, f)),
    () => C.ret());
}
