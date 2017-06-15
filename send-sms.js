// Twilio Credentials
// (replace with yours)
var accountSid = 'AC19245e48cb9aab6b2061ee761ca83dff';
var authToken = '6de483c14c0bb2c0adb5ffdc2a0af77f';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);


module.exports = function sendMessage(message) {
	client.messages.create({
		// replace with your numbers
	    to: "+14042773952",
	    from: "+16786819834",
	    body: message,
	}, function(err, message) {
	    console.log(message.sid);
	});
};
