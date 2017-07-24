# json.partial! '/api/cities/city', city: @city

json.id @city.id
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
      json.host event.host
      #   json.set! host.id do
      #   json.id host.id
      #   json.first_name host.first_name
      #   json.image_url host.image_url
      # end
      # # end
      json.registered_users do
        event.registered_users.each do |user|
          json.set! user.id do
            json.id user.id
            json.first_name user.first_name
            json.image_url user.image_url
            if @current_user
              json.attending !!(@current_user.registered_events.find_by(id: event.id))
              json.hosting !!(@current_user.hosted_events.find_by(id: event.id))
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
