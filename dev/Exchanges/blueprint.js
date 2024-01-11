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



class nameOfExchange {
    constructor() {
        this.feesAmount = //specifically calculate for each exchange with varying methods
            this.token = //name of Token from GLOBAL list
            this.walletAddressToken = //address of token. can be static or defined 
            this.walletAddressStable = //address of stable coin on exchange. static or defined
            this.tokenPrice = getPrice(this.token);
        this.currentTokenAmount = getWalletBalance(this.walletAddressToken);
        this.currentStableAmount = getWalletBalance(this.walletAddressStable);


    }
    getWalletBalance(address) {
        //calculate the balance as int
        const balance =

        return balance(may need to figure out returning eth vs USD values);
    }

    buyToken(walletAddressToken, amountInStable) {
        //buy the token with proper means, and then fill buyData based off transaction


        const buyData = { success: , transactionData: }
        return buyData;
    }

    sellToken(walletAddressToken) {
        //sell the token with proper means, and then fill buyData based off transaction
        //use calculateFees() to sell max amount

        const sellData = { success: , transactionData: }
        return sellData;
    }

    getPrice(walletAddress) {
        //collect price data
        const currentPrice =

        return currentPrice
    }

    send(address) {
        //send to the address the calculateFees value



        const sendData = { success: , transactionData: }
        return sendData;
    }

    calculateFees() {
        return this.currentTokenAmount - this.feesAmount;
    }
}
