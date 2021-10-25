import { useTheme } from "styled-components";

import { Container, Title } from "./styles";
import { Button } from "../Button";
import { AvatarList } from "../AvatarList";
import { useState } from "react";

export const AvatarModal = () => {
  const theme = useTheme();

  const [currentAvatar, setCurrentAvatar] = useState("");

  return (
    <Container>
      <Title>Avatar</Title>

      <AvatarList
        toggleAvatar={setCurrentAvatar}
        currentAvatar={currentAvatar}
      />

      <Button
        label="Confirmar"
        bgColor={theme.colors.background}
        bgColorActive={theme.colors.backgroundPlus}
      />
    </Container>
  );
};
