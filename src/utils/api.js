const GOOGLE_BASE_URL = 'https://maps.googleapis.com/maps/api/geocode/json'
const GOOGLE_KEY = 'AIzaSyAg6rz9WIBVRKGEo-Zqx9tjDxSTF4Yk6rs'

const OPEN_WEATHER_BASE_URL = 'http://api.openweathermap.org/data/2.5/weather'
const OPEN_WEATHER_KEY = 'b78eb13035123aa706e7715ef9d79f6c'

const NETWORK_ERROR = 'NetworkError when attempting to fetch resource.'
const GENERIC_ERROR = 'Oops! Something went wrong! Help us improve your experience by sending an error report'

const GEOLOCATION_OPTIONS = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

async function get(url) {
    const res = await fetch(url)

    if (!res.ok) throw Error(res.statusText)
    return await res.json()
}

export function fetchGeolocation() {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, GEOLOCATION_OPTIONS);
    })
}

export function fetchGoogle(address) {
    const url = new URL(GOOGLE_BASE_URL)
    const params = {address, key: GOOGLE_KEY}
    url.search = new URLSearchParams(params)

    return get(url)
}

export function fetchGoogleErrors(error) {
    switch (error.message) {
        case 'Bad Request':
            return 'Make sure to fill the location correctly'
        case 'ZERO_RESULTS':
            return "Couldn't find this location"
        case NETWORK_ERROR:
            return NETWORK_ERROR
        default:
            console.error(error)
            return GENERIC_ERROR
    }
}

export function fetchWeather(lat, lon) {
    const url = new URL(OPEN_WEATHER_BASE_URL)
    const params = {lon, lat, units: 'metric', appid: OPEN_WEATHER_KEY}
    url.search = new URLSearchParams(params)

    return get(url)
}

export function fetchWeatherErrors(error) {
    switch (error.message) {
        case 'Bad Request':
            return 'Make sure to fill the latitude/longitude correctly'
        case NETWORK_ERROR:
            return NETWORK_ERROR
        default:
            console.error(error)
            return GENERIC_ERROR
    }
}
