const initialState = {
  counter: 0,
};

const setIncrement = (state, action) => ({
  ...state,
  counter: action.counter,
});

const setDecrement = (state, action) => ({
  ...state,
  counter: action.counter,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_INC":
      return setIncrement(state, action);
    case "SET_DEC":
      return setDecrement(state, action);
    default:
      return state;
  }
};

export default reducer;
