

const api = "http://api.weatherapi.com/v1/current.json?key=ba948296f2ae43039c154814241107";

export const getWeatherData = async(city) => {
    const response = await fetch(`${api}&q=${city}&aqi=yes`);
    const data = await response.json()
    return data
}

export const getWeatherLoc = async(lat, lon) => {
    const response = await fetch(`${api}&q=${lat},${lon}&aqi=yes`);
    const data = await response.json()
    return data
}
    

  

