// ✅ COMMAND PATTERN — queue, macro aur replay (log ke through).
// Chalao:  node 3-command-queue.js

const light = { on: () => console.log('💡 Light: ON'), off: () => console.log('💡 Light: OFF') };
const fan   = { on: () => console.log('🌀 Fan: ON'),   off: () => console.log('🌀 Fan: OFF') };

const cmd = (device, action) => ({
  execute: () => device[action](),
  label: `${action} ${device === light ? 'light' : 'fan'}`,
});

// Macro command = kai commands ka ek hi command
class MacroCommand {
  constructor(commands) { this.commands = commands; }
  execute() { this.commands.forEach((c) => c.execute()); }
}

const goodMorning = new MacroCommand([
  cmd(light, 'on'),
  cmd(fan, 'on'),
]);

console.log('-- Good morning macro --');
goodMorning.execute();

// Queue — commands ko turant execute karne ke bajaye baad ke liye rakho
const queue = [];
queue.push(cmd(light, 'off'));
queue.push(cmd(fan, 'off'));

console.log('-- Draining queue (e.g. batch job / scheduled task) --');
while (queue.length) queue.shift().execute();

// Replay — har executed command ka log rakho, baad mein wahi sequence dobara chalao
const log = [cmd(light, 'on'), cmd(fan, 'on'), cmd(light, 'off')];
console.log('-- Replaying log --');
log.forEach((c) => c.execute());
