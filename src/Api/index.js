import axios from "axios"

const baseUrl = 'http://localhost:4000'
const baseWhatsappUrl = 'http://localhost:50000'

export const api = axios.create({
    baseURL: baseUrl,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
});

export const WhatsappApi = axios.create({
    baseURL: baseWhatsappUrl,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
});