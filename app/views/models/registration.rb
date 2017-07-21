# == Schema Information
#
# Table name: registrations
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  event_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Registration < ApplicationRecord
  belongs_to :registered_user,
              foreign_key: :user_id,
              primary_key: :id,
              class_name: "User"

  belongs_to :event
end
