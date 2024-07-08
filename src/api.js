import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api';

export const fetchCovidData = async () => {
  const response = await axios.get(`${API_URL}/get_covid_data`);
  return response.data;
};

export const fetchVaccinationData = async () => {
  const response = await axios.get(`${API_URL}/get_vaccinations`);
  return response.data;
};
