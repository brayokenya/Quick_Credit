const { NodeUser, NodeLoan, NodeRepayments } = require('../model/db');

/* Use LinkedList for all of our operations and it will handle all tables */
class LinkedList {
  construct() {
    this.head = null;
  }

  /* the following code inserts info into our NodeUser */
  insertUser(...args) {
    /* using arguments to make it neutral to any amount of arguments */
    const newNode = new NodeUser(...args, this.head);
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }

  insertLoan(...args) {
    const newNode = new NodeLoan(...args, this.head);
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }

  insertRepay(...args) {
    const newNode = new NodeRepayments(...args, this.head);
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }

  /* getAt retrieves user or loan with primary key given in method argument */
  getAt(id) {
    let node = this.head;
    while (node) {
      /* if node.id is equal to id then we are at the right node */
      if (node.data.id === id) return node.data;
      node = node.next;
    }
    return null;
  }

  getSize() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter += 1;
      node = node.next;
    }
    return counter;
  }

  /* check whether credentials exit and return an object containing boolean and node */
  checkCreds(...args) {
    let node = this.head;
    if (args.length === 2) {
      while (node) {
        /* if func args match email and password in node return true */
        if (node.data.email === args[0] && node.data.password === args[1]) {
          return { bool: true, node: node.data };
        }
        /* loop the whole node */
        node = node.next;
      }
      return { bool: false, node: null };
    }
    /* we shall use this also to get user(info) by email */
    while (node) {
      /* if func args match email or id return true */
      if (node.data.id === args[0]) return { bool: true, node: node.data };
      /* loop the whole node */
      node = node.next;
    }
    return { bool: false, node: null };
  }

  /* repayment */
  RcheckCreds(id) {
    let node = this.head;
    while (node) {
      /* if func args match email or id return true */
      if (node.data.loanId === id) return { boolR: true, nodeR: node.data };
      /* loop the whole node */
      node = node.next;
    }
    return { boolR: false, nodeR: null };
  }

  /* check email if exist */
  checkEmail(email) {
    let node = this.head;
    while (node) {
      if (node.data.email === email) return { bool: true, node: node.data };
      node = node.next;
    }
    return { bool: false, node: null };
  }

  /* check if email exist in loans */
  LcheckEmail(email) {
    let node = this.head;
    while (node) {
      if (node.data.user === email) return { boolL: true, node: node.data };
      node = node.next;
    }
    return { boolL: false, node: null };
  }

  /* check repaid boolean, if its false user can only apply loan once
  * if its true user can request for a new loan */
  checkRepaid(email) {
    let node = this.head;
    while (node) {
      if (node.data.user === email) {
        if (node.data.repaid === true) return true;
      }
      node = node.next;
    }
    return false;
  }

  /* check loans approved or rejected or pending and repaid or not */
  checkLoans(status, repaid) {
    let node = this.head;
    while (node) {
      if (node.data.status === status && node.data.repaid === repaid) {
        return { retBool: true, node };
      }
      node = node.next;
    }
    return { retBool: false, retNode: null };
  }

  verifyUser(email) {
    let node = this.head;
    while (node) {
      if (node.data.email === email) {
        node.data.status = 'verified';
        return { bool: true, node };
      }
      node = node.next;
    }
    return { bool: false, node: null };
  }

  /* if client repays fully toggle repaid to true */
  toggleRepay(id) {
    let node = this.head;
    while (node) {
      if (node.data.id === id) {
        node.data.repaid = true;
      }
      node = node.next;
    }
  }

  /* we dont want duplicate repays so we shall use this method */
  repayOnce(id, amount) {
    let node = this.head;
    while (node) {
      if (node.data.loanId === id) {
        node.data.paidAmount = amount;
        node.data.balance -= node.data.paidAmount;
        return true;
      }
      node = node.next;
    }
    return false;
  }

  /* method need only do a basic traversal of the list and yield the data that
  /* each node contains, so we make our linked list iterable since its not */
  * [Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node.data;
      node = node.next;
    }
  }

  verifyLoan(id, status) {
    let node = this.head;
    while (node) {
      if (node.data.id === id) {
        node.data.status = status;
        /* they are not nodes they are statuses */
        return { bool: true, node: status };
      }
      node = node.next;
    }
    return { bool: false, node: status };
  }
}

const newUser = new LinkedList();
const newApplication = new LinkedList();
const newRepayment = new LinkedList();

module.exports = {
  LinkedList,
  newUser,
  newApplication,
  newRepayment,
};
