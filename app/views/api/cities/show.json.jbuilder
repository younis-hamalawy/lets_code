# json.partial! '/api/cities/city', city: @city

json.set! @city.id do
  json.is @city.id
  json.name @city.name
  json.image_url @city.image_url
  json.events do
    @city.events.each do |event|
      json.set! event.id do
        json.id event.id
        json.name event.name
        json.description event.description
        json.date event.date
        json.address event.address
        json.registered_users do
          event.registered_users.each do |user|
            json.id user.id
            json.first_name user.first_name
            json.image_url user.image_url
            if signed_in?
              json.attending !!current_user.registrations.find_by(event_id: event.id)
            end
            if logged_in?
              json.hosting !!current_user.hosts.find_by(event_id: event.id)
            end
          end
        end
      end
    end
  end
end

# json.users do
#   json.array! @city.users, partial: 'api/users/user', as: :user
# end
