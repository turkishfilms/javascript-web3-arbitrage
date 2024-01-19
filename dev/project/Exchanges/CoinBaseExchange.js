import fs from 'fs'
import Web3 from 'web3'



const w3 = new Web3(Web3.givenProvider)
console.log(typeof w3)
fs.writeFile("WEB3.js", JSON.stringify(JSON.parse(w3)), err => {
	if (err) {
		console.err(err)
	}
})
/* interface

  getWalletBalance(coin or stable address) returns int balance
  buy(tokenAmount) return {success: bool, transactionData: data}
  sell(tokenAmount) return {success: bool, transactionData: data}
  getPrice(token) returns int price
  send(address) --> returns {success: bool, transactionData: data}

  const feesAmount = total cost of average fees for exchange
  const token = name of token from GLOBAL list

	may reform as object
	{name: , address: , balance: , except name is initially required for API}
  const walletAddressToken = address depending on token
  const walletAddressStable = address of stable wallet
  const tokenPrice = price of token
  const currentTokens = total amount of tokens in wallet
  const currentStable = total amount of stable coin in wallet


*/



//can always make the stableWallet one wallet from the Arbitrage class, but having the ability
//switch makes multiple exchanges on different platforms much easier



class CoinBaseExchange {
	constructor({ portfolio_id, wallet_id } = {}) {
		this.feesAmount = //specifically calculate for each exchange with varying methods
			this.token = //name of Token from GLOBAL list
			this.walletAddressToken = //address of token. can be static or defined 
			this.walletAddressStable = //address of stable coin on exchange. static or defined
			this.tokenPrice = getPrice(this.token);
		this.currentTokenAmount = getWalletBalance(this.walletAddressToken);
		this.currentStableAmount = getWalletBalance(this.walletAddressStable);
		this.portfolio_id = portfolio_id
		this.wallet_id = wallet_id

	}

	getCoinBaseWalletBalance() {

		const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
		const portfolio_id = this.wallet_id
		const wallet_id = this.portfolio_id
		const coinBaseURL = `https://api.prime.coinbase.com/v1/portfolios/${portfolio_id}/wallets/${wallet_id}/balance`
		fetch(coinBaseURL)
			.then(response => JSON.loads(response))
			.then(data => {
				console.log(data)
				return data
			})
	}

	buyToken(walletAddressToken, amountInStable) {
		//buy the token with proper means, and then fill buyData based off transaction
		const buyData = { success: "yes", transactionData: "yes" }
		return buyData;
	}

	sellToken(walletAddressToken) {
		//sell the token with proper means, and then fill buyData based off transaction
		//use calculateFees() to sell max amount
		const sellData = { success: "yes", transactionData: "yes" }
		return sellData;
	}

	getPrice(walletAddress) {
		//collect price data
		const currentPrice = 0
		return currentPrice
	}

	send(address) {
		//send to the address the calculateFees value
		const sendData = { success: "yes", transactionData: "yes" }
		return sendData;
	}

	calculateFees() {
		return this.currentTokenAmount - this.feesAmount;
	}
}
