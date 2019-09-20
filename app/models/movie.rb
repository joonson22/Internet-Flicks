class Movie < ApplicationRecord
    validates :title, :genre, :body, :year, :rating, presence: true
    has_one_attached :video
    has_one_attached :photo
end
