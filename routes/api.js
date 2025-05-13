const express = require('express');
const router = express.Router();
const pool = require('../config/database');

// Get monthly appointments
router.get('/appointments/monthly', async (req, res) => {
    try {
        const [rows] = await pool.query(`
            SELECT DATE_FORMAT(date, '%Y-%m') as month, COUNT(*) as count
            FROM appointments
            GROUP BY DATE_FORMAT(date, '%Y-%m')
            ORDER BY month
        `);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get recent appointments (last 5 days)
router.get('/appointments/recent', async (req, res) => {
    try {
        const [rows] = await pool.query(`
            SELECT 
                a.*,
                p.name as patient_name,
                DATE_FORMAT(a.date, '%Y-%m-%d %H:%i') as formatted_date
            FROM appointments a
            JOIN patients p ON a.patient_id = p.patient_id
            WHERE a.date >= DATE_SUB(CURDATE(), INTERVAL 5 DAY)
            ORDER BY a.date DESC
        `);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get treatments by type
router.get('/treatments/type', async (req, res) => {
    try {
        const [rows] = await pool.query(`
            SELECT type, COUNT(*) as count
            FROM treatments
            GROUP BY type
        `);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get payment status breakdown
router.get('/payments/status', async (req, res) => {
    try {
        const [rows] = await pool.query(`
            SELECT 
                CASE 
                    WHEN amount = 0 THEN 'Unpaid'
                    WHEN amount < t.cost THEN 'Partial'
                    ELSE 'Paid'
                END as status,
                COUNT(*) as count
            FROM payments p
            JOIN treatments t ON p.appointment_id = t.appointment_id
            GROUP BY status
        `);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get patient age distribution
router.get('/patients/age-distribution', async (req, res) => {
    try {
        const [rows] = await pool.query(`
            SELECT 
                CASE 
                    WHEN age < 18 THEN 'Under 18'
                    WHEN age BETWEEN 18 AND 30 THEN '18-30'
                    WHEN age BETWEEN 31 AND 50 THEN '31-50'
                    ELSE 'Over 50'
                END as age_group,
                COUNT(*) as count
            FROM patients
            GROUP BY age_group
        `);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get today's appointments
router.get('/appointments/today', async (req, res) => {
    try {
        const [rows] = await pool.query(`
            SELECT a.*, p.name as patient_name
            FROM appointments a
            JOIN patients p ON a.patient_id = p.patient_id
            WHERE DATE(a.date) = CURDATE()
        `);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get treatment costs
router.get('/treatments/costs', async (req, res) => {
    try {
        const [rows] = await pool.query(`
            SELECT type, AVG(cost) as average_cost
            FROM treatments
            GROUP BY type
        `);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get top patients
router.get('/patients/top', async (req, res) => {
    try {
        const [rows] = await pool.query(`
            SELECT p.name, COUNT(a.appointment_id) as appointment_count
            FROM patients p
            JOIN appointments a ON p.patient_id = a.patient_id
            GROUP BY p.patient_id
            ORDER BY appointment_count DESC
            LIMIT 5
        `);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router; 