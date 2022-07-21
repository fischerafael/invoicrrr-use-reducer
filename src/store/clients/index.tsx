import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { IClient } from "../../entities";
import { handleNavigateTo } from "../../utils/handleNavigateTo";

interface ClientContextProps {
  clients: IClient[];
  handleAddClient: () => void;
  handleDeleteClient: (id: string) => void;
  client: IClient;
  setClient: Dispatch<SetStateAction<IClient>>;
}

const ClientContext = createContext({} as ClientContextProps);

const INITIAL_CLIENT_STATE: IClient = {
  address: "",
  city: "",
  country: "",
  name: "",
};

const ClientProvider = ({ children }: { children: ReactNode }) => {
  const [clients, setClients] = useState<IClient[]>([]);
  const [client, setClient] = useState<IClient>(INITIAL_CLIENT_STATE);

  const handleResetClient = () => {
    setClient(INITIAL_CLIENT_STATE);
  };

  const handleAddClient = () => {
    if (!client) return;
    const id = new Date().getTime().toString();
    setClients((prev) => [...prev, { ...client, id }]);
    handleResetClient();
    handleNavigateTo("/dashboard/clients");
  };

  const handleDeleteClient = (id: string) => {
    const newClientsArray = clients.filter((client) => client.id !== id);
    setClients(newClientsArray);
  };

  return (
    <ClientContext.Provider
      value={{
        clients,
        handleAddClient,
        client,
        setClient,
        handleDeleteClient,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

const useClientContext = () => {
  return useContext(ClientContext);
};

export { ClientProvider, useClientContext };
