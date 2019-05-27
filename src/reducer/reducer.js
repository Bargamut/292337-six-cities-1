import offers from '../mocks/offers.js';

const initialState = {
  city: `Amsterdam`,
  offers
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
  'GET_OFFERS': (city) => {
    return {
      type: `GET_OFFERS`,
      payload: city
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
    case `GET_OFFERS`:
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
