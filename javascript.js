let a = document.querySelectorAll(".obrazek");
console.log(a);

let max = 0;
let b = document.querySelectorAll(".cena");

for (let i = 0; i < b.length; i++) {
    let c = b[i].textContent;
    let split = c.substring(10, 90);
    let cislo = +split;

    if (cislo > max) {
        max = cislo;
    }
    console.log(cislo);
}
console.log("Maximální cena v $ je " + max);

function odstran(){
    let para = document.querySelectorAll("article.obrazky >div");
    for (const i of para) {
        i.remove();
    }
}
odstran();

let cham = document.querySelectorAll("article.obrazky >div");

let bForward = document.getElementById("forward");
bForward.addEventListener("click", forward);
function forward(){
    for(let i; i < cham.length; i++){
        for(let j; j < 9;j++){
        $("article.obrazky").append(cham[i]);
        }
    }
}

let bBack = document.getElementById("back");
bBack.addEventListener("click", back)
function back(){
    for(let i; i < cham.length; i++){
        for(let j; j < 9;j++){
        $("article.obrazky").append(cham[i]);
        }
    }
}