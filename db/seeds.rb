# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create!(first_name: "Guest", last_name: "Guest", email: "jamie@gmail.com", password: "password")
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

City.create!(name: "SAN FRANCISCO", city_abrv:"SF", image_url: "https://res.cloudinary.com/flying-monkey/image/upload/q_100/v1500917215/sf_t5qwmt.jpg")
City.create!(name: "NEW YORK CITY", city_abrv: "NYC", image_url: "https://res.cloudinary.com/flying-monkey/image/upload/q_100/v1500917188/nyc_ow7rzd.jpg")
City.create!(name: "PORTLAND", city_abrv: "PRL", image_url: "https://res.cloudinary.com/flying-monkey/image/upload/q_100/v1500917194/portland_tqvwwi.jpg")
City.create!(name: "LONDON", city_abrv: "LDN", image_url: "https://res.cloudinary.com/flying-monkey/image/upload/q_100/v1500958980/london3jpg_exw9tj.jpg")
City.create!(name: "BOSTON", city_abrv: "BST", image_url: "https://res.cloudinary.com/flying-monkey/image/upload/q_100/v1500917428/boston_sgejl8.jpg")
City.create!(name: "CHICAGO", city_abrv: "CHG", image_url: "https://res.cloudinary.com/flying-monkey/image/upload/q_100/v1500917221/chicago_cptebs.jpg")


Event.destroy_all

Event.create!(date: Faker::Date.forward(100), name:"Ruby for beginners", address: "Humphry Slocombe, 2790A Harrison St, San Francisco, CA 94110, USA", description: "Just a few people coding ruby at an Ice Cream parlor", host_id: 2, city_id: 1)
Event.create!(date: Faker::Date.forward(100), name:"JavaScript forever @bluebottle", address: "2900 18th St, San Francisco, CA 94110, USA", description: "The most advanced JS coding experience with skillful players in the field", host_id: 1, city_id: 1)
Event.create!(date: Faker::Date.forward(100), name:"Intermediate C++", address: "3049 20th St, San Francisco, CA 94110", description: "Come code with me @Atlas cafe, they have the best tea in town.", host_id: 2, city_id: 1)
Event.create!(date: Faker::Date.forward(100), name:"Ruby for the Intermediate", address: "2760 24th St, San Francisco, CA 94110, USA", description: "Come join us under the sun at the backyard of Dynamo Donut & coffee", host_id: 3, city_id: 1)
Event.create!(date: Faker::Date.forward(100), name:"React overview", address: "3248 22nd St, San Francisco, CA 94110, USA", description: "@Revolution Cafe in mission we're talking React", host_id: 1, city_id: 1)

Event.create!(date: Faker::Date.forward(100), name:"Ruby for beginners", address: "Humphry Slocombe, 2790A Harrison St, Chicago", description: "Just a few people coding ruby at an Ice Cream parlor", host_id: 2, city_id: 6)
Event.create!(date: Faker::Date.forward(100), name:"JavaScript forever @bluebottle", address: "2900 18th St", description: "The most advanced JS coding experience with skillful players in the field", host_id: 3, city_id: 2)
Event.create!(date: Faker::Date.forward(100), name:"Intermediate C++", address: "3049 20th St", description: "Come code with me @Atlas cafe, they have the best tea in town.", host_id: 2, city_id: 1)
Event.create!(date: Faker::Date.forward(100), name:"Ruby for the Intermediate", address: "2760 24th St", description: "Come join us under the sun at the backyard of Dynamo Donut & coffee", host_id: 3, city_id: 3)
Event.create!(date: Faker::Date.forward(100), name:"React overview", address: "3248 22nd St", description: "@Revolution Cafe in mission we're talking React", host_id: 2, city_id: 4)
Event.create!(date: Faker::Date.forward(100), name:"Ruby for beginners", address: "Humphry Slocombe, 2790A Harrison St", description: "Just a few people coding ruby at an Ice Cream parlor", host_id: 2, city_id: 2)
Event.create!(date: Faker::Date.forward(100), name:"JavaScript forever @bluebottle", address: "2900 18th St", description: "The most advanced JS coding experience with skillful players in the field", host_id: 6, city_id: 5)
Event.create!(date: Faker::Date.forward(100), name:"Intermediate C++", address: "3049 20th St", description: "Come code with me @Atlas cafe, they have the best tea in town.", host_id: 7, city_id: 3)
Event.create!(date: Faker::Date.forward(100), name:"Ruby for the Intermediate", address: "2760 24th St", description: "Come join us under the sun at the backyard of Dynamo Donut & coffee", host_id: 3, city_id: 3)
Event.create!(date: Faker::Date.forward(100), name:"React overview", address: "3248 22nd St", description: "@Revolution Cafe in mission we're talking React", host_id: 1, city_id: 3)



Registration.destroy_all

Registration.create!(user_id: 2, event_id: 4)
Registration.create!(user_id: 1, event_id: 4)
Registration.create!(user_id: 2, event_id: 5)
Registration.create!(user_id: 3, event_id: 5)
Registration.create!(user_id: 6, event_id: 2)
Registration.create!(user_id: 5, event_id: 1)
Registration.create!(user_id: 2, event_id: 5)
Registration.create!(user_id: 4, event_id: 5)
Registration.create!(user_id: 5, event_id: 2)
Registration.create!(user_id: 7, event_id: 1)
Registration.create!(user_id: 8, event_id: 5)
Registration.create!(user_id: 9, event_id: 5)
Registration.create!(user_id: 10, event_id: 2)
Registration.create!(user_id: 1, event_id: 7)
Registration.create!(user_id: 1, event_id: 9)
Registration.create!(user_id: 1, event_id: 10)
Registration.create!(user_id: 1, event_id: 12)
Registration.create!(user_id: 5, event_id: 9)