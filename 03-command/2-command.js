// ✅ COMMAND PATTERN — action ko object bana do (execute + undo).
// Chalao:  node 2-command.js

const light = {
  on: () => console.log('💡 Light: ON'),
  off: () => console.log('💡 Light: OFF'),
};

// Har command ek hi contract follow karta hai: execute() aur undo()
class LightOnCommand {
  execute() { light.on(); }
  undo()    { light.off(); }
}
class LightOffCommand {
  execute() { light.off(); }
  undo()    { light.on(); }
}

// Invoker — kisi command ke internals nahi jaanta, bas execute/undo call karta hai
class RemoteControl {
  #history = [];
  press(command) {
    command.execute();
    this.#history.push(command);
  }
  undoLast() {
    const command = this.#history.pop();
    if (command) command.undo();
  }
}

const remote = new RemoteControl();
remote.press(new LightOnCommand());
remote.press(new LightOffCommand());
remote.undoLast();   // last action (off) undo -> light wapas ON

// Naya device (fan) add karna = naye Command classes, RemoteControl ko CHHUE BINA.
