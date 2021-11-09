const panels = document.querySelectorAll(".panel");
console.log(panels);
panels.forEach((item) => {
  console.log(item);
  item.addEventListener("click", () => {
    removeActiveClasses();
    item.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
