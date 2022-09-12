Rails.application.routes.draw do
  resources :users
  resources :articles
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
#Login/Logout
post '/login', to: 'sessions#create'
delete '/logout', to: 'sessions#destroy'

#User
# post '/users/:id', to: 'users#create'
# get '/users/:id', to: 'users#show'
# get '/users', to: 'users#index'
# patch '/users/:id', to: 'users#update'
end
