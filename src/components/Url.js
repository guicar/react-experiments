import React, { Component, PropTypes } from 'react';

export default class Url extends Component {
  render() {
    const { url, size } = this.props;
    return (
      <li>
        <p>{url}</p>
        <p>{size}</p>
      </li>);
  }
}

Url.propTypes = {
  url: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};
