import feature from "./appointmentAPI.js";

let noteCount = 0;
let showCount = 0;

window.addEventListener("DOMContentLoaded", async () => {
  try {
    const notesList = await feature.get();

    for (const note of notesList) {
      display(note);
    }
    updateNoteCount();
  } catch (error) {
    console.log(error);
  }
});

const form = document.querySelector("form");


form.addEventListener("submit", async (event) => {
  event.preventDefault();
  
  const title = form.title.value;
  const text = form.noteText.value;

  const obj = {
    title,
    text,
  };

  try {
    const data = await feature.post(obj);
    // display object as well as update count
    display(data);
    updateNoteCount();

    form.title.value = "";
    form.noteText.value = "";
  } catch (error) {
    console.log(error);
  }
});

function display({ title, text, _id }) {
  const notesListDiv = document.querySelector("#notesListDiv");

  // create a new div
  const note = document.createElement("div");

  note.innerHTML = `<h2>${title}</h2>
            <p>${text}</p>
            <button type="button" class="delete-btn">DELETE</button>`;

  note.className = "note";
  note.id = _id;
  const deleteBtn = note.querySelector("button");
  deleteBtn.addEventListener("click", () => deleteNote(_id));

  notesListDiv.appendChild(note);

  // update count of notes
  noteCount++;
  showCount++;
}

async function deleteNote(_id) {
  const note = document.getElementById(String(_id));
  note.remove();
  try {
    const res = await feature.delete(_id);
    console.log(res);
  } catch (error) {
    console.log(error);
  }

  noteCount--;
  showCount--;
  updateNoteCount();
}

const searchEl = document.getElementById("search");

searchEl.addEventListener("input", (event) => filter(event));

function filter(event) {
  showCount = 0;
  const value = event.target.value.toLowerCase();

  const notes = document.getElementsByClassName("note");

  for (const note of notes) {
    const text = note.firstChild.textContent.toLowerCase();
    if (text.includes(value)) {
      showCount++;
      note.style.display = "flex";
    } else {
      note.style.display = "none";
    }
  }

  updateNoteCount();
}

function updateNoteCount() {
  const totalCountEl = document.getElementById("totalCount");
  const showCountEl = document.getElementById("showCount");

  totalCountEl.textContent = noteCount;
  showCountEl.textContent = showCount;
}
