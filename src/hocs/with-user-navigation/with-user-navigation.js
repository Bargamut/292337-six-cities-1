import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {compose} from 'recompose';
import {connect} from 'react-redux';

import {ActionCreator} from '../../reducer/user/user';
import {checkAuthorization} from '../../reducer/user/selectors';

const withUserNavigation = (Component) => {
  class WithUserNavigation extends PureComponent {
    constructor(props) {
      super(props);

      this._handleClickSignIn = this._handleClickSignIn.bind(this);
    }

    _handleClickSignIn(evt) {
      evt.preventDefault();

      this.props.signIn();
    }

    render() {
      return (
        <Component
          {...this.props}
          onClickSignIn={this._handleClickSignIn}
          isAuthorizationRequired={this.props.isAuthorizationRequired}
        />
      );
    }
  }

  WithUserNavigation.propTypes = {
    isAuthorizationRequired: PropTypes.bool,
    signIn: PropTypes.func
  };

  return WithUserNavigation;
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    isAuthorizationRequired: checkAuthorization(state)
  });
};

const mapDispatchToProps = (dispatch) => ({
  signIn: () => {
    dispatch(ActionCreator.requireAuthorization(true));
  }
});

export {withUserNavigation};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withUserNavigation
);
