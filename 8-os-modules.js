const os =require('os')

// info about current user

const user = os.userInfo()
console.log(user)

console.log(`The system Uptime is ${os.uptime()} seconds`)

// const currentOs = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freemem: os.freemem()
// }

// console.log(currentOs)