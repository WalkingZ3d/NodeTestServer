const app = require('../website');

describe('getDog', () =>{
    let getDog = website.getDog;
    it('should be a function', () => {
        expect(getDog).toBeDefined();
    });
})

describe('getMsg', () =>{
    let getMsg = website.getMsg;
    it('should be a function', () => {
        expect(getMsg).toBeDefined();
    });
})

describe('getInputValue', () =>{
    let getInputValue = website.getInputValue;
    it('should be a function', () => {
        expect(getInputValue).toBeDefined();
    });
})



