const eyes = document.querySelectorAll(".eye");
const face = document.querySelector(".face");
const passwordInput = document.getElementById("password");

document.addEventListener("mousemove", (event) => {
  const { clientX, clientY } = event;
  const { left, top, width, height } = face.getBoundingClientRect();
  const centerX = left + width / 2;
  const centerY = top + height / 2;

  const angleX = (clientX - centerX) / 20;
  const angleY = (clientY - centerY) / 20;

  eyes.forEach((eye) => {
    eye.style.transform = `translate(${angleX}px, ${angleY}px)`;
  });
});

passwordInput.addEventListener("focus", () => {
  eyes.forEach((eye) => {
    eye.style.transform = "translate(20px, -10px)";
  });
});

passwordInput.addEventListener("blur", () => {
  eyes.forEach((eye) => {
    eye.style.transform = "translate(0, 0)";
  });
});
