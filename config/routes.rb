Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  namespace :api do
    resources :users do
      resources :playlists do
        resources :tracks
      end
    end
  end
end
