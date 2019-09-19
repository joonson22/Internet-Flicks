json.extract! @movie, :id, :title, :genre, :body, :rating, :year
json.videoUrl url_for(@movie.video)
json.photoUrl url_for(@movie.photo)