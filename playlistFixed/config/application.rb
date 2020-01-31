require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)


require 'sinatra'


require "sequel"
DB = Sequel.connect('sqlite://blog.db')

DB = Sequel.sqlite

DB.create_table :items do
  primary_key :id
  String :name, unique: true, null: false
  Float :price, null: false
end

items = DB[:items]

items.insert(name: 'PS4', price: rand * 100)
items.insert(name: 'Xbox', price: rand * 100)
items.insert(name: 'PC', price: rand * 100)

puts "Item count: #{items.count}"

puts "The average price is: #{items.avg(:price)}"


module PlaylistFixed
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end
