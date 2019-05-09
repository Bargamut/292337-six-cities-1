import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main/main.jsx';

const App = (props) => {
  const {citiesPlaces: placesNames, onClickHeader} = props;

  return <MainPage
    placesNames={placesNames}
    onClickHeader={onClickHeader}
  />;
};

App.propTypes = {
  citiesPlaces: PropTypes.arrayOf(PropTypes.string),
  onClickHeader: PropTypes.func.isRequired
};


export default App;
