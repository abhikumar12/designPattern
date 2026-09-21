// ✅ FIXED — do chhoti, FOCUSED interfaces. Har worker sirf woh implement karta hai jo
// usko genuinely chahiye.
// Chalao:  node 2-fixed.js

// JS mein multiple inheritance nahi hai, so hum "interface" ko sirf convention (duck typing)
// ke through split karte hain — jisko jo method chahiye wahi implement karo:

class HumanWorker {
  work() { console.log('👷 human working'); }
  eat() { console.log('🍽️ human eating lunch'); }
}

class RobotWorker {
  work() { console.log('🤖 robot working'); } // eat() ka koi zikar tak nahi — zaroorat hi nahi
}

const workers = [new HumanWorker(), new RobotWorker()];
workers.forEach((w) => w.work());

// Sirf woh workers jo genuinely "eat" karte hain unhi ko eat() call karo:
const eaters = workers.filter((w) => typeof w.eat === 'function');
eaters.forEach((w) => w.eat());

// RobotWorker ab kisi aise method pe depend hi nahi karta jo usse relevant nahi. Interface
// (yahan: "jo methods class pe expect kiye jaate hain") ko SPLIT kiya, "ek size fits all"
// force nahi kiya.
