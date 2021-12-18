import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContext.js';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Line, Doughnut } from 'react-chartjs-2';

export function Graph() {
  const { dailydata, data, country } = useContext(GlobalContext)
  const rec = data.recovered
  const det = data.deaths
  const con = data.confirmed
  console.log(country)


  const daily = {
    labels: dailydata.map((date) => (date.date)),
    datasets: [
      {
        label: 'Infected',
        borderColor: 'yellow',
        data: dailydata.map((confirmed) => (confirmed.confirmed))
      }, {
        label: 'Recovered',
        borderColor: 'green',
        data: dailydata.map((recovered) => (recovered.recovered))
      }, {
        label: 'Died',
        borderColor: 'red',
        data: dailydata.map((death) => (death.deaths))
      }
    ]
  };

  const countryData = {
    labels: ['Recovered', 'Confirmed', 'Deaths'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          '#008000',
          '#FF8C00',
          '#8B0000'
        ],
        hoverBackgroundColor: [
          '#501800',
          '#4B5000',
          '#175000'
        ],
        data: [rec, con, det]
      }
    ]
  }

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={6}>
        <Paper variant="outlined">
          <Line data={daily}
            options={{
              title: {
                display: true,
                text: 'World Daily Cases',
                fontSize: 20
              },
              legend: {
                display: true,
                position: 'right'
              }
            }} />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper variant="outlined">
          <Doughnut
            data={countryData}
            options={{
              title: {
                display: true,
                text: "Daily: " + country,
                fontSize: 20
              },
              legend: {
                display: true,
                position: 'right'
              }
            }}
          />
        </Paper>
      </Grid>
    </Grid>

  )
}
