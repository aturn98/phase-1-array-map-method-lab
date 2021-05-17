const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// function titleCased(arr1) {
//   return arr1.map(str => {
//     return str.charAt(0).toUpperCase() + str.slice(1)
//   })
// }

// console.log(titleCased(tutorials))

const titleCased = () => {
  return tutorials.map(tutorials => {
  const separateWord = tutorials.split(' ');
    for(let i=0; i < separateWord.length; i++) {
      separateWord[i] = separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
    }
    return separateWord.join(' ');
  })
}

console.log(titleCased(tutorials))