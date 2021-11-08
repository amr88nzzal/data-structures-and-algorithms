'sue strict';
const LinkedList = require('../index');


describe('test the link list', () => {

  it('Test instantiating an empty linked list', () => {
    const list = new LinkedList();
    expect(list.head).toEqual(null);
  });

  it('add a node to the end of the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(1);
    expect(linkedList.head.value).toEqual(1);
    expect(linkedList.head.next).toBeNull();
  });
  it('Test if the first node is the head', () => {
    const list = new LinkedList();
    list.insert('A');
    list.insert('B');
    expect(list.head.value).toEqual('A');
  });
  it('add multiple nodes to the end of a linked list', () => {
    const list = new LinkedList();
    list.insert('A');
    list.insert('B');
    list.insert('C');
    expect(list.head.value).toEqual('A');
    expect(list.head.next.value).toEqual('B');
    expect(list.head.next.next.value).toEqual('C');
    expect(list.head.next.next.next).toBeNull();
  });
  it('Will return true when finding a value within the linked list that exists', () => {
    const list = new LinkedList();
    list.insert('A');
    list.insert('B');
    list.insert('C');
    expect(list.includes('C')).toBe(true);
  });
  it('Will return false when searching for a value in the linked list that does not exist', () => {
    const list = new LinkedList();
    list.insert('A');
    list.insert('B');
    list.insert('C');
    expect(list.includes('D')).toBe(false);
  });
  it('Can properly return a collection of all the values that exist in the linked list', () => {
    const list = new LinkedList();
    list.insert('A');
    list.insert('B');
    list.insert('C');
    // console.log(list.toString());
    expect(list.toString()).toEqual('{ A } -> { B } -> { C } -> NULL');
  });
});

