// replace these values with those generated in your TokBox Account
var apiKey = "47131344";
var sessionId = "1_MX40NzEzMTM0NH5-MTYxMzY3ODkwNzYwMn45WjhSclpjYUlHNXdKaWdvYUxHZFBaTUp-fg";
var token = "T1==cGFydG5lcl9pZD00NzEzMTM0NCZzaWc9NjQ2MDY2NjYwMjMzNjAzMGU0ZDM4MDBlMjFmNmMyZjk2ZDgzMzM4MDpzZXNzaW9uX2lkPTFfTVg0ME56RXpNVE0wTkg1LU1UWXhNelkzT0Rrd056WXdNbjQ1V2poU2NscGpZVWxITlhkS2FXZHZZVXhIWkZCYVRVcC1mZyZjcmVhdGVfdGltZT0xNjEzNjc4OTE1Jm5vbmNlPTAuMjA1OTM4OTk2NjE4ODk1MzYmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTYxMzcwMDUxNCZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==";

	
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
