const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//method reeturns the system uptime in seconds
console.log(`the systems uptime is ${os.uptime()} seconds`)


//method returns current OS details
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)