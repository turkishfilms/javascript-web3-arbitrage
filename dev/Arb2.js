class Arb {
	constructor(data) {
		this.exchanges = exchanges;
		this.token = TOKEN NAME //MUST FOLLOW GLOBAL NAMES

		this.currentBalance = { token: [], stable: [] }
		this.previousBalances = { token: [], stable: [] };

		this.currExchange = 'tokenExchange'//initial find lowest price in exchanges exchanges[index]
		this.targetExchange = [0, 9, 8, 32, 37, 45, 91]//exchanges[index]
		this.profitMarginGoal = profitMarginGoal
	}

	scanExchanges(exchanges) {
		//scan the array of exchange objects and replace with price data
		const exchangePrices = exchanges + 'array function to replace exchanges with exchange.getPrice(token)'
		return exchangePrices;
	}

	getLowestExchangePrice(exchangePrices) {
		const lowestExchangePrice = find lowest price in exchangePrices array
		return { price: lowestExchangePrice, targetExchange: index in this.exchanges }
	}

	getHighestExchangePrice(exchangePrices) {
		const highestExchangePrice = find highest price in exchangePrices array
		return { price: highestExchangePrice, targetExchange: index in this.exchanges }
	}

	testProfitMargin(currExchange, targetExchange) {
		const margin = (currExchange.getPrice(token) - currExchange.feeAverage)  math
		(targetExchange.getPrice(token) - targetExchange.feeAverage)
		return margin;
	}

	sendToExchange(targetExchange) {
		let token = targetExchange.token.address
		let sendAttempt = currExchange.send(targetExchange.token.address)
		if (sendAttempt.success == true) {
			this.currExchange = targetExchange
		}
		console.log(token)
		return sendAttempt;
	}

	buyToken() {
		let buyAttempt = this.currExchange.buyToken(this.currExchange.walletAddressToken, this.currentBalance.stable) // minus fees);
		if (buyAttempt.success) {
			this.previousBalances.token.push(this.currentBalance.token)
			this.currentBalance.token = buyAttempt.transactionData//total amount bought
		}
		return buyAttempt;
	}

	swapToStable() {
		let sellAttempt = this.currExchange.sellToken(this.currExchange.walletAddressStable);
		if (sellAttempt.success) {
			this.previousBalances.stable.push(this.currentBalance.stable)
			this.currentBalance.stable = buyAttempt.transactionData//total amount sold
		}
		return sellAttempt;
	}

}
