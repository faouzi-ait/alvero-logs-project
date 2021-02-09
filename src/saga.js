import { all } from 'redux-saga/effects';
import { loadLogsSaga } from './components/app/saga';

export function* sagas() {
  yield all([loadLogsSaga()]);
}
