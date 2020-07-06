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

  static async insertUser (userInfo) {
    const params = userInfo;
    const apiUrl = '/user/register';
    return BaseService.fetchData(REQUEST_TYPE.POST, apiUrl, params);
  }

  static async signWithSocial (userInfo, type) {
    const params = {...userInfo, type};
    const apiUrl = '/user/registerWithSocial';
    return BaseService.fetchData(REQUEST_TYPE.POST, apiUrl, params);
  }

  static async updateUser(id, user) {
    const params = user;
    const apiUrl = `/user/${id}`;
    return BaseService.fetchData(REQUEST_TYPE.PUT, apiUrl, params);
  }

  static async getUser(id) {
    const apiUrl = `/user/${id}`;
    return BaseService.fetchData(REQUEST_TYPE.GET, apiUrl, null);
  }
}