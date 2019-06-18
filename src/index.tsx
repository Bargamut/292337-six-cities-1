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

import App from './components/app/app.jsx';
import SvgSprite from './components/svg-sprite/svg-sprite.jsx';
import Header from './components/header/header.jsx';

declare const __REDUX_DEVTOOLS_EXTENSION__: () => any;

/*
  TODO:
  Замените во всём проекте валидацию props, выполненную с помощью пакета prop-types, на необходимые интерфейсы с помощью TypeScript. Действуйте по порядку: сначала компоненты, затем HoC (включая типизацию state) и в последнюю очередь index.tsx. Не забудьте проверить работоспособность внесённых изменений и исправить ошибки компилятора.
*/

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
          __REDUX_DEVTOOLS_EXTENSION__
            ? __REDUX_DEVTOOLS_EXTENSION__()
            : (a) => a
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
