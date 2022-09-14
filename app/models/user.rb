class User < ApplicationRecord
    # has_many :liked_articles
    # has_many :articles, through: :liked_articles
    has_secure_password

end
