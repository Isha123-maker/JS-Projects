document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".cursor");
  const trail1 = document.querySelector(".cursor-trail");
  const trail2 = document.querySelector(".cursor-trail:nth-child(3)");

  let mouseX = 0;
  let mouseY = 0;
  let trailX = 0;
  let trailY = 0;
  let isMoving = false;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!isMoving) {
      document.body.classList.add("moving");
      isMoving = true;
    }
  });

  function updateCursor() {
    // Main cursor
    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";

    // First trail
    trailX += (mouseX - trailX) * 0.2;
    trailY += (mouseY - trailY) * 0.2;
    trail1.style.left = trailX + "px";
    trail1.style.top = trailY + "px";

    // Second trail
    trailX += (mouseX - trailX) * 0.15;
    trailY += (mouseY - trailY) * 0.15;
    trail2.style.left = trailX + "px";
    trail2.style.top = trailY + "px";

    // Reset moving state
    if (Math.abs(mouseX - trailX) < 0.1 && Math.abs(mouseY - trailY) < 0.1) {
      document.body.classList.remove("moving");
      isMoving = false;
    }

    requestAnimationFrame(updateCursor);
  }

  updateCursor();

  // Add hover effect
  document.querySelectorAll("a, button, .hover-effect").forEach((element) => {
    element.addEventListener("mouseenter", () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
    });
    element.addEventListener("mouseleave", () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
    });
  });
});
