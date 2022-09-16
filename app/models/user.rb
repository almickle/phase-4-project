class User < ApplicationRecord
    has_many :favorite_articles
    has_many :articles, through: :favorite_articles
    has_secure_password

    validates :username, uniqueness: true

end
