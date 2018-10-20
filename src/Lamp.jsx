import React, { Component } from "react";
import PropTypes from "prop-types";

class Lamp extends Component {

  static getDerivedStateFromProps(props, state) {
    console.log(props, state);
    if (props.active === state.active) {
      return {
        color: props.renderColor
      };
    } else {
      return {
        color: props.defaultColor
      };
    }
  }

  render() {
    // Move this next 2 line to the getStateFromDerivedProps fn
    // const { color: renderColor, defaultColor, active } = this.props;
    // const color = active ? renderColor : defaultColor;
    const color = this.props;
    console.log(this.color);
    return (
      <div
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          backgroundColor: color
        }}
      />
    );
  }
}

Lamp.propTypes = {
  defaultColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  active: PropTypes.bool
};

Lamp.defaultProps = {
  active: false
};

export default Lamp;
