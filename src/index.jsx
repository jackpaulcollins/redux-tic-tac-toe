import { createStore } from 'redux';
import gameReducer from './game-reducer';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

const store = createStore(gameReducer);

const render = (Component) => {
  ReactDOM.render(
    <Provider>
      <Component/>
    </Provider>
    document.getElementById('react-app-root');
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  });
}
