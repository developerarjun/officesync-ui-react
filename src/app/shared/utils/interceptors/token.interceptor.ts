import Axios from 'axios';
import setAxiosHeader from './cache.interceptor';
import { environment } from '../../../../environments/environment';
import { ResponseStatus } from '../enum/ResponseStatus';
import { toast } from '../../components/alert';

const axiosInstance = Axios.create({
  baseURL: environment.apiUrl
});

axiosInstance.interceptors.request.use(
  async (config) => setAxiosHeader(config),
  (error) => {
    Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => Promise.resolve(response.data),
  async (error) => {
    handleAuthError(error);
    // if (error.response && error.response.status === 401) {
    // //   if (!isRefreshing) {
    // //     isRefreshing = true;
    // //     try {
    // //       const refreshToken = getRefreshToken();
    // //       if (refreshToken) {
    // //         await Axios({
    // //           method: "POST",
    // //           url: `api/v1/auth/refreshtoken`,
    // //           headers: {
    // //             "Content-Type": "application/json",
    // //           },
    // //           data: {
    // //             refreshToken: refreshToken,
    // //           },
    // //         })
    // //           .then(async (response) => {
    // //             localStorage.setItem("token", response?.data?.token);
    // //             localStorage.setItem(
    // //               "refreshToken",
    // //               response?.data?.refreshToken
    // //             );
    // //             return axiosInstance(originalRequest);
    // //           })
    // //           .catch((errorRefresh) => {
    // //             console.log(errorRefresh);
    // //             localStorage.clear();
    // //           });
    // //         // Repeat all miss request by 401
    // //         refreshAndRetryQueue.forEach(({ config, resolve, reject }) => {
    // //           axiosInstance(config)
    // //             .then((response) => resolve(response))
    // //             .catch((err) => reject(err));
    // //         });
    // //         refreshAndRetryQueue.length = 0;
    // //       } else {
    // //         localStorage.clear();
    // //         window.location.href = "/";
    // //         return Promise.reject(error);
    // //       }
    // //     } catch (refreshError) {
    // //       refreshAndRetryQueue.length = 0;
    // //       localStorage.clear();
    // //     } finally {
    // //       isRefreshing = false;
    // //     }
    // //   }
    //   return new Promise<void>((resolve, reject) => {
    //     refreshAndRetryQueue.push({ config: originalRequest, resolve, reject });
    //   });
    // }
    return Promise.reject(error);
  }
);

const handleAuthError = (err: any) => {
  switch (err.response?.status) {
    case ResponseStatus.BadRequest:
      break;
    default:
      toast.error('Something went wrong!', 'Error');
  }
  console.log(err);
};

export default axiosInstance;
