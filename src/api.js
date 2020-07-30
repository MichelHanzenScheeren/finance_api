const algotrader = require('algotrader');
const Yahoo = algotrader.Data.Yahoo;
const Query = algotrader.Data.Query;

const missingSymbol = {"error": true, "message": "missing required parameter 'symbol'", "data": []};

module.exports = {
  async search(request, response) {
    try {
      const symbol = request.query.symbol;
      if(symbol == "" || symbol == undefined) return response.json(missingSymbol);
      
      const result = await Query.search(symbol);
      return response.json({"error": false, "data": result});
    } catch (error) {
      return response.json({"error": true, "message": error.message, "data": []});
    }
  },

  async getHistoricalData(request, response) {
    try {
      const symbol = request.query.symbol;
      const total_range = request.query.total_range || "1mo";
      const interval_between = request.query.interval_between || "1d";
      if(symbol == "" || symbol == undefined) return response.json(missingSymbol);
      
      const result = await Yahoo.getQuotes(symbol, total_range, interval_between, false);
      return response.json(result);
    } catch (error) {
      return response.json({"error": true, "message": error.message, "data": []});
    }
  }
}