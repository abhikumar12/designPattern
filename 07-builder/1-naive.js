// ❌ THE NAIVE VERSION — constructor mein bohot saare positional params,
// order yaad rakhna mushkil, optional cheezon ke liye undefined pass karna
// padta hai.
// Chalao:  node 1-naive.js

class HttpRequest {
  constructor(method, url, headers, body, timeout, retries) {
    this.method = method; this.url = url; this.headers = headers;
    this.body = body; this.timeout = timeout; this.retries = retries;
  }
}

// Headers ya body nahi chahiye? undefined pass karna padega, order galat
// hui to bug — pata bhi nahi chalega (retries ki jagah timeout chala jaayega)
const req = new HttpRequest('POST', '/api/orders', undefined, { id: 1 }, 5000, undefined);
console.log(req);

// PROBLEM: 6 positional args yaad rakhna, optional wale skip karne ke liye
// undefined chain karna, aur order-mistake ka silently wrong behavior.
