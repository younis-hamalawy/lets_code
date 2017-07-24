# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create!(first_name: "Stuntman", last_name: "Mike", email: "stuntman@gmail.com", password: "password")
User.create!(first_name: "Zoe", last_name: "Bell", email: "zoe@gmail.com", password: "password")
User.create!(first_name: "Jungle", last_name: "Julia", email: "julia@gmail.com", password: "password")
User.create!(first_name: "Vincent", last_name: "Vega", email: "vincent@gmail.com", password: "password")
User.create!(first_name: "Jules", last_name: "Winnfield", email: "jwinnfield@gmail.com", password: "password")
User.create!(first_name: "Butch", last_name: "Coolidge", email: "butch@gmail.com", password: "password")
User.create!(first_name: "Mia", last_name: "Wallace", email: "mia@gmail.com", password: "password")
User.create!(first_name: "Buddy", last_name: "Holly", email: "buddy@gmail.com", password: "password")
User.create!(first_name: "Captain", last_name: "Koons", email: "captain@gmail.com", password: "password")
User.create!(first_name: "Mr.Big", last_name: "Shot", email: "mrbigshot@gmail.com", password: "password")

User.create!(first_name: "Mr. White", last_name: "Dimmick", email: "email11@gmail.com", password: "password")
User.create!(first_name: "Mr. Orange", last_name: "Newandyke", email: "email12@gmail.com", password: "password")
User.create!(first_name: "Mr.Blonde", last_name: "Vega", email: "email13@gmail.com", password: "password")
User.create!(first_name: "Nice Guy", last_name: "Eddie Cabot", email: "email14@gmail.com", password: "password")
User.create!(first_name: "Mr. Pink", last_name: ".", email: "email15@gmail.com", password: "password")

City.destroy_all

City.create!(name: "SAN FRANCISCO", city_abrv:"SF", image_url: "http://res.cloudinary.com/flying-monkey/image/upload/q_100/v1500917215/sf_t5qwmt.jpg")
City.create!(name: "NEW YORK CITY", city_abrv: "NYC", image_url: "http://res.cloudinary.com/flying-monkey/image/upload/q_100/v1500917188/nyc_ow7rzd.jpg")
City.create!(name: "PORTLAND", city_abrv: "PRL", image_url: "http://res.cloudinary.com/flying-monkey/image/upload/q_100/v1500917194/portland_tqvwwi.jpg")
City.create!(name: "LONDON", city_abrv: "LDN", image_url: "http://res.cloudinary.com/flying-monkey/image/upload/q_100/v1500917208/london2_ss1p70.jpg")
City.create!(name: "BOSTON", city_abrv: "BST", image_url: "http://res.cloudinary.com/flying-monkey/image/upload/q_100/v1500917428/boston_sgejl8.jpg")
City.create!(name: "CHICAGO", city_abrv: "CHG", image_url: "http://res.cloudinary.com/flying-monkey/image/upload/q_100/v1500917221/chicago_cptebs.jpg")


Event.destroy_all

Event.create!(date: Faker::Date.forward(50), name:"Ruby for beginners", address: "Humphry Slocombe, 2790A Harrison St, San Francisco, CA 94110, USA", description: "Just a few people coding ruby at an Ice Cream parlor", host_id: 2, city_id: 1)
Event.create!(date: Faker::Date.forward(50), name:"JavaScript forever @bluebottle", address: "2900 18th St, San Francisco, CA 94110, USA", description: "The most advanced JS coding experience with skillful players in the field", host_id: 1, city_id: 1)
Event.create!(date: Faker::Date.forward(50), name:"Intermediate C++", address: "3049 20th St, San Francisco, CA 94110", description: "Come code with me @Atlas cafe, they have the best tea in town.", host_id: 2, city_id: 1)
Event.create!(date: Faker::Date.forward(50), name:"Ruby for the Intermediate", address: "2760 24th St, San Francisco, CA 94110, USA", description: "Come join us under the sun at the backyard of Dynamo Donut & coffee", host_id: 3, city_id: 1)
Event.create!(date: Faker::Date.forward(50), name:"React overview", address: "3248 22nd St, San Francisco, CA 94110, USA", description: "@Revolution Cafe in mission we're talking React", host_id: 1, city_id: 1)


