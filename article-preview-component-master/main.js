const shareButton = document.getElementById("share-btn");
const shareText = document.querySelector(".happy");
const exitText = document.querySelector(".left");

shareButton.addEventListener("click", () =>{
    shareText.classList.add("active");
});
exitText.addEventListener("click", () =>{
    shareText.classList.remove("active");
})