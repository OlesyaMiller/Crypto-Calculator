class CurrenciesController < ApplicationController
    def index
    end

    def search
        @currencies = Carrency.where('LOWER(name) LIKE ?', "%#{params[:search].downcase}%")
        render json: {currencies: @currencies}
    end
end 