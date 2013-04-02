describe("stack", function() {
  var stack;

  beforeEach(function() {
    stack = makeStack();
  });

  it('should have "add", "remove", and "size" methods', function() {
    expect(stack.add).toEqual(jasmine.any(Function));
    expect(stack.remove).toEqual(jasmine.any(Function));
    expect(stack.size).toEqual(jasmine.any(Function));
  });

  describe("add", function(){
    it('should add a new item into the stack', function(){
      stack.add('hello');
      expect(stack.size()).toEqual(1);
    });
  });
});
