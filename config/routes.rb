Rails.application.routes.draw do
  root   'static_pages#home'
  get    '/help',    to: 'static_pages#help'
  get    '/checklist',    to: 'static_pages#checklist'
  post   '/checklist',    to: 'test#create'
  get    '/about',   to: 'static_pages#about'
  get    '/signup',  to: 'users#new'
  post '/signup',  to: 'users#create'
  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'
  get    '/try',   to: 'static_pages#try'
  get    '/dashboard',  to: 'dashboard#show_stats'
  resources :users
end