class User {
  constructor() {
    this.baseURL = `http://localhost:3000/users`;
  }

  async getUsers() {
    try {
      const res = await axios.get(this.baseURL);
      return res.data;
    } catch (error) {
      console.log("Error while fetching users", error);
    }
  }

  async addUser({ name, email }) {
    try {
      const res = await axios.post(this.baseURL + "/add", { name, email });
      return res.data;
    } catch (error) {
      console.log("Error while adding users", error);
    }
  }

  async editUser({ id, name, email }) {
    try {
      const res = await axios.put(this.baseURL + `/edit/${id}`, {
        name,
        email,
      });
      return res;
    } catch (error) {
      console.log("Error while editing user detail", error);
    }
  }

  async deleteUser(id) {
    try {
      const res = await axios.delete(this.baseURL + `/delete/${id}`);
      return res;
    } catch (error) {
      console.log("Error while fetching users", error);
    }
  }
}

const user = new User();

export default user;
