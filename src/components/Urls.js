import React, { Component, PropTypes } from 'react';
import Url from './Url';

export default class Urls extends Component {
  render() {
    const { urls } = this.props;
    return (
      <div>
        {urls.map(url => <Url value={url} />)}
      </div>
    );
  }
}

Urls.propTypes = {
  urls: PropTypes.array.isRequired,
};
