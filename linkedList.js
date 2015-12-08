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
  var position = 0;

  function traverse(list){
    if (list.next === undefined) {
      return null;
    }
    if (list.next === null){
      return this;
    }
    position++;
    traverse(this.next);
  }


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

  module.get = function(index) {
    var got = this.getHead();
    var position = 0;
    while (position < index){
      position ++;
      if (got.next === null) {
        return false;
      }
      got = got.next;
    }
    return got;
  };

  module.remove = function(index) {
    var toRemove = this.get(index);
    if (toRemove === false){
      return false;
    }
    if (toRemove === head){
      head = toRemove.next;
      return true;
    }
    if (toRemove === tail){
      tail = this.get(index - 1);
      tail.next = null;
      return true;
    }
    if (toRemove !== head && toRemove !== tail){
      this.get(index - 1).next = this.get(index + 1);
    }


  };


  module.insert = function(value, index) {
    var toShift = this.get(index);
    node.value = value;
    node.next = toShift;

    if (this.get(index) === false) {
      return false;
    }
    if (index === 0){
      head = node;
      return true;
    } else {
    console.log(this.getHead());
    this.get(index-1).next = node;
    return true;
    }
  };

  return module;
}

linkedListGenerator().get(0);