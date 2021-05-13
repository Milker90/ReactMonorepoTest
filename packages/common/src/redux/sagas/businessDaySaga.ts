import {call, put, all, fork, takeLeading} from 'redux-saga/effects';
import {requestWorkOutNextBusinessDay} from '../../services/holidayServices';
import * as actions from '../types';
import * as actionCreators from '../actions/businessDay';
import {WorkOutNextBusinessDayResponse} from '../../types';

function* workOutNextBusinessDay(action: actions.WorkOutNextBusinessDayAction) {
  try {
    yield put(action);
    const response: WorkOutNextBusinessDayResponse = yield call(
      requestWorkOutNextBusinessDay,
      action.currentDate,
      action.country,
      action.state,
      action.region,
    );
    yield put(
      actionCreators.workOutNextBusinessDaySuccess(response.nextBusinessDay),
    );
  } catch (error) {
    console.log(error);
    yield put(actionCreators.workOutNextBusinessDayFailed(error));
  }
}

function* watchOnWorkOutNextBusinessDay() {
  yield takeLeading(actions.WORK_OUT_NEXT_BUSINESS_DAY, workOutNextBusinessDay);
}

export default function* businessDaySaga() {
  yield all([fork(watchOnWorkOutNextBusinessDay)]);
}
