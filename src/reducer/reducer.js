import {combineReducers} from 'redux';
import {reducer as data} from './data/data';
import {reducer as user} from './user/user';

import NameSpace from './namespaces';

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user
});
