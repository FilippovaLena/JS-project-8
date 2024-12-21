let sum = +prompt("Укажите стартовую сумму", 1000);
const persent = 15;
const result = 2000;

const depositTerm = +prompt("Укажите срок депозита", 10)

let count = 0

while (count < depositTerm) {
    sum = sum + sum * (persent / 100)
    count = count + 1
    document.write(count + ": " + sum + "<br>")
}