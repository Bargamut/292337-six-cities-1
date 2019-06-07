import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/data/data';
import {
  getSelectedPlaces,
  getCities,
  getCity
} from '../../reducer/data/selectors';
import MainPage from '../main/main.jsx';

const App = (props) => {
  const {
    city,
    cities,
    citiesPlaces,
    onChangeCity
  } = props;

  return <MainPage
    city={city}
    cities={cities}
    citiesPlaces={citiesPlaces}
    onChangeCity={onChangeCity}
  />;
};

App.propTypes = {
  city: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  citiesPlaces: PropTypes.array.isRequired,
  onChangeCity: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    city: getCity(state),
    cities: getCities(state),
    citiesPlaces: getSelectedPlaces(state)
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeCity: (city) => {
      dispatch(ActionCreator.changeCity(city));
    }
  };
};

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
