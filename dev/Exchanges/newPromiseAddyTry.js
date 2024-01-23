import fs from 'fs'
import bigCoinList from '../NegaCoinList.js' 

const coinList=[]

const fetches = bigCoinList.map(coin=>{
	return fetch(`https://api.dexscreener.com/latest/dex/search/?q=${coin}`)
		.then(response=>response.json())
		.then(data=>{
			console.log(token,"token")
			const token = data.pairs[0]
			if(token != undefined && "baseToken" in token){
				coinList.push({token:token.name,address:token.address})
			}
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


		fs.writeFile(`CoinAddresses.js`,`const tokenAddresses = ${JSON.stringify(newDude)} \n export default tokenAddresses`,err=>{
			if(err)	console.err(err)
		})
	})
})

