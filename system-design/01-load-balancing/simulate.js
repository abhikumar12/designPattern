// ⚖️ LOAD BALANCING — simulate 3 balancing strategies against the same server pool
// Chalao:  node simulate.js
//
// See README.md for what each algorithm is good/bad at.

class Server {
  constructor(id, weight = 1) { this.id = id; this.weight = weight; this.activeConnections = 0; }
}

// ---- Strategy: Round Robin ----
class RoundRobinBalancer {
  constructor(servers) { this.servers = servers; this.index = 0; }
  pick() {
    const server = this.servers[this.index % this.servers.length];
    this.index++;
    return server;
  }
}

// ---- Strategy: Weighted Round Robin ----
class WeightedRoundRobinBalancer {
  constructor(servers) {
    this.pool = servers.flatMap((s) => Array(s.weight).fill(s)); // heavier servers repeat more often
    this.index = 0;
  }
  pick() {
    const server = this.pool[this.index % this.pool.length];
    this.index++;
    return server;
  }
}

// ---- Strategy: Least Connections ----
class LeastConnectionsBalancer {
  constructor(servers) { this.servers = servers; }
  pick() {
    return this.servers.reduce((min, s) => (s.activeConnections < min.activeConnections ? s : min));
  }
}

function simulateRequests(balancer, servers, count, label) {
  console.log(`-- ${label} --`);
  const hits = Object.fromEntries(servers.map((s) => [s.id, 0]));
  for (let i = 0; i < count; i++) {
    const server = balancer.pick();
    hits[server.id]++;
    server.activeConnections++;
    if (i % 3 === 0) server.activeConnections = Math.max(0, server.activeConnections - 1); // some finish early
  }
  console.log('  requests per server:', hits);
}

const servers = [new Server('A', 1), new Server('B', 1), new Server('C', 2)]; // C is a bigger machine

simulateRequests(new RoundRobinBalancer(servers), servers, 9, 'Round Robin');
servers.forEach((s) => (s.activeConnections = 0));

simulateRequests(new WeightedRoundRobinBalancer(servers), servers, 8, 'Weighted Round Robin (C has weight 2)');
servers.forEach((s) => (s.activeConnections = 0));

simulateRequests(new LeastConnectionsBalancer(servers), servers, 9, 'Least Connections');
