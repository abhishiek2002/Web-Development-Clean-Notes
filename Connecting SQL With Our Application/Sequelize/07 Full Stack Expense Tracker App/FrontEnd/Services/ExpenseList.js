class List {
  constructor() {
    this.baseURL = "http://localhost:3000/expenses";
  }

  async getExpenses() {
    try {
      const res = await axios.get(this.baseURL);
      return res;
    } catch (error) {
      console.log("Error while fetching expenses", error);
    }
  }

  async addExpense({ amount, description, category }) {
    try {
      const res = await axios.post(this.baseURL + "/add", {
        amount,
        description,
        category,
      });
      return res;
    } catch (error) {
      console.log("Error while adding expenses", error);
    }
  }

  async editExpense(id, { amount, description, category }) {
    try {
      const res = await axios.put(this.baseURL + `/${id}/edit`, {
        amount,
        description,
        category,
      });
      return res;
    } catch (error) {
      console.log("Error while editing expenses", error);
    }
  }

  async removeExpense(id) {
    try {
      const res = await axios.delete(this.baseURL + `/${id}/remove`);
      return res;
    } catch (error) {
      console.log("Error while adding expenses", error);
    }
  }
}

const list = new List();

export default list;
