class Message < ApplicationRecord
    validates :greeting, presence: true
end
