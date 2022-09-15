class Article < ApplicationRecord
    has_many :favorite_articles
    has_many :users, through: :favorite_articles
end
