export const setIncrement = (counter) => ({
  type: "SET_INC",
  counter,
});

export const setDecrement = (counter) => ({
  type: "SET_DEC",
  counter,
});

export const setRandom = (random) => ({
  type: "SET_RND",
  random,
});
