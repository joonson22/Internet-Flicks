@movies.each do |movie|
    json.set! movie.id do
        json.extract! movie, :id, :title, :genre, :body, :rating, :year
        json.videoUrl url_for(movie.video)
    end
end
