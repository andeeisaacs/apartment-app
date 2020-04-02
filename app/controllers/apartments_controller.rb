class ApartmentsController < ApplicationController
    def index
        @apartments = Apartment.all
        render json: @apartments
    end

    def show
        @apartment = Apartment.find(params[:id])
        render json: @apartment
    end

    def create
        @apartment = Apartment.create(apartment_params)
            if @apartment.valid?
                render json: @apartment
            else
                render json: @apartment.errors
            end
    end

    #shh secret
    def apartment_params
        params.require(:apartment).permit(:street_address, :city, :state, :zip, :country, :manager_name, :manager_phone, :hours, :user_id)
    end

end
