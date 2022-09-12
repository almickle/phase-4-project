class User < ApplicationRecord
    # has_many :liked_articles
    # has_many :articles, through: :liked_articles
    validates :password, presence: true

end
