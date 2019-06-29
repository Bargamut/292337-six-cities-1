import * as React from 'react';
import { configureAPI } from '../../api';
import { AxiosResponse } from 'axios';
import { connect } from 'react-redux';

import { checkAuthorization } from '../../reducer/user/selectors';
import { ActionCreator } from '../../reducer/data/data';

interface Props {
  id: number,
  isFavorite: boolean,
  isLoggedIn: boolean,
  history: any[],
  onChangeFavorite: (id: number, isFavorite: boolean) => void
}

const withFavorites = (Component) => {
  const WithFavorite = (props: Props) => {
    const {id, isLoggedIn, isFavorite, history, onChangeFavorite} = props;

    const _handleFavoriteClick = () => {
      return !isLoggedIn
        ? history.push(`/login`)
        : onChangeFavorite(id, !isFavorite)
    }

    return (
      <Component
        {...props}
        onFavoritesClick={_handleFavoriteClick}
      />
    );
  }

  return WithFavorite;
};

const mapStateToProps = (state: object) => ({
  isLoggedIn: checkAuthorization(state)
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFavorite: (id: number, isFavorite: boolean) => {
    configureAPI(dispatch)
      .post(`/favorites/${id}`, isFavorite)
      .then((response: AxiosResponse) => {
        dispatch(ActionCreator.updateOffer(response.data));
      })
  }
});

export {withFavorites}
export default connect(mapDispatchToProps, mapStateToProps)(withFavorites);
