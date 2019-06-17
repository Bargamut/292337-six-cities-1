import NameSpace from '../namespaces';
import {normalizeKeys} from '../../helpers';

const NAME_SPACE = NameSpace.USER;

export const checkAuthorization = (state) => state[NAME_SPACE].isAuthorizationRequired;

export const getUserInfo = (state) => normalizeKeys(state[NAME_SPACE].user);
