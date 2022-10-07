// math.round values
// use .fetch()
// check if headers required

const baseCryptoSrc = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2CBNB%2CUSD%20coin%2CXRP%2CBinance%20USD%2CCardano%2CSolana%2CDogecoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true";

fetch(`${baseCryptoSrc}`, {
    method: "GET",
}).then((Response) => {
    if(Response.ok) {
        Response.json().then((json) => {
            let cryptoBitcoinData = json.bitcoin;
            console.log(cryptoBitcoinData);
            document.getElementById("bitcoin-USD").innerHTML = cryptoBitcoinData.usd;
            document.getElementById("bitcoin-USD-market-cap").innerHTML = cryptoBitcoinData.usd_market_cap;
            document.getElementById("bitcoin-24hr-vol").innerHTML = cryptoBitcoinData.usd_24h_vol;
            document.getElementById("bitcoin-24hr-change").innerHTML = (Math.round(cryptoBitcoinData.usd_24h_change * 10) / 10);

            let cryptoEthereumData = json.ethereum;
            console.log(cryptoEthereumData);
            document.getElementById("ethereum-USD").innerHTML = cryptoEthereumData.usd;
            document.getElementById("ethereum-USD-market-cap").innerHTML = cryptoEthereumData.usd_market_cap;
            document.getElementById("ethereum-24hr-vol").innerHTML = cryptoEthereumData.usd_24h_vol;
            document.getElementById("ethereum-24hr-change").innerHTML = (Math.round(cryptoEthereumData.usd_24h_change * 10) / 10);

            let cryptoDogecoinData = json.dogecoin;
            console.log(cryptoDogecoinData);
            document.getElementById("dogecoin-USD").innerHTML = cryptoDogecoinData.usd;
            document.getElementById("dogecoin-USD-market-cap").innerHTML = cryptoDogecoinData.usd_market_cap;
            document.getElementById("dogecoin-24hr-vol").innerHTML = cryptoDogecoinData.usd_24h_vol;
            document.getElementById("dogecoin-24hr-change").innerHTML = (Math.round(cryptoDogecoinData.usd_24h_change * 10) / 10);

            let cryptoCardanoData = json.cardano;
            console.log(cryptoCardanoData);
            document.getElementById("cardano-USD").innerHTML = cryptoCardanoData.usd;
            document.getElementById("cardano-USD-market-cap").innerHTML = cryptoCardanoData.usd_market_cap;
            document.getElementById("cardano-24hr-vol").innerHTML = cryptoCardanoData.usd_24h_vol;
            document.getElementById("cardano-24hr-change").innerHTML = (Math.round(cryptoCardanoData.usd_24h_change * 10) / 10);

            let cryptoTetherData = json.tether;
            console.log(cryptoTetherData);
            document.getElementById("tether-USD").innerHTML = cryptoBitcoinData.usd;
            document.getElementById("tether-USD-market-cap").innerHTML = cryptoTetherData.usd_market_cap;
            document.getElementById("tether-24hr-vol").innerHTML = cryptoTetherData.usd_24h_vol;
            document.getElementById("tether-24hr-change").innerHTML = (Math.round(cryptoTetherData.usd_24h_change * 10) / 10)
        })
    }
}).catch((error) => {
    console.log(error);
});