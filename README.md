coinbase-spreadsheet
====================

Get Coinbase bitcoin (sell/buy) price in a Google spreadsheet

1. Open the Google spreadsheet where you want to import the Coinbase price
2. Go to "Tools" --> "Script Manager". Click on "New" --> "Blank Project"
3. Replace: 

   ```
   function myFunction() {
  
   }
   ```

   with this code
      ```
    function coinbase_price(crypto, fiat, sell_OR_buy) {
        try {
            var api_url = "https://api.coinbase.com/v2/prices/" + crypto + "-" + fiat + "/" + sell_OR_buy;
            var response = UrlFetchApp.fetch(api_url);
            var data = JSON.parse(response);
            if (fiat === "EUR") {
                var fiat_symbol = "€";
             } else {
                var fiat_symbol = "$";
            }
            return fiat_symbol + data.data.amount;
        } catch (error) {
        return "Error";
        }
    }
   ```

4. Go to "File" --> "Rename" and in "Enter new project name" enter something like 'coinbase_price'
5. Save the script.  
6. Google will say "Authorization required", give the script the required authorization to run. 
7. Go back to your spreadsheet window
9. Click the cell where you want to use the function. Type an equals sign (=) followed by the function name "coinbase_pirce" and set:
- crypto currency: BTC, ETH or LTC
- fiat currency: USD or EUR
- sell or buy price: sell or buy 
and press Enter.

Example:
   ```
   =coinbase_price("BTC","EUR","sell") 
   ```


The cell will momentarily display Loading..., then return the Coinbase buy or sell price appear in the cells. 

Original code by  [Muneeb Ali](http://twitter.com/muneeb)
