//1. Write the command to add the language "Go" to the end of the languages array.
//2. Change the difficulty to the value of 7.
//3. Using the delete keyword, write the command to remove the jokes key from the programming object.
//4. Write the command to add a new key called isFun and a value of true to the programming object.
//5. Using a loop, iterate through the languages array and console.log all of the languages.
//6. Using a loop, console.log all of the keys in the programming object.
//7. Using a loop, console.log all of the values in the programming object.

let programming = {
  languages: ['JavaScript', 'Python', 'Ruby'],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    'http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke',
};
// 1.
programming.languages.push('Go');

// 2.
programming.difficulty = 7;

// 3.
delete programming['jokes'];

// 4.
programming.isFun = true;

// 5.
for (let name of programming.languages) {
  console.log(name);
}

// 6.
for (let singleKey in programming) {
  console.log(programming);
}

// 7.
for (let singleKey in programming) {
  console.log(programming[singleKey]);
}
