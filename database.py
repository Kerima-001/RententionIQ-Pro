import sqlite3

connection = sqlite3.connect("retentioniq.db")

cursor = connection.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS customers(
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT,
email TEXT,
age INTEGER,
tenure INTEGER,
monthly_spend REAL,
support_tickets INTEGER,
satisfaction_score INTEGER,
churn INTEGER
)
""")

connection.commit()
connection.close()