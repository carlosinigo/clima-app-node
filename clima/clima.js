const axios = require('axios');


const getClima = async(lat, lon) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lon=139&appid=92406883c08a43b002cdef96bd05af3b`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}