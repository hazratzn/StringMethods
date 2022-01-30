//boyukden kiciye siralama // Task1

let numbers = [1, 2, 3, 4, 5, 6, 7];

let highestToLowest = numbers.sort((a, b) => b - a);

console.log(numbers);

//......


// ilin aylarinin siralamasi // Task2

let months = ["January", "Feburary", "March", "April", "May", "June"];

function indexOfMonths(months) {
  let arr = [];
  for (let i = 0; i < months.length; i++) {
    let number = i + 1;
    let value = months[i] + "-" + number;
    arr.push(value);
  }
  return arr;
}
console.log(indexOfMonths(months));
//...

// Task 3

let str = "Salam Hezret"

function countChars(string){
  let arr = str.split(" ");
  let result = arr.map(m=>(m.length));
  return result;
    
}
console.log(countChars(str))
