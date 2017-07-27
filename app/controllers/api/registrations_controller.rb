class Api::RegistrationsController < ApplicationController

  def create
    @event = Event.find_by(id: params[:event_id])
  	@registration = Registration.new(event_id: @event.id, user_id: current_user.id)
  	if @registration.save
      @event = @registration.event
  		render "api/events/show"
  	else
  		render json: @registration.errors.full_messages, status: 422
  	end
  end

  def destroy
    @event = Event.find_by(id: params[:event_id])
    if @event
      current_user.registered_events.delete(@event)
      render "api/events/show"
    else
      render json: ["Event doesn't exist"]
    end
  end

  def index
    @registrations = Registration.all
  end



  private

  def registration_params
    params.require(:registration).permit(:event_id, :user_id)
  end
end
