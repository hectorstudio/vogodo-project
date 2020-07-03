import REQUEST_TYPE from '../constants/RequestTypes';
import BaseService from './BaseService';

export default class PropertiesService {

  static async getProperty(id) {
    const apiUrl = `/property/${id}`;
    return BaseService.fetchData(REQUEST_TYPE.GET, apiUrl, null);
  }

  static async getRecentProperties() {
    const apiUrl = '/property/recent';
    return BaseService.fetchData(REQUEST_TYPE.GET, apiUrl, null);
  }

  static async getProperties() {
    const apiUrl = '/property/';
    return BaseService.fetchData(REQUEST_TYPE.GET, apiUrl, null);
  }

  static async filterProperties(filterOptions) {
    const params = JSON.stringify(filterOptions);
    const apiUrl = `/property/?params=${params}`;
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
    const apiUrl = '/property/own';
    return BaseService.fetchData(REQUEST_TYPE.GET, apiUrl, null);
  }
  static async addNewProperty(property) {
    const apiUrl = '/property/';
    return BaseService.fetchData(REQUEST_TYPE.POST, apiUrl, property);
  }

  static async updateProperty(id, property, files) {
    const apiUrl = `/property/${id}`;
    const formData = new FormData();
    for (const file of files) {
      formData.append('files[]', file, file.name);
    }
    formData.append('info', JSON.stringify(property));
    return BaseService.fetchFormData(apiUrl, formData);
  }

  static async deleteProperty(id) {
    const apiUrl = `/property/${id}`;
    return BaseService.fetchData(REQUEST_TYPE.DELETE, apiUrl, null);
  }

  static async saveAsFavorite(item) {
    const apiUrl = '/favorite/save/';
    return BaseService.fetchData(REQUEST_TYPE.POST, apiUrl, item);
  }

  static async getFavorites(uid) {
    const apiUrl = `/favorite/favor/${uid}`;
    return BaseService.fetchData(REQUEST_TYPE.GET, apiUrl, null);
  }

  static async getFavoritesByOwnerId(uid) {
    const apiUrl = `/favorite/save/${uid}`;
    return BaseService.fetchData(REQUEST_TYPE.GET, apiUrl, null);
  }
}