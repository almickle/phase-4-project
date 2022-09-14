class SessionsController < ApplicationController
    #Login
    def create
        user=User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: {error:"Invalid Credentials"}, status: :unauthorized
        end
    end

    # Logout
    def destroy
       session.delete :user_id
    end
end
