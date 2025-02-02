import axios from "axios"

const baseUrl = 'http://localhost:4000'

export const api = axios.create({
    baseURL: baseUrl,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
});