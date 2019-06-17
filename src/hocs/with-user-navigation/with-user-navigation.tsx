import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {compose} from 'recompose';
import {connect} from 'react-redux';

import {ActionCreator} from '../../reducer/user/user';
import {checkAuthorization, getUserInfo} from '../../reducer/user/selectors';

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
          // isAuthorizationRequired={this.props.isAuthorizationRequired}
          // user={user}
        />
      );
    }
  }

  WithUserNavigation.propTypes = {
    isAuthorizationRequired: PropTypes.bool,
    signIn: PropTypes.func,
    user: PropTypes.shape({
      id: PropTypes.number,
      email: PropTypes.string,
      name: PropTypes.string,
      avatarUrl: PropTypes.string,
      isPro: PropTypes.bool
    })
  };

  return WithUserNavigation;
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    isAuthorizationRequired: checkAuthorization(state),
    user: getUserInfo(state)
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
