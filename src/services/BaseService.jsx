import REQUEST_TYPE from '../constants/RequestTypes';
import QueryString from 'query-string';


export default class BaseService {
  static async fetchData (method, apiUrl, params) {
    const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
    const callAPI = new Promise(async (resolve, reject) => {
      const token = localStorage.getItem('token');
      let url = API_ENDPOINT + apiUrl;
      if ( method === REQUEST_TYPE.GET && params) {
        url = url + '?' + QueryString.stringify(params);
      }
      try {
        let opt = {
          method: method,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        };
        if (params) {
          opt.body = JSON.stringify(params);
        }
        const response = await fetch(url, opt);
        const responseJson = await response.json();
        resolve(responseJson);
      } catch (error) {
        reject(error);
      }
    });

    const callTimeout = () => new Promise((resolve, reject) => setTimeout(reject, 60000, 'OVER_TIME'));

    return Promise.race([callAPI, callTimeout()]).then(result => {
      return result;
    }).catch(e => {
      return null;
    });
  }
}