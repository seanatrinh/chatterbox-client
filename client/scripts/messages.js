// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  messagesRoom: [],

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  getsData: function(data) {
    for (let i = 0; i < data.length; i++) {
      Messages.oneMessage(data[i]);
    }
  },

  oneMessage: function(dataObj) {
    // created the intended message object
    var message = {};
    message.createdAt = dataObj.created_at;
    message.username = dataObj.username;
    message.text = dataObj.text;
    message.roomname = dataObj.roomname;

    var xssAttacks = ['<script>', '/>'];


    if (message.roomname != null) {
      if (!xssAttacks.some((str) => message.roomname.includes(str))) {
        if (!Messages.messagesRoom.includes(message.roomname)) {
          Messages.messagesRoom.push(message.roomname);
          Rooms.getsData(message);
        }
      }

    }
    // possible edge case: lowercase and upercase characters in room name
    if (message.username != null && message.text && !xssAttacks.some((str) => message.text.includes(str))) {
      //  call messagesView.render on message to appned to DOM
      var renderedMsg = MessageView.render(message);
      MessagesView.render(renderedMsg);
    }

  }

};

// add to data method

//