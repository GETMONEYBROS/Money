class UsersController < ApplicationController
    skip_before_action :check, only: [:create]
    def create
      user = User.create(user_params)
      if user.valid?
        session[:user_id] = user.id
        redirect_to '/songs'
      else
        flash[:errors] = user.errors.full_messages
        redirect_to '/'
      end
    end
  
    def show
      @user = User.find(current_user)
      session[:user_id] = @user.id
    end
  
    private 
      def user_params
        params.require(:user).permit(:firstName, :lastName, :email, :password, :password_confirmation)
      end
end