# Event.create!(date: Faker::Date.forward(50), time: "8:55 AM", name:"Ruby for beginners", address: "239 E 5th St, New York, NY 10003", description: "Local chain.", host_id: 3, city_id: 8)
# Event.create!(date: Faker::Date.forward(50), time: "11:40 AM", name:"Ruby for beginners", address: "187 Columbus Ave, New York, NY 10023", description: "Free-trade tea here.", host_id: 1, city_id: 8)
# Event.create!(date: Faker::Date.forward(50), time: "10:30 AM", name:"Ruby for beginners", address: "18 W 29th St, New York, NY 10001", description: "Thoughtfully sourced tea.", host_id: 3, city_id: 8)
# Event.create!(date: Faker::Date.forward(50), time: "8:10 AM", name:"Ruby for beginners", address: "180 10th Ave, New York, NY 10011", description: "Soccer fans!", host_id: 4, city_id: 8)
# Event.create!(date: Faker::Date.forward(50), time: "12:30 PM", name:"Ruby for beginners", address: "21 E 27th St, New York, NY 10016", description: "Art-adorned tea shop.", host_id: 5, city_id: 8)
#
#
#
#
# Event.create!(date: Faker::Date.forward(50), time: "8:30 AM", name:"Ruby for beginners", address: "735 Columbus Ave, San Francisco, CA 94133", description: "Venerable tea shop.", host_id: 1, city_id: 7)
# Event.create!(date: Faker::Date.forward(50), time: "9:40 AM", name:"Ruby for beginners", address: "200 Columbus Ave, San Francisco, CA 94133", description: "Small & bustling spot.", host_id: 1, city_id: 7)
# Event.create!(date: Faker::Date.forward(50), time: "10:30 AM", name:"Ruby for beginners", address: "375 Valencia St, San Francisco, CA 94103", description: "Trendy cafe chain with great tea!", host_id: 3, city_id: 7)
# Event.create!(date: Faker::Date.forward(50), time: "8:10 AM", name:"Ruby for beginners", address: "315 Linden St, San Francisco, CA 94102", description: "Rustic ambiance.", host_id: 4, city_id: 7)
# Event.create!(date: Faker::Date.forward(50), time: "12:30 PM", name:"Ruby for beginners", address: "375 Taylor St, San Francisco, CA 94102", description: "Artisanal tea.", host_id: 5, city_id: 7)
#
#
#
# Event.create!(date: Faker::Date.forward(50), time: "9:30 AM", name:"Ruby for beginners", address: "Grønlandsleiret 32, 0190 Oslo, Norway", description: "Contemporary setting.", host_id: 1, city_id: 6)
# Event.create!(date: Faker::Date.forward(50), time: "1:30 PM", name:"Ruby for beginners", address: "Olav Vs gate 2, 0161 Oslo, Norway", description: "Bi-level airy spot.", host_id: 1, city_id: 6)
# Event.create!(date: Faker::Date.forward(50), time: "4:30 PM", name:"Ruby for beginners", address: "Thorvald Meyers gate 18A, 0474 Oslo, Norway", description: "Great pastries.", host_id: 3, city_id: 6)
# Event.create!(date: Faker::Date.forward(50), time: "9:15 AM", name:"Ruby for beginners", address: "Universitetsgata 2, 0164 Oslo, Norway", description: "Specializes in custom blends.", host_id: 4, city_id: 6)
# Event.create!(date: Faker::Date.forward(50), time: "11:30 AM", name:"Ruby for beginners", address: "Grüners gate 1, 0552 Oslo, Norway", description: "Laid back local chain.", host_id: 5, city_id: 6)
#
#
#
# Event.create!(date: Faker::Date.forward(50), time: "8:30 AM", name:"Ruby for beginners", address: "1-19-8 Dogenzaka, Shibuya-ku", description: "Trendy chain.", host_id: 1, city_id: 5)
# Event.create!(date: Faker::Date.forward(50), time: "6:40 PM", name:"Ruby for beginners", address: "1-16-11 Tomigaya, Shibuya-ku", description: "Bakey cafe.", host_id: 1, city_id: 5)
# Event.create!(date: Faker::Date.forward(50), time: "10:30 AM", name:"Ruby for beginners", address: "5-17-5 Jingumae, Shibuya-ku", description: "Loose-leaf teas.", host_id: 3, city_id: 5)
# Event.create!(date: Faker::Date.forward(50), time: "8:10 AM", name:"Ruby for beginners", address: "3-1-4 Kiyosumi, Koto", description: "Funky and comfortable.", host_id: 4, city_id: 5)
# Event.create!(date: Faker::Date.forward(50), time: "12:30 PM", name:"Ruby for beginners", address: "1-17-23 Meguro, Meguro-ku", description: "Intimate tea shop.", host_id: 5, city_id: 5)
#
#
#
# Event.create!(date: Faker::Date.forward(50), time: "8:30 AM", name:"Ruby for beginners", address: "Klubbgata 3, 4013 Stavanger, Norway", description: "Upscale, light-filled cafe.", host_id: 13, city_id: 4)
# Event.create!(date: Faker::Date.forward(50), time: "9:40 AM", name:"Ruby for beginners", address: "Øvre Holmegate 25, 4006 Stavanger, Norway", description: "Snacks will be served.", host_id: 13, city_id: 4)
# Event.create!(date: Faker::Date.forward(50), time: "12:10 PM", name:"Ruby for beginners", address: "Øvre Holmegate 32, 4006 Stavanger, Norway", description: "International teas.", host_id: 3, city_id: 4)
# Event.create!(date: Faker::Date.forward(50), time: "8:10 AM", name:"Ruby for beginners", address: "Kongsgata 48, 4005 Stavanger, Norway", description: "Cozy spot.", host_id: 11, city_id: 4)
# Event.create!(date: Faker::Date.forward(50), time: "12:30 PM", name:"Ruby for beginners", address: "Klubbgata 5, 4013 Stavanger, Norway", description: "Quaint tea shop.", host_id: 11, city_id: 4)


Registration.destroy_all

Registration.create!(user_id: 2, event_id: 4)
Registration.create!(user_id: 1, event_id: 4)
Registration.create!(user_id: 2, event_id: 5)
Registration.create!(user_id: 3, event_id: 5)
Registration.create!(user_id: 6, event_id: 2)
Registration.create!(user_id: 5, event_id: 1)
