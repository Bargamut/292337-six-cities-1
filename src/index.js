import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const citiesPlaces = [
  `Beautiful &amp; luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`
];

const init = () => {
  ReactDOM.render(
      <App
        citiesPlaces={citiesPlaces}
      />,
      document.querySelector(`#root`)
  );
};

init();
