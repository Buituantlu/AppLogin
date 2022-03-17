import axios from 'axios';
import strings from '../../utils/Strings';
import {ACCESS_TOKEN_KEY} from '../../utils/Constants';
import _ from 'lodash';
import {getData} from '../../utils/AsyncStorage';

const timeOutException = 'timeout of 200000ms exceeded';
const networkError = 'Network Error';

const Request = async function (options) {
  const client = axios.create({
    headers: {
      ...options.headers,
      'Content-Type': 'application/json',
    },
  });
  client.interceptors.request.use(async function (config) {
    let accessToken = await getData(ACCESS_TOKEN_KEY)
      .then(token => token)
      .catch(err => {
        console.debug(err);
      });
    if (!_.isEmpty(accessToken)) {
      const token = accessToken;
      config.headers.common.Authorization = 'Bearer ' + token;
    }
    return config;
  });
  const onSuccess = function (response) {
    if (response) {
      return response;
    } else {
      return 'call api loi';
    }
  };
  const onError = function (error) {
    console.log('onError', error);
    if (error.response) {
      console.log('Status', error.response.status);
      console.log('Data', error.response.data);
      console.log('Headers', error.response.headers);
      console.log('Message', error.response.message);
      const status = error.response.status;
      if (status === 404 || status === 400 || status === 403) {
        if (
          error.response.data !== undefined &&
          error.response.data.message !== undefined
        ) {
          return error.response.data.message;
        } else if (error.response.message !== undefined) {
          return error.response.message;
        } else if (
          error.response.data !== undefined &&
          error.response.data.response !== undefined &&
          error.response.data.response.message !== undefined
        ) {
          return error.response.data.response.message;
        } else {
          return error.message;
        }
      } else if (status === 401) {
        return '401-' + error.response.data.response.message;
      } else if (status === 500 || status === 502) {
        return strings.internalServerErrorMsg;
      } else {
        return error.message;
      }
    } else {
      if (error.message) {
        if (error.message === timeOutException) {
          return strings.timeOutMessage;
        } else if (error.message === networkError) {
          return strings.msg_networkError;
        } else {
          return strings.msg_networkError;
        }
      } else {
        return strings.timeOutMessage;
      }
    }
  };

  return client(options).then(onSuccess).catch(onError);
};

export default Request;
