// replace these values with those generated in your TokBox Account
var apiKey = "47131344";
var sessionId = "1_MX40NzEzMTM0NH5-MTYxNzg5OTkyMTE5M35BQ2FrRTNMeXF1RUNHSkRZV1dhT08zWDd-fg";
var token = "T1==cGFydG5lcl9pZD00NzEzMTM0NCZzaWc9Njk5YzBhOGY4Y2MzZGYxYmViZTM4OTgwNmIwNzhmN2Q3NzllNDY1OTpzZXNzaW9uX2lkPTFfTVg0ME56RXpNVE0wTkg1LU1UWXhOemc1T1RreU1URTVNMzVCUTJGclJUTk1lWEYxUlVOSFNrUlpWMWRoVDA4eldEZC1mZyZjcmVhdGVfdGltZT0xNjE3OTAwMDA5Jm5vbmNlPTAuOTUzNzU4NjgwOTQ1NjMyNyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNjE4NTA0ODA3JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";

	
// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

// (optional) add server code here
initializeSession();

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream
  session.on('streamCreated', function(event) {
    session.subscribe(event.stream, 'subscriber', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, handleError);
  });

  // Create a publisher
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);

  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, initialize a publisher and publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
}
