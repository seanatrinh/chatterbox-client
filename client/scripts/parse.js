// The Parse object represents your connection to outside world!
// Or... just the Parse API. Populate this object with methods
// which send requests to the RESTful Parse API.

var Parse = {

  server: `https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/${window.CAMPUS}`,

  create: function(message, successCB, errorCB = null) {
    // TODO: send a request to the Parse API to save the message

    // message should already be created and given to create

    $.ajax({
      // This is the url you should use to communicate with the API server.
      url: 'https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/CAMPUS',
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  },

  /*

  ajax request is made after the page has loaded


  url: location of the server on the internet that you want to interact with
  type: "what do you want to do with the resource from url"

  data, contentType: pieces of info we put into request object to give the server more information about this particular request

  contentType: is a header. Chrome Dev -> Network -> Fetch/XHR -> headers -> that's where you can see your contentType tag you define

  success: successCB passed in
  error: errorCB is not defined, but a console error gets listed
  */
  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};