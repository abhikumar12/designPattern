// ✅ BUILDER PATTERN — object ko step-by-step, readable chaining se banao.
// Chalao:  node 2-builder.js

class HttpRequest {
  constructor() {
    this.method = 'GET'; this.headers = {}; this.retries = 0;
  }
}

class HttpRequestBuilder {
  #request = new HttpRequest();

  setMethod(method)   { this.#request.method = method; return this; }
  setUrl(url)          { this.#request.url = url; return this; }
  setHeader(key, val)  { this.#request.headers[key] = val; return this; }
  setBody(body)        { this.#request.body = body; return this; }
  setTimeout(ms)        { this.#request.timeout = ms; return this; }
  setRetries(n)          { this.#request.retries = n; return this; }
  build()                { return this.#request; }
}

// Fluent chain — sirf jo chahiye woh set karo, order matter nahi karta
const req = new HttpRequestBuilder()
  .setMethod('POST')
  .setUrl('/api/orders')
  .setHeader('Content-Type', 'application/json')
  .setBody({ id: 1 })
  .setTimeout(5000)
  .build();

console.log(req);

// Naya optional field add karna = ek naya `set...()` method, purane
// callers ko CHHUE BINA (woh method call hi nahi karenge to default rahega).
