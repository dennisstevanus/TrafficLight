import React from "react";
import ReactDOM from "react-dom";
import Lamp from "./Lamp";

const lamps = [
  { color: "red", defaultColor: "white" },
  { color: "yellow", defaultColor: "white" },
  { color: "green", defaultColor: "white" }
];

class App extends React.Component {
  state = {
    lamps,
    currentActiveLamp: null
  };

  componentDidMount() {
    setInterval(() => {
      const { lamps, currentActiveLamp } = this.state;
      const currentActiveLampIndex = lamps.findIndex(
        x => x.color === currentActiveLamp
      );
      const nextIndex = (currentActiveLampIndex + 1) % lamps.length;
      const nextColor = lamps[nextIndex].color;
      this.setState({ currentActiveLamp: nextColor });
    }, 1000);
  }

  render() {
    const { lamps, currentActiveLamp } = this.state;
    return (
      <div>
        {lamps.map((lampProps, idx) => {
          const { color, defaultColor } = lampProps;
          return (
            <Lamp
              key={idx}
              color={color}
              defaultColor={defaultColor}
              active={currentActiveLamp === color}
            />
          );
        })}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
