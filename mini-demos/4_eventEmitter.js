const EventEmitter = require('events');

class Person extends EventEmitter{
  constructor(name, age){
    super()
    this.name = name
    this.age = age
  }
}

let u1 = new Person('Amon', 41);
u1.on('poke', () => {
  console.log("wake up!")
})