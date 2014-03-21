class HomeController < ApplicationController
  def index
    response = HTTParty.get('https://api.instagram.com/v1/media/popular?client_id=4bbf750dd530480baf89bc7325a8c30e')
    @data = JSON.parse(response.body)
  end
end
