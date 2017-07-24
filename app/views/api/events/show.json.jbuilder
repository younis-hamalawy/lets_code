json.set! @event.id do
  json.id @event.id
  json.date @event.date
  json.address @event.address
  json.description @event.description
  json.host_id @event.host_id
  json.city_id @event.city_id
  if signed_in?
    json.attending !!current_user.joins.find_by(event_id: @event.id)
  end
  if signed_in?
    json.hosting !!current_user.hosts.find_by(event_id: @event.id)
  end
end
