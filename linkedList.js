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
  var head;
  var tail;


  module.getHead = function() {
    if (this.value === undefined){
      return null;
    }
      return this;
    };

  module.getTail = function() {
    if (this.value === undefined){
      return null;
    }
    if (this.next === null){
      return this;
    }else{
      this.next.getTail();
    }
  };

  module.add = function(newValue) {
    if (this.value === undefined){
      this.value = newValue;
      this.next = null;
      return this;
    }
    if (this.next === null){
      var newNode = node;
      newNode.value = newValue;
      newNode.next = null;
      this.next = newNode;
      return newNode;
    }else{
      this.next.add();
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

console.log(example.linkedListGenerator.getTail);