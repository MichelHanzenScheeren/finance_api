# Api Financeira Básica em NodeJs

Api construída tendo por base o curso de NodeJs básico da Rocketseat.

A proposta é oferecer um endpoint para pesquisa de ativos listados em bolsa e seus respectivos dados históricos (preço de abertura/fechamento, máximos, mínimos e volume). Os dados são obtidos por meio da biblioteca "algotrader", do usuário "torreyleonard". O github desta biblioteca está disponível em <https://github.com/torreyleonard/algotrader>.

O provedor de dados da biblioteca usado foi o Yahoo.

# Instruções de uso
* É necessário ter o NodeJs instalado. (pode ser baixado em <https://nodejs.org/en/>. Versão recomendada: v12.18.2).
* Clone o repositório no seu computador (no prompt, digitando "git clone https://github.com/MichelHanzenScheeren/finance_api.git") ou baixe e extraia o arquivo zip.
* Abra a pasta no seu editor de código.
* Instale as dependências do projeto (localizadas em "package.json" - comando "yarn install" ou "npm install").
* Execute o comando "yarn dev" (ou "npm run dev").
* Abra seu navegador no endereço "http://localhost:3001/api" (endpoint padrão).
* A chamada anterior retorna diversas instruções de uso. (recomendado colar a resposta em um "Json parser" - ex <http://json.parser.online.fr/>).

# Endpoints
* "/", "/index", ou "/home": Informações e intruções gerais sobre a api;
* "/author": Informações sobre o autor;
* "/search": Realizar busca por símbolo ou nome do ativo.
  + Parâmetros:
    - "symbol": Símbolo ou nome do ativo (Obrigatório).
  + Retorno: Mapa codificodo em json.
  + Exemplos: 
    - 1: "/search?symbol=aapl";
    - 2: "/search?symbol=itsa3.sa".
* "/historical_data": Dados históricos de abertura, fechamento, preço máximo, preço mínimo e volume do símbolo.
  + Parâmetros:
    - "symbol": Símbolo ou nome do ativo (Obrigatório).
    - "total_range": Intervalo total dos dados. Disponíveis: 1d, 5d, 1mo, 3mo, 6mo, 1y, 2y, 5y, 10y, ytd, max. Padrão: "1mo".
    - "interval_between": Intervalo entre cada dado retornado. Disponíveis: 1m, 2m, 5m, 15m, 30m, 60m, 90m, 1h, 1d, 5d, 1wk, 1mo, 3mo. Padrão: "1d".
  + Retorno: Mapa codificodo em json.
  + Exemplos:
    - 1: "/historical_data?symbol=aapl",
    - 2: "/historical_data?symbol=aapl&total_range=5d",
    - 3: "/historical_data?symbol=aapl&total_range=1d&interval_between=30m"
        
