import { Container, Title, Form } from "../styles/Home";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { AvatarWrapper } from "../components/AvatarWrapper";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";

function Home() {
  const { setUsername, avatarSrc, username } = useUser();

  const [currentUsername, setCurrentUsername] = useState("");

  const onSubmitForm = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      setUsername(!!currentUsername.length ? currentUsername : "Guest");
    },
    [currentUsername, setUsername]
  );

  // The code below can be deleted
  useEffect(() => {
    console.log(`Welcome, ${username}. Your icon is ${avatarSrc}`);
  }, [avatarSrc, username]);

  return (
    <Container>
      <Form onSubmit={onSubmitForm}>
        <Title>Escolha um nome e um ícone</Title>

        <AvatarWrapper />

        <Input
          onChange={setCurrentUsername}
          value={currentUsername}
          placeholder="Insira seu nome"
        />

        <Button type="submit" label="Entrar" />
      </Form>
    </Container>
  );
}

export default Home;
