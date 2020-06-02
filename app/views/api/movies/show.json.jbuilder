json.extract! @movie, :id, :title, :genre, :body, :rating, :year
json.videoUrl url_for(@movie.video)
json.photoUrl url_for(@movie.photo)

# Hotel.create(name: “hotel1”, address: “address1”, state: “state1”, country: “country1”, cost: 50, description: “descrip1”)