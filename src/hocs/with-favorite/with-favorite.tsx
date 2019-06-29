import * as React from 'react';
import history from '../../history';
import { configureAPI } from '../../api';
import { AxiosResponse } from 'axios';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { checkAuthorization } from '../../reducer/user/selectors';
import { ActionCreator } from '../../reducer/data/data';

interface Props {
  id: number,
  isFavorite: boolean,
  isLoggedIn: boolean,
  onFavoriteChange: (id: number, isFavorite: boolean) => void
}

const withFavorite = (Component) => {
  const WithFavorite = (props: Props) => {
    const {id, isLoggedIn, isFavorite, onFavoriteChange} = props;

    const _handleFavoriteClick = () => {
      return !isLoggedIn
        ? history.push(`/login`)
        : onFavoriteChange(id, !isFavorite)
    }

    return (
      <Component
        {...props}
        onFavoriteClick={_handleFavoriteClick}
      />
    );
  }

  return WithFavorite;
};

const mapStateToProps = (state: object) => ({
  isLoggedIn: checkAuthorization(state)
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteChange: (id: number, isFavorite: boolean) => {
    configureAPI(dispatch)
      .post(`/favorite/${id}/${isFavorite ? 1 : 0}`)
      .then((response: AxiosResponse) => {
        dispatch(ActionCreator.updateOffer(response.data));
      })
  }
});

export {withFavorite}
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withFavorite
);
