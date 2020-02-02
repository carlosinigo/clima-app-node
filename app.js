const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima.',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {

    try {
        let cord = await lugar.getLugarLatLong(direccion);
        let temp = await clima.getClima(cord.lat, cord.lon);

        return `El clima en ${direccion} es de ${temp} °C.`;
    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`;
    }


}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));