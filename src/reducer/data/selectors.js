import {createSelector} from 'reselect';
import NameSpace from '../namespaces';

import {normalizeKeys} from '../../helpers';

const NAME_SPACE = NameSpace.DATA;

export const getPlaces = (state) => state[NAME_SPACE].citiesPlaces
  .map((place) => normalizeKeys(place));

export const getCity = (state) => state[NAME_SPACE].city;

export const getSelectedPlaces = createSelector(
    getPlaces,
    getCity,
    (citiesPlaces, city) =>
      citiesPlaces
        .filter((place) => place.city.name === city)
);

export const getCities = createSelector(
    getPlaces,
    (citiesPlaces) => [
      ...new Set(
          citiesPlaces.map((offer) => offer.city.name)
      )
    ]
);

export const getOfferById = (id, state) => {
  return getPlaces(state).filter((place) => place.id === id)[0];
};

export const getComments = (state) => normalizeKeys(state[NAME_SPACE].comments);
