# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :string           not null
#  date        :string           not null
#  address     :string           not null
#  city_id     :integer          not null
#  host_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Event < ApplicationRecord
  validates :name, :description, :date, :address, :city_id, :host_id, presence: true

  belongs_to :city
  belongs_to :host,
              foreign_key: :host_id,
              primary_key: :id,
              class_name: "User"

  has_many :registrations

  has_many :registered_users,
          through: :registrations,
          source: :user

end
