import request from './Request.js';
import * as api from '../api/Api';
import {method} from '../../utils/Constants';

const timeoutSeconds = 20 * 10000;

function login(params) {
  return request({
    url: api.LOGIN,
    method: method.POST,
    timeout: timeoutSeconds,
    data: JSON.stringify(params),
  });
}

function getUsers(params) {
  return request({
    url: api.GET_USER,
    method: method.GET,
    timeout: timeoutSeconds,
  })
}

const NetworkService = {
  login,
  getUsers,
};

export default NetworkService;
