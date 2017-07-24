class Api::EventsController < ApplicationController
  def create
  	@event = Event.new(event_params)
  	if @event.save
  		render "api/events/show"
  	else
  		render json: @event.errors.full_messages, status: 422
  	end
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy
    render :show
  end

  def index
   @events = Event.all
  end

  def show
    @event = Event.find(params[:id])
    render :show
  end


  private

  def event_params
  	params.require(:event).permit(:name, :description, :date, :address, :city_id, :host_id)
  end
end
