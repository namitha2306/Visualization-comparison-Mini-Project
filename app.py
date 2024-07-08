from flask import Flask, jsonify, render_template, send_from_directory
import sqlite3

app = Flask(__name__)

# Function to query the database
def query_db(query, args=(), one=False):
    conn = sqlite3.connect('covid19.db')
    conn.row_factory = sqlite3.Row
    cur = conn.cursor()
    cur.execute(query, args)
    rv = cur.fetchall()
    conn.close()
    return (rv[0] if rv else None) if one else rv



# Route to fetch COVID data
@app.route('/api/get_covid_data', methods=['GET'])
def fetch_covid_data():
    results = query_db("SELECT * FROM covid_data")
    covid_data = [dict(row) for row in results]
    return jsonify(covid_data)

# Route to fetch vaccination data
@app.route('/api/get_vaccinations', methods=['GET'])
def fetch_vaccination_data():
    results = query_db("SELECT * FROM vaccinations")
    vaccinations = [dict(row) for row in results]
    return jsonify(vaccinations)

# Route to serve the Web Data Connector HTML
@app.route('/wdc')
def wdc():
    return render_template('wdc.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
