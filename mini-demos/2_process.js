console.log("Yikes");
console.log(process.argv); //will list all arguments from console

//If we don't include any argument, port will be 8000
let port = process.argv[2] || 8000;
if(typeof(port) !== 'undefined'){
  console.log('success')
  console.log(`app is running on port ${port}`);
}

//Some other process functions
let users = []

const nextUser = () => {
  //called by console.log()
  process.stdout.write('\n Next user (exit to quit): \n');
}

//creates a listener for a given event
process.stdin.on('data', (data) => {
  //Data is what we write in the console
  //If it is not exit then we push to users, otherwise we exit program
  if(data.toString().trim() !== 'exit'){
    users.push(data.toString().trim());
  }else{
    process.exit()
  }
})
//On exiting program we print out the users we pushed to the list
process.on('exit', () => {
  console.log("List of users:\n")
  users.forEach(u => console.log(u));
})

//Will be called until we write exit
nextUser();