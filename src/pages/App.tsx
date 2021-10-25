import { Container, Title } from "../styles/Home";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { AvatarWrapper } from "../components/AvatarWrapper";

function App() {
  return (
    <Container className="App">
      <Title>Escolha um nome e um ícone</Title>

      <AvatarWrapper />

      <Input />

      <Button label="Entrar" />
    </Container>
  );
}

export default App;
