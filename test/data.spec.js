import { orderData, filterDataEgg} from '../src/data.js';
import { inputA_Z, outputA_Z,outputZ_A} from './testsort.js';


describe('example', () => {
  it('is a function', () => {
    expect(typeof orderData).toBe('function');
  });

  it('returns `a-z`', () => {
    expect(orderData(inputA_Z, "a-z")).toEqual(outputA_Z);
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof orderData).toBe('function');
  });

  it('returns `z-a`', () => {
    expect(orderData(inputA_Z, "z-a")).toEqual(outputZ_A);
  });
});

