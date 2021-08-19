/**
 * 
 * @param testWord Word which we'll use against our test array to find the overlapping occurences
 * @param testArray An array of words which we want to test our word against
 * @returns An array of ocurrences
 */

export const listOverlappingOccurences = (testWord: string, testArray: string[]) => {
  const matches = [];

  for (let currWordIndex = 0; currWordIndex < testArray.length; currWordIndex++) {
    const currWord = testArray[currWordIndex];
  
    for (let startIndex = 0; startIndex + currWord.length <= testWord.length; startIndex++) {
      const currSlice = testWord.slice(startIndex, startIndex + currWord.length)

      if (currSlice === currWord) {
        matches.push(currSlice);
      }
    }
  }

  return matches
}

// const testWord = "aaabaa";
// const testArray = ['a', 'aa', 'aaa']
// const matches = listOverlappingOccurences(testWord, testArray)

// console.log(matches)