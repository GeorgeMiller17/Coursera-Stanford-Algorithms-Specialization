class Graph {
  constructor() {
    this.graph = {};
    this.vertices = [];
  }

  addEdge(u,v) {
    this.vertices.indexOf(u)===-1 && this.vertices.push(u);
    this.vertices.indexOf(v)===-1 && this.vertices.push(v);
    this.graph[u] ? this.graph[u].push(v) : this.graph[u] = [v];
  }

  dfs(start,results = []) {
    results.push(start);
    if (this.graph[start]) {
    for (let node of this.graph[start]) {
      if (results.indexOf(node)===-1) this.dfs(node,results);
      }
    }
    return results;
  }


  topologicalSorting() {
    let dfs, vertices, visitedVertices, results;
    visitedVertices = {};
    results=[];
    dfs = (vertex) => {
      let neighbors;
      visitedVertices[vertex] = true;
      neighbors = this.graph[vertex];
      if (neighbors) {
        for (let neighbor of neighbors) {
          if (!visitedVertices[neighbor]) dfs(neighbor);
        }
      }
      results.unshift(vertex);
    }
    for (let vertex of this.vertices) {
      if (!visitedVertices[vertex]) dfs(vertex);
    }
    return results;
  }
}


let g = new Graph()
// g.addEdge('s', 'v')
// g.addEdge('s', 'w')
// g.addEdge('v', 't')
// g.addEdge('w', 't')

// g.addEdge('1', '4')
// g.addEdge('1', '2')
// g.addEdge('2', '4')
// g.addEdge('2', '3')
// g.addEdge('4', '3')
// g.addEdge('4', '5')
// g.addEdge('3', '5')
g.addEdge(5, 2);
g.addEdge(5, 0);
g.addEdge(4, 0);
g.addEdge(4, 1);
g.addEdge(2, 3);
g.addEdge(3, 1);
// g.addEdge('4', '0')
// g.addEdge('4', '1')
console.log(g)

var t = g.topologicalSorting();
console.log(t);
