const BASE_CRYPTO_SRC = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2CBNB%2CUSD%20coin%2CXRP%2CBinance%20USD%2CCardano%2CSolana%2CDogecoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true";
const getCryptoData = async ()=>{
    try {
        const response = await fetch(BASE_CRYPTO_SRC);
        if (response.ok) {
            const data = await response.json();
            const cryptoDataMap = {
                bitcoin: [
                    "bitcoin-USD",
                    "bitcoin-USD-market-cap",
                    "bitcoin-24hr-vol",
                    "bitcoin-24hr-change"
                ],
                ethereum: [
                    "ethereum-USD",
                    "ethereum-USD-market-cap",
                    "ethereum-24hr-vol",
                    "ethereum-24hr-change"
                ],
                dogecoin: [
                    "dogecoin-USD",
                    "dogecoin-USD-market-cap",
                    "dogecoin-24hr-vol",
                    "dogecoin-24hr-change"
                ],
                cardano: [
                    "cardano-USD",
                    "cardano-USD-market-cap",
                    "cardano-24hr-vol",
                    "cardano-24hr-change"
                ],
                tether: [
                    "tether-USD",
                    "tether-USD-market-cap",
                    "tether-24hr-vol",
                    "tether-24hr-change"
                ]
            };
            for (const [crypto, ids] of Object.entries(cryptoDataMap)){
                const cryptoData = data[crypto];
                document.getElementById(ids[0]).innerHTML = cryptoData.usd;
                document.getElementById(ids[1]).innerHTML = cryptoData.usd_market_cap;
                document.getElementById(ids[2]).innerHTML = cryptoData.usd_24h_vol;
                document.getElementById(ids[3]).innerHTML = Math.round(cryptoData.usd_24h_change * 10) / 10;
            }
        } else throw new Error("Failed to fetch data");
    } catch (error) {
        console.log(error);
    }
};
getCryptoData();

//# sourceMappingURL=index.24537248.js.map
