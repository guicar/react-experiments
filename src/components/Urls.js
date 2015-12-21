import React, { Component, PropTypes } from 'react';
import Url from './Url';

export default class Urls extends Component {
  render() {
    const { urls } = this.props;
    return (
      <ul>
        {urls.map(url => <Url key={url.url} url={url.url} size={url.size} />)}
      </ul>
    );
  }
}

Urls.propTypes = {
  urls: PropTypes.array.isRequired,
};
