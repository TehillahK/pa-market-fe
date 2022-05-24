import axios from "axios";
export class AccessFarmsApi {
  #serverUrl;
  constructor() {
    this.#serverUrl = "http://127.0.0.1:5000/api/farms";
  }

  async getFarms() {
    let result = null;
    axios.get(this.#serverUrl)
    .then(function (response) {
      // handle success
     // console.log(response.data);
      result = response.data
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    //console.log(result)
      return result;
    });
  }
}
