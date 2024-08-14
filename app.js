const axios = require('axios');
const qs = require('qs');
let data = qs.stringify({
'day': '23',
'month': '10',
'year': '1992',
'hour': '19',
'min': '55',
'lat': '19.2',
'lon': '25.2',
'tzone': '5.5'
});

let config = { method: 'post', maxBodyLength: Infinity, url: 'https://json.astrologyapi.com/v1/astro_details', headers: { 'Accept-Language': 'en', 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Basic NjIwNDU3OjJiYTdhNTRlNDJmMzlmYTZhMDU2MDJkOTY' }, data : data};
axios.request(config).then((response) => { console.log(JSON.stringify(response.data));}).catch((error) => { console.log(error);});