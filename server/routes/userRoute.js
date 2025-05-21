import express from 'express';

const router = express.Router();

router.get("/login", async(req, res) => {
    try {
        const {email, password} = req.body;
        console.log(email, password);
    } catch(err){
        console.error(`Error: ${err}`);
        res.status(500).json({ error: 'Internal server error'});
    }
})