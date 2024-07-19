import React, { useContext, useState } from "react";
import { getWeatherData, getWeatherLoc } from "../api/FetchApi";



// context creation
const AppContext = React.createContext();

// create provider function
const AppProvider = ({children}) => {
    const [data, setData] = useState(null);
    const [city, setCity] = useState(null);

    const fetchData = async () => {
        const response = await getWeatherData(city);
        setData(response);
    }

    const fetchLocation = async () => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeatherLoc(
                position.coords.latitude, position.coords.longitude
            ).then((data) => setData(data))
        })
    }

    return(

        <AppContext.Provider value={{data, city, setCity, fetchData, fetchLocation}}>
            {children}
        </AppContext.Provider>
       
    )
}

//custom hook creation
const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext}