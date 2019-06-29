import * as React from 'react';
import { Offer } from '../../types';
import { connect } from 'react-redux';

import { getFavoritePlaces } from '../../reducer/data/selectors';

import FavoritesList from '../favorites-list/favorites-list';

interface Props {
  favoritePlaces: Offer[]
}

const FavoritesPage:React.FunctionComponent<Props> = (props) => {
  const {favoritePlaces} = props;
  const hasFavorites = favoritePlaces && favoritePlaces.length > 0;

  const groupedFavorites = favoritePlaces.reduce((groupedOffers, offer) => {
    if (!groupedOffers[offer.city.name]) {
      groupedOffers[offer.city.name] = [];
    }

    groupedOffers[offer.city.name].push(offer);

    return groupedOffers;
  }, {});

  return (
    <main className={`page__main page__main--favorites ${!hasFavorites ? `page__main--favorites-empty` : ``}`}>
      <div className="page__favorites-container container">
        <section className={`favorites ${hasFavorites ? `favorites--empty` : ``}`}>
          {hasFavorites
            ? <h1 className="favorites__title">Saved listing</h1>
            : <h1 className="visually-hidden">Favorites (empty)</h1>
          }

          {hasFavorites
            ? <FavoritesList items={groupedFavorites} />
            : (
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
              </div>
            )
          }
        </section>
      </div>
    </main>
  );
};

const mapStateToProps = (state: object, ownProps: Props) => {
  return Object.assign({}, ownProps, {
    favoritePlaces: getFavoritePlaces(state)
  });
};

export {FavoritesPage};
export default connect(mapStateToProps)(FavoritesPage);
