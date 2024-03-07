import axios from 'axios';
import Toast from 'react-native-toast-message';
import { useEffect } from 'react';

const apibase = () => 'https://parallelum.com.br/fipe/api/v1';

const api = axios.create({
  baseURL: apibase(),
});

interface Props {
  children: any;
}

const AxiosInterceptor = ({ children }: Props) => {


  useEffect(() => {
    api.interceptors.request.use(
      async function (config: { method: string; headers: any; }) {
        if (config.method === 'post') {
          config.headers = {
            ...config.headers,
            'Content-Type': 'application/json',
          };
        }
        return config;
      },
      function (error: any) {
        return Promise.reject(error);
      },
    );

    api.interceptors.response.use(
      function (config: any) {
        return config;
      },
      function (error: { response: { status: number; } | undefined; }) {
        if (error.response?.status === 403) {
          Toast.show({
            type: 'error',
            text2: 'Você não tem permissão para acessar este recurso.',
            autoHide: true,
            visibilityTime: 15000,
            position: 'top',
          });
        }
        if (error.response?.status === 405) {
          Toast.show({
            type: 'error',
            text2: 'Você não tem permissão para acessar este recurso.',
            autoHide: true,
            visibilityTime: 15000,
            position: 'top',
          });
        }
        if (error.response?.status && error.response?.status >= 500) {
          Toast.show({
            type: 'error',
            text2: 'Serviço indisponível no momento, tente mais tarde!',
            autoHide: true,
            visibilityTime: 15000,
            position: 'top',
          });
        }
        if (error.response === undefined) {
          Toast.show({
            type: 'error',
            text1: 'Erro',
            text2: 'Serviço indisponível no momento, tente mais tarde!',
            autoHide: true,
            visibilityTime: 15000,
            position: 'top',
          });
        }
        return Promise.reject(error);
      },
    );
  }, []);
  return children;
};
export default api;

export { AxiosInterceptor };
