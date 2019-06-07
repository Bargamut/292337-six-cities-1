import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/reducer';
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

/* eslint-disable camelcase */
App.propTypes = {
  city: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  citiesPlaces: PropTypes.array.isRequired,
  onChangeCity: PropTypes.func.isRequired
};
/* eslint-enable */

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    city: state.city,
    cities: [...new Set(state.citiesPlaces.map((offer) => {
      return offer.city.name;
    }))],
    citiesPlaces: state.citiesPlaces
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
