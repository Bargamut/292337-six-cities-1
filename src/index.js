import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import settings from './mocks/settings';
import offers from './mocks/offers';
import {reducer} from '../reducer/reducer.js';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const init = (citiesPlaces, appSettings) => {
  ReactDOM.render(
      <Provider store={store}>
        <App
          cityCoords={appSettings.cityCoords}
          citiesPlaces={citiesPlaces}
          onClickCardHeader={appSettings.onClickCardHeader}
          onClickCardImage={appSettings.onClickCardImage}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init(offers, settings);
