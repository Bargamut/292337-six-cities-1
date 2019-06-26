import axios from 'axios';

export const configureAPI = (onLoginFail: () => void) => {
  const api = axios.create({
    baseURL: `https://es31-server.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    if ([400, 403].indexOf(err.response.status) > -1) {
      onLoginFail();

      return;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
