import axios from "axios";

const BASE_URL = import.meta.env.DEV ? "http://localhost:3000/api" : "https://company-website-u7x3.onrender.com/api";  

// GET all openings
export const getOpenings = () => {
  return axios.get(`${BASE_URL}/openings`);
};

// POST application (form submit)
export const createApplication = (data) => {
  return axios.post(`${BASE_URL}/apply`, data, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
};


export const contact = (data) => {
  return axios.post(`${BASE_URL}/contact`, data);
};