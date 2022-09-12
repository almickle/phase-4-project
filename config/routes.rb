Rails.application.routes.draw do
  resources :users
  resources :articles
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
post '/login', to: 'sessions#create'
delete '/logout', to: 'sessions#destroy'

get '/me', to: 'users#show'
post '/users/:id', to: 'users#create'
get '/users/:id', to: 'users#find_user'

end
