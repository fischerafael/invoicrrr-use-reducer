import { IClient } from "../../entities";

export const getLocalStorage = <T>(key: string): T | undefined => {
  const clientsString = localStorage.getItem(key);
  if (!clientsString) return;
  const clientsArray: T = JSON.parse(clientsString);
  return clientsArray;
};
