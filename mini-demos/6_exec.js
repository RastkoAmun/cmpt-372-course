const cp = require('child_process')
const os = require('os')

let username = 'amon'

if(os.platform === 'win32'){
  cp.execFile('hello.bat',[username], function(err, stdout, stderr){
    console.log(stdout)
  })
}else{
  console.log(`can't run on ${os.platform}, ${os.release}`);
}