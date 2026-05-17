import express from 'express'
import { getTransactions,addTransaction,deleteTransaction } from '../controllers/transactionControllers.js';


const router = express.Router()

router.get('/',getTransactions);

router.post('/',addTransaction)
router.delete('/:id',deleteTransaction)


export default router