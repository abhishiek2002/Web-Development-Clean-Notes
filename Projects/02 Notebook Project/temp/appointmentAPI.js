class crudAPI {
  constructor() {
    this.list = [];
    this.baseURL = "https://crudcrud.com/api/caf6ad78b7324f15a5f54f0766262a98/appointment";
  }

  async get() {
    try {
      const res = await axios.get(this.baseURL);
      const data = res.data;
      return data.length === 0 ? this.list : data;
    } catch (error) {
      console.error("GET Method Error:", error);
      return []; // Optional: return empty list on error
    }
  }

  async post(data) {
    try {
      const res = await axios.post(this.baseURL, data);
      return res.data;
    } catch (error) {
      console.error("POST Method Error:", error);
    }
  }

  // post(data){
  //   axios.post(this.baseURL, data).then(res => {
  //     return res.data;
  //   }).catch(error => console.log(error))
  // }

  async put(data, id) {
    try {
      const res = await axios.put(`${this.baseURL}/${id}`, data);
      return res.data;
    } catch (error) {
      console.error("PUT Method Error:", error);
    }
  }

  async delete(id) {
    try {
      const res = await axios.delete(`${this.baseURL}/${id}`);
      return res.data;
    } catch (error) {
      console.error("DELETE Method Error:", error);
    }
  }
}

// ✅ Create & Export Single Shared Instance
const feature = new crudAPI();
export default feature;
