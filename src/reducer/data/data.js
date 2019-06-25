const initialState = {
  city: `Amsterdam`,
  citiesPlaces: [],
  comments: []
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_COMMENTS: `LOAD_COMMENTS`
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
  },

  loadComments: (comments) => {
    return {
      type: ActionType.LOAD_COMMENTS,
      payload: comments
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

    case ActionType.LOAD_COMMENTS:
      return Object.assign({}, state, {
        comments: action.payload
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
