class User{
  constructor(name, age){
    this.name = name
    this.age = age
  }

  descriptor(){
    return this.name + " " + this.age
  }
}

module.exports = User;