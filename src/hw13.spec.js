import chai from 'chai'; //chai= {assert,equal}
const {expect} = chai;
const should = chai.should();
import sinon from 'sinon';
import { getDay, fakeUsers, getAdultUsers, getRandomUsers } from './hw13';

describe('Get day', () => {
    it('should return date number', () => {
        const currentDay = new Date.getDay();
        expect(getDay()).to.equal(currentDay);
    })
});

describe('Get adult user filter', () => {
    const testAdult = getAdultUsers(fakeUsers);
    const testNoAttr = getAdultUsers();
    it('should return no users for no arguments and 40 years aged if fake list given', () => {
        expect(testAdult[0].age).to.equal(40);
        expect(testNoAttr.length).to.equal(0);
    });
});

describe('Get fake random', () => {
    const stub = sinon.stub(Math, 'random');
    stub.returns(() => 0.4);
    it('should return user aged 4', () => {
        expect(getRandomUsers(fakeUsers))[0].age.to.equal(4);
    });
    stub.returns(() => 0.6);
    it('should return user aged 4', () => {
        expect(getRandomUsers(fakeUsers))[0].age.to.equal(40);
    });
    Math.random.restore();
});
