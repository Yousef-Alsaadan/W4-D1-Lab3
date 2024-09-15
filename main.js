let userLink = document.getElementById("userLink");

function typeScreen(width, height) {
  window.open(userLink.value, "newWindow", `width=${width},height=${height}`);
}
