import * as actions from '../types';

export function workOutNextBusinessDay(
  currentDate: string,
  country: string,
  state?: string,
  region?: string,
): actions.WorkOutNextBusinessDayAction {
  return {
    type: actions.WORK_OUT_NEXT_BUSINESS_DAY,
    currentDate,
    country,
    state,
    region,
  };
}

export function workOutNextBusinessDaySuccess(
  nextBusinessDay: string,
): actions.WorkOutNextBusinessDaySuccessAction {
  return {
    type: actions.WORK_OUT_NEXT_BUSINESS_DAY_SUCCESS,
    nextBusinessDay,
  };
}

export function workOutNextBusinessDayFailed(
  error: Error,
): actions.WorkOutNextBusinessDayFailedAction {
  return {
    type: actions.WORK_OUT_NEXT_BUSINESS_DAY_FAILED,
    error,
  };
}
