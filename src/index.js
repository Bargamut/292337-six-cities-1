import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const init = () => {
  const settings = {
    citiesPlaces: [
      `Beautiful &amp; luxurious apartment at great location`,
      `Wood and stone place`,
      `Canal View Prinsengracht`,
      `Nice, cozy, warm big bed apartment`
    ],
    onClickHeader: () => {}
  };

  ReactDOM.render(
      <App
        citiesPlaces={settings.citiesPlaces}
        onClickHeader={settings.onClickHeader}
      />,
      document.querySelector(`#root`)
  );
};

init();
