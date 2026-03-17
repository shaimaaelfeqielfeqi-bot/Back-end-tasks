let text = prompt("Enter The words that you want");

let words = text.split(" ");
let wordCount = words.length;
let charCount = text.replace(/\s/g, "").length;

let freq = {};
let maxWord = "";
let maxCount = 0;

for (let word of words) {
    freq[word] = (freq[word] || 0) + 1;

    if (freq[word] > maxCount) {
        maxCount = freq[word];
        maxWord = word;
    }
}
console.log("Word Count:", wordCount);
console.log("Character Count:", charCount);
console.log("Most Frequent Word:", maxWord);
//___________________________________________________
let arr1 = [7, 4, 7, 8, 2, 3, 2];
let set_Arr = [...new Set(arr1)];

set_Arr.sort((a, b) => a - b);

let sum = set_Arr.reduce((acc, num) => acc + num, 0);

console.log(set_Arr);
console.log("Sum:", sum);
//_____________________________
let arr2 = [[1, 2], [3, 4], [5, 6]];
let one_Array = arr2.flat();
console.log(one_Array);