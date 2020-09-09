import { orderData, anotherExample } from '../src/data.js';


describe('example', () => {
  it('is a function', () => {
    expect(typeof orderData).toBe('function');
  });

  it('returns `a-z`', () => {
    expect(orderData(inputA_Z)).toEqual('outputA_Z');
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
