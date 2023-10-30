let randomVerb = prompt('Write a random verb / action in the input box below.');
let randomObject = prompt('Now think of a random object and write it below.');
let randomEmotion = prompt('And lastly, write a random emotion.');

let message = "I " + randomVerb + " a " + randomObject + " when I'm " + randomEmotion + ".";

console.log(message);
document.write(message);