import React, { Component, PropTypes } from 'react';
import Urls from './Urls';
import Add from './Add';
import Refresh from './Refresh';
import C from '../computation/index';

export default class App extends Component {
  render() {
    const { state, run } = this.props;
    const { urls, url } = state;
    const onChangeUrl = event => run(C.call({
      type: 'changeUrl',
      value: event.target.value,
    }));
    const onAdd = () => run(C.call({
      type: 'addUrl',
    }));
    const onRefresh = () => run(C.call({
      type: 'refresh',
    }));
    return (
      <div>
        <h1>Experiments</h1>
        <Urls urls={urls} />
        <Add value={url} onChange={onChangeUrl} onSubmit={onAdd} />
        <Refresh onClick={onRefresh} />
      </div>
    );
  }
}

App.propTypes = {
  state: PropTypes.shape({
    urls: PropTypes.array.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  run: PropTypes.func.isRequired,
};
