import apiHelpers from "./apiHelpers";
import axios from "axios";
import Cookie from "js-cookie";

const TimeMachineApi = {};
const TOKEN_BASE = "http://localhost:8000/dj-rest-auth";
const BASE_URL = "http://localhost:8000/api";
let token = Cookie.get("sessionid");
let user = localStorage.getItem("user");
const userData = { id: user.pk };

// auth
TimeMachineApi.login = async (loginData) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(`${TOKEN_BASE}/login/`, loginData, apiHelpers.getCsrfConfig())
  );
};

TimeMachineApi.logout = async () => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(`${TOKEN_BASE}/logout/`, null, apiHelpers.getCsrfConfig())
  );
};

TimeMachineApi.register = async (registerData) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(`${TOKEN_BASE}/registration/`, registerData)
  );
};

// backend
TimeMachineApi.getAllAvatars = async () => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.get(
      `${BASE_URL}/avatars/`,
      // { headers: { Authorization: `Bearer ${token}` } },
      null,
      apiHelpers.getCsrfConfig()
    )
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

TimeMachineApi.newConversation = async (avatarId) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(
      `${BASE_URL}/conversations/`,
      { avatar: { id: avatarId }, lines: [] },
      apiHelpers.getCsrfConfig()
    )
  );
};

TimeMachineApi.deleteConversation = async (convoId) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.delete(
      `${BASE_URL}/conversations/${convoId}`,
      null,
      apiHelpers.getCsrfConfig()
    )
  );
};

export default TimeMachineApi;
