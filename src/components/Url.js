import React, { Component, PropTypes } from 'react';

export default class Url extends Component {
  render() {
    const { value } = this.props;
    return <p>{value}</p>;
  }
}

Url.propTypes = {
  value: PropTypes.string.isRequired,
};
