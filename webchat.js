console.log("Webchat client is running ...");

var messages = [];
let userMessages = document.querySelector("#message-history");



function testFetch() {
	fetch('http://localhost:1337/get-message-history')
	.then( function(response){
		return response.json();
	}).then( function(jsonResponse){
		renderList(jsonResponse)
	})

}

function renderList(listToRender){
	let messageHistoryHTML = "";
	listToRender.forEach(function(message){
		messageHistoryHTML += '<li class="list-group-item">' + message + '</li>'
	})
	userMessages.innerHTML = messageHistoryHTML;
}

// function sendMessage() {
// 	var userMessage = document.getElementById('user-message').value;
// 	messages.unshift(userMessage);
// 	console.log("About to send " + userMessage);
// 	console.log(messages);
// 	renderList(messages);
// }

function sendMessage(){
	var userMessage = document.getElementById('user-message').value;
	var myInit = { method: 'GET',
               cache: 'default' };
	fetch("http://localhost:1337/send-message?message=" + userMessage, myInit)
}

// setInterval(testFetch, 3000);
