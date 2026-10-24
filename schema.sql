-- ============================================================
--  DivyaDarshan - Temple Darshan Ticket Booking Portal
--  MySQL 5.7+ / 8.x schema
--
--  Run with:   mysql -u root -p < database/schema.sql
--  or:         python backend/init_db.py
--
--  Note: the admin account is NOT created here. The Flask app
--  creates it on first start (using ADMIN_USERNAME / ADMIN_PASSWORD
--  from backend/.env) so the password is always properly hashed.
-- ============================================================

CREATE DATABASE IF NOT EXISTS temple_booking
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE temple_booking;

-- ---------- USERS ----------
CREATE TABLE IF NOT EXISTS users (
  id            INT UNSIGNED  NOT NULL AUTO_INCREMENT,
  username      VARCHAR(30)   NOT NULL,
  password_hash VARCHAR(255)  NOT NULL,
  role          ENUM('devotee','admin') NOT NULL DEFAULT 'devotee',
  created_at    TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_users_username (username)
) ENGINE=InnoDB;

-- ---------- TEMPLES ----------
CREATE TABLE IF NOT EXISTS temples (
  id          VARCHAR(40)  NOT NULL,
  name        VARCHAR(150) NOT NULL,
  deity       VARCHAR(150) NOT NULL,
  location    VARCHAR(150) NOT NULL,
  description TEXT,
  map_url     VARCHAR(255),
  PRIMARY KEY (id)
) ENGINE=InnoDB;

-- ---------- BOOKINGS (one row = one darshan ticket / pass) ----------
CREATE TABLE IF NOT EXISTS bookings (
  id              INT UNSIGNED NOT NULL AUTO_INCREMENT,
  ticket_id       VARCHAR(20)  NOT NULL,                 -- e.g. APTS-849201
  user_id         INT UNSIGNED NOT NULL,
  temple_id       VARCHAR(40)  NOT NULL,
  devotee_name    VARCHAR(100) NOT NULL,
  phone           VARCHAR(15)  NOT NULL,
  darshan_date    DATE         NOT NULL,
  slot            VARCHAR(50)  NOT NULL,
  men_qty         TINYINT UNSIGNED NOT NULL DEFAULT 0,   -- Rs 300 each
  women_qty       TINYINT UNSIGNED NOT NULL DEFAULT 0,   -- Rs 250 each
  handicapped_qty TINYINT UNSIGNED NOT NULL DEFAULT 0,   -- Rs 150 each
  wheelchair      TINYINT(1)   NOT NULL DEFAULT 0,
  payment_method  VARCHAR(20)  NOT NULL,
  total_amount    INT UNSIGNED NOT NULL,
  status          ENUM('CONFIRMED','CANCELLED') NOT NULL DEFAULT 'CONFIRMED',
  created_at      TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_bookings_ticket (ticket_id),
  KEY idx_bookings_user (user_id),
  KEY idx_bookings_temple_date (temple_id, darshan_date),
  CONSTRAINT fk_bookings_user   FOREIGN KEY (user_id)   REFERENCES users(id)   ON DELETE CASCADE,
  CONSTRAINT fk_bookings_temple FOREIGN KEY (temple_id) REFERENCES temples(id)
) ENGINE=InnoDB;

-- ---------- SEED: 10 TEMPLES ----------
INSERT IGNORE INTO temples (id, name, deity, location, description, map_url) VALUES
  ('vadapalli', 'Vadapalli Sri Venkateswara Swamy Temple', 'Lord Venkateswara Swamy (Seven Hills Lord)', 'Vadapalli, East Godavari District, AP', 'Famous as "Akhanda Swamy Kshetram", known for performing 7 Saturdays pradakshinas for fulfilling divine wishes.', 'https://maps.google.com/?q=Vadapalli+Venkateswara+Swamy+Temple'),
  ('tirupati', 'Tirumala Tirupati Devasthanam', 'Lord Sri Venkateswara Swamy', 'Tirumala, Tirupati District, AP', 'The world-renowned sacred shrine of Kaliyuga Vaikuntasa, situated atop Seven Hills in Tirumala.', 'https://maps.google.com/?q=Tirumala+Tirupati+Devasthanams'),
  ('annavaram', 'Annavaram Satyanarayana Swamy Temple', 'Sri Veera Venkata Satyanarayana Swamy', 'Annavaram, Kakinada District, AP', 'Second most sacred pilgrimage site after Tirupati, situated on Ratnagiri hill along river Pampa.', 'https://maps.google.com/?q=Annavaram+Satyanarayana+Swamy+Temple'),
  ('srisailam', 'Srisailam Sri Mallikarjuna Swamy Devasthanam', 'Lord Mallikarjuna Swamy & Goddess Bhramaramba', 'Srisailam, Nandyal District, AP', 'One of the 12 sacred Jyotirlingas and 18 Maha Shakti Peethas in India situated in Nallamala Hills.', 'https://maps.google.com/?q=Srisailam+Mallikarjuna+Swamy+Temple'),
  ('kanakadurga', 'Vijayawada Sri Kanaka Durga Temple', 'Goddess Kanaka Durga Swamy', 'Indrakeeladri, Vijayawada, AP', 'Sacred abode atop Indrakeeladri hill overlooking the Krishna river, revered during Navratri festival.', 'https://maps.google.com/?q=Kanaka+Durga+Temple+Vijayawada'),
  ('simhachalam', 'Simhachalam Sri Varaha Narasimha Temple', 'Lord Varaha Lakshmi Narasimha Swamy', 'Simhachalam, Visakhapatnam, AP', 'Ancient 11th-century temple featuring Kalinga architectural brilliance, deity covered in sandalwood paste.', 'https://maps.google.com/?q=Simhachalam+Temple'),
  ('dwarakatirumala', 'Dwaraka Tirumala Temple', 'Lord Sri Venkateswara Swamy (Chinnoji)', 'Dwaraka Tirumala, Eluru District, AP', 'Revered as "Chinna Tirupati", self-manifested deity discovered by Saint Dwaraka in ancient times.', 'https://maps.google.com/?q=Dwaraka+Tirumala+Temple'),
  ('srikalahasti', 'Srikalahasti Kalahasteeswara Temple', 'Lord Kalahasteeswara (Vayu Lingam)', 'Srikalahasti, Tirupati District, AP', 'Pancha Bhoota Stalam representing the Element of Air (Vayu), famous for Rahu Ketu Sarpa Dosha Nivarana.', 'https://maps.google.com/?q=Srikalahasti+Temple'),
  ('ahobilam', 'Ahobilam Nav Narasimha Kshetram', 'Lord Sri Ahobila Narasimha Swamy', 'Ahobilam, Nandyal District, AP', 'The sole sacred site where all 9 forms (Nav Narasimha) are worshipped across Upper and Lower Ahobilam.', 'https://maps.google.com/?q=Ahobilam+Narasimha+Swamy+Temple'),
  ('yadagirigutta', 'Yadagirigutta Sri Lakshmi Narasimha Swamy', 'Lord Sri Lakshmi Narasimha Swamy', 'Yadadri Bhuvanagiri District, Telangana', 'Magnificent cave temple of Telangana renovated with magnificent Krishna Shila stone architecture.', 'https://maps.google.com/?q=Yadagirigutta+Temple');
