import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreators} from '../../reducers/reducer';
import MainPage from '../main/main.jsx';

const App = (props) => {
  const {
    cityCoords,
    citiesPlaces
  } = props;

  return <MainPage
    cityCoords={cityCoords}
    citiesPlaces={citiesPlaces}
  />;
};

App.propTypes = {
  cityCoords: PropTypes.arrayOf(PropTypes.number).isRequired,
  citiesPlaces: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf([`Apartment`, `Private room`]).isRequired,
        img: PropTypes.string.isRequired,
        mark: PropTypes.oneOf([`Premium`]),
        name: PropTypes.string.isRequired,
        price: PropTypes.shape({
          value: PropTypes.number.isRequired,
          currency: PropTypes.oneOf([`€`]).isRequired
        }).isRequired,
        rating: PropTypes.number.isRequired,
        coords: PropTypes.arrayOf(PropTypes.number).isRequired
      })
  ).isRequired
};


const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    cityCoords: state.cityCoords,
    citiesPlaces: state.citiesPlaces
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeCity: (city) => {
      dispatch(ActionCreators[`CHANGE_CITY`](city));
    },
    onGetPlaces: (city) => {
      dispatch(ActionCreators[`GET_OFFERS`](city));
    }
  };
};

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
