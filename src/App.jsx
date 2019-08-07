import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter />
      </Provider>
    );
  }
}

export default App;
