import fs from 'fs'
import { coinListURL, coinList, exchangeList } from './constants.js'

function getAllCoins(path) {
	fetch(coinListURL)
		.then(response => response.json())
		.then(data => {
			const coinIDS = data.map(coin => coin.id)
			const coins = data.map(coin => coin)
			fs.writeFile(`${path}.js`, `const ${path} = ${JSON.stringify(coins)}`.toString(), err => {
				if (err) console.err(err)
			})
		})
}
getAllCoins('MostAwesomePath');

