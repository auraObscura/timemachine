import apiHelpers from "./apiHelpers";
import axios from "axios";

const TimeMachineApi = {};
const TOKEN_BASE = "http://localhost:8000/dj-rest-auth";
const BASE_URL = "http://localhost:8000/api";

// auth
TimeMachineApi.login = async (loginData) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(`${TOKEN_BASE}/login/`, loginData)
  );
};

TimeMachineApi.logout = async () => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(`${TOKEN_BASE}/logout/`)
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
    axios.get(`${BASE_URL}/avatars/`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
      },
    })
  );
};

TimeMachineApi.getUserConversations = async () => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.get(`${BASE_URL}/conversations/`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
      },
    })
  );
};

TimeMachineApi.getConversationLines = async (id) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.get(`${BASE_URL}/conversations/${id}/`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
      },
    })
  );
};

TimeMachineApi.setFavoriteConvo = async (id) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.patch(
      `${BASE_URL}/conversations/${id}/`,
      {
        is_favorite: { is_favorite: true },
      },
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
        },
      }
    )
  );
};

TimeMachineApi.newConversation = async (avatarId) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(
      `${BASE_URL}/conversations/`,
      { avatar: { id: avatarId } },
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
        },
      }
    )
  );
};

TimeMachineApi.deleteConversation = async (convoId) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.delete(`${BASE_URL}/conversations/${convoId}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
      },
    })
  );
};

export default TimeMachineApi;
