/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */

function linkedListGenerator(){
  var module = {};
  var head = null;
  var tail = null;
  var length = 0;

  function makeNode(value){
    return {
    value : value,
    next : null
    };
  }

  module.getHead = function() {
      return head;
    };

  module.getTail = function() {
    return tail;
  };

  module.add = function(value) {
    var newNode = makeNode(value);
    if (tail === null){
      head = newNode;
    } else {
      tail.next = newNode;
    }
    tail = newNode;
    length++;
    return newNode;
  };

  module.get = function(index) {
    var currentNode = this.getHead();
    var position = 0;
    while (position < index){
      if (currentNode === tail) {
        return false;
      }
      currentNode = currentNode.next;
      position ++;
    }
    return currentNode;
   };

  module.remove = function(index) {
    var currentNode = this.get(index);
    var previousNode = this.get(index - 1);
    if ( index >= length ) {
      return false;
    }
    if (length === 1 && index === 0) {
      head = null;
      tail = null;
    } else {
      if (index === 0) {
        head = currentNode.next;
      } else if (index === length - 1){
        tail = previousNode;
        previousNode.next = null;
      } else {
        previousNode.next = currentNode.next;
      }
    }
    length--;
  };


   module.insert = function(value, index) {
    var currentNode = this.get(index);
    var previousNode = this.get(index - 1);
    var tempNode = makeNode(value);

    if ( index >= length || index <0) {
      return false;
    } else if ( index === 0){
      tempNode.next = currentNode;
      head = tempNode;
    } else {
    previousNode.next = tempNode;
    tempNode.next = currentNode;
    }
    length++;
   };

  return module;
}
