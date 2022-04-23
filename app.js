const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let personBox = $(".person-box");
let image = $(".image");
let name = $(".name");
let age = $(".age");
let state = $(".state");
let phone = $(".phone");
let email = $(".email");
let newPersonBox;
let btn = $("button");
let xhr = new XMLHttpRequest();

btn.addEventListener("click", function () {
  fetch("https://randomuser.me/api/?nat=us")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let rps = [];
      let rp = data.results[0];
      rps.push(rp);
      let rpName = `${rp.name.first} ${rp.name.last}`;
      console.log("DATA:", rp);
      generatePerson(rp, rpName);
    })
    .catch(function (err) {
      console.warn("UH OH! ERORR:", err);
    });
});

function generatePerson(persons, personsFullName) {
  // Set values
  image.src = persons.picture.large;
  name.innerHTML = "<b>Name:</b> " + personsFullName;
  state.innerHTML = "<b>State:</b> " + persons.location.state;
  phone.innerHTML = "<b>Phone:</b> " + persons.phone;
  email.innerHTML = "<b>Email:</b> " + persons.email;
}

function reloadPage() {
  window.location.reload();
}
