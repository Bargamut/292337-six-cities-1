import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {compose} from 'recompose';
import {connect} from 'react-redux';
import {configureAPI} from '../../api';
import {ActionCreator} from '../../reducer/user/user';

import history from '../../history';

const withAuthorization = (Component) => {
  class WithAuthorization extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``
      };

      this._handleFormSubmit = this._handleFormSubmit.bind(this);
      this._handleInputChange = this._handleInputChange.bind(this);
    }

    _handleInputChange(evt, keyName) {
      const diffState = {};

      diffState[keyName] = evt.target.value;

      this.setState(diffState);
    }

    _handleFormSubmit(evt) {
      evt.preventDefault();

      this.props.login(this.state);
    }

    render() {
      return (
        <Component
          {...this.props}
          onInputChange={this._handleInputChange}
          onFormSubmit={this._handleFormSubmit}
          isSubmitDisabled={!this.state.email || !this.state.password}
        />
      );
    }
  }

  WithAuthorization.propTypes = {
    login: PropTypes.func
  };

  return WithAuthorization;
};

const mapDispatchToProps = (dispatch) => ({
  login: (form) => {
    configureAPI(dispatch)
      .post(`/login`, form)
      .catch(() => {
        dispatch(ActionCreator.requireAuthorization(true));
      })
      .then((response) => {
        dispatch(ActionCreator.login(response.data));
        dispatch(ActionCreator.requireAuthorization(false));

        history.push(`/`);
      });
  }
});

export {withAuthorization};

export default compose(
    connect(null, mapDispatchToProps),
    withAuthorization
);
