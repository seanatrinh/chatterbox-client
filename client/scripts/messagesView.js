// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    console.log('are we getting this data from messagesView?', Messages._data);
    MessagesView.render();
    console.log('Initialized has been called');
  },

  render: function() {
    // TODO: Render _all_ the messages.
    // create a varaibel to hold App.fetch();
    var messages = App.fetch();
    console.log('Messages from messagesView.render ', messages);
    // Loop through the messages array from App.fetch
    for (var i = 0; i < 9; i++) {
      // Within the loop, call renderMessage on each index of the array
      MessagesView.renderMessage(messages[i]);
      // App.fetch()[i].text
    }

  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    // Take in the message from render
    // append to div class "chat"
    // $chats.append(html);
    var compiled = _.template(
      '<div class="chat">' +
        '<div class="message">' +
        '</div><%= text %><div>' +
        '</div>' +
        '</div>');

    $chats.append(compiled(message));
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};