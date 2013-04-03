var makeQueue3 = function(){
  var queue = Object.create(queuePrototype);
  var storage = {};
  var size = 0;
  var counter = 0;
};

var queuePrototype = {};

queuePrototype.add = function(ele){
  this.storage[this.size] = ele;
  this.size++;
};

queuePrototype.remove = function(){
  if (this.size >= 0) {
    var temp = this.storage[this.counter];
    delete this.storage[this.counter];
    this.counter++;
    return temp;
  }
};

queuePrototype.size = function(){
  return this.size - this.counter;
};


