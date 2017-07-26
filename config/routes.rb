Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :update]
    resource :session, only: [:create, :destroy]
    resources :cities, only: [:index, :show]
    resources :events, only: [:index, :create, :show, :destroy]
    resources :registrations, only: [:index, :create, :destroy]
  end

  root to: 'static_pages#root'
end
