Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :characters, only: [:index]
  resources :players, only: [:index, :create]
  root 'characters#index'
end
