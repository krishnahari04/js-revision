let h1 = document.querySelector("h1");
h1.innerText = "kya hai bhai";
console.log(h1);

h1.addEventListener("click", function () {
  h1.innerText = "tumne mujhe click kiya";
});
