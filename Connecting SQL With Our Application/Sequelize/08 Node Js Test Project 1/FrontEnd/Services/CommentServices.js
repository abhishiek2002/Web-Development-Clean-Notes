class Comment {
  constructor() {
    this.baseURL = "http://localhost:3000/comments";
  }

  async getComments(id) {
    //post id
    try {
      const res = await axios.get(this.baseURL + `/${id}`);
      return res;
    } catch (error) {
      console.log("Error on getting comments", error);
    }
  }

  async addComment(id, message) {
    //post id
    try {
      const res = await axios.post(this.baseURL + `/add/${id}`, {
        message: message,
      });
      return res;
    } catch (error) {
      console.log("Error on getting comments", error);
    }
  }
}

const commentInstance = new Comment();

export default commentInstance;
