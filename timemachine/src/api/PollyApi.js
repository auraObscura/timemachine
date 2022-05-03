import axios from "axios";
import apiHelpers from "./apiHelpers";

const PollyApi = {};
const BASE_URL = "http://localhost:8000/api";

PollyApi.synthesize = async (synthesizeData) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(`${BASE_URL}/speech/`, synthesizeData)
  );
};

export default PollyApi;
