const initialState = {
  city: `Amsterdam`,
  citiesPlaces: []
};

// eslint-disable-next-line no-unused-vars
const BusinessLogic = {};

const ActionCreator = {
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
        citiesPlaces: action.payload
      });
      break;
    default:
      Object.assign(updatedState, initialState);
      break;
  }

  return updatedState;
};

export {reducer, ActionCreator};
