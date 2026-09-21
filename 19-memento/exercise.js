// 🎯 EXERCISE — game character ke state ko Memento se save/restore karo.
// Chalao:  node exercise.js

// ----- naive version (isse refactor karna hai) -----
class Character {
  constructor() { this.hp = 100; this.level = 1; }
  takeDamage(dmg) { this.hp -= dmg; }
  levelUp() { this.level++; this.hp = 100; }
}
const hero = new Character();
const backup = { hp: hero.hp, level: hero.level }; // manual, error-prone
hero.takeDamage(80);
hero.levelUp();
console.log('current:', hero.hp, hero.level);
// "backup" restore karna hai to caller ko khud `hero.hp = backup.hp` likhna padega

// ============================================================
// TODO 1: `Character` class mein `save()` method add karo jo current state
//         ka snapshot object return kare, aur `restore(memento)` method jo
//         usse wapas apply kare (2-memento.js jaisa).
//
// TODO 2: `SaveSlot` class (ya simple array) banao jo mementos store kare
//         — `save(memento)` aur `load()` methods.
//
// TODO 3 (bonus): level up hone se pehle auto-save karo, dikhao ki
//         `takeDamage` + `levelUp` ke baad bhi purane save pe restore ho
//         sakta hai.
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
// ============================================================
