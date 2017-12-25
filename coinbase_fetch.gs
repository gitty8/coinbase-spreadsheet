function coinbase_price(crypto, fiat, sell_OR_buy) {

    try {
        var api_url = "https://api.coinbase.com/v2/prices/"+crypto+"-"+fiat+"/"+sell_OR_buy;
        var response = UrlFetchApp.fetch(api_url);
        var data = JSON.parse(response);
        if (fiat === "EUR"){
        var fiat_symbol = "€";
        } else {
        var fiat_symbol = "$";
        }
        return fiat_symbol+data.data.amount;
    } catch (error) {
        return "Error";
    }

}
