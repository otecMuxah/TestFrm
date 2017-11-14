import chai from 'chai'; //chai= {assert,equal}
import sinon from 'sinon'
const { expect } = chai;

import { getUsers } from "./users";


describe('users', () => {
    let stub;

    const callStub = (arg, isErr) => {
        if (isErr) {return stub.returns(Promise.reject(arg))}
        const fakeFetch = ()=> Promise.resolve({
            json(){return Promise.resolve(arg)}
        });
        return stub.returns(fakeFetch())
    };

    beforeEach(()=>{
        stub = sinon.stub(window, 'fetch');
        callStub();
    });

    afterEach(()=>{
       window.fetch.restore();
    });

    it('should call fetch() method', () => {
        callStub();
        getUsers();

        expect(stub.called).to.be.true;
    });

    it('getUser should call console log on success',(done)=>{
        const consoleStub = sinon.stub(console, 'log');
        callStub();
        getUsers().then(
            ()=>{
                expect(consoleStub.called).to.be.true;
                done();
                consoleStub.restore();
            }
        )
    });

    it('getUser should call console log on success WITH ARGUMENTS',(done)=>{
        const consoleStub = sinon.stub(console, 'log');
        const testStr = 'test';
        callStub(testStr);
        getUsers().then(
            ()=>{
                expect(consoleStub.getCall(0).args[0]).to.equal(testStr);
                done();
                consoleStub.restore();
            }
        )
    });

    it('getUser should call console.error on error WITH ARGUMENTS',(done)=>{
        const consoleStub = sinon.stub(console, 'error');
        const testStr = 'error';
        callStub(testStr, true);
        getUsers().then(
            ()=>{
                expect(consoleStub.getCall(0).args[0]).to.equal(testStr);
                done();
                consoleStub.restore();
            }
        )
    })
});