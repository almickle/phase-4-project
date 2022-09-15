class UsersController < ApplicationController
skip_before_action :authenticate_user, only: :show

    def show
        if current_user    
            render json: current_user, status: :ok
        else 
            render json: {error: "No current session stored"}, status: :unauthorized
        end
    end

    def index
        users=User.all
        render json: users, status: :ok
    end


    def create
        user = User.create!(user_params)
        user.admin = params[:admin]
        session[:user_id] = user.id
        render json: user, status: :ok
    end

    def update
       user=find_user
       user.update!(user_params)
       render json: user, status: :accepted 
    end

    private

    def user_params
        params.permit(:username, :password, :email)
    end

    def find_user
        User.find(params[:id]) 
    end    
end
