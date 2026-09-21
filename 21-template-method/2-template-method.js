// ✅ TEMPLATE METHOD — algorithm ka SKELETON base class mein ek baar likho,
// sirf jo steps subtype-specific hain unhe subclass override kare.
// Chalao:  node 2-template-method.js

class ReportGenerator {
  // Template method — skeleton FIXED hai, subclass isse override nahi karti
  generate(data) {
    console.log('📂 loading data...');
    const processed = this.process(data); // yahi step subclass-specific hai
    console.log('⚙️ processing done');
    console.log('💾 exporting...');
    console.log(`${this.format()} OUTPUT:\n${processed}`);
  }
  process(data) { throw new Error('subclass must implement process()'); }
  format() { throw new Error('subclass must implement format()'); }
}

class CsvReport extends ReportGenerator {
  format() { return 'CSV'; }
  process(data) { return data.map((d) => `${d.name},${d.value}`).join('\n'); }
}
class JsonReport extends ReportGenerator {
  format() { return 'JSON'; }
  process(data) { return JSON.stringify(data); }
}

new CsvReport().generate([{ name: 'A', value: 1 }]);
new JsonReport().generate([{ name: 'A', value: 1 }]);

// Skeleton mein naya step (validation) add karna = ek jagah, generate() mein.
// Naya format (XML) add karna = bas process()+format() override karne wali
// ek nayi subclass, skeleton ko CHHUE BINA.
