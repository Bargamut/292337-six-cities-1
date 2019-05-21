import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

import settings from './mocks/settings';
import offers from './mocks/offers';

const init = (citiesPlaces, appSettings) => {
  ReactDOM.render(
      <App
        cityCoords={appSettings.cityCoords}
        citiesPlaces={citiesPlaces}
        onClickCardHeader={appSettings.onClickCardHeader}
        onClickCardImage={appSettings.onClickCardImage}
      />,
      document.querySelector(`#root`)
  );
};

init(offers, settings);
