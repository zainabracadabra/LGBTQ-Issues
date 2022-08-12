// Displays content overlay
function showOverlay(){
  document.getElementById("overlay").style.display = "block";
}
window.addEventListener("load", showOverlay);

// Add event listener to proceed by closing the overlay when clicked
var proceed = document.getElementById("proceed");
proceed.addEventListener("click", closeOverlay);

// Closes the overlay
function closeOverlay(){
  document.getElementById("overlay").style.display = "none";
}