import axios from "axios";

class WAVAX_AVAX {
  constructor() {
    this.feesAmount = 0.1;
    this.token = "WAVAX";
    this.tokenData = [];
    this.apiUrl = `https://api.dexscreener.com/latest/dex/tokens/0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7,0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E`;
  }

  getData() {
    return new Promise((resolve, reject) => {
      axios
        .get(this.apiUrl)
        .then((response) => {
          let tokenPairs = response.data.pairs;
          let tokenData = [];
          tokenPairs.forEach((pair) => {
            const pairDex = pair.dexId;
            const pairQuote = pair.quoteToken.name;
            const pairAddress = pair.pairAddress;
            const priceNative = pair.priceNative;

            tokenData.push({
              pairDex: pair.dexId,
              pairToken: pair.quoteToken.name,
              pairAddress: pairAddress,
              pairPriceUSD: priceNative,
            });
          });

          this.tokenData = tokenData;
          resolve(this.tokenData);
        })
        .catch((error) => {
          console.error("Error during axios request:", error);
          reject(error);
        });
    });
  }

  async getPriceMargins() {
    try {
      await this.getData();
      let lowestPair = this.tokenData.reduce((lowest, current) => {
        let currentPrice = parseFloat(current.pairPriceUSD);
        let lowestPrice = parseFloat(lowest.pairPriceUSD);

        return currentPrice < lowestPrice ? current : lowest;
      }, this.tokenData[0]);

      let highestPair = this.tokenData.reduce((highest, current) => {
        let currentPrice = parseFloat(current.pairPriceUSD);
        let highestPrice = parseFloat(highest.pairPriceUSD);

        return currentPrice > highestPrice ? current : highest;
      }, this.tokenData[0]);

      const profitMargin = this.calculateProfitMargin(
        lowestPair.pairPriceUSD,
        highestPair.pairPriceUSD
      );

      const priceMarginData = {
        lowestPair: lowestPair,
        highestPair: highestPair,
        profitMargin: profitMargin,
      };
      console.log(priceMarginData);
      return priceMarginData;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  calculateProfitMargin(costPrice, sellingPrice) {
    let profitMargin = ((sellingPrice - costPrice) / costPrice) * 100;
    return profitMargin.toFixed(3);
  }
}

// Example usage

let bob = new WAVAX_AVAX();
bob.getPriceMargins();
