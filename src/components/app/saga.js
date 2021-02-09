import { call, takeEvery, put } from 'redux-saga/effects';
import { fetchLogs } from '../../api/loadLogs';

import { loadLogsSuccess, loadLogsFailure, setLoading } from './actions';

import { LOAD_LOGS } from './constants';

export function* loadLogsData({ payload }) {
  yield put(setLoading(true));
  const result = yield call(fetchLogs, payload);

  if (result.error) {
    yield put(setLoading(false));
    const { data, status } = result.error.response;
    yield put(loadLogsFailure({ data, status }));
  } else {
    yield put(setLoading(false));
    yield put(loadLogsSuccess(result.data));
  }
  yield put(setLoading(false));
}

export function* loadLogsSaga() {
  yield takeEvery(LOAD_LOGS, loadLogsData);
}
