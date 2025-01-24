import { codigoUID } from "../constants";
import { UserType } from "../hooks/useAuth";
import { api } from "../utils/api";

interface AuthServiceTypes {
  login: (
    username: string,
    password: string,
    dynamicRoutePrefix: string
  ) => Promise<UserType>;
}
class AuthService implements AuthServiceTypes {
  login = async (
    username: string,
    password: string,
    dynamicRoutePrefix: string
  ) => {
    const stringConexao = `${username.toLowerCase()}:${password}:${codigoUID}`;
    const dadosBase64 = btoa(stringConexao);

    const res = await api(`${dynamicRoutePrefix}/util/dadosLogin`, {
      headers: { Authorization: "Basic " + dadosBase64 },
    });
    return res.data[0];
  };
}

export default new AuthService();
