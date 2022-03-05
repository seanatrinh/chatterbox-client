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

  render: function(msg) {
    // TODO: Render _all_ the messages.

    MessagesView.$chats.append(msg);

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