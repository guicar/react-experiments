import React, { Component, PropTypes } from 'react';

export default class Refresh extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div>
        <button onClick={onClick}>Refresh</button>
      </div>
    );
  }
}

Refresh.propTypes = {
  onClick: PropTypes.func.isRequired,
};
