describe("queue2", function() {
  var queue;

  beforeEach(function() {
    queue = makeQueue2();
  });

  it('should have "add", "remove", and "size" methods', function() {
    expect(queue.add).toEqual(jasmine.any(Function));
    expect(queue.remove).toEqual(jasmine.any(Function));
    expect(queue.size).toEqual(jasmine.any(Function));
  });

  describe("add", function(){
    it('should add a new item into the queue', function(){
      queue.add('hello');
      queue.add('greetings');
      expect(queue.size()).toEqual(2);
    });
  });

  describe('remove', function(){
    it('should remove an item from the queue', function(){
      queue.add('hello');
      queue.remove();
      expect(queue.size()).toEqual(0);
      expect(queue.remove()).toEqual(undefined);
    });

    it('should work right if it\'s empty', function(){
      expect(queue.remove()).toEqual(undefined);
    });
  });

  it('should remove the first item', function(){
    queue.add('hello');
    queue.add('greetings');
    queue.add('bye');
    expect(queue.remove()).toEqual('hello');
    expect(queue.remove()).toEqual('greetings');
    expect(queue.remove()).toEqual('bye');
    expect(queue.remove()).toEqual(undefined);
  });
});
