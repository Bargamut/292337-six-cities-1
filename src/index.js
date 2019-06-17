import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {compose} from 'recompose';
import {configureAPI} from './api';

import reducer from './reducer/reducer';
import {Operation} from './reducer/data/data';

import withScreenSwitch from './hocs/with-screen-switch/with-screen-switch';

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
        <AppWrapped />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
