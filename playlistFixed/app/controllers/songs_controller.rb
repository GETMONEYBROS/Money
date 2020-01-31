class SongsController < ApplicationController
    def songs
        @user = current_user
        @songs = Song.all
    end

    def create
        @song = Song.create( song_params )
        if @song.valid?
            redirect_to '/songs'
        else
            flash[:errors] = @song.errors.full_messages
            redirect_to '/songs'
        end
    end

    def oneSong
        @song = Song.find(params[:song_id])
        @users = User.all
    end

    def add
        Like.create(user: User.find(session[:user_id]), song: Song.find(params[:song_id]))
        redirect_to "/songs"
    end

    def editSong
        @display = Song.find(params[:song_id])
    end

    def update
        @display = Song.find(params[:song_id])
        @song = @display.update(song_params)
        redirect_to '/songs'
    end

    def delete
        @songDelete = Song.find(params[:song_id])
        @songDelete.destroy
        redirect_to '/songs'
    end

    private
        def song_params
            params.require(:song).permit(:title, :artist).merge(user: User.find(current_user))
        end
end