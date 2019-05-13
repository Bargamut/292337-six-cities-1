import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main/main.jsx';

const App = (props) => {
  const {citiesPlaces, onClickCardHeader, onClickCardImage} = props;

  return <MainPage
    citiesPlaces={citiesPlaces}
    onClickCardHeader={onClickCardHeader}
    onClickCardImage={onClickCardImage}
  />;
};

App.propTypes = {
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
        rating: PropTypes.number.isRequired
      })
  ).isRequired,
  onClickCardHeader: PropTypes.func.isRequired,
  onClickCardImage: PropTypes.func.isRequired
};


export default App;
