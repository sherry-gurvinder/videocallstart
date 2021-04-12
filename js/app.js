// replace these values with those generated in your TokBox Account
var apiKey = "47131344";
var sessionId = "1_MX40NzEzMTM0NH5-MTYxODIzMTM0MTYyNn5lMmFRVDF6MjIzVkxCTC9DOStRNEJRV2J-fg";
var token = "T1==cGFydG5lcl9pZD00NzEzMTM0NCZzaWc9YzA2M2E5Y2VjM2U2NDhiNTg4OGEwODM1NjdkYjU4Yjc4NWU3MWRmYTpzZXNzaW9uX2lkPTFfTVg0ME56RXpNVE0wTkg1LU1UWXhPREl6TVRNME1UWXlObjVsTW1GUlZERjZNakl6Vmt4Q1RDOURPU3RSTkVKUlYySi1mZyZjcmVhdGVfdGltZT0xNjE4MjMxMzQ4Jm5vbmNlPTAuMTExNDE0NDE2NzEyODc1NjYmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTYxODIzNDk0NiZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==";

	
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
