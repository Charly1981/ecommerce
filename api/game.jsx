import { BASE_PATH } from "../utils/constants";

export async function getLastGamesApi(limit) {
  try {
    const limitItems = `?_limit=${limit}`;
    const shortItem = "_sort=createdAt:desc";
    const url = `${BASE_PATH}/games${limitItems}&${shortItem}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getGamesPlatformApi(platform, limit, start) {
  try {
    const limitItem = `_limit=${limit}`;
    const shortItems = `_sort=createdAt:desc`;
    const startItems = `_start=${start}`;
    const url = `${BASE_PATH}/games?platform.url=${platform}&${limitItem}&${shortItems}&${startItems}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getTotalGamesPlatformApi(platform) {
  try {
    const url = `${BASE_PATH}/games/count?platform.url=${platform}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getGameByUrlApi(path) {
  try {
    const url = `${BASE_PATH}/games?url=${path}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function searchGameApi(title) {
  try {
    const url = `${BASE_PATH}/games?_q=${title}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
