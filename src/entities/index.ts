export interface IClient {
  name: string;
  address: string;
  city: string;
  country: string;
  id?: string;
}

export interface IClientInitialState {
  clients: IClient[];
}
