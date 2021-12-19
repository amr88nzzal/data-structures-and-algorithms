'use strict';
class Vertex {
  constructor(value) {
    this.value = value;
  }
}
class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}
class Graph{
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
    return vertex;
  }

  addEdge(start, end, weight) {
    if (!this.hasExist(start) || this.hasExist(end)) {
      return 'Vertex isnt Found';
    }
    const startAdjacency = this.adjacencyList.get(start);
    const edge = new Edge(end, weight);
    startAdjacency.push(edge);
    return edge;
  }
  getVertex() {
    const output = [];
    for (const [v, e] of this.adjacencyList.entries()) {
      output.push([v, e]);
    }
    return output;
  }
  getNeighbors(vertex) {
    if (!this.hasExist(vertex)) {
      return 'Vertex is not Found';
    }
    return this.adjacencyList.get(vertex);
  }
  size() {
    return this.adjacencyList.size ? this.adjacencyList.size : null;
  }
  hasExist(vertex) {
    return this.adjacencyList.has(vertex);
  }

}

module.exports = { Vertex, Edge, Graph };
