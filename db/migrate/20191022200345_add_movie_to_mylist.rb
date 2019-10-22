class AddMovieToMylist < ActiveRecord::Migration[5.2]
  def change
    add_column :mylists, :movie_id, :integer
    add_index :mylists, :movie_id
    remove_index :mylists, :user_id
    add_index :mylists, :user_id
    add_index :mylists, [:user_id, :movie_id], unique: true
  end
end
