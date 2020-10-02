const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoia3VuYWwta2FzaHlhcCIsImEiOiJjanlqa2NsYmkwNDZ1M25sbGVyc2cza3d5In0.OHS2EBl7wYna7mIH2VzseA&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            return callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            console.log(body.features)
            return callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode