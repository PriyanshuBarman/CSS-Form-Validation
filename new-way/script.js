lucide.createIcons();

const form = document.querySelector("form");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close-modal-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!form.checkValidity()) return;

  modal.style.display = "block";
  modal.style.backdropFilter = "blur(16px)";
  modal.style.background = "rgba(0, 0, 0, 0.1)";

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;
  const password = document.querySelector("#password").value;

  document.querySelector("#show-name").innerHTML = name;
  document.querySelector("#show-email").innerHTML = email;
  document.querySelector("#show-phone").innerHTML = phone;
  document.querySelector("#show-password").innerHTML = password;
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
