import apiHelpers from "./apiHelpers";
import axios from "axios";

const TimeMachineApi = {};
const BASE_URL = "http://localhost:8000/api";

TimeMachineApi.login = async (loginData) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(`${BASE_URL}/login/`, loginData, apiHelpers.getCsrfConfig())
  );
};

// backend
TimeMachineApi.getAvatars = async () => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.get(`${BASE_URL}/avatars/`)
  );
};

export default TimeMachineApi;
