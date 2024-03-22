/* eslint-disable camelcase */

import axios from "axios";

export const fetchData = async ({
  companyName,
  educationLevel,
  salaryLevel
}) => {
  try {
    const response = await axios.get("/api/v1/jobs", {
      params: {
        company_name: companyName,
        education_level: educationLevel,
        salary_level: salaryLevel
      }
    });
    // 拿學歷跟薪水的資料
    const [educationLevelResponse, salaryLevelResponse] = await Promise.all([
      axios.get("/api/v1/educationLevelList"),
      axios.get("/api/v1/salaryLevelList")
    ]);

    // 對應資料
    const jobData = response.data.data;
    const fullJobData = jobData.map(job => {
      const educationLabel = educationLevelResponse.data.find(
        education => education.id === String(job.educationId)
      )?.label;

      const salaryLabel = salaryLevelResponse.data.find(
        salary => salary.id === String(job.salaryId)
      )?.label;

      return {
        ...job,
        educationLabel,
        salaryLabel
      };
    });
    return fullJobData;
  } catch (error) {
    console.error(error);
    return [];
  }
};
