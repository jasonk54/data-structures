var makeStack = function(){
  var stack = {};
  var storage = {}; // You'll use an object with numeric keys to store queue
                    // elements, since using an Array would defeat the purpose.
  var size = 0;

  // fill out these methods
  stack.add = function(ele){
    storage.size = ele;
    size++;
  };

  stack.remove = function(){
    var temp = storage.size;

  };

  stack.size = function(){
    return size;
  };

  return stack;
};
