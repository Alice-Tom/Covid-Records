import React, { createContext, useState, useEffect } from 'react'


const API_URL = 'https://covid19.mathdro.id/api'
const URL = 'https://covid19.mathdro.id/api/countries/'
const initialState = {}


export const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
    const [country, setCountry] = useState("Global")
    const [data, setData] = useState(initialState)
    const [path, setPath] = useState(API_URL)
    const [dailydata, setdailydata] = useState([])
    const [picker, setPicker] = useState([])

    function countrySelector(fetched) {
        console.log("Country", fetched)
        setCountry(fetched)
        setPath(fetched === "Global" ? API_URL : `${URL}${fetched}`)
    }

    const load_data = async () => {
        try {
            const respone = await fetch(path)
            const fdata = await respone.json()
            console.log(fdata)
            const modifiedData = {
                confirmed: fdata.confirmed.value,
                recovered: fdata.recovered.value,
                deaths: fdata.deaths.value
            }
            setData(modifiedData)
        }
        catch (error) {
            console.log("FAILED")
        }
    }

    const dailyData = async () => {
        try {
            const respone = await fetch(`${API_URL}/daily`)
            const fdata = await respone.json()
            const modifiedData = fdata.map((daily) => ({
                confirmed: daily.confirmed.total,
                recovered: daily.recovered.total,
                deaths: daily.deaths.total,
                date: daily.reportDate
            }))
            setdailydata(modifiedData)
        }
        catch (error) {
            console.log("FAILED")
        }
    }

    const countryPicker = async () => {
        try {
            const respone = await fetch(URL)
            const fdata = await respone.json()
            setPicker(fdata.countries)
        }
        catch (error) {
            console.log("FAILED")
        }
    }

    useEffect(() => {
        dailyData();
        countryPicker();
        load_data();
    }, [setData, path, setdailydata, setPicker])

    return (
        <GlobalContext.Provider value={
            {
                data,
                dailydata,
                picker,
                countrySelector,
                country
            }
        }>
            {children}
        </GlobalContext.Provider>
    );
}
