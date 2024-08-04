const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// test('sub 2 - 1 to equal 1', () => {
//   expect(sub(2, 1)).toBe(1);
// });

test('adds 3 + 2 to equal 5', () => {
  expect(sum(3, 2)).toBe(5);
});
