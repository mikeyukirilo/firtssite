let myImage=document.querySelector("img")

myImage.onclick= () => {
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "imagens/logo.google.png"){
        myImage.setAttribute("src","imagens/logogoogle.preto2.png");

    }
};

let myButton= document.querySelector("button");
let myHeading= document.querySelector("h1");

function setUserName() {
    let myName =prompt("por favor, digite seu nome");
    if(!myName){
        setUserName();
    }    
     else {
        localStorage.setItem("name",myName);
        myHeading.innerHTML= 'Google é legal,'+ myName;
 }
}

if(!localStorage.getItem("name")){
    setUserName();
} else {
    let nomenatela= localStorage.getItem("name");
    myHeading.innerHTML= 'Google é legal', + nomenatela;
}

myButton.onclick = () => {
    setUserName();
};