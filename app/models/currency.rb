class Currency < ApplicationRecord

    def current_price
        url = 'https://api.coingecko.com/api/v3/coins/'
        request = HTTParty.get(url + self.slug)
        response = JSON.parse(request.body)["market_data"]["current_price"]["usd"]
    end
end
