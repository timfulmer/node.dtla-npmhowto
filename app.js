/**
 * Created by tim on 9/8/14.
 */

var restify= require('restify'),
    server= restify.createServer();
server.name= 'Node.DTLA';

// start server
function listenOnPort() {
    console.log('%s listening on %s.', server.name, server.url);
}
server.listen(3000, listenOnPort);
