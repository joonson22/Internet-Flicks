class AddValidationToMovieId < ActiveRecord::Migration[5.2]
  def change
    change_column_null :mylists, :movie_id, false, Time.now

  end
end
