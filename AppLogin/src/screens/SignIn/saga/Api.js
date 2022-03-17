import NetworkService from '../../../networks/request/NetworkService';
import * as Bluebird from 'bluebird';

async function login(params) {
  const response = await NetworkService.login(params);
  return Bluebird.resolve(response);
}
export const Api = {
  login,
};
