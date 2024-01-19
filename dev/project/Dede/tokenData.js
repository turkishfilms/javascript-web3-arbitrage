const tokenData = {}
const exchanges = ["BINANCE", "COINBASE", "UNISWAP", "TRADERJOE"]
const coins = ["ADA", "ETH", "BTC", "DOGE"]
const randomCoins = ["AVAX", "UST", "SHIB"]
const BIGNUMBER = 1000000000

function addExchanges(exchanges) {
    exchanges.forEach(exchange => tokenData[exchange] = {})
}

function addCoin(coin, exchange, addy) {
    console.log(coin, exchange, addy, "coin ex addy ")
    tokenData[exchange][coin] = addy
}

addExchanges(exchanges)
console.log(tokenData)
exchanges.forEach(exchange => {
    coins.forEach(coin => {
        addCoin(coin, exchange, (Math.random() * BIGNUMBER).toFixed(0))
    })
})
console.log(tokenData)
