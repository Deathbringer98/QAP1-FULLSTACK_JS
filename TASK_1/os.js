// os.js
const os = require('os'); // Include the os module

// Get the system's hostname
// os.hostname() method returns the hostname of the operating system.
console.log(`Hostname: ${os.hostname()}`);

// Get the operating system platform
// os.platform() method returns the operating system platform of the running computer i.e 'darwin', 'win32','android' etc.
console.log(`Platform: ${os.platform()}`);

// Get the system's architecture
// os.arch() method returns the architecture of the operating system.
console.log(`Architecture: ${os.arch()}`);

// Get the system's CPU info
// os.cpus() method returns an array of objects containing information about each CPU/core installed: model, speed (in MHz), and times (an object containing the number of milliseconds the CPU/core spent in: user, nice, sys, idle, and irq).
console.log(`CPU Info: ${JSON.stringify(os.cpus())}`);

// Get the system's free memory
// os.freemem() method returns the amount of free system memory in bytes.
console.log(`Free memory: ${os.freemem()}`);