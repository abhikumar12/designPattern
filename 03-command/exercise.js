// 🎯 EXERCISE — text editor ke type/delete actions ko Command pattern mein
// refactor karo taaki undo() kaam kare.
// Chalao:  node exercise.js

// ----- naive version (isse refactor karna hai) -----
let text = '';
function type(chars) { text += chars; console.log('text:', JSON.stringify(text)); }
function deleteLast(n) { text = text.slice(0, -n); console.log('text:', JSON.stringify(text)); }

type('Hello');
type(', world');
deleteLast(7);   // 'undo' karna ho to yaad nahi ki kitna delete hua tha

// ============================================================
// TODO 1: TypeCommand aur DeleteCommand classes banao, dono mein execute()
//         aur undo() ho. TypeCommand.undo() = wahi characters hata de jo
//         type kiye the. DeleteCommand.undo() = jo delete hua wapas jod de
//         (execute se pehle un characters ko save kar lo).
//
// TODO 2: Editor class banao jisme history array ho, type()/deleteLast()
//         commands create/execute/push karein, aur undo() history se pop
//         karke us command ka undo() chalaye.
//
// TODO 3 (bonus): redo() add karo — undo kiye hue commands ek "redo stack"
//         mein daalo, redo() unhe wapas execute kare.
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
// ============================================================
