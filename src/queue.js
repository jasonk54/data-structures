var makeQueue = function() {
  var queue = {};
  var storage = {};
  var size = 0;
  var counter = 0;

  queue.add = function(ele) {
    storage[size] = ele;
    size++;
  };

  queue.remove = function() {
    if (size >= 0) {
      var temp = storage[counter];
      delete storage[counter];
      counter++;
      return temp;
    }
  };

  queue.size = function() {
    return size - counter;
  };

  return queue;
};
