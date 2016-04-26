App.test= App.cable.subscriptions.create "TestChannel",
  connected: ->
    console.log('test connected')

  disconnected: ->
    console.log('test disconnected')

  received: (data) ->
    console.log(data)
