import axios from "axios";

const api = axios.create({
    // baseURL:"http://localhost:4000/api/",
    baseURL:"https://expense-tracker-app-mern-production.up.railway.app/api",
    withCredentials:true
});

export default api;