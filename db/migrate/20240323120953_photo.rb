class Photo < ActiveRecord::Migration[7.1]
  def change
    add_foreign_key :photos, :categories, column: :category_id
  end
end
