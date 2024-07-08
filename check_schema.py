import sqlite3

def get_table_schema(db_name, table_name):
    conn = sqlite3.connect(db_name)
    cursor = conn.cursor()
    cursor.execute(f"PRAGMA table_info({table_name});")
    schema = cursor.fetchall()
    conn.close()
    return schema

schema = get_table_schema('covid19.db', 'covid_data')
for column in schema:
    print(column)

# Output: (cid, name, type, notnull, dflt_value, pk)
# Example: (0, 'id', 'INTEGER', 1, None, 1)
