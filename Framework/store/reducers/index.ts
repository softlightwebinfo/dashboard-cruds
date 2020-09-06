import { combineReducers } from 'redux';

import translate from './translate';
import auth from './auth';
import global from './global';
import project from './project';

const rootReducer = combineReducers({
  translate,
  auth,
  global,
  project
});

export default rootReducer;
