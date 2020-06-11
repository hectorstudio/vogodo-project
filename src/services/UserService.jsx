import REQUEST_TYPE from '../constants/RequestTypes';
import BaseService from './BaseService';

export default class UserService {
  static async login (emailAddress, password) {
    const params = {
      emailAddress,
      password,
    };
    const apiUrl = '/user/login';
    return BaseService.fetchData(REQUEST_TYPE.POST, apiUrl, params);
  }
}