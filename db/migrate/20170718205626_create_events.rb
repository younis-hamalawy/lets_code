class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.string :date, null: false
      t.string :address, null: false
      t.integer :city_id, null: false
      t.integer :host_id, null: false

      t.timestamps null: false
    end

    add_index :events, :city_id
    add_index :events, :host_id
  end
end
