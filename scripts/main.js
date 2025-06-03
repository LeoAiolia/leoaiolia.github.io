const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

/*
// 函数：创建一个新的段落并添加至 HTML body 底部。
function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "你点了这个按钮！";
    document.body.appendChild(para);
}
  
  1. 取得页面上所有按钮的引用并将它们置于一个数组中。
  2. 通过一个循环为每个按钮添加一个点击事件的监听器。 当按钮被点击时，调用 createParagraph() 函数。
  const buttons = document.querySelectorAll("button");
  
  for (const button of buttons) {
    button.addEventListener("click", createParagraph);
  }
*/
/*
  写法1
  document.querySelector("html").addEventListener("click", function () {
    alert("别戳我，我怕疼！");
  });

  写法2：箭头函数
  document.querySelector("html").addEventListener("click",  () => {
    alert("别戳我，我怕疼！");
  });
  */

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
