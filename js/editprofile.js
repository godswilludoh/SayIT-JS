// create an empty array to store the users
let database = JSON.parse(localStorage.getItem("database")) || [];

function submitUsers() {
  let newUSers = {
    Username: document.getElementById("name").value,
    Mail: document.getElementById("mail").value,
    Number: document.getElementById("number").value,
    Password: document.getElementById("password").value,
  };

  database.push(newUSers);
  localStorage.setItem("Data", JSON.stringify(database));
}
