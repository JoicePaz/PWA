console.log('[Application] start push listening');

const messaging = firebase.messaging();

messaging.requestPermission().then(function() {
  console.log('Permission granted');

  return messaging.getToken().then(function (currentToken){
    if(currentToken) {
      console.log(currentToken);
      return currentToken;
    } else {
      console.warn('There is no ID available. Ask permission to generate one.');
    }
  });
})

messaging.getToken().then(function (currentToken) {
  if(currentToken) {
    console.log(currentToken);
    return currentToken;
  } else {
    console.warn('There is no ID available. Ask permission to generate one.');
  }
})
.catch(function(err) {
  console.warn('Get token err', err)
});
