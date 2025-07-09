const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);

async function getTodos() {
  // Write your code here
  try {
    const res = await axios.get(
      "https://crudcrud.com/api/04c49f98909940ce8d3010458688987c/appointmentData"
    );
    const data = res.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

async function postTodo() {
  // Write your code here
  try {
    const obj = {
      title: "Learn Axios",
      completed: false,
    };

    const res = await axios.post(
      "https://crudcrud.com/api/04c49f98909940ce8d3010458688987c/appointmentData",
      obj
    );
    if (res) {
      console.log(res.data);
      localStorage.setItem("LearnAxiosId", res.data._id);
    }
  } catch (error) {
    console.log(error);
  }
}

async function putTodo() {
  // Write your code here
  try {
    const obj = {
      title: "Learn Axios",
      completed: true,
    };

    const id = localStorage.getItem("LearnAxiosId");

    const res = await axios.put(
      `https://crudcrud.com/api/04c49f98909940ce8d3010458688987c/appointmentData/${id}`,
      obj
    );
    if (res) {
      console.log("Updated successfully");
    }
  } catch (error) {
    console.log(error);
  }
}

async function deleteTodo() {
  // Write your code here
  try {
    const id = localStorage.getItem("LearnAxiosId");
    const res = await axios.delete(
      `https://crudcrud.com/api/04c49f98909940ce8d3010458688987c/appointmentData/${id}`
    );
    if (res) {
      console.log(res);
      localStorage.removeItem("LearnAxiosId");
    }
  } catch (error) {
    console.log(error);
  }
}



