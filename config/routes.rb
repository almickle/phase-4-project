Rails.application.routes.draw do
  resources :authors
  resources :users
  resources :articles
  resources :sessions
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
#Login/Logout
post '/login', to: 'sessions#create'
delete '/logout', to: 'sessions#destroy'
#Sign-up
# post '/signup', to: "users#create"

#User
# post '/users/:id', to: 'users#create'
# get '/users/:id', to: 'users#show'
# get '/users', to: 'users#index'
# patch '/users/:id', to: 'users#update'
end
