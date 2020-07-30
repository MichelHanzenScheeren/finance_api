module.exports = {
  index(request, response) {
    return response.json({
      "error": false,
      "message": "server available",
      "documentation": "",
      "routes available": {
          "/": "api info",
          "/index": "api info",
          "/home": "api info",
          "/author": "author info",
          "/search": {
            "description": "search by symbol or name.",
            "parameters": {
              "symbol": "the symbol or name of the quote (REQUIRED)",
            },
            "return": "json map",
            "examples": {
              "1": "/search?symbol=aapl",
              "2": "/search?symbol=itsa3.sa",
            }
          },
          "/historical_data": {
            "description": "get historical open, close, high, low and volume data from a symbol.",
            "parameters": {
              "symbol": "the symbol or name of the quote (REQUIRED)",
              "total_range": "Value of total range data. (availables: 1d, 5d, 1mo, 3mo, 6mo, 1y, 2y, 5y, 10y, ytd, max). 1mo is the pattern.",
              "interval_between": "The interval between each value. (availables: 1m, 2m, 5m, 15m, 30m, 60m, 90m, 1h, 1d, 5d, 1wk, 1mo, 3mo). 1d is the pattern."
            },
            "return": "json map",
            "examples": {
              "1": "/historical_data?symbol=aapl",
              "2": "/historical_data?symbol=aapl&total_range=5d",
              "3": "/historical_data?symbol=aapl&total_range=1d&interval_between=30m"
            }
          }
      }
    });
  },

  author(_, response) {
    response.json({
        "error": false,
        "author": {
            "name": "Michel Hanzen Scheeren",
            "profession": "Student of Computer Science in Univesidade Tecnológica Federal do Paraná - UTFPR Medianeira.",
            "email": "michelscheeren@alunos.utfpr.edu.br",
        },
    });
  }
}