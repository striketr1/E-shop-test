
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
console.log("Maximální cena je " + max);


