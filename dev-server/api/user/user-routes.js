import express from 'express';
const router = express.Router();

router.post('/user',(req,res)=> {
    res.send('get.user - get all users');
});

export default router;