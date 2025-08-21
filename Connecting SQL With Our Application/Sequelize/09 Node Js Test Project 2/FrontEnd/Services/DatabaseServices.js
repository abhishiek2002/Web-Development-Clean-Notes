class databaseService {
  constructor() {
    this.baseURL = "http://localhost:3000/tables";
  }

  async getTablesName() {
    try {
      const res = await axios.get(this.baseURL);
      return res;
    } catch (error) {
      console.log("Error while getting table names", error.message);
    }
  }

   async getColumnsName(name) { // table name
    try {
      const res = await axios.get(this.baseURL + `/columns/${name}`);
      return res;
    } catch (error) {
      console.log("Error while getting columns name", error.message);
    }
  }

  async getRows(name) { // table name
    console.log(name);
    
    try {
      const res = await axios.get(this.baseURL + `/${name}`);
      return res;
    } catch (error) {
      console.log("Error while getting rows data", error.message);
    }
  }

  async insertRow(name, urlEncodedData) { // table name , data obj that is need to insert
    try {
      const res = await axios.post(this.baseURL + `/insert/${name}`, urlEncodedData);
      return res;
    } catch (error) {
      console.log("Error while inserting record", error.message);
    }
  }

  async createTable(name, attributeObj) { // table name,table attribute obj that is needed to define table
    try {
      const res = await axios.post(this.baseURL + `/create/${name}`, attributeObj);
      return res;
    } catch (error) {
      console.log("Error while creating table", error.message);
    }
  }

  async deleteRow(name, id) { // table name,table attribute obj that is needed to define table
    try {
      const res = await axios.delete(this.baseURL + `/delete/${name}/${id}`);
      return res;
    } catch (error) {
      console.log("Error while deleting record", error);
    }
  }

  
}

const databaseServiceInstance = new databaseService();

export default databaseServiceInstance;
