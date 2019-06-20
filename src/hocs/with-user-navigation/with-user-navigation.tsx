import * as React from 'react';

import {compose} from 'recompose';
import {connect} from 'react-redux';

import {ActionCreator} from '../../reducer/user/user';
import {checkAuthorization, getUserInfo} from '../../reducer/user/selectors';
import {User} from '../../types';
import { Subtract } from 'utility-types';

interface Props {
  isAuthorizationRequired: boolean,
  signIn: () => void,
  user: User
}

interface InjectedProps {
  onClickSignIn: (evt: React.MouseEvent) => void
}

const withUserNavigation = (Component) => {
  type P = Props & React.ComponentProps<typeof Component>;

  type T = Subtract<P, InjectedProps>;

  class WithUserNavigation extends React.PureComponent<T> {
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
        />
      );
    }
  }

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
