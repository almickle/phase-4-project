class Article < ApplicationRecord
    belongs_to :author
    # @@MONEY = 50
    has_many :favorite_articles
    has_many :users, through: :favorite_articles
end
