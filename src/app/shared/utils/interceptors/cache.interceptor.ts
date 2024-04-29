import { AxiosHeaders, InternalAxiosRequestConfig } from "axios";
import { getToken } from "./get-token";

const setAxiosHeader = (
  config: InternalAxiosRequestConfig<unknown>
): InternalAxiosRequestConfig<unknown> => {
  const token = getToken();
  if (token)
    (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`);
  (config.headers as AxiosHeaders).set("client-url", window.location.origin);
  return config;
};

export default setAxiosHeader;