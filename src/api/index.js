import axios from "axios";

export const api = axios.create({
    baseURL: "https://neotour-production-0f7a.up.railway.app/",
})
