const initialState = {
  random: 0,
};

const setRandom = (state, action) => ({
  ...state,
  random: action.random,
});

const randomReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_RND":
      return setRandom(state, action);
    default:
      return state;
  }
};

export default randomReducer;
