import commentInstance from "./Services/CommentServices.js";
import postInstance from "./Services/PostServices.js";

window.addEventListener("DOMContentLoaded", async () => {
  const res = (await postInstance.getPosts()) || [];
  const posts = res.data.data;

  for (const post of posts) {
    display(post);
  }
});

function display(data) {
  // data = {id, link, description}

  const divEl = document.querySelector("#posts");

  const div = document.createElement("div");

  div.innerHTML = `<!-- image section -->
          <div class="imgDiv"></div>

          <!-- post description -->
          <p class="postdesc">User - <span class="description">${data.description}</span></p>

          <!-- post comments -->
          <div class="commentDiv">
            <!-- comment handler -->
            <h3 class="commentHandler">🗨️ Comment</h3>
            <div class="commentSection">
                <!-- comment form -->
                <form class="commentForm">
                  <input type="text" name="message" placeholder="add comment..." />
                  <button type="submit">ADD</button>
                </form>
    
                <!-- comments lists -->
                <div class="comments"></div>
            </div>
          </div>
        `;

  div.className = "post";
  div.id = data.id;

  const imgDiv = div.querySelector(".imgDiv");
  imgDiv.style.background = `url('${data.link}') no-repeat center/cover`;

  const commentHandler = div.querySelector(".commentHandler");
  commentHandler.addEventListener("click", (event) =>
    commentSectionHandler(event, data.id)
  );

  const commentForm = div.querySelector("form");
  commentForm.addEventListener("submit", (event) =>
    commentFormHandler(data.id, event)
  );

  divEl.appendChild(div);
}

async function commentSectionHandler(event, id) {
  const parentEl = event.target.parentElement;

  const commentSection = parentEl.querySelector(".commentSection");

  if (commentSection.classList.contains("visible")) {
    commentSection.classList.remove("visible");
    return;
  }

  commentSection.classList.add("visible");

  const commentsEl = commentSection.querySelector(".comments");
  commentsEl.innerHTML = "";

  try {
    const res = await commentInstance.getComments(id);
    const comments = res.data.data;

    for (const comment of comments) {
      displayComment(id, comment);
    }
  } catch (error) {
    console.log(error);
  }
}

function displayComment(id, comment) {
  const element = document
    .getElementById(String(id))
    .querySelector(".comments");

  const commentEl = document.createElement("div");
  commentEl.innerHTML = `<!-- userName -->
                        <h3 class="userName">Anonymous</h3>
    
                        <!-- comment message -->
                         <p class="message">${comment.message}</p>`;
  commentEl.id = comment.id;

  
  element.appendChild(commentEl);
}

async function commentFormHandler(id, event) {
  event.preventDefault();

  const message = event.target.message.value;

  if (message === "") return;

  try {
    const res = await commentInstance.addComment(id, message);
    const comment = res.data.data;

    displayComment(id, comment);
  } catch (error) {
    console.log("Error while adding comment", error);
  }

  event.target.message.value = "";
}

const postForm = document.querySelector("#addPostForm");

postForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  // form values
  const link = postForm.link.value;
  const description = postForm.description.value;

  if (link === "" || link === undefined) return;

  try {
    const res = await postInstance.addPost({ link, description });
    const post = res.data.data;
    console.log(post);

    display(post);
  } catch (error) {
    console.log("Error while creating post", error);
  }

  postForm.link.value = "";
  postForm.description.value = "";
});
