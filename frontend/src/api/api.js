import axios from "axios";

const BASE_URL = "http://localhost:3000/api" || "https://company-website-u7x3.onrender.com";

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