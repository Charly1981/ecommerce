import { BASE_PATH } from "../utils/constants";
import { authFetch } from "../utils/fetch";

export async function getOrdersApi(idUser, logout) {
  try {
    console.log(idUser);
    const url = `${BASE_PATH}/orders?_sort=createdAt:desc`;
    const result = authFetch(url, null, logout);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
