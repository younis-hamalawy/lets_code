json.partial! '/api/cities/city', city: @city

# json.events do
#   json.array! @city.events, partial: 'api/events/event', as: :event
# end

json.users do
  json.array! @city.users, partial: 'api/users/user', as: :user
end
