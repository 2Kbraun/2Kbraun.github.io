

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");

    if (mySrc === "images/evil-lain.png") {
        myImage.setAttribute("src", "images/lain2.png");
    } else if (mySrc === "images/lain2.png") {
        myImage.setAttribute("src", "images/cover.jpg");
    } else if (mySrc === "images/cover.jpg") {
        myImage.setAttribute("src", "images/evil-lain.png");
    }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName){
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Lets love Lain, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Lets love Lain, ${storedName}`;
}

const paragraph = document.querySelector("reverse");

myButton.addEventListener("click", () => {
    reversedText = reverse.textContent.split("").reverse("").join("");
    reverse.textContent = reversedText
    setUserName();
});
