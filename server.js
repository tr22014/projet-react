const express = require('express');
const app = express();
app.use(express.json());

const clientRoutes = require('./route/clientRoutes'); 
const reservationRoutes = require('./route/reservationRoutes');
const tableRoutes = require('./route/tableRoutes');

app.use('/api/reservations', reservationRoutes);
app.use('/api/tables', tableRoutes);
app.use('/api/clients', clientRoutes);

app.listen(3000, () => {
    console.log(`Server running on http://localhost:3000`);
});
