class Node {
  constructor(value) {
    this.value = value;
    this.visited = false;
    this.edges = [];
  }

  addEdge(edge) {
    this.edges.push(edge);
  }
}

let A = new Node("A");
let B = new Node("B");
let C = new Node("C");
let D = new Node("D");
let E = new Node("E");
let F = new Node("F");
let allNodes = [A, B, C, D, E, F];

class Edge {
  constructor(n1, n2, weight) {
    this.node1 = n1;
    this.node2 = n2;
    this.weight = weight;
  }
}

let e1 = new Edge(A, B, 10);
A.addEdge(e1);
B.addEdge(e1);
let e2 = new Edge(A, C, 8);
A.addEdge(e2);
C.addEdge(e2);
let e3 = new Edge(B, D, 6);
B.addEdge(e3);
D.addEdge(e3);
let e4 = new Edge(C, D, 5);
C.addEdge(e4);
D.addEdge(e4);
let e5 = new Edge(B, E, 7);
B.addEdge(e5);
E.addEdge(e5);
let e6 = new Edge(D, E, 4);
D.addEdge(e6);
E.addEdge(e6);
let e7 = new Edge(D, F, 3);
D.addEdge(e7);
F.addEdge(e7);
let e8 = new Edge(E, F, 1);
E.addEdge(e8);
F.addEdge(e8);
let e9 = new Edge(C, F, 8);
C.addEdge(e9);
F.addEdge(e9);

function primMST(startNode) {
  let edgeBucket = [];
  let mstEdges = [];

  grabEdgesFromNode(startNode);

  let bestEdge = getBestEdge();
  while (bestEdge) {
    // record this edge
    mstEdges.push(bestEdge);

    // visit two node of new edge
    let n1 = bestEdge.node1;
    n1.visited = true;
    grabEdgesFromNode(n1);
    let n2 = bestEdge.node2;
    n2.visited = true;
    grabEdgesFromNode(n2);

    bestEdge = getBestEdge();
  }
  return mstEdges;

  // function grab all edge of node into bucket
  function grabEdgesFromNode(n) {
    for (let edge of n.edges) {
      if (!edgeBucket.includes(edge)) edgeBucket.push(edge);
    }
  }

  // return the best edge from bucket then delete
  function getBestEdge() {
    let bestEdge = null;
    while (bestEdge == null && edgeBucket.length > 0) {
      bestEdge = edgeBucket[0];
      let index = 0;
      edgeBucket.forEach((edge, i) => {
        if (edge.weight < bestEdge.weight) {
          bestEdge = edge;
          index = i;
        }
      });
      // remove best edge from bucket
      edgeBucket.splice(index, 1);
      // if bestEdge will cause loop, find another
      if (bestEdge.node1.visited && bestEdge.node2.visited) bestEdge = null;
    }
    return bestEdge;
  }
}

console.log(primMST(A));
