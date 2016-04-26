class BroadcastMessageJob < ApplicationJob
  queue_as :default

  def perform(message)
    ActionCable.server.broadcast("chat",
      total_messages: Message.count,
      message: message.attributes.merge(user: message.user.attributes))
  end
end
