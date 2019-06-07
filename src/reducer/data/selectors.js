import {createSelector} from 'reselect';
import NameSpace from '../namespaces';

const NAME_SPACE = NameSpace.DATA;

export const getPlaces = (state) => state[NAME_SPACE].citiesPlaces;

export const getCity = (state) => state[NAME_SPACE].city;

export const getCities = createSelector(
    getPlaces,
    (citiesPlaces) => [
      ...new Set(
          citiesPlaces.map((offer) => offer.city.name)
      )
    ]
);
