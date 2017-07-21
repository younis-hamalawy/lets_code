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
User.create!(first_name: "Big", last_name: "Shot", email: "mrbigshot@gmail.com", password: "password")

User.create!(first_name: "Mr. White", last_name: "Dimmick", email: "email11@gmail.com", password: "password")
User.create!(first_name: "Mr. Orange", last_name: "Newandyke", email: "email12@gmail.com", password: "password")
User.create!(first_name: "Mr.Blonde", last_name: "Vega", email: "email13@gmail.com", password: "password")
User.create!(first_name: "Nice Guy", last_name: "Eddie Cabot", email: "email14@gmail.com", password: "password")
User.create!(first_name: "Mr. Pink", last_name: ".", email: "email15@gmail.com", password: "password")

City.destroy_all

City.create!(name: "SAN FRANCISCO", city_abrv:"SF", image_url: "http://res.cloudinary.com/flying-monkey/image/upload/c_scale,h_1080,q_100/v1500674057/NYC_btamou.jpg")
City.create!(name: "NEW YORK CITY", city_abrv: "NYC", image_url: "http://res.cloudinary.com/flying-monkey/image/upload/c_scale,h_1080,q_100/v1500674057/NYC_btamou.jpg")
City.create!(name: "PORTLAND", city_abrv: "PRL", image_url: "http://res.cloudinary.com/flying-monkey/image/upload/c_scale,h_1080,q_100/v1500674057/NYC_btamou.jpg")
City.create!(name: "LONDON", city_abrv: "LDN", image_url: "http://res.cloudinary.com/flying-monkey/image/upload/c_scale,h_1080,q_100/v1500674057/NYC_btamou.jpg")
City.create!(name: "BOSTON", city_abrv: "BST", image_url: "http://res.cloudinary.com/flying-monkey/image/upload/c_scale,h_1080,q_100/v1500674057/NYC_btamou.jpg")
City.create!(name: "CHICAGO", city_abrv: "CHG", image_url: "http://res.cloudinary.com/flying-monkey/image/upload/c_scale,h_1080,q_100/v1500674057/NYC_btamou.jpg")
