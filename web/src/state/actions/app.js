export const constants = {
  setRoute: '[APP] set route',
  navigate: '[APP] navigate to route',
};

export const actions = {
  setRoute: route => ({ type: constants.setRoute, payload: route }),
  navigate: route => ({ type: constants.navigate, payload: route }),
};
