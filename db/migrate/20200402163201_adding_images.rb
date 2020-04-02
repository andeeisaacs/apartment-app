class AddingImages < ActiveRecord::Migration[6.0]
  def change
    add_column :apartments, :image, :text
  end
end
