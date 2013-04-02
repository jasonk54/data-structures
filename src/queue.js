var makeQueue = function(){
  var queue = {};
  var storage = {}; // You'll use an object with numeric keys to store queue
                    // elements, since using an Array would defeat the purpose.
  var size = 0;
  var counter = 0;
  // fill out these methods
  queue.add = function(ele){
    storage[size] = ele;
    size++;
  };

  queue.remove = function(){
    if (size >= 0) {
      var temp = storage[counter];
      delete storage[counter];
      counter++;
      return temp;
    }
  };

  queue.size = function(){
    return size - counter;
  };

  return queue;
};
