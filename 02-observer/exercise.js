// 🎯 EXERCISE — ek StockPrice subject banao Observer pattern se.
// Chalao:  node exercise.js
//
// Chahiye:
//   - logger:  har price change print kare       ("💹 Price: 105")
//   - alerter: sirf tab print kare jab price 100 ke UPAR cross kare ("⚠️ ALERT: 105")
//
// Do tarike se try karo (dono seekhne layak):
//   A) khud Subject class banake (dekho 2-observer.js)
//   B) EventEmitter extend karke (dekho 3-eventemitter.js)

// ---- yahan implement karo ----
class StockPrice /* extends ??? */ {
  constructor() {
    this.price = 0;
  }
  setPrice(newPrice) {
    // TODO: purani price yaad rakho (cross detect karne ke liye)
    // TODO: price update karo
    // TODO: observers ko notify karo
  }
}

// ---- test (implement karne ke baad uncomment karo) ----
// const stock = new StockPrice();
// stock.subscribe(/* logger */);
// stock.subscribe(/* alerter */);
// stock.setPrice(95);   // logger: 95
// stock.setPrice(105);  // logger: 105  + alerter: ⚠️ ALERT (100 cross hua)
// stock.setPrice(110);  // logger: 110  (koi alert nahi — pehle se upar tha)

console.log('Exercise file — apna code likho aur test uncomment karo.');
