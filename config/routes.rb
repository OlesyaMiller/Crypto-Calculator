Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'currencies#index'
  post 'search', to: 'carrencies#search'
  post 'calculate', to: 'currencies#calculate'

end
