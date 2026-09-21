// 🎯 EXERCISE — do onboarding flows (free user vs paid user) ke duplicate
// skeleton ko Template Method se nikalo.
// Chalao:  node exercise.js

// ----- naive version (isse refactor karna hai) -----
function onboardFreeUser(name) {
  console.log(`📧 welcome email to ${name}`);
  console.log('🎁 free plan setup');
  console.log(`🔔 notifying team: ${name} joined (free)`);
}
function onboardPaidUser(name) {
  console.log(`📧 welcome email to ${name}`);   // duplicate
  console.log('💳 paid plan setup + billing');
  console.log(`🔔 notifying team: ${name} joined (paid)`); // near-duplicate
}
onboardFreeUser('Asha');
onboardPaidUser('Rohit');

// ============================================================
// TODO 1: `Onboarding` base class banao with template method `run(name)`
//         jo: welcome email (fixed) -> `this.setup(name)` (subclass-specific)
//         -> `this.notifyTeam(name)` (fixed, lekin plan naam ke liye
//         `this.planName()` ko call kare).
//
// TODO 2: `FreeOnboarding` aur `PaidOnboarding` subclasses banao jo
//         `setup(name)` aur `planName()` override karein.
//
// TODO 3 (bonus): naya `TrialOnboarding` add karo — dikhao ki base class
//         `run()` ko CHHUE BINA kaam karta hai.
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
// ============================================================
