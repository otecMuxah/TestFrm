// import chai from 'chai'; //chai= {assert,equal}
// const {expect} = chai;
// const should = chai.should();
// import {Person, NAME, CREATION} from './Person';
//
// describe('Class Person', () => {
//     let person, counter = 1;
//
//     beforeEach(() => {
//         console.log(`number ${counter++} - @it`);
//         person = new Person();
//     });
//     it('should create new object with name', ()=>{
//         const str = 'test';
//         expect(new Person(str).name).to.equal(str);
//     });
//     it('should create instance with default name',()=>{
//         expect(person).to.have.own.property('name');
//
//         expect(new Person().name).to.equal(NAME);
//     });
//     it('should create date field',()=>{
//        expect(person.creation).to.be.an.instanceOf(Date);
//     });
//     it('should create date', ()=>{
//         person.creation.should.to.be.instanceOf(Date);
//     });
//     it('should set a name',()=>{
//         const testName = 'test';
//         person.setName(testName);
//         expect(person.name).to.equal(testName);
//     });
//     it('should get creation date - "day child"', ()=>{
//         person.creation.setHours(12);
//         expect(person.getCreation()).to.equal(CREATION);
//     });
//     it('should return appropriate value of getCreation',()=>{
//         const tests = [
//             {hour: 23, text: 'night child'}, {hour: 7, text: 'morning child'},
//             {hour: 12, text: 'day child'}, {hour: 19, text: 'evening child'}
//         ];
//
//         tests.forEach(({hour, text}) => {
//             person.creation.setHours(hour);
//             expect(person.getCreation()).to.equal(text);
//         });
//     });
// });