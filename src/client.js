import axios from "axios";

const API_BASE = "http://localhost:5000";

export const AttackTarget = async (target) => {
    console.log(API_BASE + `/attack_target?target=${target}`)
    const response = await axios.get(API_BASE + `/attack_target?target=${target}`);
    console.log(response);
    return response.data;
}

export const getAlertReports = async () => {
    const response = await axios.get(API_BASE + `/get_alerts`);
    console.log(response);
    return response.data;
}

{/*
export const createModule = async (courseId:any, module:any) => {
    const response = await axios.post(
      `${COURSES_API}/${courseId}/modules`,
      module isko rename to .js
    );
    return response.data;
}; */}

  
  