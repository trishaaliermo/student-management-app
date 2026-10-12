# student-management-app
October 12, 2026 CPRG210 Assignment 2

This is a Student Management System Assignment in my CPRG210 Class. It is a full-stack web application built with Next.js (App Router), MySQL, and Tailwind CSS. This application displays a dynamic directory of student profiles, allows for new student registration with real-time weather data fetching, and manages persistent records in a MySQL database.

It features:
Student Directory: Displays student profiles in a responsive grid using custom high-contrast card components and dynamic profile photos.
New Student Registration: Interactive form to register new students with automated/manual weather data fetching based on location using the OpenWeatherMap API.
Database Integration: Relational database management using MySQL for data persistence.
Database Seeding: Automated setup script (setup-db.js) to re-create and populate the database schema with sample student records.
Modern UI/UX: Styled using Tailwind CSS with accessible contrast and custom layouts.

For the Tech:
Framework: Next.js 16+ (App Router)
Styling: Tailwind CSS
Database: MySQL
Database Driver: mysql2
External APIs: OpenWeatherMap API

Project Structure:
student-app/
├── app/                  # Next.js App Router pages and server actions
├── components/           # Reusable UI components (e.g., StudentCard)
├── public/               # Static assets
│   └── images/           # Student profile images (student1.jpeg - student8.jpeg)
├── setup-db.js           # MySQL database schema setup and seed script
└── .env.local            # Environment variables (DB credentials, API keys)

As to how you get started:
Prerequisites:
Node.js (v18+ recommended)
MySQL Server running locally or remotely

Env setup:
Create a .env.local file in the root of the project with the following environment variables:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_PORT=3306
NEXT_PUBLIC_WEATHER_API_KEY=your_openweather_api_key

Database setup:
To create the oosd_webappdev database, create the students table, and seed initial student records:
node --env-file=.env.local setup-db.js

Run the app:
npm run dev
Open http://localhost:3000 in your browser to view the application.

Ver control:
git add .
git commit -m "Update project documentation"
git push origin main

Thank you and have fun!