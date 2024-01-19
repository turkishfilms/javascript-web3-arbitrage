import fs from 'fs'
import { coinBaseCoinListURL, coinList, exchangeList } from './constants.js'


/**
 *This file is supposed to grab the coinLists and exchangeList and generate a file with relveant data
 *
 *
 *
 *
 * **/

function getAllCoins() {
	fetch(coinBaseCoinListURL)
		.then(response => response.json())
		.then(data => {
			const coinIDS = data.map(coin => coin.id)
			const coins = data.map(coin => coin)
			fs.writeFile("RegaCoinList.js", `const midTierCoinList = ${JSON.stringify(coins)}`.toString(), err => {
				if (err) console.err(err)
			})
		})
}

// getAllCoins();

function getExchange() { }
