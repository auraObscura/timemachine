import apiHelpers from "./apiHelpers";
import axios from "axios";
import Cookie from "js-cookie";
import { useState } from "react";

const TimeMachineApi = {};
const TOKEN_BASE = "http://localhost:8000/dj-rest-auth";
const BASE_URL = "http://localhost:8000/api";

// auth
TimeMachineApi.login = async (loginData) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(`${TOKEN_BASE}/login/`, loginData, apiHelpers.getCsrfConfig())
  );
};

TimeMachineApi.logout = async () => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(`${TOKEN_BASE}/logout/`, apiHelpers.getCsrfConfig())
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
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
        },
      },
      apiHelpers.getCsrfConfig()
    )
  );
};

TimeMachineApi.getUserConversations = async () => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.get(
      `${BASE_URL}/conversations/`,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
        },
      },
      apiHelpers.getCsrfConfig()
    )
  );
};

TimeMachineApi.getConversationLines = async () => {
  return await apiHelpers.tryCatchFetch(() => axios.get(`${BASE_URL}/lines/`));
};

TimeMachineApi.newConversation = async (avatarId) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(
      `${BASE_URL}/conversations/`,
      { avatar: { id: avatarId } },
      apiHelpers.getCsrfConfig()
    )
  );
};

TimeMachineApi.deleteConversation = async (convoId) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.delete(
      `${BASE_URL}/conversations/${convoId}`,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
        },
      },
      apiHelpers.getCsrfConfig()
    )
  );
};

export default TimeMachineApi;
