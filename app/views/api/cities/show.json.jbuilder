json.partial! '/api/cities/city', city: @city

json.users do
  json.array! @city.users, partial: 'api/users/user', as: :user
end
