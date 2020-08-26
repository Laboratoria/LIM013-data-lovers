//import {  dateAscNum,dateDescNum,dateNamAsc,dateNamDesc  } from './dataTest.js';
import {order, filter} from '../src/data.js';
import { input1_n, output1_n, imputN_1, outputNum_1, imputA_Z, ouputA_Z, imputZ_A, outputZ_A, inputFilterType, outputFiltertype} from './dataTest.js';


// describe order ascendente por numero.
describe("order", () => {
    it("is a function", () => {
        expect(typeof order.num1_N).toBe("function");
    });
    it("show ascending  numerical order'num'", () => {
        expect(order.num1_N(input1_n)).toEqual(output1_n);
    });


    // describe order descendente por numero.
    it("ordern_1", () => {
        expect(typeof order.numN_1).toBe("function");
    });

    it("show descending  numerical order'num'", () => {
        expect(order.numN_1(imputN_1)).toEqual(outputNum_1);
    });
});




// order alfabeticamente
describe("order", () => {
    it("is a function", () => {
        expect(typeof order.nameA_Z).toBe("function");
    });
    it("show ascending  name order 'a-z' ", () => {
        expect(order.nameA_Z(imputA_Z)).toEqual(ouputA_Z);
    });

    it("is a function order name descendiente", () => {
        expect(typeof order.nameZ_A).toBe("function");
    });
    it("show ascending  name order 'a-z' ", () => {
        expect(order.nameZ_A(imputZ_A)).toEqual(outputZ_A);
    });
});

// Test Filter 

describe("filter", () => {
    it("is a function", () => {
        expect(typeof filter.type).toBe("function");
    });
    it("show filter  type 'normal'", () => {
        expect(filter.type(inputFilterType, 'normal')).toEqual(outputFiltertype);
    });
});
