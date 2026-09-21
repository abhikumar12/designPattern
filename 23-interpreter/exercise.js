// 🎯 EXERCISE — feature-flag rules ("isAdmin AND isBeta") ko Interpreter
// pattern se evaluate-able banao.
// Chalao:  node exercise.js

const context = { isAdmin: true, isBeta: false, isPremium: true };

// ----- naive version (isse refactor karna hai) -----
function evalRule(rule, ctx) {
  // sirf yeh ek hardcoded case handle karta hai:
  if (rule === 'isAdmin AND isBeta') return ctx.isAdmin && ctx.isBeta;
  throw new Error(`cannot evaluate: ${rule}`);
}
console.log(evalRule('isAdmin AND isBeta', context));

// ============================================================
// TODO 1: `VarExpr` class banao (constructor: name) with `interpret(ctx)`
//         jo `ctx[this.name]` return kare.
//
// TODO 2: `AndExpr` aur `OrExpr` classes banao (constructor: left, right)
//         with `interpret(ctx)` jo `left.interpret(ctx) && right.interpret(ctx)`
//         (ya `||`) return karein.
//
// TODO 3 (bonus): `NotExpr` class banao (constructor: expr) with
//         `interpret(ctx)` jo `!expr.interpret(ctx)` return kare. Phir
//         "isAdmin AND NOT isBeta" jaisa tree bana kar evaluate karo.
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
// ============================================================
