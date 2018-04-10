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

  bfs(start) {
    if (!this.edges[start]) return null;
    if (!this.edges[start].length) return [start];
    const results = {nodes:[start],[start]:{level:0}},
          queue = [start];
    while(queue.length) {
      let node = queue.shift();
      let level = results[node].level;
      if (this.edges[node]) {
        for (let neighbor of this.edges[node]) {
          if (!results[neighbor]) {
            results[neighbor] = {level: level+1};
            results['nodes'].push(neighbor);
            queue.push(neighbor);
          }
        }
      }
    }
    return results;
  }

  shortestPath(start,end) {
    if (!this.edges[start]||!this.edges[start].length) return [];
    if (start === end) return [start];
    const tracks = {[start] : [start]},
          queue = [start],
          result = [start];
    while(queue.length) {
      let node = queue.shift();
      if (this.edges[node]) {
        for (let neighbor of this.edges[node]) {
          if (!tracks[neighbor]) {
            tracks[neighbor] = tracks[node].slice();
            tracks[neighbor].push(parseInt(neighbor));
            if (parseInt(neighbor) == end) return tracks[neighbor];
            queue.push(neighbor);
          }
        }
      }
    }
    return [];
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
var shortestPath = g.shortestPath(1,5);
console.log(shortestPath);
