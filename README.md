# Dental System Dashboard

## Overview
This project is a web-based dashboard for a Dental System. It visualizes meaningful data using Chart.js on the frontend, powered by a Node.js backend with MySQL as the data source. The dashboard displays various metrics such as appointment trends, treatment types, payment statuses, and patient demographics.

## Dataset
The dashboard uses data from our Dental System database, which includes tables for patients, appointments, treatments, and payments.

## Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- MySQL (v8 or higher)
- npm or yarn

### Steps to Run
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd dental-system-dashboard
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure the database:
   - Create a MySQL database named `dental_system`
   - Update the database connection settings in `config/database.js`
   - Run the seed script to populate sample data:
     ```bash
     npm run seed
     ```
4. Start the backend server:
   ```bash
   npm start
   ```
5. Open the frontend in your browser:
   - Navigate to `http://localhost:3000`

## Dependencies
- **Backend:**
  - Express
  - mysql2
  - cors
  - dotenv
- **Frontend:**
  - Chart.js
  - Bootstrap
  - Axios

## API Documentation
The API provides endpoints to fetch data for the dashboard charts. For detailed documentation, see the `api-docs.md` file.

## ERD Diagram
An Entity Relationship Diagram (ERD) is included in the `docs` folder.

## License
MIT