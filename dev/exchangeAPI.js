import fs from 'fs'
import { coinListURL, coinList, exchangeList } from './constants.js'

function grabWeather() {
    fetch("https://api.weather.gov/points/45.516,-122.6814")
        .then(response => {
            console.log(typeof response)
            fs.writeFile("weatherApi.json", response.toString(), (err) => {
                if (err) {
                    console.err(err, coinList, exchangeList)
                }
            })
        })
}

if (false) grabWeather()

function hello() { coinList.forEach(coin => console.log(coin)) }
hello()

function bye() { exchangeList.forEach(exchange => console.log(exchange)) }
bye()

function getAllCoins() {
    fetch(coinListURL)
        .then(response => response.json())
        .then(data => {
            const coinIDS = data.map(coin => coin.id)
            const coins = data.map(coin => coin)
            fs.writeFile("RegaCoinList.js", `const midTierCoinList = ${JSON.stringify(coins)}`.toString(), err => {
                if (err) console.err(err)
            })
        })
}
getAllCoins();
