import {all, fork} from 'redux-saga/effects';
import businessDaySaga from './businessDaySaga';

export default function* rootSaga() {
  yield all([fork(businessDaySaga)]);
}
