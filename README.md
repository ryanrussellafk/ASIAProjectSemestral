# Dental System Dashboard
members: Ryan Russell R. Robledo
         Jasper James R. Jayme
         Rommel Rabino
section: NT-3201

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

3. Start the backend server:
   ```bash
   npm start
   ```
4. Open the frontend in your browser:
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