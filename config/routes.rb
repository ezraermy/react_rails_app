Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/api/message', to: 'message#index', as: 'message'
  root 'root#index'
  get '*path', to: 'root#index'

end
