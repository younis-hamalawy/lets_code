@cities.each do |city|
  json.set! city.id do
    json.extract! city, :id, :name, :image_url, :city_abrv
  end
end
