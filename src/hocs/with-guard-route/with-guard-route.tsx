import * as React from 'react';
import {Redirect} from 'react-router-dom';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {checkAuthorization} from '../../reducer/user/selectors';

interface Props {
  isLoggedIn: boolean
}

const withGuardRoute = (Component, accessLevel) => {
  return function(props: Props) {
    const {isLoggedIn} = props;

    if (!isLoggedIn && accessLevel === `user`) {
      return <Redirect to="/login" />;
    }

    if (isLoggedIn && accessLevel === `anonymous`) {
      return <Redirect to="/" />;
    }

    return <Component {...props} />
  };
};

const mapStateToProps = (state: object) => {
  isLoggedIn: checkAuthorization(state)
};

export {withGuardRoute};

export default compose(
  connect(mapStateToProps),
  withGuardRoute
);
