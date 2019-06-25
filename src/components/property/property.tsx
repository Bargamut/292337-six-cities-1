import * as React from 'react';
import {Location, Offer, ReviewItem} from '../../types';

import {connect} from 'react-redux';
import {configureAPI} from '../../api';

import {ActionCreator as dataActionCreator} from '../../reducer/data/data';
import {getOfferById, getSelectedPlaces, getComments} from '../../reducer/data/selectors';
import ReviewsList from '../reviews-list/reviews-list';
import PlacesList from '../places-list/places-list';
import CitiesMap from '../cities-map/cities-map';

import withActiveItem from '../../hocs/with-active-item/with-active-item';

const PlacesListWrapped = withActiveItem(PlacesList);

interface Props {
  offer: Offer,
  nearOffers: Offer[],
  comments: ReviewItem[],
  loadComments: () => ReviewItem[]
}

class Property extends React.PureComponent<Props> {
  componentDidMount(): void {
    this.props.loadComments();
  }

  render() {
    const {
      offer,
      nearOffers,
      comments
    } = this.props;

    if (!offer) {
      return null;
    }

    const nearPlacesCoords: Location[] = nearOffers.map((offer) => offer.location);

    return (
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                offer.images.map((src, i) => {
                  return (
                    <div key={`property__image-${i}`} className="property__image-wrapper">
                      <img className="property__image" src={src} alt="Photo studio" />
                    </div>
                  );
                })
              }
            </div>
          </div>

          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isPremium ? (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              ) : ``}

              <div className="property__name-wrapper">
                <h1 className="property__name">{offer.title}</h1>

                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>

              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${offer.rating * 20}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>

                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>

              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  Entire place
                </li>

                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>

                <li className="property__feature property__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>

              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>

              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>

                <ul className="property__inside-list">
                  {offer.goods.map((item, i) => {
                    return <li key={`property__inside-item-${i}`} className="property__inside-item">{item}</li>;
                  })}
                </ul>
              </div>

              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>

                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">{offer.host.name}</span>
                  <span className="property__user-status">{offer.host.isPro ? `Pro` : ``}</span>
                </div>

                <div className="property__description">
                  <p className="property__text">{offer.description}</p>
                </div>
              </div>

              <ReviewsList
                comments={comments}
              />
            </div>
          </div>

          <CitiesMap
            location={offer.location}
            placesCoords={nearPlacesCoords}
            hasActivePoint={true}
            className="property__map"
          />
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>

            <PlacesListWrapped
              citiesPlaces={nearOffers}
              className="near-places__list"
            />
          </section>
        </div>
      </main>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.id);

  return Object.assign({}, ownProps, {
    id: id,
    offer: getOfferById(id, state),
    nearOffers: getSelectedPlaces(state)
      .filter((offer) => parseInt(offer.id) !== id)
      .slice(0, 3),
    comments: getComments(state)
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadComments: () => {
    configureAPI(dispatch)
      .get(`/comments/${ownProps.match.params.id}`)
        .then((response) => {
          dispatch(dataActionCreator.loadComments(response.data));
        })
        .catch((error) => console.log(error));
  }
});

export {Property};

export default connect(mapStateToProps, mapDispatchToProps)(Property);
