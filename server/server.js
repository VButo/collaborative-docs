import express from 'express';
import userRoute from '/routes/userRoute.js';

const app = express();

app.use("/api/users", userRoute);

app.listen(3000, ()=>console.log('Server running'));