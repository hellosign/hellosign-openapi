module.exports = ReplaceServersURL;

/** @type {import('@redocly/cli').OasDecorator} */

function ReplaceServersURL() {
    return {
        Server: {
            leave(Server) {

                if ( 'SERVERS_URL' in process.env) {
                    Server.url = process.env.SERVERS_URL;
                }

            }
        }
    }
}