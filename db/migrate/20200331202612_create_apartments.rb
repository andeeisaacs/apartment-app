class CreateApartments < ActiveRecord::Migration[6.0]
  def change
    create_table :apartments do |t|
      t.text :street_address
      t.text :city
      t.integer :zip
      t.string :state
      t.string :country
      t.string :manager_name
      t.string :manager_number
      t.string :hours
      t.integer :user_id

      t.timestamps
    end
  end
end
