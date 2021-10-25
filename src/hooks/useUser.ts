import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser should be within UserContextProvider");
  }

  return context;
};
