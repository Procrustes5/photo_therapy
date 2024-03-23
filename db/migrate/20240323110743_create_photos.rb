class CreatePhotos < ActiveRecord::Migration[7.1]
  def change
    create_table :photos do |t|
      t.bigint :category_id, null: false
      t.string :name, null: false
      t.string :content
      t.timestamps
    end
  end
end
