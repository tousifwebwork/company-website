import axios from "axios";

const BASE_URL = "http://localhost:3000/api";

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