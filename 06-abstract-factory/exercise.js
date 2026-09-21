// 🎯 EXERCISE — postgres aur mysql "families" (connection + query builder)
// ko Abstract Factory se consistent banao.
// Chalao:  node exercise.js

// ----- naive version (isse refactor karna hai) -----
function createConnection(db) {
  return db === 'mysql' ? { name: 'MySQL conn' } : { name: 'Postgres conn' };
}
function createQueryBuilder(db) {
  return db === 'mysql' ? { name: 'MySQL builder' } : { name: 'Postgres builder' };
}

const conn = createConnection('mysql');
const builder = createQueryBuilder('postgres'); // 😬 mismatch possible
console.log(conn.name, '+', builder.name);

// ============================================================
// TODO 1: `mysqlFactory` aur `postgresFactory` objects banao, dono mein
//         `createConnection()` aur `createQueryBuilder()` methods hon.
//
// TODO 2: `getFactory(db)` function banao jo sahi factory return kare.
//
// TODO 3: `setup(factory)` function likho jo EK factory leke connection +
//         builder dono banaye — ab mismatch structurally impossible hona
//         chahiye.
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
// ============================================================
