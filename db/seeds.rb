# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

    require 'open-uri'

   





    User.create(username: 'Cutie', password: '123456')

    # m1 = Movie.create(title: 'The Matrix', genre: 'Action', body: 'Keanu Reeves being Keanu Reeves', year: "1999", rating: "Rated R")
    # m1.video.attach(io: File.open("/Users/johnsonlai/Desktop/freshavo.mp4"), filename: "freshavo.mp4")
    # m2 = Movie.create(title: 'Scarface', genre: 'Action', body: 'The movie that got Arnold Schwarzenegger elected for President', year: "1983", rating: "Rated R")
    # m2.video.attach(io: File.open("/Users/johnsonlai/Desktop/freshavo.mp4"), filename: "freshavo.mp4")
    # m3 =Movie.create(title: 'GodFather', genre: 'Action', body: 'Dont mess with the old guy', year: "1972", rating: "Rated R")
    # m3.video.attach(io: File.open("/Users/johnsonlai/Desktop/freshavo.mp4"), filename: "freshavo.mp4")
    # m4 = Movie.create(title: 'The Karate Kid', genre: 'Action', body: 'Kid does chores instead of kung-fu', year: "1984", rating: "PG-13")
    # m4.video.attach(io: File.open("/Users/johnsonlai/Desktop/freshavo.mp4"), filename: "freshavo.mp4")


    movies = Movie.create([
        {
            title: 'Forrest Gump', genre: 'Comedy', body: 'Run guy run', year: "1994", rating: "PG-13"
        },
        {
            title: 'Austin Powers', genre: 'Comedy', body: 'The OG pimp', year: "1997", rating: "PG-13"
        },
        {
            title: 'Ghost Busters', genre: 'Comedy', body: 'Who ya gonna call', year: "1984", rating: "PG"
        },
        {
            title: 'Groundhog Day', genre: 'Comedy', body: 'Not actually about groundhogs', year: "1993", rating: "PG"
        }
    ])

    
        # Movie.create(title: 'Forrest Gump', genre: 'Comedy', body: 'Run guy run', year: "1994", rating: "PG-13")
        # Movie.create(title: 'Austin Powers', genre: 'Comedy', body: 'The OG pimp', year: "1997", rating: "PG-13")
        # Movie.create(title: 'Ghost Busters', genre: 'Comedy', body: 'Who ya gonna call', year: "1984", rating: "PG")
        # Movie.create(title: 'Groundhog Day', genre: 'Comedy', body: 'Not actually about groundhogs', year: "1993", rating: "PG")
    

    movies.each do |movie|
        file = open('https://internet-flicks-seeds.s3-us-west-1.amazonaws.com/freshavo.mp4')
        movie.video.attach(io: file, filename: 'freshavo.mp4')
    end


    
    
    