import mysql from 'mysql2/promise';

async function setupDatabase() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
    multipleStatements: true,
  });

  console.log('Connected to MySQL server...');

  const sql = `
    DROP DATABASE IF EXISTS oosd_webappdev;
    CREATE DATABASE oosd_webappdev;
    USE oosd_webappdev;

    CREATE TABLE students (
      id                INT AUTO_INCREMENT PRIMARY KEY,
      first_name        VARCHAR(100) NOT NULL,
      last_name         VARCHAR(100) NOT NULL,
      email             VARCHAR(255) NOT NULL UNIQUE,
      phone             VARCHAR(30),
      street_address    VARCHAR(255) NOT NULL,
      city              VARCHAR(100) NOT NULL,
      province_state    VARCHAR(100) NOT NULL,
      country           VARCHAR(100) NOT NULL,
      postal_code       VARCHAR(12)  NOT NULL,
      program           VARCHAR(120) NOT NULL,
      year              VARCHAR(20)  NOT NULL,
      photo_url         VARCHAR(255),
      created_at        TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB;

    INSERT INTO students
    (first_name, last_name, email, phone, street_address, city, province_state, country, postal_code, program, year, photo_url)
    VALUES
    ('Alvin',      'Zhao',     'alvin.zhao@sait.ca',       '403-555-0101', '123 7 Ave SW',          'Calgary',    'Alberta',        'Canada', 'T2P 0W4', 'Software Development', 'Y2', '/student1.jpeg'),
    ('Professor',     'Jolanta',    'professor.jolanta@sait.ca',     '587-555-0102', '456 King St W',         'Toronto',    'Ontario',        'Canada', 'M5V 1L7', 'Computer Science',     'Y1', '/student2.jpeg'),
    ('Andrew',    'Maje',    'andrew.maje@sait.ca',    '604-555-0103', '789 Granville St',      'Vancouver',  'British Columbia','Canada', 'V6Z 1E6', 'Data Analytics',       'Y3', '/student3.jpeg'),
    ('Ling-Chun',     'Hsieh',    'ling.hsieh@sait.ca',     '514-555-0104', '12 Rue Sainte-Catherine','Montréal',  'Québec',         'Canada', 'H3B 1A7', 'Cybersecurity',        'Y2', '/student4.jpeg'),
    ('Amisha',    'Jyoti',      'amisha.jyoti@sait.ca',      '780-555-0105', '85 Jasper Ave',         'Edmonton',   'Alberta',        'Canada', 'T5J 1S8', 'UX Design',            'Y1', '/student5.jpeg'),
    ('Sidney',    'Hood',    'sidney.hood@sait.ca',    '613-555-0106', '99 Wellington St',      'Ottawa',     'Ontario',        'Canada', 'K1A 0A9', 'AI & ML',              'Y4', '/student6.jpeg'),
    ('Kash', 'Monnanda',      'kash.monnanda@sait.ca',   '431-555-0107', '200 Portage Ave',       'Winnipeg',   'Manitoba',       'Canada', 'R3C 0B3', 'Cloud Computing',      'Y2', '/student7.jpeg'),
    ('Khine',  'Oo Mon',     'khineoo.mon@sait.ca',   '902-555-0108', '1501 Barrington St',    'Halifax',    'Nova Scotia',    'Canada', 'B3J 1Z6', 'Web Development',      'Y3', '/student8.jpeg');
  `;

  await connection.query(sql);
  console.log('Database re-seeded with custom student photos successfully!');
  await connection.end();
}

setupDatabase().catch((err) => {
  console.error('Setup failed:', err.message);
});