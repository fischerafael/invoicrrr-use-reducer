import { IClient } from "../../entities";

export const getLocalStorage = (key: string): IClient[] => {
  const clientsString = localStorage.getItem(key);
  if (!clientsString) return [];
  const clientsArray: IClient[] = JSON.parse(clientsString);
  return clientsArray;
};
