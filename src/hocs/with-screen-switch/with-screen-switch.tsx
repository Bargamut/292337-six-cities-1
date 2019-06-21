import * as React from 'react';
import {Offer} from '../../types';

import {compose} from 'recompose';
import {connect} from 'react-redux';

import {Switch, Route, Redirect} from 'react-router-dom';

import {ActionCreator as DataActionCreator} from '../../reducer/data/data';
import {
  getSelectedPlaces,
  getCities,
  getCity
} from '../../reducer/data/selectors';
import {checkAuthorization} from '../../reducer/user/selectors';

import withAuthorization from '../with-authorization/with-authorization';

import Favorites from '../../components/favorites-page/favorites-page';
import SignIn from '../../components/sign-in/sign-in';
import MainPage from '../../components/main/main';
import { Subtract } from 'utility-types';

const SignInWrapped = withAuthorization(SignIn);

interface Props {
  city: string,
  cities: string[],
  citiesPlaces: Offer[],
  onChangeCity: (cityName: string) => void,
  isAuthorizationRequired: boolean
};

interface InjectedProps {
  renderScreen: () => React.ReactNode
}

const withScreenSwitch = (Component) => {
  type P = Props & React.ComponentProps<typeof Component>;

  type T = Subtract<P, InjectedProps>;

  class WithScreenSwitch extends React.PureComponent<T> {
    constructor(props) {
      super(props);

      this._getScreen = this._getScreen.bind(this);
    }

    render() {
      return (
        <Switch>
          <Route path="/login" render={() => (
            <SignInWrapped />
          )} />

          <Route path="/favorites" render={() => (
            <Favorites />
          )} />

          <Route path="/" exact render={() => (
            <Component
              {...this.props}
              renderScreen={this._getScreen}
            />
          )} />
        </Switch>
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
        return <Redirect to="/login" />;
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
