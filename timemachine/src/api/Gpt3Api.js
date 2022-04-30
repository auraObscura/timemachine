import axios from "axios";
import apiHelpers from "./apiHelpers";

const Gpt3Api = {};
const URL = "http://localhost:8000/api/generate/";

Gpt3Api.generate = async (generateData) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(URL, generateData, apiHelpers.getCsrfConfig())
  );
};

export default Gpt3Api;
