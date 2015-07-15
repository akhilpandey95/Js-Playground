// pclub bot
var irc_main = require('node-irc')
var server = 'irc.mozilla.org',
    port = 6667,
    nick = 'admin',
    fullname = 'hector',
    channel = '#pclub';

var db = require('mysql')

var connect = createConnection {(
        host: 'localhost',
        user: 'root',
        password: 'akhil',
        database: 'ghost'
});

db.connect();


/* Optional connecting to any of the available servers :
 * freenode
 * OFTC
 * mozilla.org
 */
var irc_end = new irci_main(server, port, nick, fullname);

user_node.on('ready', function() {
        user_node.join(channel);
        user_node.say('#pclub', 'IRC server up, Nickserv :D');
});

user_node.on("PRIVMSG", function(data) {
        if(data.message.say == 'SAY') {
                var message = data.message.split(" ");
                var 
});
user_node.connect();
