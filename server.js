const express = require('express');
const cors = require('cors');
const path = require('path');
const apiRoutes = require('./routes/api');

const app = express();
const port = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.use('/api', apiRoutes);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});