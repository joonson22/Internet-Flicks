# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

    require "open-uri"

    User.destroy_all
    Movie.destroy_all





    User.create(username: 'Cutie', password: '123456')


    movies = Movie.create([
        {
            title: "Forrest Gump", genre: "Comedy", body: "Run guy run", year: "1994", rating: "PG-13"
        },
        {
            title: "Austin Powers", genre: "Comedy", body: "The OG pimp", year: "1997", rating: "PG-13"
        },
        {
            title: "Ghost Busters", genre: "Comedy", body: "Who ya gonna call", year: "1984", rating: "PG"
        },
        {
            title: "Groundhog Day", genre: "Comedy", body: "Not actually about groundhogs", year: "1993", rating: "PG"
        },
        {
            title: "The Matrix", genre: "Action", body: "Keanu Reeves being Keanu Reeves", year: "1999", rating: "Rated R"
        },
        {
            title: "Scarface", genre: "Action", body: "The movie that got Arnold Schwarzenegger elected for President", year: "1983", rating: "Rated R"
        },
        {
            title: "GodFather", genre: "Action", body: "Dont mess with the old guy", year: "1972", rating: "Rated R"
        },
        {
            title: "The Karate Kid", genre: "Action", body: "Kid does chores instead of kung-fu", year: "1984", rating: "PG-13"
        }
    ])


    movies.each do |movie|

    
        title1 = movie.title.split(' ').join('+')
        video1 = movie.title.split(' ').join('+')
        file = open("https://internet-flicks-seeds.s3-us-west-1.amazonaws.com/#{video1}.mp4")
        file2 = open("https://internet-flicks-seeds.s3-us-west-1.amazonaws.com/#{title1}+Thumbnail.jpg")
        movie.video.attach(io: file, filename: "#{video1}.mp4")
        movie.photo.attach(io: file2, filename: "#{movie.title} Thumbnail.jpg")
    end


    
    
    