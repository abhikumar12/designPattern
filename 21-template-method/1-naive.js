// ❌ THE NAIVE VERSION — poora "load -> process -> export" skeleton har
// report type mein DUPLICATE hota hai, sirf beech ke steps alag hain.
// Chalao:  node 1-naive.js

function generateCsvReport(data) {
  console.log('📂 loading data...');
  const rows = data.map((d) => `${d.name},${d.value}`);
  console.log('⚙️ processing...');
  const processed = rows.join('\n');
  console.log('💾 exporting...');
  console.log('CSV OUTPUT:\n' + processed);
}

function generateJsonReport(data) {
  console.log('📂 loading data...');           // duplicate
  const processed = JSON.stringify(data);
  console.log('⚙️ processing...');              // duplicate
  console.log('💾 exporting...');               // duplicate
  console.log('JSON OUTPUT:\n' + processed);
}

generateCsvReport([{ name: 'A', value: 1 }]);
generateJsonReport([{ name: 'A', value: 1 }]);

// PROBLEM: "load -> process -> export" ka skeleton har report function mein
// copy-paste hua hai. Skeleton mein koi step add/change karna ho (e.g. ek
// validation step) to HAR report function edit karna padega.
