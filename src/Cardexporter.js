import React, { useContext, useState } from 'react'
import Cards from './Cards.js';
import {GlobalContext} from './GlobalContext.js';
import Grid from '@material-ui/core/Grid';
import {Bar, Line} from 'react-chartjs-2';


export function Cardexporter() {

    const {data,dailydata,countrySelector} = useContext(GlobalContext)
    const [state, setstate] = useState("")

    function onSubmit(e){
        e.preventDefault()
        countrySelector(state)
    }

    return (
        <div>
        <Grid container
            direction="row"
            justify="space-evenly"
            alignItems="center">
                <Cards type = {"Infected"} data={data.confirmed}></Cards>
                <Cards type = {"Recovered"} data={data.recovered}></Cards>
                <Cards type = {"Deaths"} data={data.deaths}></Cards>
        </Grid>
        {/* <form onSubmit={onSubmit} alighItems="center">
            <label htmlFor="country" style={{display:"block"}}>Country</label>
            <input type="text"
                    id="country" 
                    onChange={(e)=> setstate(e.target.value)}
                    placeholder="Choose your country"/>
        </form> */}

        </div>
        
        
    )
}
