console.log("Webchat client is running ...");

var messages = [];
let userMessages = document.querySelector("#message-history");



function testFetch() {
	console.log("Testing ...");
}

function renderList(listToRender){
	let messageHistoryHTML = "";
	listToRender.forEach(function(message){
		messageHistoryHTML += '<li class="list-group-item">' + message + '</li>'
	})
	userMessages.innerHTML = messageHistoryHTML;
}

function sendMessage() {
	var userMessage = document.getElementById('user-message').value;
	messages.unshift(userMessage);
	console.log("About to send " + userMessage);
	console.log(messages);
	renderList(messages);
}
