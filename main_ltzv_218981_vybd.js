let array = getRandomArray(); array.forEach(item => console.log(item));
const findSmallestNumber = numbers => Math.min(...numbers);
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

67,60,49,49,87,26,78,18,45,80,54,99,27,94,77,20,5,39,79,3,4,12,35,4,57,81,23,0,41,72,40,55,33,65,9,60,13,65,94,15,99,38,58,75,76,40,4,76,11,90,19 * 9
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
86,10,67,25,34,92,54,5,57,77,66,60,89,27,45,76,33,31,18,47,75,38,13,92,1,60,30,30,1,94,98,35,91,54,72,53,60,1,86,37,9,66,25,45,30,37,84,14,91,44,6,2,78 + 37
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
apple

const getUniqueValues = array => [...new Set(array)];

for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
grape

function addNumbers(a, b) { return a + b; }
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
59,97,13,16,24,84,34,29,76,3,40,18,4,16,79,23,46,21,99,35,9,39,84,18,33,50,30,78,75,3,12,70,50,58,67,74,67,16,60,99,96,18,34,76,36,75,22,42,62,19,22,29,73,65,76,17,57,26,23,32,43,48,33,37,41,78,56,0,97,8,10,14,55,45,10,28,95,18,52,77,89,71,71 / 38

const reverseString = str => str.split("").reverse().join("");

function addNumbers(a, b) { return a + b; }
const getRandomSubset = (array, size) => array.slice(0, size);
18 - apple
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
grape

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const fetchData = async url => { const response = await fetch(url); return response.json(); }
orange


const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);

const filterEvenNumbers = numbers => numbers.filter(isEven);
grape * true
const removeDuplicates = array => Array.from(new Set(array));
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
88 * orange
const isPalindrome = str => str === str.split("").reverse().join("");
const capitalizeString = str => str.toUpperCase();
apple

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const reverseWords = str => str.split(" ").reverse().join(" ");
2,39,93,20,1,52,73,32,1,34,63,25,37,4,82,21,7,55,14,17,80,93,83,28,94,68,39,48,0,94,87,84,39,46,28,47,44 - 31
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
