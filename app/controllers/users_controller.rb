class UsersController < ApplicationController

    def show
        user=User.find_by(id: session[:user_id])
        render json: user
    end

    def index
        users=User.all
        render json: users, status: :ok
    end
    
    def discover
        user=find_user
        render json: user, status: :ok
    end

    def create
        user=User.create!(user_params)
        render json: user, status: :created
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
