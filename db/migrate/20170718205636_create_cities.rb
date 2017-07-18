class CreateCities < ActiveRecord::Migration[5.1]
  def change
    create_table :cities do |t|
      t.string :city_abrv, null: false
      t.string :name, null: false
      t.string :image_url, null: false

      t.timestamps null: false
    end
    add_index :cities, :city_abrv, unique: true
  end
end
