console.log("telapo");


const modal = document.getElementById("modal");
const detail = document.getElementById("movie-detail");
const titleList = document.querySelectorAll(".movie");

window.addEventListener("click", async function (event) {
  try {
  {
    console.log(event.target.value);
        document.getElementById("root").insertAdjacentHTML("afterbegin", `dejó`);
        showDialog();
      
    }
  } catch (error) {
    console.error("Error:", error);
  }
});

const closeButton = document.getElementById("close");

function showDialog() {
  modal.show();
}

function closeDialog() {
  modal.close();
}

function removeCloseButton(){
  closeButton.remove()
}