# == Schema Information
#
# Table name: cities
#
#  id         :integer          not null, primary key
#  city_abrv  :string           not null
#  name       :string           not null
#  image_url  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class CityTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
