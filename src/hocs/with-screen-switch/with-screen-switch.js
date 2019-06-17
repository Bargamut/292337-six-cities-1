import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {compose} from 'recompose';
import {connect} from 'react-redux';

import {ActionCreator as DataActionCreator} from '../../reducer/data/data';
import {
  getSelectedPlaces,
  getCities,
  getCity
} from '../../reducer/data/selectors';
import {checkAuthorization} from '../../reducer/user/selectors';

import withAuthorization from '../with-authorization/with-authorization';

import SignIn from '../../components/sign-in/sign-in.jsx';
import MainPage from '../../components/main/main.jsx';

const SignInWrapped = withAuthorization(SignIn);

const withScreenSwitch = (Component) => {
  class WithScreenSwitch extends PureComponent {
    constructor(props) {
      super(props);

      this._getScreen = this._getScreen.bind(this);
    }

    render() {
      return (
        <Component
          {...this.props}
          renderScreen={this._getScreen}
        />
      );
    }

    _getScreen() {
      const {
        city,
        cities,
        citiesPlaces,
        onChangeCity
      } = this.props;

      if (this.props.isAuthorizationRequired) {
        return <SignInWrapped />;
      }

      return (
        <MainPage
          city={city}
          cities={cities}
          citiesPlaces={citiesPlaces}
          onChangeCity={onChangeCity}
        />
      );
    }
  }

  WithScreenSwitch.propTypes = {
    city: PropTypes.string.isRequired,
    cities: PropTypes.arrayOf(PropTypes.string).isRequired,
    citiesPlaces: PropTypes.array.isRequired,
    onChangeCity: PropTypes.func.isRequired,
    isAuthorizationRequired: PropTypes.bool
  };

  return WithScreenSwitch;
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    city: getCity(state),
    cities: getCities(state),
    citiesPlaces: getSelectedPlaces(state),
    isAuthorizationRequired: checkAuthorization(state)
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeCity: (city) => {
      dispatch(DataActionCreator.changeCity(city));
    }
  };
};

export {withScreenSwitch};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withScreenSwitch
);
