import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main/main.jsx';

const App = (props) => {
  const {citiesPlaces: placesNames} = props;

  return <MainPage
    placesNames={placesNames}
  />;
};

App.propTypes = {
  citiesPlaces: PropTypes.arrayOf(PropTypes.string)
};


export default App;
