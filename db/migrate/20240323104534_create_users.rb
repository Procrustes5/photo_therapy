class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string :last_name, null: false, limit: 50
      t.string :first_name, null: false, limit: 50
      t.boolean :is_admin, default: false, null: false
      t.timestamps
    end
  end
end
