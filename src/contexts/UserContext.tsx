import { createContext, ReactNode, useState } from "react";

interface IUserContext {
  username: string;
  avatarSrc: string;
  setUsername: (username: string) => void;
  setAvatarSrc: (avatarSrc: string) => void;
}

interface IUserContextProvider {
  children: ReactNode;
}

const UserContext = createContext({} as IUserContext);

export const UserContextProvider = ({ children }: IUserContextProvider) => {
  const [username, setUsername] = useState("");
  const [avatarSrc, setAvatarSrc] = useState("icon-1");

  return (
    <UserContext.Provider
      value={{ username, avatarSrc, setAvatarSrc, setUsername }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
