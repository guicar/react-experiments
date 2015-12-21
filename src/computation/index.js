export default {
  ret(value) {
    return {
      type: 'return',
      value,
    };
  },

  call(command) {
    return {
      type: 'call',
      command,
    };
  },

  then(x, f) {
    return {
      type: 'then',
      x,
      f,
    };
  },

  join(x, y) {
    return {
      type: 'join',
      x,
      y,
    };
  },
};
