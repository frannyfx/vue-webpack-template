// Modules
let Server = require("./web/server");

// Initialise web server
let server = new Server();
server.start();

// Give full stack traces for promises
process.on('unhandledRejection', (r) => {
    console.error(r);
});