import {combineReducers} from 'redux';
import {businessDayReducer} from './businessDayReducer';

const rootReducer = combineReducers({
  businessDay: businessDayReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
