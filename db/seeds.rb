# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create(first_name: "Ewa", last_name: "Klimek", email: "ewa@gmail.com", password: "123456")
User.create(first_name: "Stuntman", last_name: "Mike", email: "stundtman@gmail.com", password: "password")
User.create(first_name: "Zoe", last_name: "Bell", email: "zoe@gmail.com", password: "password")
User.create(first_name: "Jungle", last_name: "Julia", email: "julia@gmail.com", password: "password")
User.create(first_name: "Robin", last_name: "Wilborn", email: "email4@gmail.com", password: "password")
User.create(first_name: "Sean", last_name: "Perfecto", email: "email5@gmail.com", password: "password")
User.create(first_name: "Vilya", last_name: "Levitskiy", email: "email6@gmail.com", password: "password")
User.create(first_name: "Mark", last_name: "Azuolas", email: "email7@gmail.com", password: "password")
User.create(first_name: "Grey", last_name: "Keith", email: "email8@gmail.com", password: "password")
User.create(first_name: "Sam", last_name: "Faber-Manning", email: "email9@gmail.com", password: "password")
User.create(first_name: "Monte", last_name: "Jiran", email: "email10@gmail.com", password: "password")

User.create(first_name: "Aaron", last_name: "Wayne", email: "email11@gmail.com", password: "password")
User.create(first_name: "Alex", last_name: "Scott", email: "email12@gmail.com", password: "password")
User.create(first_name: "Alissara", last_name: "Rojanapairat", email: "email13@gmail.com", password: "password")
User.create(first_name: "Allen", last_name: "Chen", email: "email14@gmail.com", password: "password")
User.create(first_name: "Audrey", last_name: "Mefford", email: "email15@gmail.com", password: "password")
User.create(first_name: "Brady", last_name: "Kimball", email: "email16@gmail.com", password: "password")
User.create(first_name: "Brandon", last_name: "Chui", email: "email17@gmail.com", password: "password")
User.create(first_name: "Brandon", last_name: "Tat", email: "email18@gmail.com", password: "password")
User.create(first_name: "Bryant", last_name: "Luong", email: "email19@gmail.com", password: "password")
User.create(first_name: "David", last_name: "Dobrynin", email: "email20@gmail.com", password: "password")
User.create(first_name: "David", last_name: "Wong", email: "email21@gmail.com", password: "password")

City.destroy_all

City.create(name: "Perth", city_abrv:"per", image_url: "https://res.cloudinary.com/dzbwfwz4j/image/upload/v1495302501/image.adapt.1663.medium_as661s.jpg")
City.create(name: "Kyoto", city_abrv: "kyo", image_url: "https://res.cloudinary.com/dzbwfwz4j/image/upload/v1495173344/kyoto-best-lake-ever_xhcxgq.jpg")
City.create(name: "Venice", image_url: "https://res.cloudinary.com/dzbwfwz4j/image/upload/v1495173247/venice-italy_qyqrhm.jpg")
City.create(name: "Stavanger", image_url: "https://res.cloudinary.com/dzbwfwz4j/image/upload/v1495173178/stavanger_da9l8h.jpg")
City.create(name: "Tokyo", image_url: "https://res.cloudinary.com/dzbwfwz4j/image/upload/v1495232733/places.tokyo_sr38ni.jpg")
City.create(name: "Oslo", image_url: "https://res.cloudinary.com/dzbwfwz4j/image/upload/v1495301816/oslo_uebdio.jpg")
City.create(name: "San Francisco", image_url: "https://res.cloudinary.com/dzbwfwz4j/image/upload/v1495172076/9cf024dfd5c0bcb2b17f4785340145ea-san-francisco_egcxtn.jpg")
City.create(name: "New York", image_url: "https://res.cloudinary.com/dzbwfwz4j/image/upload/v1495172034/5104226627001_5244714388001_5205235439001-vs_ywumkw.jpg")
