Rails.application.routes.draw do
  devise_for :users
  # get 'home/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: "chats#index"

  get "/manifest.json", to: "service_workers#manifest"
  get "/service-worker.js" => "service_workers#service_worker"

  resources :contacts, only: %i(index new create destroy)

  resources :contacts, only: [:index, :new, :create, :destroy]
  resources :chats, only: [:index, :show]

  resources :chats, only: [:index, :show] do
    resources :messages, only: :create, defaults: { format: :js }
  end
end
