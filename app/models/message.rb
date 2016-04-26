class Message < ApplicationRecord
  belongs_to :user

  after_commit do
    BroadcastMessageJob.perform_now(self)
  end
end
