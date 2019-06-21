import NameSpace from '../namespaces';
import {normalizeKeys} from '../../helpers';

const NAME_SPACE = NameSpace.USER;

export const checkAuthorizationRequired = (state) => state[NAME_SPACE].isAuthorizationRequired;

export const checkAuthorization = (state) => (Object.keys(state[NAME_SPACE].user).length > 0);

export const getUserInfo = (state) => normalizeKeys(state[NAME_SPACE].user);
