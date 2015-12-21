export function ret(value) {
  return {
    type: 'return',
    value,
  };
}

export function call(command) {
  return {
    type: 'call',
    command,
  };
}

export function then(x, f) {
  return {
    type: 'then',
    x,
    f,
  };
}

export function join(x, y) {
  return {
    type: 'join',
    x,
    y,
  };
}
