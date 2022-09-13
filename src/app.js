import "./app.css";
// import image from "../public/images/image.png";

window.addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector("#app");
  const date = new Date();
  app.innerHTML = `<h1> ${date} </h1>`;
  console.log("Hello Webpack!");
});
