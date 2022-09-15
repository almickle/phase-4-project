class Article < ApplicationRecord
    belongs_to :author
    has_many :favorite_articles
    has_many :users, through: :favorite_articles
end
