class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.integer :x_coordinate
      t.integer :y_coordinate

      t.timestamps
    end
  end
end
