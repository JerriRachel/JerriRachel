kiwi / 92
const removeDuplicates = array => Array.from(new Set(array));
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
