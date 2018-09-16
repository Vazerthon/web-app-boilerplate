export const constants = {
  setRoute: '[APP] set route',
  navigate: '[APP] navigate to route',
  loadMessage: '[APP] load boilerplate message',
  setMessage: '[APP] set boilerplate message',
};

export const actions = {
  setRoute: route => ({ type: constants.setRoute, payload: route }),
  navigate: route => ({ type: constants.navigate, payload: route }),
  loadMessage: () => ({ type: constants.loadMessage }),
  setMessage: msg => ({ type: constants.setMessage, payload: msg }),
};
