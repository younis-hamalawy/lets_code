class Api::RegistrationsController < ApplicationController

  def create
  	@registration = Registration.new(registration_params)
  	if @registration.save
      @event = @registration.event
  		render "api/events/show"
  	else
  		render json: @registration.errors.full_messages, status: 422
  	end
  end

  def destroy
    @registration = Registration.find(params[:id])
    @registration.destroy
    render :show
  end

  def index
   @registrations = Registration.all
  end



  private

  def registration_params
  	params.require(:registration).permit(:event_id, :user_id)
  end
end
