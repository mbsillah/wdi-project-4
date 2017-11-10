class CreateTracks < ActiveRecord::Migration[5.1]
  def change
    create_table :tracks do |t|
      t.string :title
      t.string :album
      t.string :total_playtime
      t.string :release_year
      t.references :playlist, foreign_key: true

      t.timestamps
    end
  end
end