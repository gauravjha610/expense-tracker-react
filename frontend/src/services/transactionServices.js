import api from "../api/axios";

export const getTransactionsAPI= async()=>{
    const response = await api.get('/transactions');

    return response.data;
}

export const addTransactionAPI= async(TransactionData)=>{
    const response = await api.post('/transactions',TransactionData);

    return response.data;
}

export const deleteTransactionAPI = async(id)=>{
    const response = await api.delete(`/transactions/${id}`);

    return response.data;
}