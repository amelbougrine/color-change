const shapes = document.querySelectorAll(".shape");
function changeColor(color) {
    shapes.forEach(element => {
    element.style.fill = color.toHEXString();  
  });
}