export const WORK_OUT_NEXT_BUSINESS_DAY = 'WORK_OUT_NEXT_BUSINESS_DAY';
export const WORK_OUT_NEXT_BUSINESS_DAY_SUCCESS =
  'WORK_OUT_NEXT_BUSINESS_DAY_SUCCESS';
export const WORK_OUT_NEXT_BUSINESS_DAY_FAILED =
  'WORK_OUT_NEXT_BUSINESS_DAY_FAILED';

export interface WorkOutNextBusinessDayAction {
  type: string;
  currentDate: string;
  country: string;
  state?: string;
  region?: string;
}

export interface WorkOutNextBusinessDaySuccessAction {
  type: string;
  nextBusinessDay: string;
}

export interface WorkOutNextBusinessDayFailedAction {
  type: string;
  error: Error;
}

export type WorkOutAction =
  | WorkOutNextBusinessDayAction
  | WorkOutNextBusinessDaySuccessAction
  | WorkOutNextBusinessDayFailedAction;
