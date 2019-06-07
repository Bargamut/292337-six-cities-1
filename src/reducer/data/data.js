const initialState = {
  city: `Amsterdam`,
  citiesPlaces: []
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_OFFERS: `LOAD_OFFERS`
};

const ActionCreator = {
  changeCity: (city) => {
    return {
      type: ActionType.CHANGE_CITY,
      payload: city
    };
  },

  loadOffers: (citiesPlaces) => {
    return {
      type: ActionType.LOAD_OFFERS,
      payload: citiesPlaces
    };
  }
};

const Operation = {
  loadOffers: () => (dispatch, _getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(response.data));
      });
  }
};

const BusinessLogic = {};

const reducer = function (state = initialState, action) {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {
        city: action.payload
      });

    case ActionType.LOAD_OFFERS:
      return Object.assign({}, state, {
        citiesPlaces: action.payload
      });
  }

  return state;
};

export {
  ActionType,
  ActionCreator,
  Operation,
  BusinessLogic,
  reducer
};
