class ApartmentsController < ApplicationController
    def index
        apartments = Apartment.all
        render json: apartments
    end

    def create
        apartment = Apartment.create(apartment_params)
        render json: apartment
    end

    def show
        id = params[:id]
        render json: apartment
    end

    def update
        id = params[:id]
        apartment = Apartment.find_by_id "#{id}"
        render json: apartment
    end

    def destroy
        id = params[:id]
        Apartment.find(id).destroy
    end

    #you no see me.
    private
    def apartment_params
        params.require(:apartment).permit(:street, :city, :zip, :state, :country, :manager_name, :manager_number, :hours)
    end

end
