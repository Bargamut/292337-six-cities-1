import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {compose} from 'recompose';
import {configureAPI} from './api';

import reducer from './reducer/reducer';
import {Operation} from './reducer/data/data';

import withScreenSwitch from './hocs/with-screen-switch/with-screen-switch';
import withUserNavigation from './hocs/with-user-navigation/with-user-navigation';

import App from './components/app/app.jsx';
import SvgSprite from './components/svg-sprite/svg-sprite.jsx';
import Header from './components/header/header.jsx';

const HeaderWrapped = withUserNavigation(Header);

const AppWrapped = withScreenSwitch(App);

const init = () => {
  const api = configureAPI((...args) => {
    return store.dispatch(...args);
  });

  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
  );

  store.dispatch(Operation.loadOffers());

  ReactDOM.render(
      <Provider store={store}>
        <SvgSprite />

        <HeaderWrapped />

        <AppWrapped />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
