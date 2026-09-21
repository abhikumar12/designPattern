// 🎯 EXERCISE — support ticket routing ko Chain of Responsibility se
// refactor karo (bot -> junior agent -> senior agent).
// Chalao:  node exercise.js

// ----- naive version (isse refactor karna hai) -----
function routeTicket(ticket) {
  if (ticket.type === 'faq') console.log('🤖 Bot answered:', ticket.question);
  else if (ticket.priority === 'low') console.log('🧑 Junior agent handling:', ticket.question);
  else console.log('🧑‍💼 Senior agent handling:', ticket.question);
}
routeTicket({ type: 'faq', question: 'What are your hours?' });
routeTicket({ type: 'issue', priority: 'high', question: 'Server is down!' });

// ============================================================
// TODO 1: `Handler` base class banao (jaisa Approver 2-chain-of-
//         responsibility.js mein tha) with setNext(), aur `handle(ticket)`
//         jo `canHandle(ticket)` check kare, warna next ko pass kare.
//
// TODO 2: `BotHandler` (canHandle: type === 'faq'), `JuniorHandler`
//         (canHandle: priority === 'low'), `SeniorHandler` (canHandle:
//         hamesha true — akhri fallback) banao.
//
// TODO 3 (bonus): chain build karo aur dono example tickets route karo,
//         verify karo ki sahi handler pick ho raha hai.
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
// ============================================================
