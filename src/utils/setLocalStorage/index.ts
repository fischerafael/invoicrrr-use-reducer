import { IClient } from "../../entities";

export const setLocalStorage = (key: string, clientsArray: IClient[]) => {
  localStorage.setItem(key, JSON.stringify(clientsArray));
};
