const EventEmitter = require('events');

class Poker extends EventEmitter {
  constructor(name){
    super()
    this.name = name
  }
}

class PokerManager{
  listeners = []
  constructor(){}
  notify(){
    this.listeners.forEach(u => {
      u.emit('poke', 'wake up!!!')
    })
  }
  register(u){
    u.on('poke', (d) => {
      console.log(u.name + ": " + d);
    })
    this.listeners.push(u)
  }
}

let pm = new PokerManager();
let u1 = new Poker('a')
pm.register(u1)
let u2 = new Poker('b')
pm.register(u2)
let u3 = new Poker('c')
pm.register(u3)

pm.notify()