class MessageController < ApplicationController
  def index
    messages = Message.all
    message = messages[rand(messages.size)]
    render json: message
  end
end
