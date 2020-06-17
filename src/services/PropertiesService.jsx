import REQUEST_TYPE from '../constants/RequestTypes';
import BaseService from './BaseService';

export default class PropertiesService {

  static async updateProperty(id, property) {
    const params = property;
    const apiUrl = `/property/${id}`;
    return BaseService.fetchData(REQUEST_TYPE.PUT, apiUrl, params);
  }

  static async getProperty(id) {
    const apiUrl = `/property/${id}`;
    return BaseService.fetchData(REQUEST_TYPE.GET, apiUrl, null);
  }

  static async getProperties() {
    const apiUrl = '/property/';
    return BaseService.fetchData(REQUEST_TYPE.GET, apiUrl, null);
  }

  static async getStates() {
    const apiUrl = '/geo/';
    return BaseService.fetchData(REQUEST_TYPE.GET, apiUrl, null);
  }

  static async getCitiesById(id) {
    const apiUrl = `/geo/${id}`;
    return BaseService.fetchData(REQUEST_TYPE.GET, apiUrl, null);
  }

  static async getPropertiesByOwnerId() {
    const apiUrl = '/property/';
    return BaseService.fetchData(REQUEST_TYPE.GET, apiUrl, null);
  }

  static async addNewProperty(property) {
    const params = property;
    const apiUrl = '/property/';
    return BaseService.fetchData(REQUEST_TYPE.POST, apiUrl, params);
  }
}