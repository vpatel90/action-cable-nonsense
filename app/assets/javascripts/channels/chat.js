App.chat = App.cable.subscriptions.create({ channel: "ChatChannel" }, {
  connected: function () {
    console.log('Chat connected');
  },

  disconnected: function () {
    console.log('Chat disconnected');
  },

  received: function (data) {
    console.log('Chat received: ', data);

    this.updateTotal(data.total_messages);

    this.appendLine(data);

    $('#chat-room').scrollTop($('#chat-room')[0].scrollHeight);
  },

  updateTotal: function (newTotal) {
    $('#messages').html("Messages (" + newTotal + ")");
  },

  appendLine: function (data) {
    $('#chat-room').append(this.createLine(data));
  },

  createLine: function (data) {
    return "<div class='message animate'>" +
              "<div class='author'>" + data.message.user.username + "</div>" +
              "<div class='body'>" + data.message.body + "</div>" +
           "</div>";
  }
});
