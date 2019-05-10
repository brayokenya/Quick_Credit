/* eslint-disable no-undef */
const { assert } = require('chai');
const { LinkedList } = require('../helper/util');

describe('Linked List', () => {
  it('Should implement insertUser', () => {
    const LL = new LinkedList();
    LL.insertUser(...[1, 'eleman', 'hillary', 'elemanhillary@gmail.com', 'kampala', 'kampala', '1234', false]);
    assert.equal(LL.head.data.id, 1);
  });
  it('Should implement getSize', () => {
    const LL = new LinkedList();
    LL.insertUser(...[1, 'eleman', 'hillary', 'elemanhillary@gmail.com', 'kampala', 'kampala', '1234', false]);
    assert.equal(LL.getSize(), 1);
  });
  it('Should implement getAt', () => {
    const LL = new LinkedList();
    LL.insertUser(...[1, 'eleman', 'hillary', 'elemanhillary@gmail.com', 'kampala', 'kampala', '1234', false]);
    assert.equal(LL.getAt(1).firstname, 'eleman');
  });
  it('Should implement checkCreds', () => {
    const LL = new LinkedList();
    LL.insertUser(...[1, 'eleman', 'hillary', 'elemanhillary@gmail.com', 'kampala', 'kampala', '1234', false]);
    assert.equal(LL.checkCreds('elemanhillary@gmail.com', '1234').bool, true);
    assert.equal(LL.checkCreds('elemanhillary@gmail.com', '1234').node.password, '1234');
  });
  it('Should implement checkEmail', () => {
    const LL = new LinkedList();
    LL.insertUser(...[1, 'eleman', 'hillary', 'elemanhillary@gmail.com', 'kampala', 'kampala', '1234', false]);
    assert.equal(LL.checkEmail('elemanhillary@gmail.com').bool, true);
  });
  it('Should implement checkRepaid', () => {
    const LL = new LinkedList();
    LL.insertLoan(...[1, 'elemanhillary@gmail.com', 'Auto Loan', 1, 4000]);
    assert.equal(LL.checkRepaid(1), false);
  });
  it('Should implement checkLoans', () => {
    const LL = new LinkedList();
    LL.insertLoan(...[1, 'elemanhillary@gmail.com', 'Auto Loan', 1, 4000]);
    assert.equal(LL.checkLoans('pending', false).retBool, true);
  });
  it('Should implement verifyUser', () => {
    const LL = new LinkedList();
    LL.insertUser(...[1, 'eleman', 'hillary', 'elemanhillary@gmail.com', 'kampala', 'kampala', '1234', false]);
    assert.equal(LL.verifyUser('elemanhillary@gmail.com').bool, true);
    assert.equal(LL.verifyUser('elemanhillary@gmail.com').node.data.status, 'verified');
  });
  it('Should implement toggleRepay', () => {
    const LL = new LinkedList();
    LL.insertLoan(...[1, 'elemanhillary@gmail.com', 'Auto Loan', 1, 4000]);
    LL.toggleRepay(1);
    assert.equal(LL.head.data.repaid, true);
  });
  it('Should implement verifyLoan', () => {
    const LL = new LinkedList();
    LL.insertLoan(...[1, 'elemanhillary@gmail.com', 'Auto Loan', 1, 4000]);
    LL.verifyLoan(1, 'approved');
    assert.equal(LL.head.data.status, 'approved');
  });
});
