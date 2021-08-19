import {listOverlappingOccurences} from '../src'

test('lists overlapping ocurrences', () => {
  const testWord = 'aaabaa';
  const testArray = ['a', 'aa', 'aaa'];
  const matches = listOverlappingOccurences(testWord, testArray)
  const result = ['a', 'a', 'a', 'a', 'a', 'aa', 'aa', 'aa', 'aaa']

  expect(matches).toStrictEqual(result)
})
