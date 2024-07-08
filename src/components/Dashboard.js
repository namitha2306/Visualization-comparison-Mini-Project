import React, { useEffect, useState } from 'react';
import { fetchCovidData, fetchVaccinationData } from '../api';
import TableauEmbed from './TableauEmbed';
import { Container, Typography, Grid, Paper } from '@mui/material';

const Dashboard = () => {
  const [covidData, setCovidData] = useState([]);
  const [vaccinationData, setVaccinationData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const covidData = await fetchCovidData();
      const vaccinationData = await fetchVaccinationData();
      setCovidData(covidData);
      setVaccinationData(vaccinationData);
    };
    getData();
  }, []);

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        COVID-19 Data Tracker
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <Typography variant="h5" gutterBottom>
              COVID-19 Cases and Vaccination Data
            </Typography>
            <TableauEmbed />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
