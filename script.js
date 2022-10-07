// math.floor values
// use .fetch()
// headers not required - no POST

fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2CBNB%2CUSD%20coin%2CXRP%2CBinance%20USD%2CCardano%2CSolana%2CDogecoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true')
    .then(res => res.json())
    .then(data => console.log(data))

/*async function catchCryptoData() {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2CBNB%2CUSD%20coin%2CXRP%2CBinance%20USD%2CCardano%2CSolana%2CDogecoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true')
    document.body = response;
}*/