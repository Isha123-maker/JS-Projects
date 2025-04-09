const cursor = document.querySelector(".cursor");

let mouseX = 0,
  mouseY = 0;
let posX = 0,
  posY = 0;

// Listen for mouse movement to get the cursor position
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Smoothly animate the custom cursor to follow the mouse
function animate() {
  posX += (mouseX - posX) * 0.15;
  posY += (mouseY - posY) * 0.15;
  cursor.style.transform = `translate(${posX}px, ${posY}px)`;
  requestAnimationFrame(animate);
}

animate();
