module.exports = ReplaceServersURL;

/** @type {import('@redocly/cli').OasDecorator} */

function ReplaceServersURL() {
    return {
        Server: {
            leave(Server) {
                if ( 'SERVERS_URL' in process.env) {
                    console.log('before change', console.log(Server.url));
                    Server.url = process.env.SERVERS_URL;
                    console.log('after change', console.log(Server.url));
                }

            }
        }
    }
}