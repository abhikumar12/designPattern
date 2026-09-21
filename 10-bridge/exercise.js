// 🎯 EXERCISE — Shape (circle/square) × Renderer (vector/raster) ko Bridge
// se refactor karo taaki class explosion na ho.
// Chalao:  node exercise.js

// ----- naive version (isse refactor karna hai) -----
class VectorCircle { draw() { console.log('vector circle ◯'); } }
class RasterCircle { draw() { console.log('raster circle (pixels) ●'); } }
class VectorSquare { draw() { console.log('vector square □'); } }
class RasterSquare { draw() { console.log('raster square (pixels) ■'); } }

new VectorCircle().draw();
new RasterSquare().draw();

// ============================================================
// TODO 1: do "renderer" objects banao — `vectorRenderer`, `rasterRenderer` —
//         dono mein ek `renderShape(shapeName)` method ho jo shape ka naam
//         leke apne style mein console.log kare.
//
// TODO 2: `Shape` base class banao jo constructor mein renderer le, aur
//         `Circle extends Shape`, `Square extends Shape` banao jo apna naam
//         renderer ko pass karein (draw() method se).
//
// TODO 3 (bonus): naya renderer 'asciiRenderer' add karo — dikhao ki Circle
//         aur Square dono classes ko CHHUE BINA naya renderer kaam karta hai.
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
// ============================================================
