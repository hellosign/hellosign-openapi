module.exports = ReplaceServersURL;

/** @type {import('@redocly/cli').OasDecorator} */

function ReplaceServersURL() {
    return {
        Server: {
            leave(Server) {
                console.log('present')
                if ( 'SERVERS_URL' in process.env) {
                    // Server.url = process.env.SERVERS_URL;
                    console.log(Server);
                    console.log(Server.url);
                }

            }
        }
    }
}