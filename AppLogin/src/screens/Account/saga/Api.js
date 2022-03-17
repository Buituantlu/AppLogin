import NetworkService from '../../../networks/request/NetworkService';
import * as Bluebird from 'bluebird';

async function getUser(params) {
  const response = await NetworkService.getUsers(params);
  return Bluebird.resolve(response);
}
export const Api = {
    getUser,
};
