import * as actions from '../types';
import produce from 'immer';

interface BusinessDayState {
  currentDate?: Date;
  nextBusinessDay?: string;
  nextBusinessDayLocal?: string;
  country?: string;
  state?: string;
  region?: string;
  isLoading?: boolean;
  error?: Error;
}

const initialState: BusinessDayState = {
  currentDate: undefined,
  nextBusinessDay: undefined,
  nextBusinessDayLocal: undefined,
  country: undefined,
  state: undefined,
  region: undefined,
  isLoading: false,
  error: undefined,
};

export function businessDayReducer(
  state: BusinessDayState = initialState,
  action: actions.WorkOutAction,
) {
  return produce(state, draft => {
    console.log(action);
    switch (action.type) {
      case actions.WORK_OUT_NEXT_BUSINESS_DAY:
        const startAction = action as actions.WorkOutNextBusinessDayAction;
        draft.currentDate = startAction.currentDate;
        draft.country = startAction.country;
        draft.state = startAction.state;
        draft.region = startAction.region;
        draft.isLoading = true;
        draft.error = undefined;
        draft.nextBusinessDay = undefined;
        draft.nextBusinessDayLocal = undefined;
        break;
      case actions.WORK_OUT_NEXT_BUSINESS_DAY_SUCCESS:
        const successAction = action as actions.WorkOutNextBusinessDaySuccessAction;
        draft.nextBusinessDay = successAction.nextBusinessDay;
        draft.nextBusinessDayLocal = new Date(
          successAction.nextBusinessDay,
        ).toLocaleDateString();
        draft.error = undefined;
        draft.isLoading = false;
        break;
      case actions.WORK_OUT_NEXT_BUSINESS_DAY_FAILED:
        const failedAction = action as actions.WorkOutNextBusinessDayFailedAction;
        draft.error = failedAction.error;
        draft.isLoading = false;
        break;
      default:
        break;
    }
  });
}
