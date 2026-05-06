const myHeading = document.querySelector("h1");

let myButton = document.querySelector("button");
myButton.onclick = function () {
  setUserName();
};

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hello, ${myName}`;
  }
}
