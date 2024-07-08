import sqlite3

def check_table(table_name):
    conn = sqlite3.connect('covid19.db')
    cur = conn.cursor()
    cur.execute(f"SELECT * FROM {table_name} LIMIT 5")
    rows = cur.fetchall()
    conn.close()
    return rows

print("Checking covid_data table:")
covid_data = check_table("covid_data")
for row in covid_data:
    print(row)

print("\nChecking vaccinations table:")
vaccinations = check_table("vaccinations")
for row in vaccinations:
    print(row)
