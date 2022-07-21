import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { IClient } from "../../entities";
import { getLocalStorage } from "../../utils/getLocalStorage";
import { handleNavigateTo } from "../../utils/handleNavigateTo";
import { setLocalStorage } from "../../utils/setLocalStorage";

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

  useEffect(() => {
    const clients = getLocalStorage("@invoicrrr-clients");
    setClients(clients);
  }, []);

  const handleResetClient = () => {
    setClient(INITIAL_CLIENT_STATE);
  };

  const handleAddClient = () => {
    if (
      !client ||
      !client.address ||
      !client.city ||
      !client.country ||
      !client.name
    )
      return;
    const id = new Date().getTime().toString();
    const newClientsArray = [...clients, { ...client, id }];
    setClients(newClientsArray);
    setLocalStorage("@invoicrrr-clients", newClientsArray);
    handleResetClient();
    handleNavigateTo("/dashboard/clients");
  };

  const handleDeleteClient = (id: string) => {
    const newClientsArray = clients.filter((client) => client.id !== id);
    setLocalStorage("@invoicrrr-clients", newClientsArray);
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
