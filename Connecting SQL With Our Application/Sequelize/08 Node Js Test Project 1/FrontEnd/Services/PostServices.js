class Post {
  constructor() {
    this.baseURL = "http://localhost:3000/posts";
  }

  async getPosts() {
    try {
      const res = await axios.get(this.baseURL);
      return res;
    } catch (error) {
      console.log("Error while getting posts", error);
    }
  }

  async addPost({ link, description }) {
    try {
      const res = await axios.post(this.baseURL + "/add", {
        link,
        description,
      });
      return res;
    } catch (error) {
      console.log("Error while getting posts", error);
    }
  }
}

const postInstance = new Post();

export default postInstance;
