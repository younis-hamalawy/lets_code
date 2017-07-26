@events.each do |event|
  json.set! event.id do
    json.extract! event, :id, :name, :date, :description, :address, :city_id, :host_id
    if signed_in?
      json.attending !!(current_user.registered_events.find_by(id: event.id))
    else
      json.attending false
    end
  end
end
