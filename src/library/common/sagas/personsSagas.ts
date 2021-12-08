import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchPersonsFailure, fetchPersonsSuccess } from "library/common/actions/personsActions";
import { FETCH_PERSONS_REQUEST } from "library/common/actionTypes/personsTypes";

function* fetchPersonsSaga({id}: any ): any {
	try {
		const getPersons = () => 
			axios.get<any>(`https://swapi.dev/api/people/?search=${id}`);
		const response = yield call(getPersons);
		yield put(
		fetchPersonsSuccess({
			persons: response.data,
		})
	);
  } catch (e: any) {
	yield put(
			fetchPersonsFailure({
				error: e.message,
			})
		);
	}
}

function* personsSaga() {
	yield all([takeLatest(FETCH_PERSONS_REQUEST, fetchPersonsSaga)]);
}

export default personsSaga;