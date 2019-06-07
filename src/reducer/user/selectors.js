import NameSpace from '../namespaces';

const NAME_SPACE = NameSpace.USER;

export const checkAuthorization = (state) => state[NAME_SPACE].isAuthorizationRequired;
