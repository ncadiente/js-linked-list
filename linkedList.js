/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
 var example = {
  value: 'Ready Player One',
  next: {
    value: '1982',
    next: {
      value: 'Neuromancer',
      next: {
        value: 'Snow Crash',
        next: null
      }
    }
  }
};

function linkedListGenerator(){
  var module = {};
  var linkedList = {};
  var node = {
    value : null,
    next : null
  };
  var head = null;
  var tail = null;


  module.getHead = function() {
      return head;
    };

  module.getTail = function() {
    return tail;
  };

  module.add = function(newValue) {
    var newNode = {
      value : newValue,
      next : null
    };
    if (head === null && tail === null){
      head = newNode;
      tail = newNode;
      return tail;
    } else {
    tail.next = newNode;
    tail = newNode;
    return tail;
    }
  };

  module.remove = function() {

  };

  module.get = function() {

  };

  module.insert = function() {

  };

  return module;
}

//console.log(example.linkedListGenerator.getTail);