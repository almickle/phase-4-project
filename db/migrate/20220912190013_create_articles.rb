class CreateArticles < ActiveRecord::Migration[7.0]
  def change
    create_table :articles do |t|
      t.string :title
      t.string :image
      t.string :description
      t.string :content
      t.string :publish_date
      t.string :category

      t.timestamps
    end
  end
end
