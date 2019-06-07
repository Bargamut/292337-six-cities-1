const initialState = {
  isAuthorizationReauired: false
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status
    };
  }
};

const reducer = function (state = initialState, action) {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        isAuthorizationReauired: action.payload
      });
  }

  return state;
};

export {
  ActionType,
  ActionCreator,
  reducer
};
