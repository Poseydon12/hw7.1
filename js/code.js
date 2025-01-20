let numbersArray = [5, 15, 25];
numbersArray[1] = 10;
console.log("Масив після зміни другого елемента:", numbersArray);

let stringsArray = ["apple", "banana", "cherry"];
stringsArray.push("date");
console.log("Масив рядків після додавання:", stringsArray);

let sum = numbersArray.reduce((acc, curr) => acc + curr, 0);
console.log("Сума всіх чисел в масиві:", sum);

let fiveNumbersArray = [1, 2, 3, 4, 5];
console.log("Елементи масиву з 5-ти чисел:");
for (let i = 0; i < fiveNumbersArray.length; i++) {
  console.log(fiveNumbersArray[i]);
}

let fiveStringsArray = ["short", "longer", "tiny", "lengthy", "medium"];
console.log("Рядки з масиву, які містять більше 5-ти символів:");
for (let str of fiveStringsArray) {
  if (str.length > 5) {
    console.log(str);
  }
}

let tenNumbersArray = [3, 5, 7, 2, 8, 10, 1, 4, 6, 9];
let maxNumber = Math.max(...tenNumbersArray);
console.log("Максимальне значення з масиву:", maxNumber);

console.log("Парні числа з масиву:");
for (let number of tenNumbersArray) {
  if (number % 2 === 0) {
    console.log(number);
  }
}
