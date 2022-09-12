class UsersController < ApplicationController

    def show
       user=User.find_by(id: session[:user_id])
       if user
        render json: user
       else
        render json: {error: "User not found"}, status: :unauthorized 
       end
    end

    def find_user
        user=User.find_by(params[:id])
        render json: user, status: :ok
    end

    def create
        user=User.create!(user_params)
        render json: user, status: :created
    end

    private

    def user_params
        params.permit(:username, :email)
    end
end
