const { expect } = require('chai');
const { giveMeFive, removeLetter, removeProp } = require("../src/utils");

describe('Testing giveMeFive', function() {

    describe('When we call it simply', function() {

        it('should return 5', function() {

            const result = giveMeFive();

            expect(result).to.equal(5)
        });

    });

    describe('When we call it with the asString parameter', function() {

        it('should return 5 as a string', function() {

            const result = giveMeFive(true);

            expect(result).to.be.a('string')
            expect(result).to.equal('5')
        });

    });
});

describe('Testing removeLetter', function() {

    describe('When we call it correctly', function() {

        it('should remove the letter', function() {

            const text = 'Hello from around the world';
            const character = 'o';

            const result = removeLetter(text, character);
            console.log('result: ', result);

            expect(result).to.equal('Hell frm arund the wrld');
            expect(result).to.have.length(23);
        });

    });

    describe('When we call it with only one parameter', function() {

        it('should return the same text', function() {

            const text = 'Hello from around the world';

            const result = removeLetter(text);

            expect(result).to.equal(text);
        });

    });
});

describe('Testing removeProp', function() {

    describe('When we call it correctly', function() {

        it('should remove the property', function() {

            const object = {
                name: 'John',
                age: 51,
                country: 'Canada',
            };
            const propertyToRemove = 'country';

            const result = removeProp(object, propertyToRemove);

            expect(result).to.have.property('name');
            expect(result).to.have.property('age');
            expect(result).to.not.have.property('country');
        });

    });

    describe('When we call it with a non-present property', function() {

        it('should not remove the property', function() {

            const object = {
                name: 'John',
                age: 51,
                country: 'Canada',
            };
            const propertyToRemove = 'place';

            const result = removeProp(object, propertyToRemove);

            expect(result).to.have.property('name');
            expect(result).to.have.property('age');
            expect(result).to.have.property('country');
            expect(result).to.not.have.property('place');
        });

    });
});