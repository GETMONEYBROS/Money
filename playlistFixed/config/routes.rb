Rails.application.routes.draw do
  root 'sessions#new' # Renders Log/Reg Page
  post 'users/login' => 'sessions#create' # Login
  post 'users/new' => 'users#create' # Register
  delete 'sessions/:user_id' => 'sessions#destroy' # Logout
  
  get 'songs' => 'songs#songs' # Renders Songs Page
  post 'createsong' => 'songs#create' # Creates Song
  get 'songs/:song_id' => 'songs#oneSong' # Renders One Song Page
  post 'add/:song_id' => 'songs#add' # Likes Song
  get "songs/:song_id/edit" => "songs#editSong" # Renders Edit Page
  patch "songs/:song_id/edit" => "songs#update" # Edits Song
  delete "songs/:song_id" => "songs#delete"

  get 'users/:user_id' => 'users#show' # Renders Users Page
end