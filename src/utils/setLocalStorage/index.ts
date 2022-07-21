import { IClient } from "../../entities";

export const setLocalStorage = <T>(key: string, payload: T) => {
  localStorage.setItem(key, JSON.stringify(payload));
};
