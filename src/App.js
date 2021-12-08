import { React } from "react";
import { connect } from "react-redux";

import { setDecrement, setIncrement, setRandom } from "./action";

const App = ({ setDecrement, setIncrement, setRandom, counter, random }) => {
  const setDec = () => {
    setDecrement(counter - 1);
  };

  const setInc = () => {
    setIncrement(counter + 1);
  };

  const setRnd = () => {
    setRandom(Math.floor(Math.random() * 100));
  };

  return (
    <div
      className="App"
      style={{
        textAlign: "center",
        fontSize: "50px",
      }}
    >
      <h1>Counter: {counter}</h1>
      <button onClick={setDec} style={{ padding: "20px 40px" }}>
        DEC
      </button>
      <button onClick={setInc} style={{ padding: "20px 40px" }}>
        INC
      </button>

      <h2>Random:{random}</h2>
      <button onClick={setRnd} style={{ padding: "20px 40px" }}>
        RND
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.reducer.counter,
    random: state.randomReducer.random,
  };
};

const mapDispatchToProps = {
  setIncrement,
  setDecrement,
  setRandom,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
