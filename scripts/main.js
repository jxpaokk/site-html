const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "imagens/nave.png") {
    myImage.setAttribute("src", "imagens/nave2.png");
  } else {
    myImage.setAttribute("src", "imagens/nave.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Por favor digite o seu nome.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `A Nave Internet te espera, ${myName}`;
    }
  }
  
  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `A Nave Internet te espera, ${storedName}`
};

myButton.onclick = () => {
    setUserName();
};
  
  