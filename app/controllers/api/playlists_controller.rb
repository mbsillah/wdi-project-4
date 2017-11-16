class Api::PlaylistsController < ApplicationController
      def index
        @playlists = User.find(params[:user_id]).playlists
        render json: @playlists
      end
    
      def create
        @playlist = Playlist.create!(playlist_params)
        render json: @playlist
      end
    
      def show
        @playlist = Playlist.find(params[:id])
        render json: @playlist
      end
    
      def update
        @playlist = Playlist.find(params[:id])
        @playlist.update!(playlist_params)
        render json: @playlist
      end
    
      def destroy
        @playlist = Playlist.find(params[:id]).delete
        render status: :ok
      end
    
      private
    
      def playlist_params
        params.require(:playlist).permit(:name)
      end
end
