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





    User.create(username: 'DemoUser', password: '123456')


    movies = Movie.create!([
        {
            title: "Forrest Gump", genre: "Comedy", body: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.", year: "1994", rating: "PG-13"
        },
        {
            title: "Austin Powers", genre: "Comedy", body: "A 1960s secret agent is brought out of cryofreeze to oppose his greatest enemy in the 1990s, where his social attitudes are glaringly out of place.", year: "1997", rating: "PG-13"
        },
        {
            title: "Ghost Busters", genre: "Comedy", body: "Three former parapsychology professors set up shop as a unique ghost removal service.", year: "1984", rating: "PG"
        },
        {
            title: "Groundhog Day", genre: "Comedy", body: "A weatherman finds himself inexplicably living the same day over and over again.", year: "1993", rating: "PG"
        },
        {
            title: "Superbad", genre: "Comedy", body: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.", year: "2007", rating: "Rated R"
        },
        {
            title: "The Matrix", genre: "Action", body: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.", year: "1999", rating: "Rated R"
        },
        {
            title: "Scarface", genre: "Action", body: "In 1980 Miami, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.", year: "1983", rating: "Rated R"
        },
        {
            title: "GodFather", genre: "Action", body: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.", year: "1972", rating: "Rated R"
        },
        {
            title: "The Karate Kid", genre: "Action", body: "A boy and his mother move to California for a new job. He struggles to fit in, as a group of karate students starts to bully him for dating a rich girl from their clique. It's up to the Japanese landlord, Miyagi, to teach him karate.", year: "1984", rating: "PG-13"
        },
        {
            title: "Casino Royale", genre: "Action", body: "Armed with a license to kill, Secret Agent James Bond sets out on his first mission as 007, and must defeat a private banker to terrorists in a high stakes game of poker at Casino Royale, Montenegro, but things are not what they seem.", year: "2006", rating: "PG-13"
        },
        {
            title: "Nosferatu", genre: "Horror", body: "Vampire Count Orlok expresses interest in a new residence and real estate agent Hutter's wife.", year: "1922", rating: "Rated R"
        },
        {
            title: "The Shining", genre: "Horror", body: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.", year: "1980", rating: "Rated R"
        },
        {
            title: "Jaws", genre: "Horror", body: "When a killer shark unleashes chaos on a beach community, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.", year: "1975", rating: "Rated R"
        },
        {
            title: "A Nightmare on Elm Street", genre: "Horror", body: "The monstrous spirit of a slain child murderer seeks revenge by invading the dreams of teenagers whose parents were responsible for his untimely death.", year: "1984", rating: "Rated R"
        },
        {
            title: "Ju On", genre: "Horror", body: "A mysterious and vengeful spirit marks and pursues anybody who dares enter the house in which it resides.", year: "2002", rating: "Rated R"
        },
        {
            title: "The Wizard of Oz", genre: "Fantasy", body: "Dorothy Gale is swept away from a farm in Kansas to a magical land of Oz in a tornado and embarks on a quest with her new friends to see the Wizard who can help her return home to Kansas and help her friends as well.", year: "1939", rating: "PG"
        },
        {
            title: "Lord of The Rings", genre: "Fantasy", body: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.", year: "2001", rating: "PG-13"
        },
        {
            title: "Harry Potter", genre: "Fantasy", body: "It's Harry's third year at Hogwarts; not only does he have a new Defense Against the Dark Arts teacher, but there is also trouble brewing. Convicted murderer Sirius Black has escaped the Wizards' Prison and is coming after Harry.", year: "2004", rating: "PG"
        },
        {
            title: "Narnia", genre: "Fantasy", body: "Four kids travel through a wardrobe to the land of Narnia and learn of their destiny to free it with the guidance of a mystical lion.", year: "2005", rating: "PG"
        },
        {
            title: "Willy Wonka", genre: "Fantasy", body: "A poor but hopeful boy seeks one of the five coveted golden tickets that will send him on a tour of Willy Wonka's mysterious chocolate factory.", year: "1971", rating: "G"
        },
        {
            title: "Aladdin", genre: "Animation", body: "A kindhearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true.", year: "1992", rating: "G"
        },
        {
            title: "Lion King", genre: "Animation", body: "A Lion cub crown prince is tricked by a treacherous uncle into thinking he caused his father's death and flees into exile in despair, only to learn in adulthood his identity and his responsibilities.", year: "1994", rating: "G"
        },
        {
            title: "Hercules", genre: "Animation", body: "The son of Zeus and Hera is stripped of his immortality as an infant and must become a true hero in order to reclaim it.", year: "1997", rating: "G"
        },
        {
            title: "Mulan", genre: "Animation", body: "To save her father from death in the army, a young maiden secretly goes in his place and becomes one of China's greatest heroines in the process.", year: "1998", rating: "G"
        },
        {
            title: "Peter Pan", genre: "Animation", body: "Wendy and her brothers are whisked away to the magical world of Neverland with the hero of their stories, Peter Pan.", year: "1953", rating: "G"
        },
        {
            title: "Spirited Away", genre: "Anime", body: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.", year: "2001", rating: "PG"
        },
        {
            title: "Totoro", genre: "Anime", body: "When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby.", year: "1988", rating: "G"
        },
        {
            title: "Howl's Moving Castle", genre: "Anime", body: "When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.", year: "2004", rating: "PG"
        },
        {
            title: "Castle in The Sky", genre: "Anime", body: "A young boy and a girl with a magic crystal must race against pirates and foreign agents in a search for a legendary floating castle.", year: "1986", rating: "PG"
        },
        {
            title: "Your Name", genre: "Anime", body: "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?", year: "2016", rating: "PG"
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
f
    
    
    