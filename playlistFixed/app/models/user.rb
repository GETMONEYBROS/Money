class User < ApplicationRecord
  before_save :email.downcase
  validates :firstName, :lastName, :password, :password_confirmation, presence: true
  VALID_EMAIL_REGEX = /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
  validates :email, presence: true, format: { with: VALID_EMAIL_REGEX }, uniqueness: { case_sensitive: false }
  validates_length_of :password, minimum: 8, too_short: "%{count} characters is the minimum allowed"
  validates_length_of :firstName, :lastName, minimum: 3, too_short: "%{count} characters is the minimum allowed"
  has_many :songs, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_many :songsLiked, through: :likes, source: :song
  has_secure_password
end