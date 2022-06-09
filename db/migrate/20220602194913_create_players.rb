class CreatePlayers < ActiveRecord::Migration[6.1]
  def change
    create_table :players do |t|
      t.text :name
      t.bigint :time

      t.timestamps
    end
  end
end
