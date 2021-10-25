import { Container, Title } from "../styles/Home";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { AvatarWrapper } from "../components/AvatarWrapper";
import { useCallback, useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";

function Home() {
  const { setUsername, avatarSrc, username } = useUser();

  const [currentUsername, setCurrentUsername] = useState("");

  const handleJoin = useCallback(() => {
    setUsername(!!currentUsername.length ? currentUsername : "Guest");
  }, [currentUsername, setUsername]);

  // The code below can be deleted
  useEffect(() => {
    console.log(`Welcome, ${username}. Your icon is ${avatarSrc}`);
  }, [avatarSrc, username]);

  return (
    <Container>
      <Title>Escolha um nome e um ícone</Title>

      <AvatarWrapper />

      <Input
        onChange={setCurrentUsername}
        value={currentUsername}
        placeholder="Insira seu nome"
      />

      <Button label="Entrar" onClick={handleJoin} />
    </Container>
  );
}

export default Home;
