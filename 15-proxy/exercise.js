// 🎯 EXERCISE — repeated API calls ko Proxy se cache karo taaki same request
// dobara network na kare.
// Chalao:  node exercise.js

// ----- naive version (isse refactor karna hai) -----
let callCount = 0;
function fetchWeather(city) {
  callCount++;
  console.log(`🌐 network call #${callCount} for ${city}`);
  return { city, tempC: 28 };
}
fetchWeather('Delhi');
fetchWeather('Delhi'); // same city — phir bhi naya network call

// ============================================================
// TODO 1: `WeatherProxy` class banao with internal `#cache` (Map).
//         `get(city)` method: agar cache mein hai to wahi return karo, warna
//         `fetchWeather(city)` call karke result cache mein daalo aur return
//         karo.
//
// TODO 2: proxy use karke dikhao ki 'Delhi' do baar maangne par network call
//         sirf EK baar ho.
//
// TODO 3 (bonus): `invalidate(city)` method add karo jo cache se ek city
//         hata de — dikhao ki uske baad fresh network call hota hai.
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
// ============================================================
