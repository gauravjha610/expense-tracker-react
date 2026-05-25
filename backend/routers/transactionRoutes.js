import express from 'express'
import { getTransactions,addTransaction,deleteTransaction } from '../controllers/transactionControllers.js';
import verifyToken from '../middlewares/verifyToken.js';


const router = express.Router()

router.get('/',verifyToken,getTransactions);
router.post('/',verifyToken,addTransaction)
router.delete('/:id',verifyToken,deleteTransaction)


export default router