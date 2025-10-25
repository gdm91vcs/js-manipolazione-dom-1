/* const titleElem = document.getElementById("title");
console.log(titleElem);
console.dir(titleElem); */

/* const firstItemElem = document.querySelector("li:nth-child(2)")
console.log(firstItemElem); */

//inner Html
//Come modificare un contenuto di un elemento:
/* const titleElem = document.getElementById("title"); */
/* console.log(titleElem.innerHTML); */
/* titleElem.innerHTML = "Ciao Gabriele"
console.log(titleElem.innerHTML); */

/* titleElem.innerHTML = titleElem.innerHTML + " Gabriele";
console.log(titleElem.innerHTML); */

//Esercizio: voglio chiedere all utente il suo nome e poi salutarlo in pagina

/* const nameElem = document.getElementById("name");
console.log(nameElem);

const userName = prompt("Scrivi il tuo nome")
console.log(userName);

nameElem.innerHTML = `Ciao ${userName}!`; */
/* 
const imageElem = document.getElementById("myimg");
console.log(imageElem);
imageElem.src = "../img/boolean (1).png"; */

/* const buttonElem = document.getElementById("my-btn");
/* console.log(buttonElem); */
/* buttonElem.addEventListener("click", function() {
    console.log("Ciao Gab");
}); */

/* const timidoButtonElem = document.getElementById("btn-timido");
/* console.log(timidoButtonElem); */
/* timidoButtonElem.addEventListener("click", function() {
    if(timidoButtonElem.style.backgroundColor === "red") {
        timidoButtonElem.style.backgroundColor = "";
        timidoButtonElem.innerHTML = "Sono un bottone timido, non cliccarmi!"
    } else {
        timidoButtonElem.style.backgroundColor = "red";
        timidoButtonElem.innerHTML = "Sono tutto rosso perchè mi hai cliccato!";
    }
}) */

const yellowButtonElem = document.getElementById("yellow-btn")
console.log(yellowButtonElem);

yellowButtonElem.addEventListener("click", function () {
    yellowButtonElem.classList.toggle("yellow");
})