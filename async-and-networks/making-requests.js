const axios = require('axios'); //commonjs syntax / commonjs modules

const url = 'https://api.darksky.net/forecast/$[API_SECRET]/29.6502,-82.3305?exclude=currently,flags,minutely,daily';

function printResponse(response) {
    console.log(response.data.hourly);
}
function abandonShip(error) {
    console.error(error);
}

axios.get(url)
    .then(printResponse)
    .catch(abandonShip);