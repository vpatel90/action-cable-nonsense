class Message < ApplicationRecord
  belongs_to :user

  after_commit do
    BroadcastMessageJob.perform_later(self)
  end
end
