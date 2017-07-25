json.set! @registration.id do
  json.id @registration.id
  json.event_id @registration.event_id
  json.user_id @registration.user_id
  json.user_id do
    json.id registration.user.id
    json.first_name registration.user.first_name
    json.image_url registration.user.image_url
  end
end
