import { getToken, hasExpiredtoken } from "../api/token";
import { TOKEN } from "./constants";

export async function authFetch(url, params, logout) {
  const token = getToken();

  if (!token) {
    //Usuario no logueado
    logout();
  } else {
    if (hasExpiredtoken(token)) {
      //Token Caducado
      logout();
    } else {
      const paramsTemp = {
        ...params,
        headers: {
          ...params?.headers,
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const response = await fetch(url, paramsTemp);
        const result = await response.json();
        return result;
      } catch (error) {
        console.log(error);
        return error;
      }
    }
  }
}
