document.addEventListener("DOMContentLoaded", function () {
  const projectImages = document.querySelectorAll(".masonry img");
  const modals = document.querySelectorAll(".modal");
  const closeModalButtons = document.querySelectorAll(".close-modal-button");

  projectImages.forEach((image, index) => {
    image.addEventListener("click", () => {
      modals[index].style.display = "block";
    });
  });

  closeModalButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      modals[index].style.display = "none";
    });
  });
});
