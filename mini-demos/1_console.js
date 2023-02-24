console.log("hello")
console.warn("don't do that!")
console.info("I'm running")

p = [
  {
    "name": "amon",
    "age": 1001,
  },
  {
    "name": "horus",
    "age": 1032
  },
  {
    "name": "osiris",
    "age": 2067
  }
]
console.table(p);

console.time('marker')

setTimeout(() => {
  console.timeEnd('marker')
}, 2000)

console.log('I\'m before')