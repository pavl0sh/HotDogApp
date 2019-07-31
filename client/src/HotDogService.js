import axios from "axios";

const url = "http://localhost:5000/api/hotDogs/";

export default class HotDogService {
  //Get hot dos list
  static getHotDogs() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  }

  //Get one hot dog
  static getHotDog(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`${url}${id}`);
        const data = res.data;
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  }

  //Create
  static createHotDog(body) {
    return axios.post(`${url}/create`, {
      body
    });
  }
  //Update
  static updateHotDog(id, body) {
    return axios.put(`${url}${id}`, {
      body
    });
  }

  //Delete
  static deleteHotDog(id) {
    return axios.delete(`${url}${id}`);
  }
}
