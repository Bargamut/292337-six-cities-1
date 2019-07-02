import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {compose} from 'recompose';
import {configureAPI} from './api';

import history from './history';
import {Router} from 'react-router-dom';

import reducer from './reducer/reducer';
import {Operation} from './reducer/data/data';

import withScreenSwitch from './hocs/with-screen-switch/with-screen-switch';
import withUserNavigation from './hocs/with-user-navigation/with-user-navigation';

import App from './components/app/app';
import SvgSprite from './components/svg-sprite/svg-sprite';
import Header from './components/header/header';

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
const isHaveReduxDevTools = composeEnhancers && process.env.NODE_ENV !== `production`;

const HeaderWrapped = withUserNavigation(Header);

const AppWrapped = withScreenSwitch(App);

const init = () => {
  const api = configureAPI(
      () => history.push(`/login`)
  );

  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          isHaveReduxDevTools ? composeEnhancers() : (a) => a
      )
  );

  store.dispatch(Operation.loadOffers());

  ReactDOM.render(
      <Provider store={store}>
        <Router history={history}>
          <SvgSprite />

          <HeaderWrapped />

          <AppWrapped />
        </Router>
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
