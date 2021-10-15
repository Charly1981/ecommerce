import { BASE_PATH } from "../utils/constants";
import { authFetch } from "../utils/fetch";

export async function createAddressApi(address, logout) {
  try {
    const url = `${BASE_PATH}/addresses`;
    const params = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(address),
    };
    const result = await authFetch(url, params, logout);
    return result ? result : null;
  } catch (error) {
    console.log(error);
    return null;
  }
}
