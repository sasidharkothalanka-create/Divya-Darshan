"""Initialize the DivyaDarshan SQLite database and seed the 10 temples."""
import os
import sqlite3

TEMPLE_ROWS = [
    ('vadapalli', 'Vadapalli Sri Venkateswara Swamy Temple', 'Lord Venkateswara Swamy (Seven Hills Lord)', 'Vadapalli, East Godavari District, AP', 'Famous as "Akhanda Swamy Kshetram", known for performing 7 Saturdays pradakshinas for fulfilling divine wishes.', 'https://maps.google.com/?q=Vadapalli+Venkateswara+Swamy+Temple'),
    ('tirupati', 'Tirumala Tirupati Devasthanam', 'Lord Sri Venkateswara Swamy', 'Tirumala, Tirupati District, AP', 'The world-renowned sacred shrine of Kaliyuga Vaikuntasa, situated atop Seven Hills in Tirumala.', 'https://maps.google.com/?q=Tirumala+Tirupati+Devasthanams'),
    ('annavaram', 'Annavaram Satyanarayana Swamy Temple', 'Sri Veera Venkata Satyanarayana Swamy', 'Annavaram, Kakinada District, AP', 'Second most sacred pilgrimage site after Tirupati, situated on Ratnagiri hill along river Pampa.', 'https://maps.google.com/?q=Annavaram+Satyanarayana+Swamy+Temple'),
    ('srisailam', 'Srisailam Sri Mallikarjuna Swamy Devasthanam', 'Lord Mallikarjuna Swamy & Goddess Bhramaramba', 'Srisailam, Nandyal District, AP', 'One of the 12 sacred Jyotirlingas and 18 Maha Shakti Peethas in India situated in Nallamala Hills.', 'https://maps.google.com/?q=Srisailam+Mallikarjuna+Swamy+Temple'),
    ('kanakadurga', 'Vijayawada Sri Kanaka Durga Temple', 'Goddess Kanaka Durga Swamy', 'Indrakeeladri, Vijayawada, AP', 'Sacred abode atop Indrakeeladri hill overlooking the Krishna river, revered during Navratri festival.', 'https://maps.google.com/?q=Kanaka+Durga+Temple+Vijayawada'),
    ('simhachalam', 'Simhachalam Sri Varaha Narasimha Temple', 'Lord Varaha Lakshmi Narasimha Swamy', 'Simhachalam, Visakhapatnam, AP', 'Ancient 11th-century temple featuring Kalinga architectural brilliance, deity covered in sandalwood paste.', 'https://maps.google.com/?q=Simhachalam+Temple'),
    ('dwarakatirumala', 'Dwaraka Tirumala Temple', 'Lord Sri Venkateswara Swamy (Chinnoji)', 'Dwaraka Tirumala, Eluru District, AP', 'Revered as "Chinna Tirupati", self-manifested deity discovered by Saint Dwaraka in ancient times.', 'https://maps.google.com/?q=Dwaraka+Tirumala+Temple'),
    ('srikalahasti', 'Srikalahasti Kalahasteeswara Temple', 'Lord Kalahasteeswara (Vayu Lingam)', 'Srikalahasti, Tirupati District, AP', 'Pancha Bhoota Stalam representing the Element of Air (Vayu), famous for Rahu Ketu Sarpa Dosha Nivarana.', 'https://maps.google.com/?q=Srikalahasti+Temple'),
    ('ahobilam', 'Ahobilam Nav Narasimha Kshetram', 'Lord Sri Ahobila Narasimha Swamy', 'Ahobilam, Nandyal District, AP', 'The sole sacred site where all 9 forms (Nav Narasimha) are worshipped across Upper and Lower Ahobilam.', 'https://maps.google.com/?q=Ahobilam+Narasimha+Swamy+Temple'),
    ('yadagirigutta', 'Yadagirigutta Sri Lakshmi Narasimha Swamy', 'Lord Sri Lakshmi Narasimha Swamy', 'Yadadri Bhuvanagiri District, Telangana', 'Magnificent cave temple of Telangana renovated with magnificent Krishna Shila stone architecture.', 'https://maps.google.com/?q=Yadagirigutta+Temple'),
]


def initialize_database(database_path=None):
    database_path = database_path or os.getenv(
        'DATABASE_PATH', os.path.join(os.path.dirname(os.path.abspath(__file__)), 'temple_booking.sqlite3')
    )
    os.makedirs(os.path.dirname(os.path.abspath(database_path)), exist_ok=True)
    conn = sqlite3.connect(database_path, timeout=30)
    try:
        conn.execute('PRAGMA foreign_keys = ON')
        conn.executescript("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL UNIQUE CHECK(length(username) <= 30),
            password_hash TEXT NOT NULL,
            role TEXT NOT NULL DEFAULT 'devotee' CHECK(role IN ('devotee', 'admin')),
            created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
        );
        CREATE TABLE IF NOT EXISTS temples (
            id TEXT PRIMARY KEY NOT NULL,
            name TEXT NOT NULL,
            deity TEXT NOT NULL,
            location TEXT NOT NULL,
            description TEXT,
            map_url TEXT
        );
        CREATE TABLE IF NOT EXISTS bookings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            ticket_id TEXT NOT NULL UNIQUE,
            user_id INTEGER NOT NULL,
            temple_id TEXT NOT NULL,
            devotee_name TEXT NOT NULL,
            phone TEXT NOT NULL,
            darshan_date TEXT NOT NULL,
            slot TEXT NOT NULL,
            men_qty INTEGER NOT NULL DEFAULT 0 CHECK(men_qty BETWEEN 0 AND 255),
            women_qty INTEGER NOT NULL DEFAULT 0 CHECK(women_qty BETWEEN 0 AND 255),
            handicapped_qty INTEGER NOT NULL DEFAULT 0 CHECK(handicapped_qty BETWEEN 0 AND 255),
            wheelchair INTEGER NOT NULL DEFAULT 0,
            payment_method TEXT NOT NULL,
            total_amount INTEGER NOT NULL CHECK(total_amount >= 0),
            status TEXT NOT NULL DEFAULT 'CONFIRMED' CHECK(status IN ('CONFIRMED', 'CANCELLED')),
            created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
            FOREIGN KEY(temple_id) REFERENCES temples(id)
        );
        CREATE INDEX IF NOT EXISTS idx_bookings_user ON bookings(user_id);
        CREATE INDEX IF NOT EXISTS idx_bookings_temple_date ON bookings(temple_id, darshan_date);
        """)
        conn.executemany('''INSERT OR IGNORE INTO temples
            (id, name, deity, location, description, map_url) VALUES (?, ?, ?, ?, ?, ?)''', TEMPLE_ROWS)
        conn.commit()
    finally:
        conn.close()


if __name__ == '__main__':
    initialize_database()
    print('SQLite database is ready.')
