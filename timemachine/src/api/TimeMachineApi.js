import apiHelpers from "./apiHelpers";
import axios from "axios";

const TimeMachineApi = {};
const TOKEN_BASE = "http://localhost:8000/dj-rest-auth";
const BASE_URL = "http://localhost:8000/api";

// auth
TimeMachineApi.login = async (loginData) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(`${TOKEN_BASE}/login/`, loginData, apiHelpers.getCsrfConfig())
  );
};

TimeMachineApi.getUserToken = async () => {};

TimeMachineApi.logout = async () => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(`${TOKEN_BASE}/logout/`, null, apiHelpers.getCsrfConfig())
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
    axios.get(`${BASE_URL}/avatars/`, null, apiHelpers.getCsrfConfig())
  );
};

TimeMachineApi.getUserConversations = async () => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.get(`${BASE_URL}/conversations/`, null, apiHelpers.getCsrfConfig())
  );
};

TimeMachineApi.getConversationLines = async () => {
  return await apiHelpers.tryCatchFetch(() => axios.get(`${BASE_URL}/lines/`));
};

TimeMachineApi.newConversation = async () => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(`${BASE_URL}/conversations/`, null, apiHelpers.getCsrfConfig())
  );
};

export default TimeMachineApi;
