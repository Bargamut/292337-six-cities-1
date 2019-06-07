import {combineReducers} from 'redux';
import {reducer as data} from './data/data';

import NameSpace from './namespaces';

export default combineReducers({
  [NameSpace.DATA]: data
});
