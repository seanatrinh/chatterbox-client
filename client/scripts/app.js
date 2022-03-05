// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    // these render items to the screen
    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize(); // 1

    // Fetch initial batch of messages
    App.startSpinner();
    // wont stop spinning until we deal with fetch
    App.fetch(App.stopSpinner);

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
  },

  // reads - need to deal w/GET
  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log('this is messages from app.fetch', data);

      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
      Messages.getsData(data);
    });

  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
