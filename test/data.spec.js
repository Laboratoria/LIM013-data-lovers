import { example, anotherExample } from '../src/data.js';


describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});


/*describe('operaciones', () => {
  it('function sumar', () => {
    expect(a+b).toBe(z);
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});
*/
