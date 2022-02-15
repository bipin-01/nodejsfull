const os = require("os");

// to check the architecture of the operating system
console.log(os.arch());


//  to log out the freeMemory
const freeMemory = os.freemem();
console.log(`${freeMemory /1024/1024/1024}`);


// to log out the total memory
const total = os.totalmem();
console.log(`${total / 1024 / 1024 / 1024}`)

// to log out the host name
const host = os.hostname();
console.log(host)

// to log out the operating system type

const osType = os.type();
console.log(osType)
