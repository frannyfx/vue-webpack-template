// Imports
let Hapi = require("hapi");

// Modules
let config = require("../config");

class Server {
    constructor () {
        // Initialise
        this.online = false;
        this.server = null;
        this.port = config.web.port;
    }

    async start() {
        // Insert your setup here
        // ...

        // Start the server
        this.server = Hapi.server({
            port: this.port,
            router: {
                stripTrailingSlash: true
            }
        });

        // Plugins
        await this.server.register(require("inert"));
        await this.server.register(require("vision"));

        // Static assets
        this.server.route({
            method: "GET",
            path: "/{param*}",
            handler: {
                directory: {
                    path: "assets/"
                }
            }
        });

        // View engine
        this.server.views({
            engines: {
                html: require("handlebars")
            },
            relativeTo: ".",
            path: "web/pages"
        });

        // Test route
        this.server.route({
            method: "GET",
            path: "/",
            handler: (request, h) => {
                return h.view("index");
            }
        });

        await this.server.start();
        console.log("Successfully started web server!");
    }
}

module.exports = Server;