import mongoose from "mongoose";
import transactionModel from "../models/transactionModel.js";
import { validateTransaction } from "../utils/validateTransaction.js";

export const getTransactions= async(req,res)=>{
    try {
        const transactions = await transactionModel.find({userId:req.user.id}).sort({createdAt: -1});
        return res.status(200).json({
            success:true,
            message:"transaction fetched successfully",
            transactions:transactions
        });
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Server error"
        });
    }
}
export const addTransaction = async(req,res)=>{
    try {
        const {type,description,amount} = req.body;
        const result= validateTransaction({type,description,amount});
        if(!result.success){
            return res.status(400).json({
                success:false,
                message:result.message
            });
        } 
        const newTransaction = await transactionModel.create({
            userId:req.user.id,
            type:type,
            description:description,
            amount:amount
        });
        return res.status(201).json({
            success:true,
            message:"transaction added successfully",
            transaction:newTransaction
        });
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Server error"
        });
    }
}
export const deleteTransaction= async(req,res)=>{
    try {
        const id = req.params.id;
        const transaction = await transactionModel.findOneAndDelete({userId:req.user.id,_id:id});
        if (!transaction) {
            return res.status(404).json({
                success: false,
                message: "Transaction not found"
            });
        }
        return res.status(200).json({
            success:true,
            message:"transaction deleted successfully",
            transaction:transaction
        });
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Server error"
        });
    }
}