const input = document.getElementById("input");
const list = document.getElementById("list");
const verification = () => {
  if (input.value === "") {
    alert("Please enter a task");
  } else {
    list.innerHTML += `<li>${input.value}</li>`;
    input.value = "";
  }
};
