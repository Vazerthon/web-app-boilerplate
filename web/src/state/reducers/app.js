import { constants } from '../actions/app';

const defaultAppState = {
  route: '/',
  errors: [],
  showMenu: false,
};

const appReducer = (state = defaultAppState, action) => {
  switch (action.type) {
    case constants.setRoute:
      return { ...state, route: action.payload, showMenu: false };
    default:
      return state;
  }
};

export default appReducer;
