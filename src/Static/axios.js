import axios from "axios";
import { base_url } from "./static";

const instance = axios.create({
    baseURL:base_url,
  });

  export default instance;