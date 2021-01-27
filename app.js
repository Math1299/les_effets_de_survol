const box1 = document.querySelector(".btn1");
const box2 = document.querySelector(".btn2");
const box3 = document.querySelector(".btn3");

box1.addEventListener("mouseenter", () => {
  box2.classList.add("flou");
  box3.classList.add("flou");
});
box1.addEventListener("mouseleave", () => {
  box2.classList.remove("flou");
  box3.classList.remove("flou");
});
box2.addEventListener("mouseenter", () => {
  box1.classList.add("flou");
  box3.classList.add("flou");
});
box2.addEventListener("mouseleave", () => {
  box1.classList.remove("flou");
  box3.classList.remove("flou");
});
box3.addEventListener("mouseenter", () => {
  box2.classList.add("flou");
  box1.classList.add("flou");
});
box3.addEventListener("mouseleave", () => {
  box2.classList.remove("flou");
  box1.classList.remove("flou");
});
