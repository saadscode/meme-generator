const memeForm = document.getElementById("memeForm");
const memeContainer = document.getElementById("memeContainer");

memeForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const topText = document.getElementById("topText").value;
  const bottomText = document.getElementById("bottomText").value;
  const image = document.getElementById("imageLink").value;

  if (!topText || !bottomText || !image) {
    alert("Please fill out all form fields.");
    return;
  }

  const meme = document.createElement("div");
  meme.className = "meme";

  const imgContainer = document.createElement("div");
  imgContainer.className = "img-container";
  meme.appendChild(imgContainer);

  const img = document.createElement("img");
  img.src = image;
  img.style.maxWidth = "500px";
  img.style.maxHeight = "500px";
  imgContainer.appendChild(img);

  const topCaption = document.createElement("div");
  topCaption.className = "caption top-caption";
  topCaption.textContent = topText;
  imgContainer.appendChild(topCaption);

  const bottomCaption = document.createElement("div");
  bottomCaption.className = "caption bottom-caption";
  bottomCaption.textContent = bottomText;
  imgContainer.appendChild(bottomCaption);

  const newMemeButton = document.getElementById("newMemeButton");
  newMemeButton.addEventListener("click", function () {
    location.reload();
  });

  memeContainer.innerHTML = "";
  memeContainer.appendChild(meme);

  memeForm.reset();
});
