import { all, fork } from "redux-saga/effects";

import personsSaga from "library/common/sagas/personsSagas";

export default function* rootSaga() {
  yield all([
    fork(personsSaga),
  ]);
}