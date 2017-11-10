Rails.application.routes.draw do
  namespace :api do
    resources :user do
      resources :playlist do
        resources :track
      end
    end
  end
end
