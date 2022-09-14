class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :authenticate_user
    
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    private

    def current_user
       @current_user ||= User.find_by_id(session[:user_id]) #memoization: caching experience
    end

    def render_not_found_response(object)
        render json: { error: "#{object.model} not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(object)
        render json: { errors: object.record.errors.full_messages}, status: :unprocessable_entity
    end

    def authenticate_user
        render json: {errors: "Not Authorized"}, status: :unauthorized unless current_user
    end
end
