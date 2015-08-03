var sendgrid  = require('sendgrid')("user_id", "key");
sendgrid.send({
        to:       'sender',
        from:     'reciever',
        subject:  'Mail see this',
        text:     'My proxy problem is resolved now no issue with SMTP connection so 15K emails for month.'
}, function(err, json) {
          if (err) { 
                  return console.error(err); 
          }
            console.log(json);
});
