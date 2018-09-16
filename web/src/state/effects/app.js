import { put, takeEvery, call } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import history from '../history';

import { constants, actions } from '../actions/app';

function* navigate({ payload }) {
  yield call(history.push, payload);
  yield put(actions.setRoute(payload));
}

const historyWatcher = () => eventChannel(emitter => history.listen(location => {
  emitter(actions.setRoute(location.pathname));
}));

function* routerSaga() {
  yield put(actions.setRoute(history.location.pathname));

  yield takeEvery(constants.navigate, navigate);

  const browserNavigationEvent = historyWatcher();
  yield takeEvery(browserNavigationEvent, put);
}

const appSagas = [routerSaga];

export default appSagas;
