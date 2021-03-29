class Currency < ApplicationRecord

    def calculate_value(amount)
        (current_price * amount.to_f).round(4)
    end

    def current_price
        url = 'https://api.coingecko.com/api/v3/coins/'
        request = HTTParty.get(url + self.slug)
        response = JSON.parse(request.body)["market_data"]["current_price"]["usd"]
    end
end
