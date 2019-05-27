const initialState = {
  cityCoords: [52.38333, 4.9],
  offers: [
    {
      type: `Apartment`,
      img: `img/apartment-01.jpg`,
      mark: `Premium`,
      name: `Beautiful &amp; luxurious apartment at great location`,
      price: {
        value: 120,
        currency: `€`
      },
      rating: 93,
      coords: [52.3909553943508, 4.85309666406198]
    },
    {
      type: `Private room`,
      img: `img/room.jpg`,
      name: `Wood and stone place`,
      price: {
        value: 80,
        currency: `€`
      },
      rating: 80,
      coords: [52.369553943508, 4.85309666406198]
    },
    {
      type: `Apartment`,
      img: `img/apartment-02.jpg`,
      name: `Canal View Prinsengracht`,
      price: {
        value: 132,
        currency: `€`
      },
      rating: 80,
      coords: [52.3909553943508, 4.929309666406198]
    },
    {
      type: `Apartment`,
      img: `img/apartment-03.jpg`,
      mark: `Premium`,
      name: `Nice, cozy, warm big bed apartment`,
      price: {
        value: 180,
        currency: `€`
      },
      rating: 100,
      coords: [52.3809553943508, 4.939309666406198]
    }
  ]
};

// eslint-disable-next-line no-unused-vars
const BusinessLogic = {};

const ActionCreators = {
  'CHANGE_CITY': () => {
    return {
      type: `CHANGE_CITY`,
      payload: [0, 0]
    };
  },
  'GET_OFFERS': () => {
    return {
      type: `GET_OFFERS`
    };
  }
};

const reducer = function (state, action) {
  const updatedState = {};

  switch (action.type) {
    case `CHANGE_CITY`:
      Object.assign(updatedState, state, {
        cityCoords: action.payload
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
