import axios from "axios";

export const fetchEducationLevelList = async () => {
  try {
    const response = await axios.get("/api/v1/educationLevelList");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchSalaryLevelList = async () => {
  try {
    const response = await axios.get("/api/v1/salaryLevelList");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
