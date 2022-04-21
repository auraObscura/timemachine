import Cookie from "js-cookie";

const apiHelpers = {};

//added for auth
apiHelpers.getCsrfConfig = () => {
  return {
    withCredentials: true,
    headers: {
      "X-CSRFToken": Cookie.get("csrftoken"),
    },
  };
};

apiHelpers.tryCatchFetch = async (axiosCall) => {
  try {
    const response = await axiosCall();
    console.log("RESPONSE:", response);
    console.log("RESPONSE DATA:", response.data);
    return response.data ? response.data : { message: "success" };
  } catch (e) {
    console.error("-- tryCatchFetch ERROR:", e.response ? e.response.data : e);
  }
};

export default apiHelpers;
