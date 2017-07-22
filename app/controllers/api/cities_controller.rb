class Api::CitiesController < ApplicationController
  def index
    @cities = City.all
  end

  def show
    # debugger
    @current_user = current_user
    @city = City.find(params[:id])
    render :show
  end
end
