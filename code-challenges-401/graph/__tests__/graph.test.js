'use strict';

const { Vertex, Edge, Graph } = require('../graph');

describe('Testing Graph Implementation', () => {
  it('Create instant Of Graph ', () => {
    const graph1 = new Graph();
    expect(graph1 instanceof Graph).toBeTruthy;
  });

  it('Create instant Of Vertex', () => {
    const newVertex = new Vertex(0);
    expect(newVertex instanceof Vertex).toBeTruthy;
  });
  it('Create instant Of Edge', () => {
    const newEdge = new Edge();
    expect(newEdge instanceof Edge).toBeTruthy;
  });
  it('addVertex(vertex) method', () => {
    const graph7 = new Graph();
    const one = new Vertex(1);
    expect(graph7.addVertex(one).value).toEqual(1);
  });
  it('getVertex() method', () => {
    const graph7 = new Graph();
    expect(graph7.getVertex()).toEqual([]);
    const one = new Vertex(1);
    const two = new Vertex(2);
    const three = new Vertex(3);
    const four = new Vertex(4);
    graph7.addVertex(one);
    graph7.addVertex(two);
    graph7.addVertex(three);
    graph7.addVertex(four);
    const vertexes = graph7.getVertex();
    expect(vertexes).toBeDefined();
    for (const [vertex] of vertexes) {
      expect(vertex).toHaveProperty('value');
    }
  });

  it('hasExist(Vertex)', () => {
    const graph3 = new Graph();
    const one = new Vertex(1);
    const two = new Vertex(2);
    const three = new Vertex(3);
    const four = new Vertex(4);
    graph3.addVertex(one);
    graph3.addVertex(two);
    graph3.addVertex(three);
    graph3.addVertex(four);
    expect(graph3.hasExist(one)).toBeTruthy();
  });

  it('addEdge(start , end , weight) method', () => {
    const graph7 = new Graph();
    const one = new Vertex(1);
    const two = new Vertex(2);
    const four = new Vertex(4);
    const five = new Vertex(5);

    const ten = new Vertex(10);
    const twenty = new Vertex(20);
    const fourteen = new Vertex(14);
    const fifteen = new Vertex(15);

    graph7.addVertex(one);
    graph7.addVertex(two);
    graph7.addVertex(four);
    graph7.addVertex(five);

    const firstEdge = graph7.addEdge(one, ten);
    const secEdge = graph7.addEdge(two, twenty);
    const thirdEdge = graph7.addEdge(four, fourteen);
    const fourEdge = graph7.addEdge(five, fifteen);

    expect(firstEdge.vertex).toEqual(ten);
    expect(secEdge.vertex).toEqual(twenty);
    expect(thirdEdge.vertex).toEqual(fourteen);
    expect(fourEdge.vertex).toEqual(fifteen);

  });

  it('try to add edge on non exist vertex', () => {
    const graph5 = new Graph();
    const one = new Vertex(1);
    const two = new Vertex(2);

    expect(graph5.addEdge(one, two)).toEqual('Vertex isnt Found');
  });
  it('size() of graph', () => {
    const graph6 = new Graph();
    const epmtyGraph = new Graph();

    const one = new Vertex(1);
    const two = new Vertex(2);
    const four = new Vertex(4);
    const five = new Vertex(5);

    graph6.addVertex(one);
    graph6.addVertex(two);
    graph6.addVertex(four);
    graph6.addVertex(five);

    expect(epmtyGraph.size()).toBeNull();
    expect(graph6.size()).toEqual(4);
  });
  it('getNeighbors(vertex)', () => {
    const graph7 = new Graph();
    const one = new Vertex(1);
    const two = new Vertex(2);
    const seven = new Vertex(7);
    const ten = new Vertex(10);
    const twenty = new Vertex(20);
    const fourteen = new Vertex(14);

    graph7.addVertex(one);
    graph7.addVertex(two);
    graph7.addVertex(seven);

    graph7.addEdge(one, ten);
    graph7.addEdge(two, twenty);
    graph7.addEdge(seven, fourteen);

    expect(graph7.getNeighbors(one)[0].vertex.value).toEqual(10);
    expect(graph7.getNeighbors(two)[0].vertex.value).toEqual(20);
    expect(graph7.getNeighbors(seven)[0].vertex.value).toEqual(14);

  });

});