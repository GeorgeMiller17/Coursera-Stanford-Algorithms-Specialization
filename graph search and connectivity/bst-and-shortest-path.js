class Graph {
  constructor() {
    this.graph = {};
  }

  addEdge(u,v) {
    this.graph[u] ? this.graph[u].push(v) : this.graph[u] = [v];
  }

  bfs(start) {
    if (!this.graph[start]) return null;
    if (!this.graph[start].length) return [start];
    const results = {nodes:[start],[start]:{level:0}},
          queue = [start];
    while(queue.length) {
      let node = queue.shift();
      let level = results[node].level;
      if (this.graph[node]) {
        for (let child of this.graph[node]) {
          if (!results[child]) {
            results[child] = {level: level+1};
            results['nodes'].push(child);
            queue.push(child);
          }
        }
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
var bfsPath = g.bfs('1')
console.log(bfsPath);
