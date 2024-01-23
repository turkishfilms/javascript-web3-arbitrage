import fs from 'fs'
import bigCoinList from '../NegaCoinList.js' 

const smallList = bigCoinList.slice(0,3)

const coinList=[]

const fetches = smallList.map(coin=>{
	return fetch(`https://api.dexscreener.com/latest/dex/search/?q=${coin}`)
		.then(response=>response.json())
		.then(data=>{
			const token = data.pairs[0].baseToken
			coinList.push({token:token.name,address:token.address})
		})
	}) 

Promise.all(fetches)
	.then(()=>{
		fs.readFile('tokenAddresses.js','utf8',(err,data)=>{
			if(err) console.err(err)
			const dude = JSON.parse(data)	
			const newDude = {...dude,}
			coinList.forEach(item=>{
				newDude[item.token]=item.address	
			})
			console.log(newDude)


		fs.writeFile(`CoinAddresses.js`,JSON.stringify(newDude),err=>{
			if(err)	console.err(err)
		})
	})
})

