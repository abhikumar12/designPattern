// 🎯 EXERCISE — is UserManager class mein kitne "reasons to change" hain? Unhe alag classes
// mein split karo.
// Chalao:  node exercise.js

// ----- violation (isse refactor karna hai) -----
class UserManager {
  constructor() { this.users = []; }
  registerUser(name, email) {
    if (!email.includes('@')) throw new Error('invalid email'); // validation
    this.users.push({ name, email });                            // storage
    console.log(`💾 saved user ${name}`);
  }
  sendWelcomeEmail(email) {
    console.log(`📧 welcome email sent to ${email}`);             // notification
  }
  generateUserReport() {
    console.log('--- USER REPORT ---');                           // reporting
    this.users.forEach((u) => console.log(`${u.name} <${u.email}>`));
  }
}

const manager = new UserManager();
manager.registerUser('Asha', 'asha@example.com');
manager.sendWelcomeEmail('asha@example.com');
manager.generateUserReport();

// ============================================================
// TODO 1: count the distinct "reasons to change" hiding in UserManager (hint: there are at
//         least 4 — validation, storage, notification, reporting).
//
// TODO 2: split it into focused classes (e.g. UserValidator, UserRepository, WelcomeEmailer,
//         UserReportGenerator) — each with ONE job.
//
// TODO 3 (bonus): which of your new classes would change if you swapped the database? Which
//         would change if marketing wanted a different welcome email template? If the answer
//         to both is "more than one class," you haven't fully separated the concerns yet.
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
// ============================================================
