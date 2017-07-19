# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  image_url       :string           default("http://res.cloudinary.com/flying-monkey/image/upload/v1500417413/profile_avatar_ytdmt7.jpg"), not null
#  password_digest :string           not null
#  session_token   :string           not null
#  city_id         :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  attr_reader :password

  validates :first_name, :last_name, :email, :image_url, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: :true

  after_initialize :ensure_session_token

  # belongs_to :city

  has_many :registrations

  has_many :hosted_events,
            foreign_key: :host_id,
            primary_key: :id,
            class_name: :Events

  has_many :registered_events,
            through: :registrations,
            source: :events

  def password= password
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def self.find_by_credentials username, password
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def is_password? password
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = new_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= new_session_token
  end

  def new_session_token
    SecureRandom.base64
  end

end
