import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducers/reducer';
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
  citiesPlaces: PropTypes.arrayOf(
      PropTypes.shape({
        city: PropTypes.string.isRequired,
        coords: PropTypes.arrayOf(PropTypes.number).isRequired,
        type: PropTypes.oneOf([`Apartment`, `Private room`]).isRequired,
        img: PropTypes.string.isRequired,
        mark: PropTypes.oneOf([``, `Premium`]),
        name: PropTypes.string.isRequired,
        price: PropTypes.shape({
          value: PropTypes.number.isRequired,
          currency: PropTypes.oneOf([`€`]).isRequired
        }).isRequired,
        rating: PropTypes.number.isRequired
      })
  ).isRequired,
  onChangeCity: PropTypes.func.isRequired
};


const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    city: state.city,
    cities: [...new Set(state.citiesPlaces.map((offer) => {
      return offer.city;
    }))],
    citiesPlaces: state.citiesPlaces
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeCity: (city) => {
      dispatch(ActionCreator[`CHANGE_CITY`](city));
    }
  };
};

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
