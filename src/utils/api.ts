import axios from "axios";
import { useInitialSettings } from "../hooks/useInitialSettings";

const isProduction = process.env.NODE_ENV === "production";

export const api = axios.create({
  baseURL: "https://",
});

api.interceptors.request.use(
  async (config) => {
    // const { data } = useInitialSettings.getState();
    // console.log("🚀  data na apiiiiii", data);
    // Loga a URL completa da rota chamada
    console.log(`Requisição para a rota: ${config.baseURL}${config.url}`);

    // Verifica se 'method' está definido antes de acessá-lo
    if (config.method) {
      console.log(`Método HTTP: ${config.method.toUpperCase()}`);
    }

    // Loga os cabeçalhos da requisição
    console.log("Cabeçalhos:", config.headers);

    // Loga os parâmetros de consulta (query params) se existirem
    if (config.params) {
      console.log(
        "Parâmetros de consulta:",
        JSON.stringify(config.params, null, 2)
      );
    }

    // Loga o corpo da requisição (para métodos como POST, PUT, etc.)
    if (config.data) {
      console.log("Dados enviados:", JSON.stringify(config.data, null, 2));
    }

    // Retorna a configuração para prosseguir com a requisição
    return config;
  },
  (error) => {
    // Lida com erros de requisição
    return Promise.reject(error);
  }
);
