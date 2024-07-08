import sqlite3
import pandas as pd

# Paths to CSV files (using raw strings)
confirmed_cases_csv = r'C:\Users\namit\MiniProject\data\time_series_covid19_confirmed_global.csv'
deaths_csv = r'C:\Users\namit\MiniProject\data\time_series_covid19_deaths_global.csv'
recovered_csv = r'C:\Users\namit\MiniProject\data\time_series_covid19_recovered_global.csv'
vaccinations_csv = r'C:\Users\namit\MiniProject\data\vaccinations.csv'

# Create and connect to the SQLite database
conn = sqlite3.connect('covid19.db')
cur = conn.cursor()

# Create tables
cur.execute('''
    CREATE TABLE IF NOT EXISTS covid_data (
        Date TEXT,
        Country TEXT,
        State TEXT,
        Confirmed INTEGER,
        Deaths INTEGER,
        Recovered INTEGER
    )
''')

cur.execute('''
    CREATE TABLE IF NOT EXISTS vaccinations (
        location TEXT,
        iso_code TEXT,
        date TEXT,
        total_vaccinations REAL,
        people_vaccinated REAL,
        people_fully_vaccinated REAL,
        total_boosters REAL,
        daily_vaccinations_raw REAL,
        daily_vaccinations REAL,
        total_vaccinations_per_hundred REAL,
        people_vaccinated_per_hundred REAL,
        people_fully_vaccinated_per_hundred REAL,
        total_boosters_per_hundred REAL,
        daily_vaccinations_per_million REAL,
        daily_people_vaccinated REAL,
        daily_people_vaccinated_per_hundred REAL
    )
''')

# Load data from CSV files
confirmed_cases = pd.read_csv(confirmed_cases_csv)
deaths = pd.read_csv(deaths_csv)
recovered = pd.read_csv(recovered_csv)
vaccinations = pd.read_csv(vaccinations_csv)

# Transform and load COVID data
def melt_and_merge(confirmed, deaths, recovered):
    id_vars = ['Province/State', 'Country/Region', 'Lat', 'Long']
    value_vars = confirmed.columns[4:]  # All dates columns

    confirmed_melted = confirmed.melt(id_vars=id_vars, value_vars=value_vars, var_name='Date', value_name='Confirmed')
    deaths_melted = deaths.melt(id_vars=id_vars, value_vars=value_vars, var_name='Date', value_name='Deaths')
    recovered_melted = recovered.melt(id_vars=id_vars, value_vars=value_vars, var_name='Date', value_name='Recovered')

    merged = confirmed_melted.merge(deaths_melted, on=id_vars + ['Date'])
    merged = merged.merge(recovered_melted, on=id_vars + ['Date'])

    merged.rename(columns={'Province/State': 'State', 'Country/Region': 'Country'}, inplace=True)
    merged.drop(columns=['Lat', 'Long'], inplace=True)

    return merged

covid_data = melt_and_merge(confirmed_cases, deaths, recovered)

# Insert data into tables
covid_data.to_sql('covid_data', conn, if_exists='append', index=False)
vaccinations.to_sql('vaccinations', conn, if_exists='append', index=False)

conn.commit()
conn.close()

print("Database setup complete.")
