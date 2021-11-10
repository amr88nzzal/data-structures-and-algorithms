'sue strict';
const LinkedList = require('../src/linkList');


describe('test the link list', () => {


  it('1)-Add a node to the end of the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.append(2);

    expect(linkedList.head.next.value).toEqual(2);
    expect(linkedList.head.next.next).toBeNull();
  });
  it('2)-Add multiple nodes to the end of a linked list', () => {
    const list = new LinkedList();
    list.insert('A');
    list.append('B');
    list.append('C');
    expect(list.head.value).toEqual('A');
    expect(list.head.next.value).toEqual('B');
    expect(list.head.next.next.value).toEqual('C');
    expect(list.head.next.next.next).toBeNull();
  });
  it('3)-Insert a node before a node located i the middle of a linked list', () => {
    const list = new LinkedList();
    list.insert('A');
    list.append('B');
    list.append('D');
    list.append('E');
    list.insertBefore('D', 'C');
    expect(list.toString()).toEqual('{ A } -> { B } -> { C } -> { D } -> { E } -> NULL');
  });
  it('4)-Insert a node before the first node of a linked list', () => {
    const list = new LinkedList();
    list.insert('A');
    list.append('B');
    list.insertBefore('A', 'Z');
    expect(list.toString()).toEqual('{ Z } -> { A } -> { B } -> NULL');
  });
  it('5)-Insert after a node in the middle of the linked list', () => {
    const list = new LinkedList();
    list.insert('A');
    list.append('B');
    list.append('D');
    list.append('E');
    list.insertAfter('B', 'C');
    expect(list.toString()).toEqual('{ A } -> { B } -> { C } -> { D } -> { E } -> NULL');
  });
  it('6)-Insert a node after the last node of the linked list', () => {
    const list = new LinkedList();
    list.insert('A');
    list.append('B');
    list.insertAfter('B', 'C');
    expect(list.toString()).toEqual('{ A } -> { B } -> { C } -> NULL');
  });

  it('Test instantiating an empty linked list', () => {
    const list = new LinkedList();
    expect(list.head).toEqual(null);
  });
  it('Test if the first node is the head', () => {
    const list = new LinkedList();
    list.insert('A');
    list.insert('B');
    expect(list.head.value).toEqual('B');
  });
  it('Will return true when finding a value within the linked list that exists', () => {
    const list = new LinkedList();
    list.append('A');
    list.append('B');
    list.append('C');
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
    list.append('B');
    list.append('C');
    // console.log(list.toString());
    expect(list.toString()).toEqual('{ A } -> { B } -> { C } -> NULL');
  });
});

