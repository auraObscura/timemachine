import apiHelpers from "./apiHelpers";
import axios from "axios";

const TimeMachineApi = {};
const BASE_URL = "http://localhost:8000/api";

TimeMachineApi.login = async (loginData) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(`${BASE_URL}/login/`, loginData, apiHelpers.getCsrfConfig())
  );
};

TimeMachineApi.register = async (registerData) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(`${BASE_URL}/users/`, registerData)
  );
};

// backend
TimeMachineApi.getAllAvatars = async () => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.get(`${BASE_URL}/avatars/`, apiHelpers.getCsrfConfig())
  );
};

TimeMachineApi.getUserConversations = async () => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.get(`${BASE_URL}/conversations/`, apiHelpers.getCsrfConfig())
  );
};

export default TimeMachineApi;
