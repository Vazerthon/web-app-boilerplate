import { constants } from '../actions/app';

const defaultAppState = {
  route: '/',
  message: undefined,
};

const appReducer = (state = defaultAppState, action) => {
  switch (action.type) {
    case constants.setRoute:
      return { ...state, route: action.payload, showMenu: false };
    case constants.setMessage:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

export default appReducer;
