const axios = require('axios');

const getLugarLatLong = async(direccion) => {

    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}&appid=92406883c08a43b002cdef96bd05af3b`)

    if (resp.cod === '404') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    let location = resp.data;
    let pais = location.sys.country;
    let cord = location.coord;

    return {
        direccion: location.name,
        lat: cord.lat,
        lon: cord.lon
    }
}

module.exports = {
    getLugarLatLong
}