class Graph {
  constructor() {
    this.graph = {};
  }

  addEdge(u,v) {
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

}


let g = new Graph()
g.addEdge('1', '2')
g.addEdge('1', '3')
g.addEdge('2', '4')
g.addEdge('2', '5')
g.addEdge('3', '5')
g.addEdge('4', '6')
g.addEdge('5', '6')

console.log(g)
// var bfsPath = g.bfs('1')
// console.log(bfsPath);
// var shortestPath = g.shortestPath(1,5);
// console.log(shortestPath);
var dfsPath = g.dfs('1');
console.log(dfsPath);
