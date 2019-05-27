import mockOffers from '../mocks/offers.js';

const initialState = {
  city: `Amsterdam`,
  offers: mockOffers
};

// eslint-disable-next-line no-unused-vars
const BusinessLogic = {};

const ActionCreators = {
  'CHANGE_CITY': (city) => {
    return {
      type: `CHANGE_CITY`,
      payload: city
    };
  },
  'CHANGE_OFFERS': (offers) => {
    return {
      type: `CHANGE_OFFERS`,
      payload: offers
    };
  }
};

const reducer = function (state, action) {
  const updatedState = {};

  switch (action.type) {
    case `CHANGE_CITY`:
      Object.assign(updatedState, state, {
        city: action.payload
      });
      break;
    case `CHANGE_OFFERS`:
      Object.assign(updatedState, state, {
        offers: action.payload
      });
      break;
    default:
      Object.assign(updatedState, initialState);
      break;
  }

  return updatedState;
};

export {reducer, ActionCreators};
