import express from 'express';
import {fetch,create,update,deleteuser} from '../Controller/userController.js';
const router =express.Router();
router.get('/fetch',fetch)
router.post('/create',create)
router.put('/update/:id',update)
router.put('/delete/:id',deleteuser)
export default router;


