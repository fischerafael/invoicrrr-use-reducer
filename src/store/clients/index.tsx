import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { IClient, IClientInitialState } from "../../entities";

interface ClientContextProps {
  handleAddClient: (client: IClient) => void;
}

const ClientContext = createContext({} as ClientContextProps);

const initialClientsState: IClientInitialState = { clients: [] };

export const clientsReducer = (
  state: IClientInitialState,
  action: { type: "GET_CLIENTS" | "ADD_CLIENT"; payload?: any }
) => {
  switch (action.type) {
    case "GET_CLIENTS":
      return state;
    case "ADD_CLIENT":
      return {
        clients: [...state.clients, action.payload],
      };
    default:
      return state;
  }
};

const ClientProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(clientsReducer, initialClientsState);

  useEffect(() => {
    dispatch({ type: "GET_CLIENTS" });
  }, [dispatch]);

  const handleAddClient = (client: IClient) => {
    dispatch({ type: "ADD_CLIENT" });
  };

  console.log(state);

  return (
    <ClientContext.Provider value={{ handleAddClient }}>
      {children}
    </ClientContext.Provider>
  );
};

const useClientContext = () => {
  return useContext(ClientContext);
};

export { ClientProvider, useClientContext };
