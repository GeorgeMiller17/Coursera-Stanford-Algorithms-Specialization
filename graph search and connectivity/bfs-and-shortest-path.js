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

  bfs(start) {
    if (!this.graph[start]) return null;
    if (!this.graph[start].length) return [start];
    const results = {nodes:[start],[start]:{level:0}},
          queue = [start];
    while(queue.length) {
      let node = queue.shift();
      let level = results[node].level;
      if (this.graph[node]) {
        for (let next of this.graph[node]) {
          if (!results[next]) {
            results[next] = {level: level+1};
            results['nodes'].push(next);
            queue.push(next);
          }
        }
      }
    }
    return results;
  }

  shortestPath(start,end) {
    if (!this.graph[start]||!this.graph[start].length) return [];
    if (start === end) return [start];
    const tracks = {[start] : [start]},
          queue = [start],
          result = [start];
    while(queue.length) {
      let node = queue.shift();
      if (this.graph[node]) {
        for (let next of this.graph[node]) {
          if (!tracks[next]) {
            tracks[next] = tracks[node].slice();
            tracks[next].push(parseInt(next));
            if (parseInt(next) == end) return tracks[next];
            queue.push(next);
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
// var bfsPath = g.bfs('1')
// console.log(bfsPath);
// var shortestPath = g.shortestPath(1,5);
// console.log(shortestPath);
