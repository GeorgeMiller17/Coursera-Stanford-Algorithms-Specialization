class Graph {
  constructor() {
    this.edges = {};
    this.vertices = [];
  }

  addEdge(u,v) {
    this.vertices.indexOf(u)===-1 && this.vertices.push(u);
    this.vertices.indexOf(v)===-1 && this.vertices.push(v);
    this.edges[u] ? this.edges[u].push(v) : this.edges[u] = [v];
  }

  topologicalSorting() {
    let dfs, vertices, visitedVertices, results;
    visitedVertices = {};
    results=[];
    dfs = (vertex) => {
      let neighbors;
      visitedVertices[vertex] = true;
      neighbors = this.edges[vertex];
      if (neighbors) {
        for (let neighbor of neighbors) {
          if (!visitedVertices[neighbor]) dfs(neighbor);
        }
      }
      results.unshift(vertex);
    }
    for (let vertex of this.vertices) {
      if (!visitedVertices[vertex]) {
        dfs(vertex);}
    }
    return results;
  }
}


// let g = new graph()
// g.addEdge('C', 'E');
// g.addEdge('D', 'E');
// g.addEdge('B', 'C');
// g.addEdge('C', 'D');
// g.addEdge('A', 'B');
// g.addEdge('A', 'D');
// console.log(g);
// var t = g.topologicalSorting();
// console.log(t);
