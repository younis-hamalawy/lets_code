
json.city do
  json.set! @city.id do
    json.partial! '/api/cities/city', city: @city
  end
end
json.currentCity @city.id
# json.id @city.id
# json.name @city.name
# json.image_url @city.image_url
# json.events do
#   @city.events.each do |event|
#     json.set! event.id do
#       json.id event.id
#       json.name event.name
#       json.description event.description
#       json.date event.date
#       json.address event.address
#       json.host do
#         json.id event.host.id
#         json.first_name event.host.first_name
#         json.image_url event.host.image_url
#       end
#
#       json.registered_users do
#         event.registered_users.each do |user|
#           json.set! user.id do
#             json.id user.id
#             json.first_name user.first_name
#             json.image_url user.image_url
#           end
#         end
#       end
#     end
#   end
# end


# json.users do
#   json.array! @city.users, partial: 'api/users/user', as: :user
# end
